const path = require('path');

// const postCSSPlugins = [
//     require('postcss-import'),
//     require('postcss-simple-vars'),
//     require('postcss-nested'),
//     require('autoprefixer')
// ]

module.exports = {
    mode: "development",
    watch: true,

    
    entry: "./app/assets/scripts/app.js",
    output: {
        path: path.resolve(__dirname, './app/assets/bundled'),
        filename: "bundled.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true
                        }
                    }
                ]
            }
        ]
    }
}