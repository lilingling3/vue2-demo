module.exports = {
    entry: "./main.js",
    output: {
        filename: 'bundle.js'
    },
    module:{
        loaders:[
            // 正则 匹配  以css 结尾的文件 用 style-loader 和css-loader进行打包
            {test:/\.css$/,loader:'style-loader!css-loader'}
        ]
            
        
    }
};