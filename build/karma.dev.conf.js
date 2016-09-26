const baseConf = require('./karma.base.conf')

module.exports = function (config) {
  config.set(Object.assign(baseConf, {
    browsers: ['Chrome'],
    reporters: ['mocha'],
    logLevel: config.LOG_INFO,
    singleRun: false,
    autoWatch: true
  }))
}