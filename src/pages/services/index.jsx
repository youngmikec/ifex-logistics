import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/nav-bar";
import ServiceCard from "../../components/service-card";

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
            <Footer />
        </>
    )
}

export default Services;