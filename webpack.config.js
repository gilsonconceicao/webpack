const webpack = require('webpack'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
    mode: 'development', 
    entry: './src/app.js', 
    plugins: [new MiniCssExtractPlugin({filename: 'style.css'})], 
    output: {
        path: __dirname + '/public', 
        filename: 'bundle.js'
    }, 
    module: {
        rules: [{
            test: /\.s[ac]ss$/i, 
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader', 
                'sass-loader'
            ]
        }]
    }
}