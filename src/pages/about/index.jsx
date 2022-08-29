import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/nav-bar";

const AboutUs = () => {
    return (
        <>
            <Navbar />
                <div className="bg-[#f5f5f5] w-full h-max py-12">
                    <div className="mx-auto lg:w-10/12">
                        <div className="bg-white rounded-lg p-8 my-8">
                            <h3 className="sub-title text-blue-400">Our Mission</h3>
                            <p className="my-4 text-gray-500">Our mission is to efficiently provide affordable and reliable logistics system for our customers using all our available resources.</p>
                        </div>
                        <div className="bg-white rounded-lg p-8 my-8">
                            <h3 className="sub-title text-blue-400">Our Vision</h3>
                            <p className="my-4 text-gray-500">Our Vision is to use all our available resources to become the largest and most efficient logistics operator world wide.</p>
                        </div>
                        <div className="bg-white rounded-lg p-8 my-8">
                            <h3 className="sub-title text-blue-400">Who We Are</h3>
                            <p className="my-4 text-gray-500">
                             IFEX EXPRESS LIMITED is a courier company based in Nigeria that provides courier and
                             logistics services.Ifex has an efficient mailing and parcel delivery network and an outstanding 
                             haulage and cargo infrastructure making it possible for us to deliver both light and heavy customer 
                             parcels to locations all over Nigeria. At IFEX EXPRESS our customers and our staff are our greatest possession 
                             and we treasure them. As such our customers receive prompt attention
                             while our employees enjoy conducive work environment and equal opportunity irrespective of gender
                            </p>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default AboutUs;