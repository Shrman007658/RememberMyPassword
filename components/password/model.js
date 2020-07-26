//In this js file we have to create the schema
const mongoose=require('mongoose');

const Schema=new mongoose.Schema({
    appname:
    {
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    }
});

module.exports=mongoose.model("Passwords",Schema);


