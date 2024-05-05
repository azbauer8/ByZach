const config = () => {
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
	if (process.env.NODE_ENV === "development") {
		return nextConfig;
	}
	return {
		...nextConfig,
		modularizeImports: {
			"react-icons/?(((\\w*)?/?)*)": {
				transform: "@react-icons/all-files/{{ matches.[1] }}/{{ member }}",
				skipDefaultConversion: true,
			},
		},
	};
};

export default config;
