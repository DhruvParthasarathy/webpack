module.exports = {
    entry: './src/js/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [


            // using css loader for loading css files on demand
            {
               test:/\.css$/,
                use: ["style-loader","css-loader"] 
            },

            // using babel to convert any es6 code to es5 for browser compatibility

            {
                test:/\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: "babel-loader",
                    
                    options: {
                        presets: [

                            "@babel/preset-env", 

                        ],

                    }
                }
                
                
            }
        ]
    }
}