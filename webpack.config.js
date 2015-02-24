var path = require("path"),
    webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
//    context: __dirname,
    cache: true,
    entry: {

        'app': './src/app.jsx'

    },
//    node: {
//      fs: "empty"
//    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'js/[name].js'
    },
    module: {
//        postLoaders: [
//            {
//                test: /\.js$/,
//                loader: "transform?brfs"
//            }
//        ],
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
         },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "sass-loader")
         },
//        {
//                test: /\.js$/,
//                loader: "transform?brfs"
//         },

            {
                test: /\.js(x?)$/,
                loaders: ["jsx-loader?insertPragma=React.DOM&harmony"]
         },
            {
                test: /.*\.(gif|png|jpg)$/,
                loaders: ['image?optimizationLevel=7&interlaced=false']
         }
         ]
    },
    plugins: [
           new ExtractTextPlugin("css/[name].css")

           ],
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //        //but get it from a global 'React' variable
//        fs:'null',
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
