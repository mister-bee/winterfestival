/** @type {import('next').NextConfig} */
const config = {
  typescript: {
    // !! WARN !!
    // This will allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: false,
  },
};

export default config;
