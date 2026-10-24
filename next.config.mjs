// Static export for GitHub Pages.
// NEXT_PUBLIC_BASE_PATH is set automatically by the GitHub Actions workflow
// to "/<repository-name>". If you use a custom domain, it is left empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
