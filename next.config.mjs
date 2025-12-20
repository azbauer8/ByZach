// @ts-check

/** @type {import('next').NextConfig} */
export default {
  typescript: { ignoreBuildErrors: true },
  experimental: {
    webVitalsAttribution: ["FCP", "LCP", "CLS", "FID", "TTFB", "INP"],
  },
  cacheComponents: true,
  transpilePackages: ["next-mdx-remote"],
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { protocol: "https", hostname: "*" },
      { protocol: "http", hostname: "*" },
    ],
  },
}
