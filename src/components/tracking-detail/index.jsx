import React, { useContext } from 'react';

import { FiSettings, FiTruck, FiPackage } from 'react-icons/fi';
import { FaHome } from 'react-icons/fa';

const TrackingDetail = () => {
    // const trackingData = useContext();
    return (
        <>
            <div className="my-20 mx-auto rounded-lg p-12 shadow-xl bg-white lg:w-8/12 md:w-9/12 sm:w-11/12 h-6/12">
                <div>
                    <div className='mt-12 mb-16'>
                        <h1 className="title">Tracking Detail</h1>
                        <p className="sub-tile">Status: Your parcel </p>
                    </div>

                    <div className="my-8">
                        <div className="relative w-full">
                            <hr className="border-4 border-gray-700" />
                            <div className="flex justify-between absolute -top-7 w-full">
                                <span className="p-5 rounded-full text-white lg:text-lg md:text-lg sm:text-sm bg-gray-700">
                                    <FiSettings />
                                </span>
                                <span className="p-5 rounded-full text-white lg:text-lg md:text-lg sm:text-sm bg-blue-400">
                                    <FiTruck />
                                </span>
                                <span className="p-5 rounded-full text-white lg:text-lg md:text-lg sm:text-sm bg-gray-700">
                                    <FiPackage />
                                </span>
                                <span className="p-5 rounded-full text-white lg:text-lg md:text-lg sm:text-sm bg-gray-700">
                                    <FaHome />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='mt-28'>
                        <div className='flex justify-start my-12'>
                            <span className='rounded-full p-4 bg-gray-700'></span>
                            <div className='lg:mx-16 sm:mx-6 text-lg'>39 Ajose Adeogun Street, Utako, Fct, Abuja</div>
                        </div>
                        <div className='flex justify-start my-12'>
                            <span className='rounded-full p-4 bg-gray-700'></span>
                            <div className='lg:mx-16 sm:mx-6 text-lg'>39 Ajose Adeogun Street, Utako, Fct, Abuja</div>
                        </div>
                        <div className='flex justify-start my-12'>
                            <span className='rounded-full p-4 bg-gray-700'></span>
                            <div className='lg:mx-16 sm:mx-6 text-lg'>39 Ajose Adeogun Street, Utako, Fct, Abuja</div>
                        </div>
                        <div className='flex justify-start my-12'>
                            <span className='rounded-full p-4 bg-gray-700'></span>
                            <div className='lg:mx-16 sm:mx-6 text-lg'>39 Ajose Adeogun Street, Utako, Fct, Abuja</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrackingDetail;