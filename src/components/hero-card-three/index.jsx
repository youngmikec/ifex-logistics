import React from 'react'
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import './styles.css';

const HeroCardThree = () => {
  return (
    <>
        <div className='w-full bg-[#058AB3] wrapper'>
            <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
                {/* <img src={airplane} alt="ifexVan" className='' width="80%" height="246px" /> */}
                <div className='mb-20 pt-16 pl-12 text-left'>
                    <h1 className='font-bold text-white' style={{fontSize: '3rem'}}>Large enough to handle,</h1>
                    <h1 className='font-bold text-white' style={{fontSize: '3rem'}}>Small enough to care</h1>
                <div className='mt-4 mb-8 text-left'>
                    <button className='border-4 border-white bg-transparent text-white px-4 py-4 rounded-lg'>
                        <Link to="/about-us">Read more</Link>
                    </button>
                </div>
                </div>

            </ScrollAnimation>
                
                {/* <div className='my-8 w-full grid grid-cols-1' >
                    <div className='mx-auto w-8/12 text-center'>
                        <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
                            <img src={airplane} alt="ifexVan" className='' width="80%" height="246px" />
                        </ScrollAnimation>
                    </div>
                    <div className='align-left'>
                        <img src={forklift} alt="truck2" width="300px" height="246px" />
                    </div>
                </div> */}
                
            </div>
    </>
  )
}

export default HeroCardThree;