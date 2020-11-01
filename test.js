const mongoose = require("mongoose");
const Post = require("./models/Post");
mongoose.connect("mongodb://localhost/nodeblog_test_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Post.findByIdAndDelete('5f9ef42d7d06340de09ae0fe',(error,post)=>{
    console.log(error,post);
})
/*
 Post.find({},(error,post)=>{
     console.log(error,post)
 });*/
/*  Post.findById('5f9ef1e34823c128e8a4e1ff',(error,post)=>{
     console.log(error,post)
 })

Post.findByIdAndUpdate('5f9ef1e34823c128e8a4e1ff',{
    title:'Benim 1111111111111.Postum'
},(error,post)=>{
    console.log(error,post)
}) */
/* 
Post.create({
    title:'ikinci  postum',
    content:'lreom ipsıum içerik',

},(error,post)=>{
console.log(error,post);
}) */
