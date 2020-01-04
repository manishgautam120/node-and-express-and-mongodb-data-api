  var mongoose = require('mongoose');
//GenreSchmea

var  genreSchema = mongoose.Schema({
name :{
    type: String,
    required :true
      },
create_date:{
         type:Date,
         default:Date.now
         }
});
var Genre = module.exports= mongoose.model('Genre',genreSchema);

//get genres

module.exports.getGenres = function(callback,limit){
    Genre.find(callback).limit(limit);
}

//create genre
module.exports.addGenre = function(genre, callback){
    Genre.create(genre,callback);
}
module.exports.updateGenre = function(id , genre, options ,callback){
  var query = {_id:id };
  var update = {
     name : genre.name
  }
    Genre.findOneAndUpdate(query, update,options,callback);
}