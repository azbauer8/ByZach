import million from 'million/compiler'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    webVitalsAttribution: ['FCP', 'LCP', 'CLS', 'FID', 'TTFB', 'INP'],
  },
  transpilePackages: ['next-mdx-remote'],
  // modularizeImports: {
  //   'react-icons/?(((\\w*)?/?)*)': {
  //     transform: '@react-icons/all-files/{{ matches.[1] }}/{{ member }}',
  //     skipDefaultConversion: true,
  //   },
  // },
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

const millionConfig = {
  auto: {
    rsc: true
  },
  server: true,
  rsc: true
}

export default million.next(nextConfig, millionConfig)
