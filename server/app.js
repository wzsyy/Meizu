//1.下载第三方模块
//npm install -g express(mysql,express-session,cors)
//npm install express

//2.将模块引入当前程序
const express=require("express");
const session=require("express-session");
const cors=require("cors");
const sony=require("./routes/sony");
const bodyParser=require("body-parser")

//3.创建连接池
var app=express();
app.use("/sony",sony)

//4.创建web服务器监听端口
var server=express();
server.listen(8080);

//5.处理跨域
//5.1：配置允许访问程序地址(脚手架)
//     http://127.0.0.1:5050  (ok)
//     http://localhost:5050
//5.2:每请求是否验证true
server.use(cors({
    origin: ["http://127.0.0.1:3001", "http://localhost:3001"],
    credentials: true
  }))

//6.配置session(在所有请求之前)
server.use(session({
    secret:"索尼snoy",//安全字符
    resave:true,//每次请求保存数据
    saveUninitialized:true//保存初始化数据
}))

//7.配置静态目录
server.use(express.static("public"))


