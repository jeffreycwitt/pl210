/**
   * @type {import('next').NextConfig}
   */
 const nextConfig   = {
  images: {
    loader: 'akamai',
    path: './',
  },
  assetPrefix: '/pl210/',
  basePath: '/pl210',
};

export default   nextConfig;

