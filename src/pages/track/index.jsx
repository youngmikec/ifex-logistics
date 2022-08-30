import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

import Footer from "../../components/footer";
import Navbar from "../../components/nav-bar";
import TrackingDetail from "../../components/tracking-detail";
import ErrorComponent from "../../components/error-component";

const TrackItem = () => {
    const { tracking_code } = useParams();
    const [trackingDetail, setTrackingDetail] = useState({});
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleTrackItem = () => {
        setLoading(true);
        let url = `http://localhost/ifex-backend/api/track/trans_track.php`;
        if(tracking_code){
            url += `?tracking_code=${tracking_code}`
            axios.get(url)
            .then(res => {
                console.log(res.data);
                setLoading(false);
                setIsError(false);
                res.data.status && setTrackingDetail(res.data.payload);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                setIsError(true);
            });
        }
    }

    useEffect(() => {
        handleTrackItem();
    }, [tracking_code]);

    return(
        <>
            <Navbar />
            {/* <div className="w-full h-full bg-gray-50" style={{height: "100%"}}>
            </div> */}
                { loading && <h1 className="sub-title">Loading ...</h1>}
                {
                    !loading && 
                    <div className="lg:w-9/12 sm:w-10/12 mx-auto">
                        {
                            isError ? <ErrorComponent /> : trackingDetail && <TrackingDetail trackingDetail={trackingDetail} />
                        }   
                    </div> 
                }
                   
            <Footer />
        </>
    )
}

export default TrackItem;