import React, {useState} from "react";
import { Link } from "react-router-dom";
import { BiWallet } from 'react-icons/bi';
import { BsBoxSeam } from 'react-icons/bs';
import { VscRocket } from 'react-icons/vsc';

import './index.css';
import Footer from "../../components/footer";
import Navbar from "../../components/nav-bar";
import HeroCard from "../../components/hero-card";
import ServiceCard from "../../components/service-card";
import WhatsappButton from "../../components/whatsapp-btn";


const Home = (props) => {
    const [trackingCode, setTrackingCode] = useState('');

    const handleTrackItem = () => {
        if(trackingCode) window.location = `/track/search/${trackingCode}`;
        return;
    }

    return (
        <>
            <Navbar />
            <div id="swiper">
                <HeroCard />
            </div>

            {/* Why Choose us */}
            <section id="choos-us" className="mt-20">
                <div className="my-8">
                    <h2 className="title text-center">Why Choose Us</h2>
                </div>
                <div className="w-10/12  mx-auto">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 w-full">
                        <div className="mx-4 my-6">
                            <div className="mx-auto w-max text-center">
                                <div className="p-4 border-2 border-gray-600 rounded-full text-3xl text-[#058AB3]">
                                    <BsBoxSeam />
                                </div>
                            </div>
                            <div className="text-center my-6">
                                <h2 className="text-[#058AB3] text-xl">
                                    <b>BETTER</b>
                                </h2>
                            </div>
                            <p>Ifex uses the power of technology to give you more visibility and more flexibility for your urban, last-mile shipments</p>
                        </div>
                        <div className="mx-4 my-6">
                            <div className="mx-auto w-max text-center">
                                <div className="p-4 border-2 border-gray-600 rounded-full text-3xl text-[#058AB3]">
                                    <BiWallet />
                                </div>
                            </div>
                            <div className="text-center my-6">
                                <h2 className="text-[#058AB3] text-xl">
                                    <b>CHEAPER</b>
                                </h2>
                            </div>
                            <p>Our platform cuts the unnecessary logistics steps to make B2B deliveries more affordable, without hidden costs</p>
                        </div>
                        <div className="mx-4 my-6">
                            <div className="mx-auto w-max text-center">
                                <div className="p-4 border-2 border-gray-600 rounded-full text-3xl text-[#058AB3]">
                                    <VscRocket /> 
                                </div>
                            </div>
                            <div className="text-center my-6">
                                <h2 className="text-[#058AB3] text-xl">
                                    <b>FASTER</b>
                                </h2>
                            </div>
                            <p>Ifex uses the power of technology to give you more visibility and more flexibility for your urban, last-mile shipments</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Track and Quote section */}
            <section className="bg-white track-wrapper">
                <div className="skew-wrapper">
                </div>
                <div className="track-content-wrapper w-full">
                    {/* <div className="text-black mt-2 mb-32 text-center">
                        <h1 className="title">Track your Item</h1>
                    </div> */}

                    {/* tracking section */}
                    <div className="grid lg:grid-cols-2 sm:grid-cols-1 pt-12">
                        <div className="tk-img"></div>
                        <div className="w-full lg:pt-16">
                            <div className="w-10/12 mx-auto">
                                <h1 className="title text-white">Track your Item now</h1>
                                <p className="sub-title text-white">Always know your items location and status with just a few clicks below.</p>
                                <form className="my-3">
                                    <div className="my-8">
                                        <input 
                                        type="text" 
                                        value={trackingCode}
                                        onChange={(e) => setTrackingCode(e.target.value)}
                                        className="w-full rounded-lg bg-white px-3 py-3 broder-2 border-[#058AB3]" 
                                        placeholder="Enter shipment code" />
                                    </div>
                                    <div className="my-8 items-center">
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            handleTrackItem();
                                        }} className="border-2 border-[#058AB3] text-white rounded-lg py-1 px-8 hover:bg-white hover:py-2 hover:text-[#058AB3] transition-all">
                                            <span className="text-2xl">track</span>
                                        </button>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* quote section */}
                    <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-24">
                        <div className="w-full lg:pt-10">
                            <div className="mx-auto w-9/12">
                                <h1 className="title text-white">Price Quotation</h1>
                                <p className="sub-title text-white">
                                    With our well curation price calculator, 
                                    <br />
                                    you are sure to get the lowest price possible for your items. 
                                </p>
                                <Link to="/pricing">
                                    <button className="text-[#058AB3] bg-white my-8 text-xl px-12 py-2 rounded-lg hover:py-4 transition-all">
                                        Get Quote 
                                        <span></span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="qt-img"></div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <div id="service" style={{height: 'max-content'}}>
                <div className="mx-auto w-9/12 my-12">
                    <div className="my-16">
                        <h1 className="title text-center">Our Services</h1>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">

                        <div>
                            <ServiceCard title="HOUSE TO HOUSE PICKUP" />
                        </div>
                        <div>
                            <ServiceCard title="HAULAGE" />
                        </div>
                        <div>
                            <ServiceCard title="OVERSEAS SHIPPING" />
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* keep in touch */}
            <section id="keepInTouch">
                <div className="grid lg:grid-cols-2 sm:grid-cols-1">
                    <div className="bg-[#058AB3]">
                        <div className="mx-auto w-10/12 pt-28">
                            <div className="text-white">
                                <h1 className="font-bold title" >Keep in touch.</h1>
                                <p className="sub-title">Don't want to miss our exciting news ?</p>
                                <p className="sub-title">Just leave us your contact information and we'll keep you updated !</p>
                            </div>

                            <form className="my-8">
                                <div className="my-6">
                                    <input type="text" className="w-full py-4 px-3 bg-white text-gray-600 rounded-lg" placeholder="First Name" />
                                </div>
                                <div className="my-6">
                                    <input type="text" className="w-full py-4 px-3 bg-white text-gray-600 rounded-lg" placeholder="Last Name" />
                                </div>
                                <div className="my-6">
                                    <input type="text" className="w-full py-4 px-3 bg-white text-gray-600 rounded-lg" placeholder="Email" />
                                </div>
                                <div className="my-6">
                                    <input type="text" className="w-full py-4 px-3 bg-white text-gray-600 rounded-lg" placeholder="Subject" />
                                </div>
                                <div className="my-6">
                                    <input type="text" className="w-full py-4 px-3 bg-white text-gray-600 rounded-lg" placeholder="Message" />
                                </div>
                                <div className="my-6">
                                    <button className="w-full bg-red-900 rounded-lg py-4 text-white">
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                    <div className="backDrop"></div>
                </div>
            </section>

            {/* whatsapp */}
            <WhatsappButton />


            {/* Footer */}
            <section id="footer">
                <Footer />
            </section>
        </>
    )
}

export default Home;