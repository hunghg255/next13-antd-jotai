const { i18n } = require('./next-i18next.config');
const { withHydrationOverlay } = require('next-hydration-overlay/next');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n
  i18n,
  swcMinify: true,
  output: 'standalone',

  // config env
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    APP_API_URL: process.env.NEXT_PUBLIC_APP_API_URL,
    LOCAL_STORAGE_KEY: process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY,
  },
  images: {
    minimumCacheTTL: 60,
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  httpAgentOptions: {
    keepAlive: false,
  },
  headers: async function headers() {
    if (process.env.NODE_ENV === 'development') return [];
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|otf|ttf|woff|woff2|eot)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = isProd ? nextConfig : withHydrationOverlay()(withBundleAnalyzer(nextConfig));
