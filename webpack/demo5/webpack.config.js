var webpack = require('webpack');
module.exports = {
    // _dirname   node 中 表示项目 绝对路径
    entry: __dirname+"/main.js",
    output: {
        path:__dirname,// 绝对路径
        filename: 'bundle.js'
    },
    // 插件
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};