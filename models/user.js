const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    id : Number,
    first_name :String,
    last_name: String,
    email : String,
    gender : String,
    income : Number,
    city : String,
    car : String,
    quote : String,
    phone_price : Number
},{
    strict : true
});
const userModel=mongoose.model("Users",userSchema);
module.exports=userModel;