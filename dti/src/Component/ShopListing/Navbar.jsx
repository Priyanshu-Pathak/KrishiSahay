import React from 'react'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { Link, useNavigate, NavLink } from 'react-router-dom';
import Logo from '../../Pictures/Logo.png';

const glassEffect = {
    background: 'rgba(0,0,0)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(0,0,0)',
    width: '100%', // Adjust the width as needed
    height: '78px', // Adjust the height as needed
  };

export default function Navbar() {

    

  return (
    <>
    <div>
      
    <header className="shadow sticky z-50 top-0">     
            <nav style={glassEffect}>
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo on the Left */}
                    <Link to="/" className="flex items-center">
                        <img
                            src={Logo}
                            className="mr-10 h-20"
                            alt="Logo"
                        />
                    </Link>
                    {/* Buttons on the Right */}
                    <div className="flex items-center lg:order-2"> {/* Order adjusted for right placement */}
                        <NavLink to="/liststorebutton">
                            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-lg px-6 py-3 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 font-bold font-poppins">
                                LIST STORE
                            </button>
                        </NavLink>
                        <NavLink to="/login">
                            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-lg px-6 py-3 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 font-bold font-poppins">
                                MY STORE
                            </button>
                        </NavLink>
                    </div>
                    {/* Other elements (can be adjusted for order) */}
                        <div
                            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                <input
                                    className="search-input"
                                    type="text"
                                    placeholder="Search Shops."
                                    style={{ width: "200px" ,height: "40px"}}
                                    />
                                </li>                      
                            </ul>
                        </div>
                </div>
            </nav>
        </header>
        
    </div>
    </>
  )
}
