/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: [
//       "d1gt5dppxgb6oq.cloudfront.net",
//       "static.chotot.com",
//       "res.cloudinary.com",
//     ],
//   },
// };

// module.exports = nextConfig;
// next.config.js
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  i18n,
  images: {
    domains: [
      "d1gt5dppxgb6oq.cloudfront.net",
      "static.chotot.com",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
