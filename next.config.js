// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	experimental: {
		webVitalsAttribution: ["FCP", "LCP", "CLS", "FID", "TTFB", "INP"],
	},
	transpilePackages: ["next-mdx-remote"],

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
	},
};


module.exports = nextConfig
