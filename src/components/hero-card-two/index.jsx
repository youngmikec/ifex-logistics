import React from 'react'
import { Link } from 'react-router-dom';

import './style.css';

const HeroCardTwo = () => {
  return (
    <>
        <div className='w-full bg-[#058AB3] wrapper'>
                <div className='mb-20 pt-16 text-center'>
                    <h1 className='font-bold text-white' style={{fontSize: '3rem'}}>Large enough to handle,</h1>
                    <h1 className='font-bold text-white' style={{fontSize: '3rem'}}>Small enough to care</h1>
                </div>

                <div className='mt-4 mb-8 text-center'>
                    <button className='border-4 border-white bg-transparent text-white px-4 py-4 rounded-lg'>
                        <Link to="/about-us">Read more</Link>
                    </button>
                </div>
                
                <div className='my-8 w-full grid grid-cols-1' >
                    <div className='mx-auto w-8/12 text-center'>
                        {/* <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
                            <img src={ifexVan} alt="ifexVan" className='' width="80%" height="246px" />
                        </ScrollAnimation> */}
                    </div>
                    {/* <div className='align-left'>
                        <img src={forklift} alt="truck2" width="300px" height="246px" />
                    </div> */}
                </div>
                
            </div>
    </>
  )
}

export default HeroCardTwo