import React from 'react';

import { FiSettings, FiTruck, FiPackage } from 'react-icons/fi';
import { FaHome } from 'react-icons/fa';

const TrackingDetail = ({trackingDetail}) => {
    return (
        <>
            <div className="my-20 mx-auto rounded-lg p-6 shadow-lg bg-gray-50 lg:w-8/12 md:w-9/12 sm:w-11/12 h-max">
                <div>
                    <div className='mt-6 mb-8'>
                        <h1 className="sub-title">
                            <b>Tracking Detail</b>
                        </h1>
                        <p className="sub-tile">Status: {trackingDetail.status_name || '--'} </p>
                    </div>

                    <div className="my-8">
                        <div className="relative w-full">
                            <hr className="border-4 border-gray-700" />
                            <div className="flex justify-between absolute -top-6 w-full">
                                <span className={`p-4 rounded-full text-white lg:text-md md:text-md sm:text-sm 
                                    ${trackingDetail.status_name === 'PROCCESSING' ? 'bg-[#058AB3]' : 'bg-gray-700'}`}
                                >
                                    <FiSettings />
                                </span>
                                <span className={`p-4 rounded-full text-white lg:text-md md:text-md sm:text-sm 
                                    ${trackingDetail.status_name === 'DEPARTED_HUB' ? 'bg-[#058AB3]' : 'bg-gray-700'}`}
                                >
                                    <FiTruck />
                                </span>
                                <span className={`p-4 rounded-full text-white lg:text-md md:text-md sm:text-sm 
                                    ${trackingDetail.status_name === 'AT_DESTINATION' ? 'bg-[#058AB3]' : 'bg-gray-700'}`}
                                >
                                    <FiPackage />
                                </span>
                                <span className={`p-4 rounded-full text-white lg:text-md md:text-md sm:text-sm 
                                    ${trackingDetail.status_name === 'ARRIVED' ? 'bg-[#058AB3]' : 'bg-gray-700'}`}
                                >
                                    <FaHome />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='mt-16'>
                        <div className='flex justify-start my-6'>
                            <span className={`rounded-full p-3 ${trackingDetail.status_name === 'PROCCESSING' ? 'bg-[#058AB3]' : 'bg-gray-700'}`}></span>
                            <div className='lg:mx-16 sm:mx-6 text-sm'>Item is been Processed at orginating Hub</div>
                        </div>
                        <div className='flex justify-start my-6'>
                            <span className={`rounded-full p-3 ${trackingDetail.status_name === 'DEPARTED_HUB' ? 'bg-[#058AB3]' : 'bg-gray-700'}`}></span>
                            <div className='lg:mx-16 sm:mx-6 text-sm'>Item has Departed Hub</div>
                        </div>
                        <div className='flex justify-start my-6'>
                            <span className={`rounded-full p-3 ${trackingDetail.status_name === 'AT_DESTINATION' ? 'bg-[#058AB3]' : 'bg-gray-700'}`}></span>
                            <div className='lg:mx-16 sm:mx-6 text-sm'>Item has Arrived at the Destination Hub, pending collection</div>
                        </div>
                        <div className='flex justify-start my-6'>
                            <span className={`rounded-full p-3 ${trackingDetail.status_name === 'ARRIVED' ? 'bg-[#058AB3]' : 'bg-gray-700'}`}></span>
                            <div className='lg:mx-16 sm:mx-6 text-sm'>Item has been Delivered</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrackingDetail;