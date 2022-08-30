import React from 'react';
import forklift from '../../assets/images/forklift1.png';
import './style.css';

const ServiceCard = ({title, description}) => {
    return (
        <>
            <div className="w-10/12">
                <div className="mx-auto relative bg-[#058AB3] rounded-2xl py-4" style={{height: '350px', width: '280px'}}>
                    <p className="sub-title text-center text-white">{ title }</p>
                    <img className="absolute bottom-0 right-0 z-10 service-img"   src={forklift} alt="forklift"  />
                </div>
                <div id="body" className="text-center my-8">
                    <p className="text-[#262839] lg:text-lg" style={{fontSize: '1rem', lineHeight: '2rem'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        <br />
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
                    </p>
                </div>
            </div>
        </>
    )
}

export default ServiceCard;