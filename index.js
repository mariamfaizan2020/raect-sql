const express=require("express");
const app=express();
const port =process.env.PORT || 3000;
const bodyParser = require("body-parser");
const cors=require("cors");

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));

app.listen(port,()=>{
    console.log(`server is runnig on port ${port}`)
})