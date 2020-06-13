require('@babel/register');
const path = require('path');

module.exports = {
    entry: {
        share_header: path.resolve(__dirname, "src/share/header.jsx"),
        othello_index: path.resolve(__dirname, "src/othello/index.jsx"),
        othello_matching: path.resolve(__dirname, "src/othello/matching.jsx"),
        othello_watching: path.resolve(__dirname, "src/othello/watching.jsx"),
        othello_game: path.resolve(__dirname, "src/othello/game.jsx")
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