const express = require('express');
require('./config');
const user=require('./users');

const app=express();


app.use(express.json());


app.get('/list',async (req,res)=>{
    let result=await user.find();
res.send(JSON.stringify(result));  
});


app.post('/create',async (req,res)=>{
    let data=new user(req.body);
    let result=await data.save();
res.send(result); 
});

app.put('/update/:name',async (req,res)=>{
    let result=await user.updateOne(req.params,{$set:req.body});
res.send(result); 
});

app.delete('/delete/:name',async (req,res)=>{
   console.log(req.params);
   let result=await user.deleteOne(req.params);
res.send(result); 
});

app.get('/search/:key', async (req,res)=>{
    let data = await user.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"contact":{$regex:req.params.key}},
                {"email":{$regex:req.params.key}}
            ]
        }
    );
    res.send(data);
});

app.listen(4500);