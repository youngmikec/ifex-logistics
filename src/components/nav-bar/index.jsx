import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import logo from '../../assets/images/White.png';


const Navbar = () => {
    return (
        <>
            <div className="w-full shadow-md bg-[#058AB3] text-white">
                <div className='lg:block md:hidden sm:hidden'>
                    <div className="mx-auto lg:w-10/12 md:w-11/12 sm:w-full flex justify-between py-2">
                        <div className="" style={{width: '10%'}}>
                            <img src={logo} style={{width: '100%'}} alt="logo" />
                        </div>
                        {/* <div className="pt-4">
                        </div> */}

                        <div className="py-4">
                            <Link to='/'>
                                <span className="lg:mx-6 md:mx-5 sm:mx-4 lg:text-lg md:text-sm sm:text-xs text-white hover:border-b-2 hover:border-white cursor-pointer">Home</span>
                            </Link>
                            <Link to="/about-us">
                                <span className="lg:mx-6 md:mx-5 sm:mx-4 lg:text-lg md:text-sm sm:text-xs text-white hover:border-b-2 hover:border-white cursor-pointer">About us</span>
                            </Link>
                            <Link to="/services">
                                <span className="lg:mx-6 md:mx-5 sm:mx-4 lg:text-lg md:text-sm sm:text-xs text-white hover:border-b-2 hover:border-white cursor-pointer">Services</span>
                            </Link>
                            <Link to="/branches">
                                <span className="lg:mx-6 md:mx-5 sm:mx-4 lg:text-lg md:text-sm sm:text-xs text-white hover:border-b-2 hover:border-white cursor-pointer">Branches</span>
                            </Link>
                            <Link to="/contact-us">
                                <span className="lg:mx-6 md:mx-5 sm:mx-4 lg:text-lg md:text-sm sm:text-xs text-white hover:border-b-2 hover:border-white cursor-pointer">Contact us</span>
                            </Link>
                            {/* <span className="lg:mx-6 md:mx-5 sm:mx-4 lg:text-lg md:text-sm sm:text-xs text-white hover:border-b-2 hover:border-white">Get Quote</span> */}
                        
                            <span
                                className="mx-4 border-2 border-white rounded-lg px-4 py-1 text-white hover:bg-white hover:text-[#058AB3]"
                            >
                                <Link to="/login">login</Link>
                            </span>
                            {/* <span 
                            className="mx-4 border-2 border-[#058AB3] rounded-lg px-4 py-1 hover:bg-[#058AB3] hover:text-white"
                            >Sign up</span> */}
                        </div>
                    </div>
                </div>

                <div className="lg:hidden md:block sm:block mx-auto w-10/12">
                    <div className='flex justify-between'>
                        <div className="mt-5" style={{width: '15%'}}>
                            <img src={logo} style={{width: '100%'}} alt="logo" />
                        </div>
                        <div className="flex justify-center">
                            <div>
                                <div className='pt-4 dropdown relative'>
                                    <button className="
                                        dropdown-toggle
                                        px-6
                                        py-2.5
                                        text-white hover:border-b-2 hove                     font-medium
                                        font-lg
                                        leading-tight
                                        uppercase
                                        rounded
                                        hover:bg-blue-700 hover:shadow-lg
                                        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                        active:bg-blue-800 active:shadow-lg active:text-white
                                        transition
                                        duration-150
                                        ease-in-out
                                        flex
                                        items-center
                                        whitespace-nowrap
                                        "
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                    <span className='font-lg'>
                                        <FiMenu />
                                    </span>
                                
                                    </button>
                                    <ul
                                        className="
                                        dropdown-menu
                                        min-w-max
                                        absolute
                                        hidden
                                        bg-white
                                        text-base
                                        z-50
                                        float-left
                                        py-2
                                        list-none
                                        text-left
                                        rounded-lg
                                        shadow-lg
                                        mt-1
                                        m-0
                                        bg-clip-padding
                                        border-none
                                        "
                                        aria-labelledby="dropdownMenuButton1"
                                        id='dropdownMenuButton1'
                                    >
                                        <li>
                                            <a
                                            className="
                                            dropdown-item
                                            text-sm
                                            py-2
                                            px-4
                                            font-normal
                                            block
                                            w-full
                                            whitespace-nowrap
                                            bg-transparent
                                            text-gray-700
                                            hover:bg-gray-100
                                            "
                                            href='/'
                                            >Home</a>
                                        </li>
                                        <li>
                                            <a
                                            className="
                                            dropdown-item
                                            text-sm
                                            py-2
                                            px-4
                                            font-normal
                                            block
                                            w-full
                                            whitespace-nowrap
                                            bg-transparent
                                            text-gray-700
                                            hover:bg-gray-100
                                            "
                                            href="/about-us"
                                            >About us</a>
                                        </li>
                                        <li>
                                            <a
                                            className="
                                            dropdown-item
                                            text-sm
                                            py-2
                                            px-4
                                            font-normal
                                            block
                                            w-full
                                            whitespace-nowrap
                                            bg-transparent
                                            text-gray-700
                                            hover:bg-gray-100
                                            "
                                            href='/services'
                                            >Services</a>
                                        </li>
                                        <li>
                                            <a
                                            className="
                                            dropdown-item
                                            text-sm
                                            py-2
                                            px-4
                                            font-normal
                                            block
                                            w-full
                                            whitespace-nowrap
                                            bg-transparent
                                            text-gray-700
                                            hover:bg-gray-100
                                            "
                                            href='/branches'
                                            >Branches</a>
                                        </li>
                                        <li>
                                            <a
                                            className="
                                            dropdown-item
                                            text-sm
                                            py-2
                                            px-4
                                            font-normal
                                            block
                                            w-full
                                            whitespace-nowrap
                                            bg-transparent
                                            text-gray-700
                                            hover:bg-gray-100
                                            "
                                            href='/contact-us'
                                            >Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
    )
}

export default Navbar;