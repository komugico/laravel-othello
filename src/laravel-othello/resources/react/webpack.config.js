require('@babel/register');
const path = require('path');

module.exports = {
    entry: {
        
    },
    output: {
        path: path.resolve(__dirname, "../../public/js/react/") ,
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: [".js","jsx"],
    }
}