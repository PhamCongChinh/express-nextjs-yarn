const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  // Use the CDN in production and localhost for development.
  //assetPrefix: isProd ? 'http://localhost:3000' : '',
}
