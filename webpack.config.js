module.exports = {
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/, // .js and .jsx files
            exclude: /node_modules/, // excluding the node_modules folder
            use: {
              loader: "babel-loader",
            },
          },
          {
            test: /\.(sa|sc|c)ss$/, // styles files
            use: ["style-loader", "css-loader", "sass-loader"],
          },
          {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
            loader: "url-loader",
            options: { limit: false },
          },
        ],
      },
}