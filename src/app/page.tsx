import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6">
        <div className="text-2xl font-bold tracking-tight">
          OOPS<span className="text-violet-500">.</span>
        </div>

        <button className="rounded-full border border-white/20 px-5 py-2 text-sm transition hover:bg-white hover:text-black">
          Sign In
        </button>
      </nav>

      {/* Hero */}
      <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
          AI Product Media Studio
        </div>

        <h1 className="max-w-5xl text-5xl font-bold tracking-tight sm:text-7xl">
          One product photo.
          <br />
          <span className="text-violet-500">
            A whole marketing kit.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Turn a single product photo into professional social posts,
          marketplace images, banners, and campaign creatives — powered by AI.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/studio"
            className="rounded-full bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-500"
          >
            Start Creating →
          </Link>

          <button className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:bg-white hover:text-black">
            See How It Works
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="grid gap-6 px-8 pb-20 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="mb-4 text-3xl">📸</div>

          <h2 className="text-xl font-semibold">
            Upload Once
          </h2>

          <p className="mt-2 text-gray-400">
            Start with one simple product photo.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="mb-4 text-3xl">✨</div>

          <h2 className="text-xl font-semibold">
            Generate Creatives
          </h2>

          <p className="mt-2 text-gray-400">
            Create multiple marketing visuals with AI.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="mb-4 text-3xl">🚀</div>

          <h2 className="text-xl font-semibold">
            Ready to Publish
          </h2>

          <p className="mt-2 text-gray-400">
            Get assets optimized for different platforms.
          </p>
        </div>
      </section>
    </main>
  );
}