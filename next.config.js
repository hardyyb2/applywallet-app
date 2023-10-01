const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = withBundleAnalyzer(withMDX(nextConfig));
