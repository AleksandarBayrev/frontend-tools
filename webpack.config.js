const path = require("path");

module.exports = {
    mode: "production",
    entry: "./build/index.js",
    devtool: "source-map",
    target: "web",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "frontendtools.min.js"
    },
    resolve: {
        modules: ["./node_modules"]
    }
}