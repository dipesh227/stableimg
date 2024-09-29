/** @type {import('next').NextConfig} */
const nextConfig = {
  image: {
    domains: ["./src./assets/images"],
    loader: "imgix",
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stableimg.vercel.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
