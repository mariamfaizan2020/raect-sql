const mysql=require("mysql2")
const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"react sql",
    port:3306
})

con.connect((err)=>{
    if(err) throw err;
    console.log("connection created..!!")
})

module.exports.con=con;