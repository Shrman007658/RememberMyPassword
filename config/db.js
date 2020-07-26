const mongoose=require('mongoose');

const db= require('../SecretKeys/databasestring');
const connectDB=async ()=>
{
    try {
        await mongoose.connect(db,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log("Database connected");
        
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}
module.exports=connectDB;