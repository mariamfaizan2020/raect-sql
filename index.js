const express=require("express");
const app=express();
const port =process.env.PORT || 3000;
const bodyParser = require("body-parser");
const cors=require("cors");
const mysql=require("./connection")
// const mysql=require("mysql2")
// const pool=mysql.createPool({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"react sql",
//     port:3306
// })

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));
   

app.get("/api/get",(req,res)=>{
    const Getqry="SELECT * FROM contact_db"
    mysql.pool.query(Getqry,(err,result)=>{
        res.send(result)
    })
})
app.get("/",(req,res)=>{
//     let qry="INSERT INTO contact_db (name,email,contact) VALUES ('test3','test3@gmail.com','039344559')"
// // res.send("hello world")
// mysql.pool.query(qry,(err,results)=>{
//     console.log("error",err)
//     console.log("result",results)
//     res.send("added")
// })
})

app.listen(port,()=>{
    console.log(`server is runnig on port ${port}`)
})