import React from 'react';
import ifexVan from '../../assets/images/ifex-van.png';


const HeroCard = () => {
    return (
        <>
            <div className='w-full bg-[#058AB3]'>
                <div className='mb-20 pt-16 text-center'>
                    <h1 className='font-bold text-white' style={{fontSize: '3rem'}}>Large enough to handle,</h1>
                    <h1 className='font-bold text-white' style={{fontSize: '3rem'}}>Small enough to care</h1>
                </div>

                <div className='mt-4 mb-8 text-center'>
                    <button className='border-4 border-white bg-transparent text-white px-4 py-4 rounded-lg'>Read more</button>
                </div>
                
                <div className='my-8 w-full grid grid-cols-1' >
                    <div className='flex justify-center'>
                        <img src={ifexVan} alt="ifexVan" className='hover:ml-30' width="50%" height="246px" />
                    </div>
                    {/* <div className='align-left'>
                        <img src={forklift} alt="truck2" width="300px" height="246px" />
                    </div> */}
                </div>
                
            </div>
        </>
    )
}

export default HeroCard;