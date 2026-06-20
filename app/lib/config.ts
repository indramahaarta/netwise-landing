// Remote premium config — shared with the iOS app and served by netwise-api.
// Source of truth: https://netwise-api.vercel.app/api/config (edit api/appconfig.json
// in the netwise-api repo + push to change). DEFAULT_CONFIG below MUST mirror that
// document so the landing page renders correct numbers even if the API is unreachable.

const ENDPOINT = "https://netwise-api.vercel.app/api/config";

export type FeatureState = "all" | "premium" | "off";

export interface AppConfig {
  schemaVersion: number;
  limits: {
    wallets: number;
    portfolios: number;
    categories: number;
    tags: number;
  };
  features: Record<string, FeatureState>;
}

/** Bundled fallback. Mirrors netwise-api `appconfig.json` / iOS `AppConfig.default`. */
export const DEFAULT_CONFIG: AppConfig = {
  schemaVersion: 1,
  limits: { wallets: 6, portfolios: 3, categories: 8, tags: 3 },
  features: {
    dashboardPerformanceMatrix: "premium",
    dashboardTopHoldings: "premium",
    dashboardBestWorst: "premium",
    dashboardDividendIncome: "premium",
    dashboardSpendingByTag: "premium",
    dashboardSavingsRate: "premium",
    dashboardLargestExpenses: "premium",
    emailAutoCapture: "off",
  },
};

const VALID_STATES: ReadonlySet<string> = new Set<FeatureState>(["all", "premium", "off"]);

function isNonNegInt(v: unknown): v is number {
  return typeof v === "number" && Number.isInteger(v) && v >= 0;
}

/**
 * Leniently merges a raw API payload onto the bundled defaults: missing/invalid
 * fields keep their default, unknown feature keys are kept, unknown feature
 * states are dropped. Mirrors the iOS `AppConfig.decodeValid` philosophy.
 */
function mergeConfig(raw: unknown): AppConfig {
  const d = DEFAULT_CONFIG;
  if (typeof raw !== "object" || raw === null) return d;
  const obj = raw as Record<string, unknown>;

  const rawLimits =
    typeof obj.limits === "object" && obj.limits !== null
      ? (obj.limits as Record<string, unknown>)
      : {};
  const limits = {
    wallets: isNonNegInt(rawLimits.wallets) ? rawLimits.wallets : d.limits.wallets,
    portfolios: isNonNegInt(rawLimits.portfolios) ? rawLimits.portfolios : d.limits.portfolios,
    categories: isNonNegInt(rawLimits.categories) ? rawLimits.categories : d.limits.categories,
    tags: isNonNegInt(rawLimits.tags) ? rawLimits.tags : d.limits.tags,
  };

  // Start from defaults so any feature absent from the payload resolves to its
  // bundled state (same as the iOS app's per-key fallback).
  const features: Record<string, FeatureState> = { ...d.features };
  if (typeof obj.features === "object" && obj.features !== null) {
    for (const [key, value] of Object.entries(obj.features as Record<string, unknown>)) {
      if (typeof value === "string" && VALID_STATES.has(value)) {
        features[key] = value as FeatureState;
      }
    }
  }

  const schemaVersion =
    isNonNegInt(obj.schemaVersion) && obj.schemaVersion >= 1 ? obj.schemaVersion : d.schemaVersion;

  return { schemaVersion, limits, features };
}

/**
 * Fetches the remote config for use in a Server Component. Cached and revalidated
 * every 300s to match the API's `Cache-Control: max-age=300`. Never throws: any
 * network/parse failure falls back to DEFAULT_CONFIG so the page always renders.
 */
export async function getAppConfig(): Promise<AppConfig> {
  try {
    const res = await fetch(ENDPOINT, { next: { revalidate: 300 } });
    if (!res.ok) return DEFAULT_CONFIG;
    return mergeConfig(await res.json());
  } catch {
    return DEFAULT_CONFIG;
  }
}

// MARK: - Marketing copy derivation

function countLabel(n: number, singular: string, plural: string): string {
  return `${n} ${n === 1 ? singular : plural}`;
}

/** Free-tier bullet list derived from the config limits. */
export function freeTierItems(config: AppConfig): string[] {
  const { limits } = config;
  return [
    countLabel(limits.portfolios, "portfolio", "portfolios"),
    countLabel(limits.wallets, "wallet", "wallets"),
    countLabel(limits.categories, "category", "categories"),
    countLabel(limits.tags, "tag", "tags"),
    "Core dashboard",
  ];
}

/** Number of dashboard analytics that are premium-gated (state === "premium"). */
export function premiumDashboardCount(config: AppConfig): number {
  return Object.entries(config.features).filter(
    ([key, state]) => key.startsWith("dashboard") && state === "premium",
  ).length;
}

/** Premium-tier bullet list; the dashboard line reflects the live premium count. */
export function premiumTierItems(config: AppConfig): string[] {
  const count = premiumDashboardCount(config);
  return [
    "Unlimited everything",
    count > 0 ? `All ${count} dashboard charts` : "All dashboard charts",
    "Advanced insights",
    "Future features",
  ];
}
