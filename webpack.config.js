const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env',
                            '@babel/react', {
                                'plugins': ['@babel/plugin-proposal-class-properties']
                            }]
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    "style-loader", // 3. Inject styles into DOM
                    "css-loader",// 2. Turns css into common js
                    "sass-loader" //1. Turn sass into css
                ]
            },
        ]
    },
};