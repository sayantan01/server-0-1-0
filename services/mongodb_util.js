const mongoose=require('mongoose');
const keys=require('../config/keys');

mongoose.connect(keys.mongodbURI,{useNewUrlParser:true,useUnifiedTopology: true }).catch(err=>console.log("MONGODB CONN ERROR"+err));
