# pixels-to-products-cloudinary-ai-hackathon-2026-oops
Hackathon team repository for OOPS - [hackindia-team:pixels-to-products-cloudinary-ai-hackathon-2026:oops]
# OOPS — Pixels to Products

> AI-powered product media studio built for the **Pixels to Products — Cloudinary AI Hackathon 2026**.

## 🚀 Overview

Small businesses and online sellers often struggle to create professional product photos and marketing creatives for different platforms.

**OOPS** aims to solve this by turning a single product image into a complete marketing asset kit.

The user uploads one product photo, chooses a campaign type and visual style, and generates marketing-ready assets for social media, marketplaces, advertisements, and banners.

## 🎯 Problem Statement

Creating professional product marketing visuals manually can be:

* Time-consuming
* Expensive
* Difficult for small businesses
* Repetitive across different platforms
* Difficult to optimize for different image formats

OOPS is designed to simplify this workflow into a single product-media studio.

## 💡 Our Solution

OOPS provides a simple workflow:

```text
Upload Product
      ↓
Choose Campaign
      ↓
Choose Visual Style
      ↓
Choose Background
      ↓
AI Media Processing
      ↓
Generate Marketing Assets
      ↓
Ready to Publish
```

## ☁️ Cloudinary Integration

Cloudinary will be a core part of the OOPS media pipeline.

Planned Cloudinary capabilities include:

* Product image upload
* Image management
* AI-powered image processing
* Background removal
* Image transformations
* Content-aware cropping
* AI-generated/modified visuals
* Multiple aspect ratios
* Image optimization
* Automatic delivery
* Organized media assets

Cloudinary will not be used only as file storage. It will be part of the actual product media workflow.

## 🛠️ Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### Media & AI

* Cloudinary
* Cloudinary AI capabilities
* AI image generation/workflows

### Development

* Git
* GitHub
* npm

## ✨ Current Features

* [x] OOPS landing page
* [x] Product media studio UI
* [x] Product image selection
* [x] Local image preview
* [x] Campaign type selection
* [x] Visual style selection
* [x] Background selection
* [x] Generation loading state

## 🔨 In Progress

* [ ] Cloudinary image upload
* [ ] Secure Cloudinary configuration
* [ ] AI image generation
* [ ] Background generation/removal
* [ ] Multiple marketing asset generation
* [ ] Platform-specific image formats
* [ ] Generated asset dashboard
* [ ] Download/export functionality
* [ ] Final live demo

## 📁 Project Structure

```text
oops-product-studio/
│
├── src/
│   └── app/
│       ├── page.tsx
│       ├── studio/
│       │   └── page.tsx
│       └── ...
│
├── public/
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## ⚙️ Getting Started

Clone the repository:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Move into the project:

```bash
cd oops-product-studio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 🔐 Environment Variables

Cloudinary credentials will be stored in environment variables.

Create:

```text
.env.local
```

Example:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

**Never commit `.env.local` or API credentials to GitHub.**

## 🧪 Development Status

OOPS is currently under active development for the **Pixels to Products — Cloudinary AI Hackathon 2026**.

The current version contains the core product interface. Cloudinary-powered media processing and AI generation are being integrated next.

## 🏆 Hackathon

Built for:

**Pixels to Products — Cloudinary AI Hackathon 2026**

Track:

**Track 2 — Generative Content Workflows**

The project uses Cloudinary as a core component of the product media workflow.

## 👩‍💻 Team

**Team:** OOPS

Built by:

**Riya**

## 📄 License

This project is built for the hackathon and educational/product-development purposes.
