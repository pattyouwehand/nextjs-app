/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
        pathname: '/**/**/**/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**/**/**/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**/**/**/**'
      }
    ]
  },
  trailingSlash: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
}

export default nextConfig