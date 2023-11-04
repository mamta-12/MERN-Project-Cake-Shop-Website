const mongoose = require("mongoose");
dbconnect();
async function dbconnect(){
    try{
        mongoose.set('strictQuery',false);
        await mongoose.connect("mongodb+srv://mamtay7303:mamta@cluster0.fy8kk83.mongodb.net/mern?retryWrites=true&w=majority",
        {useNewUrlParser:true});
        console.log("Mongo db connection success");
    }
    catch(error){
        console.log("Mongo db connection failed"+error);
    }
}
module.exports=mongoose;






   