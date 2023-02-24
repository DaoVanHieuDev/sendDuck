const express=require('express')
const app=express()
const port =5001;
const cors=require('cors')
const db =require('./utils/database')
const bodyParser=require('body-parser')

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.json("hehehee")
})


app.listen(port,()=>{
console.log( `http://localhost:5001`) 
})