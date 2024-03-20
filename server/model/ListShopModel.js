const mongoose  = require('mongoose')
const ShopListSchema=new mongoose.Schema({
    image:String,
    shopname:String,
    ownersname:String,
    phonenumber:String,
    address:String,
    city:String,
    state:String,
    upi:String,
    gst:String,
    shopid:String,
    passwordshop:String
})

const ShopListModel=mongoose.model("shopdetails",ShopListSchema)
module.exports=ShopListModel