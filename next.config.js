/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: {
            displayName: false,
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
}

module.exports = nextConfig
