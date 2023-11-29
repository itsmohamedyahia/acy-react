/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true
      },
      {
        source: "/api/:path*",
        destination: "http://localhost:4000/:path*",
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
