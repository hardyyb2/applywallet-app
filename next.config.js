const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const { withSentryConfig } = require("@sentry/nextjs");
const { withContentlayer } = require("next-contentlayer2");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
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

const contentLayerWrapper = withContentlayer(nextConfig);
const sentryWrapper = withSentryConfig(contentLayerWrapper, {
  org: "hardik-badola",
  project: "applywallet",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: {
    enabled: true,
  },
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
const bundleAnalyzerWrapper = withBundleAnalyzer(sentryWrapper);

const finalConfig = bundleAnalyzerWrapper;
module.exports = finalConfig;
