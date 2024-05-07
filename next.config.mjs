/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        domains: ["storage.googleapis.com"],
    },
    reactStrictMode: false,
};

export default nextConfig;
