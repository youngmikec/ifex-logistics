import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Footer from '../../components/footer';
import Navbar from '../../components/nav-bar';
import BranchCard from '../../components/branch-card';

const Branches = () => {
    const [branches, setBranches] = useState([]);

    const fetchBranches = () => {
        const url = `https://www.ifexexpressnig.com/ifex-backend/api/branches/read.php`;
        axios.get(url).then(res => {
            setBranches(res.data.payload);
        }).catch(err => console.log(err));
    }

    useEffect(() => {
        fetchBranches();
    }, []);
    return (
        <>
            <Navbar />
                <div className="w-full h-full bg-[#f5f5f5]">
                    <div className="lg:w-10/12 mx-auto grid lg:grid-cols-2 sm:grid-cols-1">
                        { 
                            branches.length > 0 && branches.map((branch, idx) => {
                                return <div key={idx}>
                                    <BranchCard branch={branch} />
                                </div>
                            })
                        }
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default Branches;