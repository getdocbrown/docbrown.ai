import type { NextConfig } from "next";

const config: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [{ source: "/:path*", has: [{ type: "host", value: "www.docbrown.ai" }], destination: "https://docbrown.ai/:path*", permanent: true }];
  },
};

export default config;
