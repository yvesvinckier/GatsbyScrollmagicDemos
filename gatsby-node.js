/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const Path = require('path')

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules:
        stage === 'build-html'
          ? [
              {
                test: /ScrollMagic/,
                use: loaders.null(),
              },
              {
                test: /scrollmagic/,
                use: loaders.null(),
              },
            ]
          : [],
    },
    resolve: {
      alias: {
        TweenLite: Path.resolve(
          'node_modules',
          'gsap/src/uncompressed/TweenLite.js'
        ),
        TweenMax: Path.resolve(
          'node_modules',
          'gsap/src/uncompressed/TweenMax.js'
        ),
        TimelineLite: Path.resolve(
          'node_modules',
          'gsap/src/uncompressed/TimelineLite.js'
        ),
        TimelineMax: Path.resolve(
          'node_modules',
          'gsap/src/uncompressed/TimelineMax.js'
        ),
        ScrollMagic: Path.resolve(
          'node_modules',
          'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'
        ),
        'animation.gsap': Path.resolve(
          'node_modules',
          'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
        ),
        'debug.addIndicators': Path.resolve(
          'node_modules',
          'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'
        ),
      },
    },
  })
}
