import Image from "next/image";
import Link from "next/link";

const FEATURES = [
  {
    icon: "📱",
    title: "100% On-Device",
    body: "Every wallet, portfolio, and transaction lives on your iPhone with Apple SwiftData. Nothing is transmitted anywhere.",
    highlight: true,
  },
  {
    icon: "📈",
    title: "Portfolio Tracking",
    body: "US & IDX stocks, crypto, dividends. Live prices via Yahoo Finance — no API key required.",
    highlight: false,
  },
  {
    icon: "💳",
    title: "Wallet Management",
    body: "Multiple wallets, categories, and tags. Income, expenses, and transfers all in one place.",
    highlight: false,
  },
  {
    icon: "📊",
    title: "Net Worth Dashboard",
    body: "Historical charts across all your wallets and portfolios. See your full financial picture.",
    highlight: false,
  },
  {
    icon: "💱",
    title: "Multi-Currency",
    body: "USD and IDR with live forex rates. Built for cross-border and dual-market finances.",
    highlight: false,
  },
  {
    icon: "🔒",
    title: "Private by Design",
    body: "No analytics. No tracking. No ads. We literally cannot see your data — by architecture.",
    highlight: false,
  },
];

const FREE_ITEMS = ["2 portfolios", "5 wallets", "10 categories", "6 tags", "Core dashboard"];
const PRO_ITEMS  = ["Unlimited everything", "All dashboard charts", "Advanced insights", "Future features"];

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>

      {/* ── NAV ── */}
      <nav
        className="sticky top-0 z-50"
        style={{
          borderBottom: "1px solid var(--border)",
          background: "rgba(8,11,24,0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="NetWise"
              width={32}
              height={32}
              className="rounded-xl"
            />
            <span
              style={{
                fontFamily: "var(--font-sora)",
                fontWeight: 700,
                fontSize: "1.05rem",
                color: "var(--ink)",
              }}
            >
              NetWise
            </span>
          </div>
          <Link
            href="/privacy"
            className="transition-opacity hover:opacity-60"
            style={{ color: "var(--muted)", fontSize: "0.875rem" }}
          >
            Privacy Policy
          </Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 text-center overflow-hidden">
        {/* ambient glow */}
        <div
          className="absolute pointer-events-none"
          aria-hidden="true"
          style={{
            top: "-120px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "700px",
            background: "radial-gradient(circle, rgba(100,80,255,0.14) 0%, transparent 70%)",
            animation: "pulse-glow 5s ease-in-out infinite",
          }}
        />
        <div className="relative z-10">
          <div className="fade-up d1 flex items-center justify-center gap-2 mb-6">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium"
              style={{
                background: "rgba(100,80,255,0.12)",
                border: "1px solid rgba(100,80,255,0.25)",
                color: "#A090FF",
                fontFamily: "var(--font-dm-mono)",
                letterSpacing: "0.05em",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#8B72FF" }}
              />
              iOS 17+ · Free with Premium
            </span>
          </div>

          <h1
            className="fade-up d2 leading-tight tracking-tight"
            style={{
              fontFamily: "var(--font-sora)",
              fontWeight: 800,
              fontSize: "clamp(2.75rem, 6.5vw, 5.25rem)",
            }}
          >
            Your finances,
            <br />
            <span className="grad-text">completely yours.</span>
          </h1>

          <p
            className="fade-up d3 mt-6 mx-auto max-w-xl leading-relaxed"
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
              color: "var(--muted)",
            }}
          >
            Track wallets, portfolios, and net worth — all stored on your
            iPhone. No account, no cloud, no one watching.
          </p>

          <div className="fade-up d4 mt-10 flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-white grad-bg transition-opacity hover:opacity-85"
              style={{ fontSize: "0.95rem", fontFamily: "var(--font-sora)" }}
            >
              <AppleSVG />
              Download on App Store
            </a>
            <span
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: "0.8rem",
                color: "var(--muted)",
              }}
            >
              Coming soon
            </span>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div
        className="fade-up d5"
        style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-2)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-3 gap-4 text-center">
          {[
            { num: "0", label: "Servers" },
            { num: "0", label: "Accounts required" },
            { num: "∞", label: "Your privacy" },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="grad-text"
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 800,
                  fontSize: "clamp(2.25rem, 5.5vw, 4rem)",
                  lineHeight: 1,
                }}
              >
                {s.num}
              </div>
              <div
                className="mt-2"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.06em",
                  color: "var(--muted)",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12 text-center">
          <h2
            style={{
              fontFamily: "var(--font-sora)",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            }}
          >
            Built for privacy,{" "}
            <span className="grad-text">designed for clarity.</span>
          </h2>
          <p className="mt-3" style={{ color: "var(--muted)", fontSize: "1rem" }}>
            Every feature starts from a single principle: your data is yours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`rounded-2xl p-7 fade-up ${f.highlight ? "grad-bg" : "glass"}`}
              style={{ animationDelay: `${0.08 * i + 0.1}s` }}
            >
              <div className="text-2xl mb-4">{f.icon}</div>
              <h3
                className="mb-2"
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "white",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  color: f.highlight ? "rgba(255,255,255,0.72)" : "var(--muted)",
                }}
              >
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── APP SHOWCASE ── */}
      <section
        className="py-20"
        style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Logo large */}
            <div className="flex-shrink-0">
              <div
                className="relative"
                style={{
                  filter: "drop-shadow(0 0 48px rgba(100,80,255,0.35))",
                }}
              >
                <Image
                  src="/logo.png"
                  alt="NetWise app"
                  width={160}
                  height={160}
                  className="rounded-[36px]"
                />
              </div>
            </div>

            <div>
              <h2
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 700,
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  lineHeight: 1.25,
                }}
              >
                Not a single byte leaves
                <br />
                <span className="grad-text">your device.</span>
              </h2>
              <p className="mt-4 max-w-lg leading-relaxed" style={{ color: "var(--muted)" }}>
                NetWise is architecturally incapable of seeing your data.
                There are no servers to breach, no accounts to hack, no cloud
                to subpoena. Your financial life stays exactly where it should.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  ["No account", "Open and start immediately. Zero sign-up."],
                  ["No tracking", "No analytics, no crash logs. We're blind to your usage."],
                  ["No ads", "Premium subscription is the only revenue model."],
                ].map(([title, body]) => (
                  <div
                    key={title}
                    className="rounded-xl p-4"
                    style={{ background: "var(--card)", border: "1px solid var(--border)" }}
                  >
                    <div
                      className="grad-text font-semibold mb-1"
                      style={{ fontFamily: "var(--font-sora)", fontSize: "0.9rem" }}
                    >
                      {title}
                    </div>
                    <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.6 }}>
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12 text-center">
          <h2
            style={{
              fontFamily: "var(--font-sora)",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            }}
          >
            Simple, honest pricing.
          </h2>
          <p className="mt-3" style={{ color: "var(--muted)" }}>
            Start free. Upgrade only when you need more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {/* Free */}
          <div
            className="rounded-2xl p-8 glass"
          >
            <div
              style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: "1.1rem", color: "var(--muted)" }}
            >
              Free
            </div>
            <div
              className="mt-1 mb-7"
              style={{
                fontFamily: "var(--font-sora)",
                fontWeight: 800,
                fontSize: "2.75rem",
                lineHeight: 1,
              }}
            >
              $0
            </div>
            <ul className="space-y-3">
              {FREE_ITEMS.map((f) => (
                <li key={f} className="flex items-center gap-2.5" style={{ fontSize: "0.875rem", color: "var(--muted)" }}>
                  <span className="grad-text font-bold">✓</span> {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Premium */}
          <div className="rounded-2xl p-8 grad-bg relative overflow-hidden">
            <div
              className="absolute top-5 right-5 text-xs px-3 py-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.9)",
                fontFamily: "var(--font-dm-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.08em",
              }}
            >
              1 MONTH FREE
            </div>
            <div
              style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: "1.1rem", color: "rgba(255,255,255,0.7)" }}
            >
              Premium
            </div>
            <div className="mt-1 mb-7 flex items-baseline gap-1.5">
              <span
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 800,
                  fontSize: "2.75rem",
                  lineHeight: 1,
                  color: "white",
                }}
              >
                $2.99
              </span>
              <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)" }}>/month</span>
            </div>
            <ul className="space-y-3">
              {PRO_ITEMS.map((f) => (
                <li key={f} className="flex items-center gap-2.5" style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.8)" }}>
                  <span style={{ color: "white", fontWeight: 700 }}>✓</span> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="NetWise" width={22} height={22} className="rounded-md opacity-70" />
            <span style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.8rem", color: "var(--muted)" }}>
              © 2026 NetWise
            </span>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-opacity hover:opacity-60" style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
              Privacy Policy
            </Link>
            <a href="mailto:indramhrt@gmail.com" className="transition-opacity hover:opacity-60" style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AppleSVG() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" />
    </svg>
  );
}
