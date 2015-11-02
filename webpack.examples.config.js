//
// webpack.config.js to build an examples bundle
// for use with the examples site. To use this in
// another project you do not have to build anything.
//

module.exports = {
    entry: "./examples/modules/main.jsx",
    output: {
        filename: "examples-bundle.js"
    },
    module: {
        loaders: [
            {test: /\.(js|jsx)$/, loader: "babel?stage=0"},
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.(png|jpg|gif)$/, loader: "url-loader?limit=20000"},
            { test: /\.json$/, loader: "json-loader" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader?name=[name].[ext]" }
        ]
    },
    externals: [
        {
            window: "window",
            document: "document"
        }
    ],
    resolve: {
        extensions: ["", ".js", ".jsx", ".json"]
    }
};
