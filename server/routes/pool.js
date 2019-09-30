const mysql=require("mysql")
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    port:3306,
    connectionLimit:20,
    database:"sony"
});
module.exports=pool;//抛出模块给sony.js
