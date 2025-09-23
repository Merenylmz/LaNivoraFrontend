import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: 'lanivora.net',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'lanivora.net',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'lanivorabackend.onrender.com',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: 'lanivorabackend.onrender.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**'
      },
    ]
  }


};

export default withMDX(nextConfig);
