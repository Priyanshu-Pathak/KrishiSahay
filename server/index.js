const express=require("express")
const mongoose=require('mongoose')
const cors=require("cors")
const RegisterModel=require('./model/Register')
const ShopListModel=require('./model/ListShopModel')
const multer=require('multer')
const path=require('path')


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


app.use(express.static('public'))


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/Images');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage
})

app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const image = req.file.filename;
        const formData = req.body;

        const shopData = {
            image: image,
            shopname: formData.shopname,
            ownername: formData.ownername,
            phonenumber: formData.phonenumber,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            upi: formData.upi,
            gst: formData.gst,
            shopid:formData.shopid,
            passwordshop:formData.passwordshop
        };
        const result = await ShopListModel.create(shopData);

        res.status(200).json(result);
    } catch (err) {
        console.error('Error uploading file and data:', err);
        res.status(500).json({ error: 'Upload failed' });
    }
});


app.get('/shoplisting', async (req, res) => {
    try {
        const shops = await ShopListModel.find();
        res.json(shops);
    } catch (error) {
        console.error('Error fetching shops:', error);
        res.status(500).json({ error: 'Failed to fetch shops' });
    }
});

mongoose.connect("mongodb://localhost:27017/KRISHISAHAY");
app.listen(3002,()=>{
    console.log("server is running");
})