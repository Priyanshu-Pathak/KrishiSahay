import React,{useState} from 'react';
import backFormOne from "../../Pictures/Shopbg2.jpg"
import { useNavigate,NavLink } from 'react-router-dom';
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

const fullScreenImageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh', // Adjusted height
    objectFit: 'cover',
};

const glassEffect = {
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
};


function LISTSTOREBUTTON() {

    const [shopname, setShopName] = useState('');
    const [ownername, setOwnerName] = useState('');
    const [phonenumber,setPhonenumber]=useState('');
    const [address,setAddress]=useState('');
    const [state,setState]=useState('');
    const [city,setCity]=useState('');
    const [upi,setUPI]=useState('');
    const [gst,setGST]=useState('');
    const [file, setFile] = useState();
    const [shopid,setShopID]=useState('');
    const [passwordshop,setPasswordShop]=useState('');


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(); // Create FormData object
        formData.append('file', file); // Append image file
        formData.append('shopname', shopname);
        formData.append('ownername', ownername);
        formData.append('phonenumber', phonenumber);
        formData.append('address', address);
        formData.append('city', city);
        formData.append('state', state);
        formData.append('upi', upi);
        formData.append('gst', gst);
        formData.append('shopid',shopid);
        formData.append('passwordshop',passwordshop)
        try {
            const response = await axios.post('http://localhost:3002/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data); 
            navigate('/shoplisting');
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    const handleNext = (event) => {
        if (!shopname||!ownername||!phonenumber||!address ||!state ||!upi  ||!city||!file){
            event.preventDefault();
            alert("Any field except GST Number should not be empty.")
            return;
        }
        const password = Math.random().toString(8).substring(2, 10);
        let shopId = uuidv4();
        shopId = shopId.replace(/-/g, '').substring(0, 8)
        setPasswordShop(password); 
        setShopID(shopId);
        alert(`Generated Password: ${password}\nSHOP ID: ${shopId}.\nPlease Remember it`);
    }

    return (
        <>
            <div className='flex flex-col justify-center items-center w-full h-screen bg-slate-500'>
                <img
                    src={backFormOne}
                    alt="Background"
                    style={fullScreenImageStyle}
                />
                <div className='w-full h-full flex items-center justify-center '>
                    <div className='bg-white bg-opacity-40 p-10 md:p-16 lg:p-20 rounded-3xl border-2 border-gray h-21/27 w-3/4 ' style={glassEffect}>
                        <h1 className='text-3xl font-semibold font-poppins mt-0 mb-4 p-0'>Welcome! Please enter your details</h1>
                        <form onSubmit={handleSubmit}>
                        <div className='mt-5 grid grid-cols-3  '>
                            <div className="flex flex-col">
                                <label className='text-lg font-medium text-black '>Shop Name</label>
                                <input
                                    className='w-full sm:w-54 border-2 border-black p-4 mt-1 bg-transparent placeholder-black'
                                    placeholder='Enter your Shop Name'
                                    value={shopname}
                                    onChange={(e) => setShopName(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className='text-lg font-medium text-black '>Owner's Name</label>
                                <input
                                    className='w-full sm:w-54 border-2 border-black p-4 mt-1 ml-2  bg-transparent placeholder-black'
                                    placeholder='Enter Owners Name'
                                    value={ownername}
                                    onChange={(e) => setOwnerName(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className='text-lg font-medium text-black ml-3'>Phone Number</label>
                                <input
                                    className='w-full sm:w-50 border-2 border-black p-4 mt-1 ml-4 bg-transparent placeholder-black'
                                    placeholder='Enter your phone number'
                                    value={phonenumber}
                                    onChange={(e)=>setPhonenumber(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className='text-lg font-medium text-black mt-3'>Address</label>
                                <input
                                    className='w-full sm:w-54 border-2 border-black p-4  bg-transparent placeholder-black'
                                    placeholder='Enter your Address'
                                    value={address}
                                    onChange={(e)=>setAddress(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className='text-lg font-medium text-black mt-3 ml-2'>City/District</label>
                                <input
                                    className='w-full sm:w-54 border-2 border-black p-4 ml-2 bg-transparent placeholder-black'
                                    placeholder='Enter your city/district'
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className='text-lg font-medium text-black mt-3 ml-4'>State</label>
                                <select
                                    className='w-full sm:w-54 border-2 border-black p-4 ml-4 bg-transparent placeholder-black'
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                >
                                    <option value='' disabled hidden>Select your state</option> 
                                    <option value='Andhra Pradesh'>Andhra Pradesh</option>
                                    <option value='Arunachal Pradesh'>Arunachal Pradesh</option>
                                    <option value='Assam'>Assam</option>
                                    <option value='Bihar'>Bihar</option>
                                    <option value='Chhattisgarh'>Chhattisgarh</option>
                                    <option value='Goa'>Goa</option>
                                    <option value='Gujarat'>Gujarat</option>
                                    <option value='Haryana'>Haryana</option>
                                    <option value='Himachal Pradesh'>Himachal Pradesh</option>
                                    <option value='Jharkhand'>Jharkhand</option>
                                    <option value='Kerala'>Kerala</option>
                                    <option value='Madhaya Pradesh'>Madhaya Pradesh</option>
                                    <option value='Maharashtra'>Maharashtra</option>
                                    <option value='Manipur'>Manipur</option>
                                    <option value='Meghalaya'>Meghalaya</option>
                                    <option value='Mizoram'>Mizoram</option>
                                    <option value='Nagaland'>Nagaland</option>
                                    <option value='Odisha'>Odisha</option>
                                    <option value='Punjab'>Punjab</option>
                                    <option value='Rajasthan'>Rajasthan</option>
                                    <option value='Sikkim'>Sikkim</option>
                                    <option value='Tamil Nadu'>Tamil Nadu</option>
                                    <option value='Telangana'>Telangana</option>
                                    <option value='Tripura'>Tripura</option>
                                    <option value='Uttarakhand'>Uttarakhand</option>
                                    <option value='Uttar Pradesh'>Uttar Pradesh</option>
                                    <option value='Anadaman and Nicobar Islands'>Anadaman and Nicobar Islands</option>
                                    <option value='Dadra and Nagar Haveli and Daman and Diu'>Dadra and Nagar Haveli and Daman and Diu</option>
                                    <option value='Jammu and Kashmir'>Jammu and Kashmir</option>
                                    <option value='Lakshadeep'>Lakshadeep</option>
                                    <option value='New-delhi'>New-delhi</option>
                                    <option value='Ladakh'>Ladakh</option>
                                    <option value='Puducherry'>Puducherry</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className='text-lg font-medium text-black mt-3'>UPI ID</label>
                                <input
                                    className='w-full sm:w-54 border-2 border-black p-4 mt-3 ml-2 bg-transparent placeholder-black'
                                    placeholder='Enter your UPI ID'
                                    value={upi}
                                    onChange={(e) => setUPI(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className='text-lg font-medium text-black mt-3 ml-2'>GST Number</label>
                                <input
                                    className='w-full sm:w-54 border-2 border-black p-4 mt-3 ml-4 bg-transparent placeholder-black'
                                    placeholder='Enter your GST NUMBER'
                                    value={gst}
                                    onChange={(e) => setGST(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className='text-lg font-medium text-black mt-3 ml-4'>Upload a picture of the store</label>
                                <input 
                                onChange={e => setFile(e.target.files[0])}
                                className='w-full sm:w-54 ml-10 mt-6 '
                                type="file"/>
                            </div>
                        </div>
                        <div className='flex  items-center mt-4 ml-0'>
                            <div className="flex items-center lg:order-2">                             
                                <button type="submit" onClick={handleNext} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-lg px-6 py-3 me-2 mb-2 mr-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 font-bold font-poppins border-2 border-black" >
                                    NEXT 
                                </button>
                            </div>
                        </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default LISTSTOREBUTTON;
