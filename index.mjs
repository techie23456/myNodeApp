//var express = require('express');
import express from "express";
import axios from "axios";

var app = express();
var port = 4000;
var msg ="";

app.get("*",(req,res)=>{

  res.send('<h1>Hello world</h1>');

})
/*
app.get('*',(req,res)=>{
   //  res.send('Hello World');

     axios
     .get(
         `https://jsonplaceholder.typicode.com/posts`
     )
     .then((response) => {
         const posts = response.data;

         console.log(">>>>>>",posts);

         res.send('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/F-16_June_2008.jpg/800px-F-16_June_2008.jpg"></img>');
        // this.setState({ posts });
     });

     });*/

     app.get("/user/api",(req,res)=>{

        res.json([
           { id:1,username:"aaa",displayName:"I am good"},
           { id:2,username:"bbb",displayName:"bbb"},
           { id:3,username:"ccc",displayName:"ccc"},
     
        ]);
     
     })

     app.get('/MyApi/users', function(req, res) {
        msg = req.query.msg;
       
       console.log(">>>>>>>>>===",msg);
       

        res.json([
            { id:1,username:"aaa",displayName:`${msg}`},
            { id:2,username:"bbb",displayName:"bbb"},
            { id:3,username:"ccc",displayName:"ccc"},
        ]);


      });

      app.get('/My_Api/users', function(req, res) {
  
        res.json([
            { id:1,username:"aaa",displayName:`${msg}`},
            { id:2,username:"bbb",displayName:"bbb"},
            { id:3,username:"ccc",displayName:"ccc"},
        ]);
             
      })



     app.get('/recieve',(req,res)=>{
        //  res.send('Hello World');
     
          axios
          .get(
              `http://192.168.29.190:4001/user/api`
          )
          .then((response) => {
              const posts = response.data;
     
              console.log(">>>>>>",posts);
     
              res.send(`<h1>${posts[0].displayName}</h1>`);
             // this.setState({ posts });
          });
     
          });
    
    app.listen(port,'0.0.0.0',function(){
    console.log('The server is running, ' + ' please open your browser at http://192.168.29.190:%s',port);
    })


