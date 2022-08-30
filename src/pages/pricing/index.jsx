import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Footer from '../../components/footer';
import Navbar from '../../components/nav-bar';
import PricingComp from '../../components/pricing-component';

const Pricing = () => {
    const [states, setStates] = useState([]);

    const handleFetchStates = () => {
        const url = `http://localhost/ifex-backend/api/states/read.php`;
        axios.get(url)
        .then(res => {
            console.log('states', res);
            setStates(res.data.payload);
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        handleFetchStates();
    }, [])
    return (
        <>
            <Navbar />
                <div className="lg:w-9/12 sm:w-10/12 mx-auto">
                    <PricingComp states={states} />
                </div>
            <Footer />
        </>
    )
}

export default Pricing;