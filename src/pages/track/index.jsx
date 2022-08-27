import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/nav-bar";
import TrackingDetail from "../../components/tracking-detail";

const TrackItem = () => {
    return(
        <>
            <Navbar />
            {/* <div className="w-full h-full bg-gray-50" style={{height: "100%"}}>
            </div> */}
                <div className="lg:w-9/12 sm:w-10/12 mx-auto">
                    <TrackingDetail />
                </div>    
            <Footer />
        </>
    )
}

export default TrackItem;