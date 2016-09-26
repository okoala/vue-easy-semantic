const buble = require('rollup-plugin-buble')
const cjs = require('rollup-plugin-commonjs')
const node = require('rollup-plugin-node-resolve')
const version = process.env.VERSION || require('../package.json').version

module.exports = {
  entry: 'src/index.js',
  dest: 'dist/vue2-easy-semantic.js',
  format: 'umd',
  moduleName: 'Vue2EasySemantic',
  plugins: [node(), cjs(), buble()],
  banner:
`/**
 * vue2-easy-semantic v${version}
 * (c) ${new Date().getFullYear()} Koala Huang
 * @license MIT
 */`
}
