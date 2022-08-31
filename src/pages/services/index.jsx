import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/nav-bar";
import ServiceCard from "../../components/service-card";
import { services } from "../../data/services";

const Services = () => {
    return (
        <>
            <Navbar />
                {/* Services */}
                <div id="service" style={{height: 'max-content'}}>
                    <div className="mx-auto w-9/12 my-12">
                        <div className="my-16">
                            <h1 className="title text-center">Our Services</h1>
                        </div>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                            {
                                services.length > 0 && 
                                services.map((service, index) => {
                                    return <div key={index}>
                                    <ServiceCard title={service.title} description={service.description} />
                                </div>
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default Services;