import React, {useState} from "react";
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles'
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import './index.css';
import Footer from "../../components/footer";
import Navbar from "../../components/nav-bar";
import HeroCard from "../../components/hero-card";
import ServiceCard from "../../components/service-card";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [trackingCode, setTrackingCode] = useState('');

    const handleTrackItem = () => {
        let url = `http://localhost/ifex-backend/api/track/trans_track.php`;
        if(trackingCode){
            url += `?tracking_code=${trackingCode}`
            axios.get(url)
            .then(res => {
                if(res.data){
                    window.location = `/track/search/${trackingCode}`;
                }
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <>
            <Navbar />
            <div id="swiper">
                {/* <Swiper
            // install Swiper modules
            breakpoints={{
                // when window width is >= 640px
                0: {
                width: 700,
                slidesPerView: 1,
                },
                // when window width is >= 768px
                600: {
                width: 700,
                slidesPerView: 2,
                },
                900:{
                width:700,
                slidesPerView:3
                },
                1200:{
                width:700,
                slidesPerView:3
                },
                1536:{
                width:700,
                slidesPerView:4
                }
            }}
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={ true}
            allowSlideNext={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            >
            {
            [1].map((e,i)=>{
            return(
                <SwiperSlide key={i}> 
                    <HeroCard />
                </SwiperSlide>
            )
            })    
            }  
                </Swiper> */}
                <HeroCard />
            </div>

            {/* Track and Quote section */}
            <section className="bg-white track-wrapper">
                <div className="skew-wrapper">
                </div>
                <div className="track-content-wrapper w-full">
                    <div className="text-black mt-4 mb-40 text-center">
                        <h1 className="title">Track your Item</h1>
                    </div>

                    {/* tracking section */}
                    <div className="grid lg:grid-cols-2 sm:grid-cols-1 pt-20">
                        <div className="tk-img"></div>
                        <div className="w-full lg:pt-48">
                            <div className="w-10/12 mx-auto">
                                <h1 className="title text-white">Track your Item now</h1>
                                <p className="sub-title text-white">Always know your items location and status with just a few clicks below.</p>
                                <form className="my-3">
                                    <div className="my-8">
                                        <input 
                                        type="text" 
                                        value={trackingCode}
                                        onChange={(e) => setTrackingCode(e.target.value)}
                                        className="w-full rounded-lg bg-white px-3 py-6 broder-2 border-blue-400" 
                                        placeholder="Enter shipment code" />
                                    </div>
                                    <div className="my-8 items-center">
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            handleTrackItem();
                                        }} className="border-2 border-blue-400 text-white rounded-lg py-3 px-12 hover:bg-white hover:py-6 hover:text-blue-400 transition-all">
                                            <span className="text-2xl">track</span>
                                        </button>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* quote section */}
                    <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-20">
                        <div className="w-full lg:pt-48">
                            <div className="mx-auto w-9/12">
                                <h1 className="title text-white">Price Quotation</h1>
                                <p className="sub-title text-white">
                                    With our well curation price calculator, 
                                    <br />
                                    you are sure to get the lowest price possible for your items. 
                                </p>
                                <Link to="/pricing">
                                    <button className="text-blue-400 bg-white my-8 text-xl px-12 py-4 rounded-lg hover:py-7 transition-all">
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
                    <div className="grid lg:grid-cols-3 sm:grid-cols-1">

                        <div>
                            <ServiceCard />
                        </div>
                        <div>
                            <ServiceCard />
                        </div>
                        <div>
                            <ServiceCard />
                        </div>
                    </div>
                </div>
            </div>

            {/* keep in touch */}
            <section id="keepInTouch">
                <div className="grid lg:grid-cols-2 sm:grid-cols-1">
                    <div className="bg-blue-400">
                        <div className="mx-auto w-10/12 pt-28">
                            <div className="text-white">
                                <h1 className="font-bold title" >Keep in touch.</h1>
                                <p className="sub-title">Don't want to miss our exciting news ?</p>
                                <p className="sub-title">Just leave us your contact information and we'll keep you updated !</p>
                            </div>

                            <form className="my-8">
                                <div className="my-6">
                                    <input type="text" className="w-full py-8 px-3 bg-white text-gray-600 rounded-lg" placeholder="First Name" />
                                </div>
                                <div className="my-6">
                                    <input type="text" className="w-full py-8 px-3 bg-white text-gray-600 rounded-lg" placeholder="Last Name" />
                                </div>
                                <div className="my-6">
                                    <input type="text" className="w-full py-8 px-3 bg-white text-gray-600 rounded-lg" placeholder="Email" />
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

            {/* Footer */}
            <section id="footer">
                <Footer />
            </section>
        </>
    )
}

export default Home;