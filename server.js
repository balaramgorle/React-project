const express= require("express");
const cors =require("cors");
const stripe = require("stripe")("sk_test_3bFivefJDiBEOZdfECaSYJsr00P0Uyy98A");
const app =express();
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("welcome into react shop website");
})
app.listen(8080,()=>{
    console.log("your app is running on port number 8080");
});