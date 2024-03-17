import React, { useState } from 'react'
import backlogin from '../../Pictures/login_full_3.jpg'
import { useNavigate,NavLink } from 'react-router-dom';
import axios from 'axios'


const fullScreenImageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
  };

const glassEffect={
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
}

function Login(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3002/login',{username,password})
        .then(result=>{
            if(result.data==="Succcess"){
                navigate('/logout',{ state: { username, password}})
            }else{
                alert(result.data)
            }
        })
    }
    return(
        <>
        <div className='flex flex-col justify-center items-center w-full h-screen bg-slate-500'>
            <img
                src={backlogin}
                alt="Background"
                style={fullScreenImageStyle}
            />
            <div className='w-full flex items-center justify-center'>
                <div className='bg-white bg-opacity-40 p-10 md:p-16 lg:p-20 rounded-3xl border-2 border-gray ' style={glassEffect}>
                    <h1 className='text-5xl font-semibold font-poppins'>Welcome Back</h1>
                    <p className='font-medium tex-lg text-black mt-4'>Please enter your details.</p>
                    <div className='mt-8'>
                        <form onSubmit={handleSubmit}>
                                <div>
                                    <label className='text-lg font-medium text-black'>Username</label>
                                    <input
                                        className='w-full border-2 border-black p-4 mt-1 bg-transparent placeholder-black'
                                        placeholder='Enter your username'
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}                        
                                    />
                                </div>
                                <div>
                                    <label className='text-lg font-medium'>Password</label>
                                    <input
                                        className='w-full border-2 border-black p-4 mt-1 bg-transparent placeholder-black'
                                        placeholder='Enter your password'
                                        type='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className='mt-8 flex flex-col gap-y-4'>
                                    <button type="submit" className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-green-800 text-white text-lg font-bold border-2 border-black'>LOGIN</button>
                                </div>
                        </form>
                        <div className='mt-8 flex justify-center items-center'>
                            <p className='font-medium text-base'>Don't have an account?</p>
                            <NavLink to="/sign">
                                <button type="button" className='text-blue-800 text-base font-bold ml-2 hover:text-yellow-700 underline'>Sign Up</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        </>
    )
}

export default Login 