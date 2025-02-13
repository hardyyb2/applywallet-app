const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const { withSentryConfig } = require("@sentry/nextjs");
const { withContentlayer } = require("next-contentlayer2");
const webpack = require("webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    config.plugins.push(
      new webpack.DefinePlugin({
        __SENTRY_DEBUG__: false,
        __SENTRY_TRACING__: false,
        __RRWEB_EXCLUDE_IFRAME__: true,
        __RRWEB_EXCLUDE_SHADOW_DOM__: true,
        __SENTRY_EXCLUDE_REPLAY_WORKER__: true,
      }),
    );

    return config;
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
};

const contentLayerWrapper = withContentlayer(nextConfig);
const sentryWrapper = withSentryConfig(contentLayerWrapper, {
  org: "hardik-badola",
  project: "applywallet",
  telemetry: false,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: !process.env.CI,
  reactComponentAnnotation: {
    enabled: false,
  },
  disableLogger: true,
  automaticVercelMonitors: true,
  sourcemaps: {
    deleteSourcemapsAfterUpload: true,
  },
});
const bundleAnalyzerWrapper = withBundleAnalyzer(sentryWrapper);

const finalConfig = bundleAnalyzerWrapper;
module.exports = finalConfig;
