const path = require('path');

module.exports = {
    plugins: [],
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'www')
    }
    ,
    devServer: {
        contentBase: "./www",
        open: true,
        watchContentBase: true,
        port: 8081
    },
    module: {
        rules: [
            {
                test: /\.m?(js|ts)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
        ]
    }
}


