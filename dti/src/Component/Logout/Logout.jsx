import React, { useState } from 'react';
import {Link, NavLink } from 'react-router-dom';
import Logo from '../../Pictures/Logo.png';
import Mountain from '../../Pictures/Mountain.jpg';
import Rental from '../../Pictures/Rental.png'
import Shop from '../../Pictures/Shop.png'
import Soil from '../../Pictures/Soil_health.png'
import Weather from '../../Pictures/Weather.png'
import { useLocation } from 'react-router-dom';

const fullScreenImageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  objectFit: 'cover',
};

const glassEffectBoxStyle = {
    width: '580px',
    height: '580px',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    position: 'fixed',
    top: '55%',
    left: '78%',

    transform: 'translate(-50%, -50%)',
    //zIndex: '10', // Adjust z-index to make sure the box appears above the background image
  };

const glassEffect = {
    background: 'rgba(0,0,0,0.2)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(0,0,0)',
    width: '100%', // Adjust the width as needed
    height: '78px', // Adjust the height as needed
  };
  

const imageStyle={
    width:'50%',
    height: '50%',
}
const picStyle={
    borderRadius: '20px'
}
const zoomedImageStyle = {
    transition: 'all 0.3s ease',
  };

// const z_IndexOn=1;
// const z_IndexOff=0;


const Logout = () => {

    const location = useLocation();
    const { username} = location.state;

  return (
    <div>
      <img
        src={Mountain}
        style={fullScreenImageStyle}
        alt="Mountain"
      />
      <header className="shadow sticky z-50 top-0">
            <div style={glassEffectBoxStyle}>
                <div className=' float-left' style={{...imageStyle, padding: '10px',paddingLeft:'15px',paddingTop:'13px',position: 'relative',zIndex: '1'}}>
                <img
                            src={Shop}
                            style={{ ...picStyle, ...zoomedImageStyle }}
                            className="w-full h-full object-cover "
                            alt="Shop"
                            onMouseOverCapture={(e) => { e.target.style.transform = 'scale(1.3)'; e.target.parentNode.style.zIndex = '5'; }}
                            onMouseOutCapture={(e) => { e.target.style.transform = 'scale(1)'; e.target.parentNode.style.zIndex = '1'; }}
                        />
                </div>
                <div className=' float-right' style={{...imageStyle, padding: '10px',paddingRight:'15px',paddingTop:'13px',position: 'relative',zIndex: '2'}}>
                <img
                            src={Weather}
                            style={{ ...picStyle, ...zoomedImageStyle }}
                            className="w-full h-full object-cover "
                            alt="Weather"
                            onMouseOverCapture={(e) => { e.target.style.transform = 'scale(1.3)'; e.target.parentNode.style.zIndex = '5'; }}
                            onMouseOutCapture={(e) => { e.target.style.transform = 'scale(1)'; e.target.parentNode.style.zIndex = '2'; }}
                        />
                </div>
                <div className=' float-left' style={{...imageStyle, padding: '10px',paddingLeft:'15px',paddingBottom:'13px',position: 'relative',zIndex: '3'}}>
                <img
                            src={Soil}
                            style={{ ...picStyle, ...zoomedImageStyle }}
                            className="w-full h-full object-cover"
                            alt="Soil"
                            onMouseOverCapture={(e) => { e.target.style.transform = 'scale(1.3)'; e.target.parentNode.style.zIndex = '5'; }}
                            onMouseOutCapture={(e) => { e.target.style.transform = 'scale(1)'; e.target.parentNode.style.zIndex = '3'; }}
                        />
                </div>
                <div className=' float-right' style={{...imageStyle, padding: '10px',paddingRight:'15px',paddingBottom:'13px',position: 'relative',zIndex: '4'}}>
                <img
                            src={Rental}
                            style={{ ...picStyle, ...zoomedImageStyle }}
                            className="w-full h-full object-cover"
                            alt="Rental"
                            onMouseOverCapture={(e) => { e.target.style.transform = 'scale(1.3)'; e.target.parentNode.style.zIndex = '5'; }}
                            onMouseOutCapture={(e) => { e.target.style.transform = 'scale(1)'; e.target.parentNode.style.zIndex = '4'; }}
                        />
                </div>
            </div>
            <nav style={glassEffect}>
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className="flex items-center">
                        <img
                            src={Logo}
                            className="mr-3 h-20"
                            alt="Logo"
                        />
                    </div>
    
                    <div className="flex items-center lg:order-2 ">
                        <NavLink to="/">
                            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-lg px-6 py-3 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 font-bold font-poppins mr-5">
                                LOGOUT
                            </button>
                        </NavLink>
                        <h2 className="text-lg font-semibold text-white">Hello, {username}</h2>
                    </div>


                        <div
                            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
                            
                            <li>
                                    <NavLink
                                        to="/acknowledgement"
                                        className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-500" : "text-white"} border-b border-transparent hover:border-green-700 hover:underline lg:hover:bg-transparent lg:border-0 lg:p-0 lg:hover:text-green-500 text-lg font-bold font-poppins`
                                        }
                                    >
                                            ACKNOWLEDGEMENT
                                    </NavLink>
                                </li>


                                <li>
                                    <NavLink
                                        to="/about"
                                        className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-500" : "text-white"} border-b border-transparent hover:border-green-700 hover:underline lg:hover:bg-transparent lg:border-0 lg:p-0 lg:hover:text-green-500 text-lg font-bold font-poppins`
                                        }
                                    >
                                        ABOUT US
                                    </NavLink>
                                </li>
                               
                            </ul>
                        </div>
                </div>
            </nav>
        </header>
    </div>

  );
};

export default Logout;
