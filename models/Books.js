const mongoose=require('mongoose');
const BookSchema=new mongoose.Schema({
  name:{type:String,default:''},
  type:{type:String,default:'pdf'},
  tags:{type:Object,default:'miscellaneous'}
});

module.exports= mongoose.model('books',BookSchema);
