import withBundleAnalyzer from "@next/bundle-analyzer";
import { withSentryConfig } from "@sentry/nextjs";
import { withContentlayer } from "next-contentlayer2";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

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

export default bundleAnalyzer(
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
