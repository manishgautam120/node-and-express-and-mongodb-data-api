var express    =    require('express');
var app        =    express();
var bodyParser = require('body-parser');
var mongoose  = require('mongoose');
app.use(bodyParser.json());   //while posting content type added in form of json

app.use(bodyParser.urlencoded({ extended: false }));
Genre = require('./models/genre')
Book = require('./models/book')
mongoose.connect('mongodb://localhost/bookstore', {'useNewUrlParser': true,useUnifiedTopology: true, useFindAndModify: false } ,(err)=>{
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

    res.send('please use /api/book or /api/genres');    
});
//for get genres //this is coming from genres.js 
app.get('/api/genres',function(req,res)
{

  Genre.getGenres(function(err,genres){
if(err){
   throw err;
}
res.json(genres);

  });    
});
//for add genre//this is coming from genres.js 
app.post('/api/genres',function(req,res)
{
   var genre = req.body;
  Genre.addGenre(genre,function(err,genre){
if(err){
   throw err;
}
res.json(genre);

  });    
});
//for add genre//this is coming from genres.js 
app.put('/api/genres/:id',function(req,res)
{
  var id = req.params._id;
   var genre = req.body;
  Genre.updateGenre(id , genre , {}, function(err,genre){
if(err){
   throw err;
}
res.json(genre);

  });    
});

//for get books//
app.get('/api/books',function(req,res)
{
  Book.getBooks(function(err,books){
if(err){
   throw err;
}
res.json(books);
  });    
});

//for add book//post
app.post('/api/books',function(req,res)
{
  var book = req.body;
  console.log(book);
 Book.addBook(book,function(err,book){
if(err){
  throw err;
}
res.json(book);

 });    
});

//for book by id
app.get('/api/books/:_id',function(req,res)
{
  Book.getBookById(req.params._id, function(err,book){
if(err){
   throw err;
}
res.json(book);
  });    
});
app.listen(3000);