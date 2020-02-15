const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = withCss(
    withPurgeCss({
       
            webpack: (config, { isServer }) => {
              if (config.mode === 'production') {
                if (Array.isArray(config.optimization.minimizer)) {
                  config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
                }
              }
              return config;
            },
        
        purgeCssPaths: [
            'src/**/*'
          ],
      purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer // Only enable PurgeCSS for client-side production builds
    })
  )