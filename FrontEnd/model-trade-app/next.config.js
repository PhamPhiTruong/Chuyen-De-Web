/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "d1gt5dppxgb6oq.cloudfront.net",
      "static.chotot.com",
      "res.cloudinary.com",
    ], // Thêm hostname tại đây
  },
};

module.exports = nextConfig;
