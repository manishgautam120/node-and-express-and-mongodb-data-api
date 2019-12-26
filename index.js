var express    =    require('express');
var app        =    express();
var bodyParser = require('body-parser');
var mongoose  = require('mongoose');

Genre = require('./models/genre')
Book = require('./models/book')
mongoose.connect('mongodb://localhost/bookstore', {'useNewUrlParser': true,useUnifiedTopology: true },(err)=>{
if(!err){
    console.log("connected");
}
else{
console.log("check connection");
}
});   

var db = mongoose.connection;

app.get('/',function(req,res)
{

    res.send('please use /api/book or/api');    
});
//for genres
app.get('/api/genres',function(req,res)
{

  Genre.getGenres(function(err,genres){
if(err){
   throw err;
}
res.json(genres);

  });    
});
//for books
app.get('/api/books',function(req,res)
{
  Book.getBooks(function(err,books){
if(err){
   throw err;
}
res.json(books);
  });    
});
app.listen(3000);