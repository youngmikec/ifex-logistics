import React from 'react';
import logo from  '../../assets/images/ifex-logo.png';
import './style.css';

const Login = () => {
    return (
        <>
            <div className='bg-blue-400 wrapper'>
                <div className="flex justify-center">

                    <div className="my-12 bg-white rounded-lg mx-auto lg:w-5/12 sm:w-6/12 lg:px-20 sm:px-12 py-12">
                        <div className='flex justify-center'>
                            <img src={logo} alt="logo" />
                        </div>

                        <h1 className='text-blue-400 text-center my-12 title'>Welcome! Please Login!</h1>

                        <div className=''>
                            <form>
                                <div className='my-12'>
                                    <input className='px-6 py-4 rounded-lg w-full' type="text" placeholder='email'/>
                                </div>
                                <div className='my-12'>
                                    <input className='px-6 py-4 rounded-lg w-full' type="password" placeholder='****'/>
                                </div>
                                <div className='my-12 text-center'>
                                    <button className='bg-blue-400 text-white px-12 py-3 rounded-lg'>Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;