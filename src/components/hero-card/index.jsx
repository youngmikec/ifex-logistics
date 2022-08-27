import React from 'react';
import forklift from '../../assets/images/forklift1.png';

const style = {
    left: {
        marginLeft: '0px',
        transition: "marginLeft 2s linear 1s"
    }
}

const HeroCard = () => {
    return (
        <>
            <div className='w-full bg-blue-400'>
                <div className='mb-20 pt-32 text-center'>
                    <h1 className='font-bold text-white' style={{fontSize: '100px'}}>Large enough to handle,</h1>
                    <h1 className='font-bold text-white' style={{fontSize: '100px'}}>Small enough to care</h1>
                </div>

                <div className='mt-4 mb-8 text-center'>
                    <button className='border-4 border-white bg-transparent text-white px-4 py-4 rounded-lg'>Read more</button>
                </div>
                
                <div className='my-8 grid grid-cols-2' >
                    <div className='align-right'>
                        <img src={forklift} alt="truck1" className='hover:ml-30' width="283px" height="246px" />
                    </div>
                    <div className='align-left'>
                        <img src={forklift} alt="truck2" width="300px" height="246px" />
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default HeroCard;