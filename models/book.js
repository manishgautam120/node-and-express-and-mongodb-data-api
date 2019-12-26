var mongoose = require('mongoose');
//BookSchema

var  bookSchema = mongoose.Schema({
name :{
    type: String,
    required :true
      },
    genre:{
      type: String,
      required :true
    },
    description:{
      type: String
    },
    author:{
      type: String,
      required :true
    },
    publisher:{
      type: String
    },
    pages:{
      type: String,
      required :true
    },
    image_url:{
      type: String
    },
    buy_url:{
      type: String
    },
    create_date:{

         type:Date,
         default:Date.now
         }
});
var Book = module.exports= mongoose.model('Book', bookSchema);

//get Books

module.exports.getBooks = function(callback,limit){
  Book.find(callback).limit(limit);
}