const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'http://api.thietbihq.com' : 'http://localhost:3000',
  compress: false, //Khong nen file
}
