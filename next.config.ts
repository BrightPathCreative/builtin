import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.builtinmelbourne.com.au" }],
        destination: "https://builtinmelbourne.com.au/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
