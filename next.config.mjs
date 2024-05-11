// @ts-check

/** @type {import('next').NextConfig} */
export default {
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
