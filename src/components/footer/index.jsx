import React from 'react';
import { Link } from 'react-router-dom';
import googlePlayIcon from '../../assets/images/googleplay.svg';
import appSotroeIcone from '../../assets/images/appstore.svg';

const Footer = () => {
    return (
        <>
            <div className="bg-[#333] w-full pt-20 pb-8">
                <div className='mx-auto w-10/12'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-blue-400 text-3xl font-bold sub-title' style={{fontWeight: 'bolder'}}>Our Services</h1>
                            <ul className='list-none'>
                                <li className='list-item my-8 text-gray-300 hover:text-blue-400 cursor-pointer'>
                                    <Link to="/services">Road Transportation</Link>
                                </li>
                                <li className='list-item my-8 text-gray-300 hover:text-blue-400 cursor-pointer'>
                                    <Link to="/services">Packaging</Link>
                                </li>
                                <li className='list-item my-8 text-gray-300 hover:text-blue-400 cursor-pointer'>
                                    <Link to="/services">Storage</Link>
                                </li>
                                <li className='list-item my-8 text-gray-300 hover:text-blue-400 cursor-pointer'>
                                    <Link to="/services">Warehousing</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-blue-400 text-3xl font-bold sub-title' style={{fontWeight: 'bolder'}}>Quick Links</h1>
                            <ul className='list-none'>
                                <li className='list-item my-8 text-gray-300 hover:text-blue-400 cursor-pointer'>Webmail</li>
                                <li className='list-item my-8 text-gray-300 hover:text-blue-400 cursor-pointer'>
                                    <Link to='/login'>
                                    Admin Login
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-blue-400 text-3xl font-bold sub-title' style={{fontWeight: 'bolder'}}>Mobile App Coming Soon on</h1>
                            <div>
                                <span className='mx-4 cursor-pointer inline'>
                                    <img src={appSotroeIcone} alt="appstore" />
                                </span>
                                <span className='mx-4 cursor-pointer inline'>
                                    <img src={googlePlayIcon} alt="googleplay" />
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
                            <p className='hover:text-blue-400'>Terms and Conditions | Privacy Policies</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;