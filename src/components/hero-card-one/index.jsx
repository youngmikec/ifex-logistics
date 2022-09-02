import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

import ifexVan from '../../assets/images/ifex-van.png';


const HeroCardOne = () => {
    return (
        <>
            <div className='w-full bg-[#058AB3]'>
                <div className='mb-20 pt-8 text-center'>
                    <h1 className='font-bold text-white' style={{fontSize: '3rem'}}>Transport Your Goods Around The World</h1>
                    {/* <h1 className='font-bold text-white' style={{fontSize: '3rem'}}>Small enough to care</h1> */}
                </div>

                <div className='mt-4 text-center'>
                    <button className='border-4 border-white bg-transparent text-white px-4 py-4 rounded-lg'>
                        <Link to="/about-us">Read more</Link>
                    </button>
                </div>
                
                <div className='my-6 w-full grid grid-cols-1' >
                    <div className='mx-auto w-8/12 text-center'>
                        <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
                            <img src={ifexVan} alt="ifexVan" className='' width="80%" height="246px" />
                        </ScrollAnimation>
                    </div>
                    {/* <div className='align-left'>
                        <img src={forklift} alt="truck2" width="300px" height="246px" />
                    </div> */}
                </div>
                
            </div>
        </>
    )
}

export default HeroCardOne;