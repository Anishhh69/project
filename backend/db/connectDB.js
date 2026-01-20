import mongoose from "mongoose";

async function connectDB(){
try{
const conn=await mongoose.connect('mongodb://localhost:27017/broadwaydb');
console.log("Connected to DB at", conn.connection.host);
}catch(err){
    console.log("Error connecting to DB:",err.message)
    process.exit(1) //node maa program exit huna process use garinxa (1)-> exit code..certain kei problem aayera program break vayo vanne bujhinxa o bahek kei aayo vane () maa
}
}

export default connectDB;