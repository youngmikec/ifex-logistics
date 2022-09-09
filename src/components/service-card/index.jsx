import React from 'react';

import './style.css';

const ServiceCard = ({title, description, serviceImg}) => {
    return (
        <>
            <div className="w-10/12">
                <div className="mx-auto relative bg-[#058AB3] rounded-2xl py-4" style={{height: '330px', width: '230px'}}>
                    <p className="sub-title text-center text-white">{ title }</p>
                    <img className="absolute -left-9 -bottom-4 right-0 z-10" style={{height: '230px', width: '300px'}}  src={serviceImg} alt="forklift"  />
                </div>
                <div id="body" className="text-center my-8">
                    <p className="text-[#262839] text-sm md:text-lg lg:text-lg" style={{fontSize: '1rem', lineHeight: '2rem'}}>
                        { description }
                    </p>
                </div>
            </div>
        </>
    )
}

export default ServiceCard;