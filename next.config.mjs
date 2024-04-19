import withNextIntl from "next-intl/plugin";

const nextIntlConfig = withNextIntl("./i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gorzelinski.com",
        pathname:
          "/static/1db41e3ecd311724a15306b270d99dd9/6e87d/next-js-logo.png",
        port: "",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
        pathname: "/v2/resize:fit:720/format:webp/1*KDMx1YspSrBcFJG-NDZgDg.png",
        port: "",
      },
    ],
  },
};

export default nextIntlConfig(nextConfig);
