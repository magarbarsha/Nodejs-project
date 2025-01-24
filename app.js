const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send("hello world")
})

// yo code le hamro port number ma project host gardeyo
app.listen(3000,()=>{
    console.log("server has started at port 3000")
})