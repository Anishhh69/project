import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        rerquired:true,
        minlength:3,
        maxlength:50,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false, //user le signup garda yedi isAdmin vanne field ko value pathayena vane chai tesko default value false haldeu vaneko ho
    },
},
    {timestamps: true},
);

const User = mongoose.model("User", userSchema);

export default User;