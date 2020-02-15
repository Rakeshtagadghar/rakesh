const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')

module.exports = withCss(
    withPurgeCss({
        purgeCssPaths: [
            'src/**/*'
          ],
      purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer // Only enable PurgeCSS for client-side production builds
    })
  )