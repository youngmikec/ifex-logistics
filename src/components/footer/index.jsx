import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="bg-[#333] w-full pt-20 pb-8">
                <div className='mx-auto w-10/12'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-blue-400 text-3xl font-bold sub-title' style={{fontWeight: 'bolder'}}>Our Services</h1>
                            <ul className='list-none'>
                                <li className='list-item my-8 text-gray-300 hover:text-blue-400 cursor-pointer'>Road Transportation</li>
                                <li className='list-item my-8 text-gray-300 hover:text-blue-400 cursor-pointer'>Packaging</li>
                                <li className='list-item my-8 text-gray-300 hover:text-blue-400 cursor-pointer'>Storage</li>
                                <li className='list-item my-8 text-gray-300 hover:text-blue-400 cursor-pointer'>Warehousing</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-blue-400 text-3xl font-bold sub-title' style={{fontWeight: 'bolder'}}>Quick Links</h1>
                            <ul className='list-none'>
                                <li className='list-item my-8 text-gray-300 hover:text-blue-400 cursor-pointer'>Webmail</li>
                                <li className='list-item my-8 text-gray-300 hover:text-blue-400 cursor-pointer'>Admin Login</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-blue-400 text-3xl font-bold sub-title' style={{fontWeight: 'bolder'}}>Quick Links</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;