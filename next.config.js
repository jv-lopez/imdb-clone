/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['upload.wikimedia.org', 'image.tmdb.org']
	},
	experimental: {
		images: {
			allowFutureImage: true,
		},
	},
}

module.exports = nextConfig
