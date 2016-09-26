const baseConf = require('./karma.base.conf')

module.exports = function (config) {
  config.set(Object.assign(baseConf, {
    reporters: ['progress'],
    logLevel: config.LOG_ERROR,
    singleRun: true
  }))
}