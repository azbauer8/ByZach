/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		ppr: true,
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
	},
}

module.exports = nextConfig
