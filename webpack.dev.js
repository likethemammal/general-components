const merge = require('webpack-merge')
const common = require('./webpack.common')


module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './bin',
    },
    watch: true,

    entry: {
        'example_bundle': './example/index.js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
        ],
    }
})