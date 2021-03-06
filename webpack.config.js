var webpack = require('webpack');
module.exports={
    entry: [ 'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        //'script!foundation-sites/dist/css/foundation.min.css',
        './app/app.jsx'],
        externals:{
            jquery:'jQuery'
        },
        plugins:[
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery':'jquery'
            })
        ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias:{
         Main: 'app/components/Main.jsx',
         Navigation: 'app/components/Navigation.jsx',
         applicationStyles: 'app/styles/app.scss',
         Countdown :'app/components/Countdown.jsx',
         Timer :'app/components/Timer.jsx',
         Clock: 'app/components/Clock.jsx'
        },
        extensions: ['','.js','.jsx']
    },
    module: {
        loaders:[
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015','stage-0']
                },
                test: /\.jsx?$/,
                use: [ 'script-loader' ],
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-inline-source-map'
};
