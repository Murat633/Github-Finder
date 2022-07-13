const path = require('path')
module.exports = {
    entry:'./src/index.js',
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname,'dist'),
        historyApiFallback:true,
        port:3000
    },
    module: {
        rules: [
           {
             test: /\.js$/,
             loader: 'babel-loader',
             exclude: /node_module/
           },
           {
            test:/\.scss$/,
            use:['style-loader','css-loader','sass-loader']
           },
           {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },

        ]
    }
    
}