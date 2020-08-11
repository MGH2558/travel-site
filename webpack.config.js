const path = require('path');

module.exports = {
    entry: "./app/assets/scripts/app.js",
    output: {
        path: path.resolve(__dirname, "app/assets/bundled"),
        filename: "bundled.js"
    },
    mode: "development",
    watch: true
}