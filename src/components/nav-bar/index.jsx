import React from 'react';
import logo from '../../assets/images/ifex-logo.png';


const Navbar = () => {
    return (
        <>
            <div className="w-full shadow-md">
                <div className="mx-auto w-10/12 flex justify-between py-4">
                    <div className="">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="pt-4">
                        
                        <span className="mx-6 text-2xl text-black hover:text-blue-700">Home</span>
                        <span className="mx-6 text-2xl text-black hover:text-blue-700">About us</span>
                        <span className="mx-6 text-2xl text-black hover:text-blue-700">Services</span>
                        <span className="mx-6 text-2xl text-black hover:text-blue-700">Branches</span>
                        <span className="mx-6 text-2xl text-black hover:text-blue-700">Contact us</span>
                        <span className="mx-6 text-2xl text-black hover:text-blue-700">Get Quote</span>
                       
                    </div>
                    <div className="">
                        <button
                        className="mx-4 border-2 border-blue-500 rounded-lg px-6 py-3 hover:bg-blue-500 hover:text-white"
                        >login</button>
                        <button 
                        className="mx-4 border-2 border-blue-500 rounded-lg px-6 py-3 hover:bg-blue-500 hover:text-white"
                        >Sign up</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;