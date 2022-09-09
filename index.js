const express=require("express");
const app=express();
const port =process.env.PORT || 3000;
const bodyParser = require("body-parser");
const cors=require("cors");
const mysql=require("./connection").con

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    let qry="INSERT INTO contact_db (name,email,contact) VALUES ('test','test@gmail.com','039889')"
// res.send("hello world")
mysql.query(qry,(err,results)=>{
    console.log("error",err)
    console.log("result",results)
    res.send("added")
})
})

app.listen(port,()=>{
    console.log(`server is runnig on port ${port}`)
})