const express=require('express');
const fs=require('fs');
const url=require('url');
module.exports=(app)=>{
  /*app.get("/", (req,res)=>{
    console.log('reached the handler for /');
    var data= fs.readFileSync('./client/public/index.js','utf8')//,(err,data)=>this._data=data);
    res.send(data);
  });*/

  app.get("/search",(req,res)=>{
    //var data=url.parse(req.url,false);
    //var data=new URL(req.url);
    res.send("received the msg "+'['+req.url+']');
  });
};
