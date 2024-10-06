/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    staticFolder: "/public",
  },
  localPatterns: [
    {
      pathname: "",
      search: "",
    },
  ],
};

module.exports = nextConfig;
