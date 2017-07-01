// module.exports = {
//     entry:__dirname + '/main.js', // 入口文件
//     output:{
//         path:__dirname + '/', // 出口文件
//         filename:'bundle.js',
//     },
//     devServer:{
//         contentBase:'./',//本地服务器 所加载页面 所在的页面
//         host:'192.168.0.103', // 本地ip
//         // port :'3000' 默认 8080
//         inline:true,// 源文件改变 实时刷新
//         colors :true,// 终端输出文件为彩色
//         historyApiFallback:true,// 所有跳转指向index.html 不跳转

//     }
// }

module.exports = {
    entry: __dirname + '/main.js',
    output: {
        path: __dirname + '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './', //本地服务器所加载的页面所在的目录
        host: '192.168.0.103', //本地IP地址
        // colors: true, //终端输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        port: '3000' //端口号
 
    }
}