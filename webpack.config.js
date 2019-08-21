module.exports = {
    // entry: 'webpack --config src/webpack.config.js',
    
    externals: [nodeExternals()],
    target:'node',
    // output: {
    //     filename: './dist/app.bundle.js'
    //    },
       externals: [{ 'express': { commonjs: 'express' } }]


    }
    var webpack = require( 'webpack' );