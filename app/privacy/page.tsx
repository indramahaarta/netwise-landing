import Image from "next/image";
import Link from "next/link";

const SECTIONS = [
  {
    icon: "ℹ️",
    title: "Introduction",
    body: `NetWise is a personal finance tracker built on a simple promise: your financial data belongs to you, and only you. This policy explains what data the app uses, how it is handled, and what we never do.

It applies exclusively to the NetWise iOS app. By using NetWise, you agree to the practices described here.`,
  },
  {
    icon: "📱",
    title: "Information You Provide",
    body: `All data you enter — wallets, portfolios, transactions, categories, and balances — is stored exclusively on your device using Apple's SwiftData framework. This data is private to your device.

It is never transmitted to any server, never backed up to any cloud service we operate, and never accessible to us under any circumstances. No account creation or sign-in is required to use NetWise.`,
  },
  {
    icon: "⚙️",
    title: "Information Generated Automatically",
    body: `NetWise generates daily snapshots of your wallet balances and portfolio values to power the historical charts in the Dashboard. These snapshots are computed entirely on-device and stored locally alongside your other data.

No usage events, crash reports, analytics signals, session recordings, or behavioral data are generated or sent anywhere. We have no visibility into how you use the app.`,
  },
  {
    icon: "🌐",
    title: "External Price & Currency Data",
    body: `To display live stock prices and exchange rates, NetWise contacts two external services: Yahoo Finance (for stock prices) and open.er-api.com (for foreign exchange rates). Requests contain only ticker symbols (e.g., AAPL, BBCA.JK) or currency codes (e.g., USD, IDR).

No personal information, account identifiers, device fingerprints, or financial balances are ever transmitted. These services may log your device's IP address as part of normal server operations. NetWise has no control over or affiliation with either service.`,
  },
  {
    icon: "💳",
    title: "Subscriptions & Payments",
    body: `NetWise offers an optional auto-renewable subscription (NetWise Premium) processed entirely by Apple through the App Store. We never see, store, or handle your payment information — Apple collects and processes all payment details on our behalf.

When you subscribe, Apple shares with us only a non-personal purchase receipt used to verify your subscription status on-device. No name, email, card number, or billing address is transmitted to us.

Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period. You can manage or cancel your subscription at any time in your Apple ID settings or via Settings → Manage Subscription inside NetWise. Refunds are handled solely by Apple.`,
  },
  {
    icon: "🔒",
    title: "Data Security",
    body: `Your data is protected by your device's built-in security: iOS encryption at rest, and your passcode, Face ID, or Touch ID. We cannot access your data even if compelled — it never reaches us.

For maximum protection, use a strong device passcode and enable Face ID or Touch ID. Losing access to your device without a backup means losing your NetWise data, so we recommend keeping an exported backup in a safe location.`,
  },
  {
    icon: "👤",
    title: "Your Rights & Control",
    body: `You have complete ownership of your data at all times. You can export a full backup of all your wallets, portfolios, and transactions as a JSON file from Settings → Export Backup, and store it wherever you choose.

You can restore from that backup using Settings → Import Backup. You can permanently delete all NetWise data by uninstalling the app — no deletion request to us is necessary because we never hold your data.`,
  },
  {
    icon: "👶",
    title: "Children's Privacy",
    body: `NetWise is not directed at children under the age of 13 and does not knowingly collect any information from children. Because all data is stored locally and no account is required, there is no mechanism by which we would receive information from any user.

If you believe a child has used the app, uninstalling it from the device removes all locally stored data completely.`,
  },
  {
    icon: "📄",
    title: "Changes to This Policy",
    body: `If this privacy policy changes materially, the updated version will be included in the next app update and accessible from the Settings tab. The effective date at the top of this page will reflect when it was last revised.

Your continued use of NetWise after an update constitutes acceptance of the revised policy.`,
  },
  {
    icon: "✉️",
    title: "Contact",
    body: `If you have questions or concerns about this privacy policy, reach us at:\n\nindramhrt@gmail.com\n\nWe aim to respond within 5 business days.`,
  },
];

export default function Privacy() {
  return (
    <div style={{ minHeight: "100vh" }}>

      {/* NAV */}
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
          <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-75">
            <Image src="/logo.png" alt="NetWise" width={32} height={32} className="rounded-xl" />
            <span style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: "1.05rem" }}>
              NetWise
            </span>
          </Link>
          <span style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.75rem", color: "var(--muted)", letterSpacing: "0.05em" }}>
            Privacy Policy
          </span>
        </div>
      </nav>

      {/* HEADER */}
      <header className="relative max-w-3xl mx-auto px-6 pt-16 pb-12 overflow-hidden">
        <div
          className="absolute pointer-events-none"
          aria-hidden="true"
          style={{
            top: "-80px", right: "-100px",
            width: "400px", height: "400px",
            background: "radial-gradient(circle, rgba(100,80,255,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="relative">
          <div className="fade-up d1">
            <span
              className="inline-block text-xs px-3 py-1.5 rounded-full mb-6"
              style={{
                background: "rgba(100,80,255,0.1)",
                border: "1px solid rgba(100,80,255,0.2)",
                color: "#A090FF",
                fontFamily: "var(--font-dm-mono)",
                letterSpacing: "0.1em",
              }}
            >
              LEGAL
            </span>
          </div>
          <h1
            className="fade-up d2 leading-tight"
            style={{
              fontFamily: "var(--font-sora)",
              fontWeight: 800,
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
            }}
          >
            Privacy Policy
          </h1>
          <p
            className="fade-up d3 mt-3"
            style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.8rem", color: "var(--muted)" }}
          >
            Effective May 2026
          </p>
          <p
            className="fade-up d4 mt-5 leading-relaxed max-w-xl"
            style={{ color: "var(--muted)", fontSize: "1rem" }}
          >
            The short version: your data never leaves your device. We have no
            servers, no accounts, and no access to your financial information.
          </p>
        </div>
      </header>

      {/* SECTIONS */}
      <main className="max-w-3xl mx-auto px-6 pb-20">
        <div className="space-y-4">
          {SECTIONS.map((s, i) => (
            <div
              key={s.title}
              className="rounded-2xl p-7 glass fade-up"
              style={{ animationDelay: `${0.06 * i + 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-xl mt-0.5">{s.icon}</div>
                <div className="flex-1 min-w-0">
                  <h2
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-sora)",
                      fontWeight: 600,
                      fontSize: "1rem",
                      color: "var(--ink)",
                    }}
                  >
                    {s.title}
                  </h2>
                  {s.body.split("\n\n").map((para, pi) => (
                    <p
                      key={pi}
                      className={pi > 0 ? "mt-4" : ""}
                      style={{
                        fontSize: "0.875rem",
                        lineHeight: 1.75,
                        color: "var(--muted)",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="NetWise" width={22} height={22} className="rounded-md opacity-70" />
            <span style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.8rem", color: "var(--muted)" }}>
              © 2026 NetWise
            </span>
          </div>
          <div className="flex gap-6">
            <Link href="/" className="transition-opacity hover:opacity-60" style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
              Home
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
