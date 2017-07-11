const path = require("path");
var ManifestPlugin = require('webpack-manifest-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname,
    entry: {
        core: "./metrojs/js/core.js",
        styles: "./metrojs/js/styles.js",
        app: "./metrojs/js/app.js",
        css: ["./metrojs/css/basic.css"]
    },
    output: {
        library: ["MetroFlow", "[name]"],
        libraryTarget: "var",
        path: path.join(__dirname, "/website/static/metrojs/"),
        //filename: "metroflow.[name].[chunkhash].js"
        filename: "metroflow.[name].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ],
        loaders: [
             // babel loader, testing for files that have a .js extension
             // (except for files in our node_modules folder!).
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015'],
                    compact: false // because I want readable output
                }
            }
         ]
    },
    externals: {
        paper: "paper"
    },
    plugins: [
        new ManifestPlugin(),
//        new ExtractTextPlugin("paperexample.[contenthash].css"),
        new ExtractTextPlugin("metroflow-basic.css"),
        new WebpackCleanupPlugin(),
    ],
};
