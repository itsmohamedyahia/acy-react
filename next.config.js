/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/logout",
        destination: "/login",
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
