

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
		reactCompiler: true,
		ppr: 'incremental',
	},
	transpilePackages: ["next-mdx-remote"],

	images: {
		dangerouslyAllowSVG: true,
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
const withVercelToolbar = require('@vercel/toolbar/plugins/next')();
// Instead of module.exports = nextConfig, do this:
module.exports = withVercelToolbar(nextConfig);