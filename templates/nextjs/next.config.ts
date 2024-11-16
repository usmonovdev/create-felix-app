import i18n from "@/plugins/i18n";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "http",
  //       hostname: "felixits.uz",
  //       port: "",
  //       pathname: "/media/**",
  //     },
  //   ],
  // },
};

export default nextConfig;