var path = require("path");
var webpack = require("webpack");
var precss = require('precss');
var autoprefixer = require('autoprefixer');


var config = {
    // для оладки в броузере
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'whatwg-fetch',
        'babel-polyfill',
        './src_front/index_entry_front'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        // если ошибки то не создаем ничего
        new webpack.NoErrorsPlugin()
    ],
    // конфиг - где искать модули и с каим расширением
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    },
    // где искать лоадеры
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },

    module: {

        preLoaders: [{
            test: /\.js$/,
            loaders: ['eslint'],
            include: [
                path.resolve(__dirname, "src_front"),
            ],
        }],

        loaders: [{
            loaders: ['babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0'],
            //куда добавить лодер(во все файлы в папке src)
            include: [
                path.resolve(__dirname, "src_front"),
            ],
            test: /\.js$/,
            plugins: ['transform-runtime'],
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader!postcss-loader"
        }]
    },
    postcss: function() {
        return [require('lost'), precss, autoprefixer];
    }
}

module.exports = config;

module.exports.dev = function(app, webpackDevMiddleware) {


    var compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }));


}
