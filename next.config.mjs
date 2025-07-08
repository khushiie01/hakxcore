import pkg from './next-i18next.config.js';
const { i18n } = pkg;

/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    domains: [
      'blob.hakxcore.io', // your external image domain
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)", // Applies to all pages
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache static assets for 1 year
          },
        ],
      },
      {
        source: "/api/(.*)", // Apply caching to API responses
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, must-revalidate", // API response cache for 1 hour
          },
        ],
      },
      {
        source: "/_next/static/(.*)", // Cache Next.js static files
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
