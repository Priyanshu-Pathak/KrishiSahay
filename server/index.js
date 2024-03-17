const express=require("express")
const mongoose=require('mongoose')
const cors=require("cors")
const RegisterModel=require('./model/Register')

const app=express()
app.use(express.json())
app.use(cors())


// app.post('/sign',(req,res)=>{
//     RegisterModel.create(req.body)
//     .then(register=>res.json(register))
//     .catch(err=>res.json(err))
// })

app.post('/sign', (req, res) => {
    const { username } = req.body;
    
    // Check if the username already exists
    RegisterModel.findOne({ username: username })
        .then(existingUser => {
            if (existingUser) {
                // Username already exists, send an error response
                return res.status(400).json({ error: 'Username already exists' });
            } else {
                // Username is unique, create the new user
                RegisterModel.create(req.body)
                    .then(register => res.json(register))
                    .catch(err => res.status(500).json(err));
            }
        })
        .catch(err => res.status(500).json(err));
});



app.post('/login',(req,res)=>{
    const {username,password}=req.body;
    RegisterModel.findOne({username:username})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Succcess");
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

mongoose.connect("mongodb://localhost:27017/KRISHISAHAY");
app.listen(3002,()=>{
    console.log("server is running");
})