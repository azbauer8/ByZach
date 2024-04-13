/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,

  // experimental: {
  // //   // disable ppr in dev, causes weird client hydration issues
  //   ppr: process.env.NODE_ENV !== "development",
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