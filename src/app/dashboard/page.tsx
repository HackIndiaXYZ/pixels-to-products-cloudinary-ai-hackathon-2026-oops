import Link from "next/link";

const assets = [
  {
    title: "Instagram Post",
    size: "1080 × 1080",
    icon: "📱",
    gradient: "from-violet-600/40 via-purple-500/20 to-pink-500/30",
  },
  {
    title: "Instagram Story",
    size: "1080 × 1920",
    icon: "📲",
    gradient: "from-fuchsia-600/40 via-violet-500/20 to-blue-500/30",
  },
  {
    title: "Marketplace Image",
    size: "1200 × 1200",
    icon: "🛍️",
    gradient: "from-blue-600/40 via-cyan-500/20 to-violet-500/30",
  },
  {
    title: "Facebook Ad",
    size: "1200 × 628",
    icon: "📣",
    gradient: "from-indigo-600/40 via-violet-500/20 to-pink-500/30",
  },
  {
    title: "Website Banner",
    size: "1920 × 800",
    icon: "🖥️",
    gradient: "from-purple-600/40 via-blue-500/20 to-cyan-500/30",
  },
  {
    title: "Product Promo",
    size: "1080 × 1350",
    icon: "✨",
    gradient: "from-pink-600/40 via-purple-500/20 to-violet-500/30",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-white/10 px-8 py-5">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          OOPS<span className="text-violet-500">.</span>
        </Link>

        <Link
          href="/studio"
          className="rounded-full border border-white/15 px-5 py-2 text-sm transition hover:bg-white hover:text-black"
        >
          + New Campaign
        </Link>
      </header>

      {/* Heading */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10">
          <p className="text-sm font-medium text-violet-400">
            MARKETING KIT
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Your marketing kit is ready.
          </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            Six ready-to-use creative assets generated from your product
            campaign.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-gray-500">Assets</p>
            <p className="mt-1 text-2xl font-bold">6</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-gray-500">Campaign</p>
            <p className="mt-1 text-2xl font-bold">Social Media</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-gray-500">Style</p>
            <p className="mt-1 text-2xl font-bold">Clean & Minimal</p>
          </div>
        </div>

        {/* Asset Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {assets.map((asset) => (
            <div
              key={asset.title}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              {/* Preview */}
              <div
                className={`flex h-64 items-center justify-center bg-gradient-to-br ${asset.gradient}`}
              >
                <div className="text-center">
                  <div className="text-6xl">{asset.icon}</div>

                  <div className="mt-4 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs text-gray-300 backdrop-blur">
                    AI Generated Preview
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-5">
                <h2 className="text-lg font-semibold">
                  {asset.title}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {asset.size}
                </p>

                <div className="mt-5 flex gap-3">
                  <button
                    type="button"
                    className="flex-1 rounded-xl bg-violet-600 py-3 text-sm font-semibold transition hover:bg-violet-500"
                  >
                    Download
                  </button>

                  <button
                    type="button"
                    className="rounded-xl border border-white/10 px-4 py-3 text-sm transition hover:bg-white/10"
                  >
                    ↻
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl border border-violet-500/20 bg-violet-500/5 p-6 sm:flex-row">
          <div>
            <h2 className="font-semibold">
              Want to create another campaign?
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Upload another product and generate a new marketing kit.
            </p>
          </div>

          <Link
            href="/studio"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            Create Another →
          </Link>
        </div>
      </section>
    </main>
  );
}