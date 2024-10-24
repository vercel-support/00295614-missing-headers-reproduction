/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  headers: async () => {
    return [
      {
        source: '/:locale*',
        headers: [
          {
            key: 'Vercel-CDN-Cache-Control',
            value: 'max-age=3600'
          }
        ],
      },
    ];
  }
};

export default nextConfig;
