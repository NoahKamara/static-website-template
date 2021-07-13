/* eslint-disable no-undef */
module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: __dirname + "/build/assets/js",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            },
            {
                test: /.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }]
    }
};