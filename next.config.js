const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const { withContentlayer } = require("next-contentlayer");
const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
    // TODO - remove picsum
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = withBundleAnalyzer(
  withSentryConfig(
    withContentlayer(nextConfig),
    {
      // Suppresses source map uploading logs during build
      silent: true,
      org: "hardik-badola",
      project: "applywallet",
    },
    {
      widenClientFileUpload: true,
      hideSourceMaps: true,
      disableLogger: true,
    },
  ),
);
