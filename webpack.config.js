var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

const PATHS = {
  style: path.join(__dirname, './src/styles'),
  images: path.join(__dirname, './src/images'),
  build: path.join(__dirname, '/dist')
};

module.exports = {
    entry: './src/index.js',
    output: {
        path: PATHS.build,
        filename: 'app.bundle.js'
    },
    module : {
        loaders : [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: path.resolve(__dirname, 'src/')
            },
            {
                test: require.resolve('react'),
                loader: 'expose?React',
                include: path.resolve(__dirname, 'src/')
            },
            {
                test: require.resolve('react-dom'),
                loader: 'expose?ReactDOM',
                include: path.resolve(__dirname, 'src/')
            },
            {
                test: /\.(css|scss)$/,
                loaders: ['style', 'css', 'sass']
            },
            {
              test: /\.(svg|jpg|png|ttf|woff|woff2|eot)$/,
              loader: 'file?name=[name].[hash].[ext]',
              include: PATHS.images
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', 'css']
    }
};
