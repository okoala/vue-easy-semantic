// we can just use the exact same webpack config by requiring it
// but make sure to delete the normal entry
var webpackConf = require('./webpack.base.config')
delete webpackConf.entry

webpackConf.resolve.alias.vue = 'vue/dist/vue.js'

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    reporters: ['spec'],
    // this is the entry file for all our tests.
    files: [
      'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.4/semantic.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.4/semantic.min.js',
      '../test/unit/index.js'
    ],
    // we will pass the entry file to webpack for bundling.
    preprocessors: {
      '../test/unit/index.js': ['webpack']
    },
    webpack: webpackConf,
    webpackMiddleware: {
      stats: 'errors-only',
      quiet: true,
      noInfo: true
    },
    colors: true,
    logLevel: config.LOG_ERROR,
    singleRun: true
  })
}
