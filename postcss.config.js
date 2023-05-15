/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // https://github.com/tailwindlabs/tailwindcss/discussions/7049#discussioncomment-1966402
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {}
  }
}

module.exports = config
