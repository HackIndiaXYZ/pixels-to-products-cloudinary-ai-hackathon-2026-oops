"use client";

import { useState } from "react";

export default function StudioPage() {
  const [image, setImage] = useState<string | null>(null);
  const [cloudinaryUrl, setCloudinaryUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const [campaign, setCampaign] = useState("Social Media");
  const [style, setStyle] = useState("Clean & Minimal");
  const [background, setBackground] = useState("Studio White");
  const [generating, setGenerating] = useState(false);

  async function handleImageUpload(file: File) {
    setImage(URL.createObjectURL(file));
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Upload failed");
      }

      setCloudinaryUrl(data.result.secure_url);
    } catch (error) {
      console.error(error);
      alert("Cloudinary upload failed. Check your environment variables.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between border-b border-white/10 px-8 py-5">
        <div className="text-2xl font-bold tracking-tight">
          OOPS<span className="text-violet-500">.</span>
        </div>

        <div className="text-sm text-gray-400">
          AI Product Media Studio
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10">
          <p className="text-sm font-medium text-violet-400">
            CREATE CAMPAIGN
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Turn your product into a marketing kit.
          </h1>

          <p className="mt-3 max-w-2xl text-gray-400">
            Upload a product photo, choose your campaign style, and generate
            ready-to-use marketing visuals.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Upload */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-xl font-semibold">
              1. Upload product
            </h2>

            <div className="mt-6 flex min-h-80 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/15 bg-black/30 p-6 text-center">
              {image ? (
                <img
                  src={image}
                  alt="Product preview"
                  className="max-h-56 max-w-full rounded-2xl object-contain"
                />
              ) : (
                <>
                  <div className="text-5xl">📸</div>

                  <h3 className="mt-5 text-lg font-medium">
                    Drop your product image here
                  </h3>
                </>
              )}

              <p className="mt-2 text-sm text-gray-500">
                PNG, JPG or WEBP up to 10MB
              </p>

              <label className="mt-6 cursor-pointer rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200">
                {uploading ? "Uploading..." : "Choose Image"}

                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  className="hidden"
                  disabled={uploading}
                  onChange={(event) => {
                    const file = event.target.files?.[0];

                    if (file) {
                      handleImageUpload(file);
                    }
                  }}
                />
              </label>

              {cloudinaryUrl && (
                <p className="mt-4 text-sm text-green-400">
                  ✓ Uploaded to Cloudinary
                </p>
              )}
            </div>
          </div>

          {/* Settings */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-xl font-semibold">
              2. Campaign settings
            </h2>

            <div className="mt-6 space-y-6">
              <div>
                <label className="text-sm text-gray-400">
                  Campaign type
                </label>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  {[
                    ["Social Media", "Instagram & Facebook"],
                    ["Marketplace", "Product listings"],
                    ["Ad Creative", "Promotional ads"],
                    ["Brand Banner", "Website banners"],
                  ].map(([name, description]) => (
                    <button
                      key={name}
                      type="button"
                      onClick={() => setCampaign(name)}
                      className={`rounded-xl border p-4 text-left transition ${
                        campaign === name
                          ? "border-violet-500 bg-violet-500/10"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <div className="font-medium">{name}</div>

                      <div className="mt-1 text-xs text-gray-500">
                        {description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="style"
                  className="text-sm text-gray-400"
                >
                  Visual style
                </label>

                <select
                  id="style"
                  value={style}
                  onChange={(event) => setStyle(event.target.value)}
                  className="mt-3 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-violet-500"
                >
                  <option>Clean & Minimal</option>
                  <option>Luxury</option>
                  <option>Bold & Colorful</option>
                  <option>Natural</option>
                  <option>Modern</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="background"
                  className="text-sm text-gray-400"
                >
                  Background
                </label>

                <select
                  id="background"
                  value={background}
                  onChange={(event) =>
                    setBackground(event.target.value)
                  }
                  className="mt-3 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-violet-500"
                >
                  <option>Studio White</option>
                  <option>Soft Gradient</option>
                  <option>Natural Environment</option>
                  <option>Luxury Interior</option>
                  <option>Custom AI Scene</option>
                </select>
              </div>

              <button
                type="button"
                disabled={generating || uploading}
                onClick={() => {
                  setGenerating(true);

                  setTimeout(() => {
                    setGenerating(false);
                    window.location.href = "/dashboard";
                  }, 2000);
                }}
                className="w-full rounded-xl bg-violet-600 py-4 font-semibold transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {generating
                  ? "✨ Creating your marketing kit..."
                  : "✨ Generate Marketing Kit"}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-gray-500">
            Current campaign
          </p>

          <div className="mt-2 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-violet-500/10 px-4 py-2 text-violet-300">
              {campaign}
            </span>

            <span className="rounded-full bg-white/5 px-4 py-2 text-gray-300">
              {style}
            </span>

            <span className="rounded-full bg-white/5 px-4 py-2 text-gray-300">
              {background}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}