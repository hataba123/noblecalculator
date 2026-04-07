import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@noblecalculator/calculators-core", "@noblecalculator/shared-format"],
};

export default nextConfig;
