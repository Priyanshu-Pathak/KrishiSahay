const mongoose  = require('mongoose')
const RegisterSchema=new mongoose.Schema({
    username:String,
    password:String,
    aadhar_number:String,
    mobile_number:String,
    address:String,
    city:String,
    state:String,
    fullname:String,
})

const RegisterModel=mongoose.model("registers",RegisterSchema)
module.exports=RegisterModel