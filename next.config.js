/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    webVitalsAttribution: ['FCP', 'LCP', 'CLS', 'FID', 'TTFB', 'INP'],
  },
  transpilePackages: ['next-mdx-remote'],
  modularizeImports: {
    'react-icons/?(((\\w*)?/?)*)': {
      transform: '@react-icons/all-files/{{ matches.[1] }}/{{ member }}',
      skipDefaultConversion: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "http",
        hostname: "*",
      },
    ],
  }
}

export default nextConfig
