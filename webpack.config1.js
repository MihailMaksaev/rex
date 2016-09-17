var path = require("path");
var webpack = require("webpack");


module.exports = {
	// ��� ������ � ��������
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
	// ���� ������ �� �� ������� ������
    new webpack.NoErrorsPlugin()
  ],
  // ������ - ��� ������ ������ � � ���� �����������
  resolve: {
  modulesDirectories: ['node_modules'],
  extensions: ['', '.js', '.jsx']
        },
   // ��� ������ �������
  resolveLoader: {
            modulesDirectories: ['node_modules'],
            moduleTemplates: ['*-loader', '*'],
            extensions: ['', '.js']
   },
  
  module: {
	  
       preLoaders: [ 
          {
        test: /\.js$/,
        loaders: ['eslint'],
        include: [
          path.resolve(__dirname, "src_front"),
        ],
          }
       ],

            loaders: [{
                loaders: ['babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0'],
				//���� �������� �����(�� ��� ����� � ����� src)
                include: [
                    path.resolve(__dirname, "src_front"),
                ],
                test: /\.js$/,
                plugins: ['transform-runtime'],
            }]
  }
}