const express= require('express');
const app =express();
const cors = require("cors");
const port= 5000;

const categoriy=require('./Data/Categories.json')
const News =require('./Data/News.json')

app.use(cors());

app.get('/',(req,res)=>{
res.send('hello world')
})

app.get('/news',(req,res)=>{
    res.send(News)
})

app.get('/news-Categori',(req,res)=>{
    res.send(categoriy)
})
app.get('/news/:id',(req,res)=>{
    const id= req.params.id
    const selectedNews=News.find(n=>n._id===id)
    res.send(selectedNews)
})
app.get('/category/:id',(req,res)=>{
    const id= req.params.id
    if(id==='08'){
      res.send(News)
    }
    else{
        const newsCategory= News.filter(c=>c.category_id===id)
    res.send(newsCategory)
    }
   
})

app.listen(port,()=>{
    console.log('Example app listening on port')
})