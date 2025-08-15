/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';
const repoName = 'pet-spot'; // Reemplaza con el nombre exacto de tu repo

const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
};

export default nextConfig;