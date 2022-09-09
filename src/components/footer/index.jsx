import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai';
import googlePlayIcon from '../../assets/images/googleplay.svg';
import appSotroeIcone from '../../assets/images/appstore.svg';

const Footer = () => {
    return (
        <>
            <div className="bg-[#333] w-full pt-20 pb-8">
                <div className='mx-auto w-10/12'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 '>
                        <div>
                            <h1 className='text-[#058AB3] text-3xl font-bold sub-title' style={{fontWeight: 'bolder'}}>Our Services</h1>
                            <ul className='list-none'>
                                <li className='list-item my-8 text-gray-300 hover:text-[#058AB3] cursor-pointer'>
                                    <Link to="/services">House to house pickup</Link>
                                </li>
                                <li className='list-item my-8 text-gray-300 hover:text-[#058AB3] cursor-pointer'>
                                    <Link to="/services">Haulage</Link>
                                </li>
                                <li className='list-item my-8 text-gray-300 hover:text-[#058AB3] cursor-pointer'>
                                    <Link to="/services">Oversea shipping</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-[#058AB3] text-3xl font-bold sub-title' style={{fontWeight: 'bolder'}}>Quick Links</h1>
                            <ul className='list-none'>
                                <li className='list-item my-8 text-gray-300 hover:text-[#058AB3] cursor-pointer'>Webmail</li>
                                <li className='list-item my-8 text-gray-300 hover:text-[#058AB3] cursor-pointer'>
                                    <Link to='/login'>
                                    Admin Login
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-[#058AB3] text-3xl font-bold sub-title' style={{fontWeight: 'bolder'}}>Mobile App Coming Soon on</h1>
                            <div>
                                <span className='mx-4 cursor-pointer inline'>
                                    <img src={appSotroeIcone} alt="appstore" />
                                </span>
                                <span className='mx-4 cursor-pointer inline'>
                                    <img src={googlePlayIcon} alt="googleplay" />
                                </span>
                            </div>
                            <div className='flex justify-start text-gray-300 text-xl my-4'>
                                <span className='mr-4'>
                                    <a href="https://www.facebook.com/ifexexpressnig" target="_blank" rel='noreferrer'>
                                        <AiFillFacebook />
                                    </a>
                                </span>
                                <span className='mx-2'>
                                    <a href="https://www.instagram.com/ifexexpressnig/" target="_blank" rel='noreferrer'>
                                        <AiOutlineInstagram />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className='flex justify-between text-gray-300'>
                        <div>
                            <p>© 2022, Ifex Logistics. All right reserved</p>
                        </div>
                        <div>
                            <p className='hover:text-[#058AB3]'>Terms and Conditions | Privacy Policies</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;