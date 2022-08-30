import React, {useState} from 'react';
import axios from 'axios';

function PricingComp({states}) {
    const [originatingState, setOriginatingState] = useState('');
    const [originatingAddress, setOriginatingAddress] = useState('');
    const [destinationState, setDestinationState] = useState('');
    const [destinationAddress, setDestinationAddress] = useState('');
    const [category, setCategory] = useState('DOCUMENTS');
    const [weight, setWeight] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    const calculatePrice = (data) => {
        let total = 0;
        if(data){
            const {max_weight, base_price, incremental_charge} = data;
            total += base_price;
            if(weight > max_weight){
                total += ((incremental_charge * (weight - max_weight)))
            }
        }
        return setTotalPrice(total);
    }
    
    const handleEstimatePrice = () => {
        setLoading(true);
        const url = `http://localhost/ifex-backend/api/pricing/get_pricing.php`;
        const payload = {
            state_id: originatingState,
            category
        }
        axios.post(url, payload)
        .then(res => {
            setLoading(false);
            if(res.data.status){
                calculatePrice(res.data.payload);
            }
        })
        .catch(err => {
            setLoading(false);
            console.log(err);
        })
    }

  return (
    <>
          <div className="my-20 mx-auto rounded-lg p-6 shadow-lg bg-gray-50 lg:w-8/12 md:w-9/12 sm:w-11/12 h-max">
                <div>
                    <div className='mt-6 mb-8'>
                        <h1 className="sub-title text-center">
                            <b>Price Calculator</b>
                        </h1>
                    </div>

                    <div className='justify-center'>
                        <form>
                            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                                <div className='mx-2 my-3'>
                                    <label className='block' htmlFor="originatingAddress">Originating Address</label>
                                    <input 
                                        type="text" 
                                        name='originatingAddress' 
                                        className='bg-white px-4 py-4 rounded-lg w-full'
                                        value={originatingAddress}
                                        onChange={(e) => setOriginatingAddress(e.target.value)}
                                    />
                                </div>
                                <div className='mx-2 my-3'>
                                    <label className='block' htmlFor="originatingState">Originating State</label>
                                    
                                    <select 
                                        name="originatingState"
                                        className='bg-white px-4 py-4 rounded-lg w-full'
                                        value={originatingState}
                                        onChange={(e) => setOriginatingState(e.target.value)}
                                    >
                                        { states && 
                                            states.map((state, idx) => {
                                                return <option key={idx} value={state.id}>{state.name}</option>
                                            })
                                        }
                                    </select>
                                </div>

                                <div className='mx-2 my-3'>
                                    <label className='block' htmlFor="destinationAddress">Destination Address</label>
                                    <input 
                                        type="text" 
                                        name='destinationAddress' 
                                        className='bg-white px-4 py-4 rounded-lg w-full'
                                        value={destinationAddress}
                                        onChange={(e) => setDestinationAddress(e.target.value)}
                                    />
                                </div>
                                <div className='mx-2 my-3'>
                                    <label className='block' htmlFor="destinationState">Destination State</label>
                                    <select 
                                        name="destinationState"
                                        className='bg-white px-4 py-4 rounded-lg w-full'
                                        value={destinationState}
                                        onChange={(e) => setDestinationState(e.target.value)}
                                    >
                                        { states && 
                                            states.map((state, idx) => {
                                                return <option key={idx} value={state.id}>{state.name}</option>
                                            })
                                        }
                                    </select>
                                </div>

                                <div className='mx-2 my-3'>
                                    <label className='block' htmlFor="category">Category</label>
                                    <select 
                                        name="category" 
                                        className='bg-white px-4 py-4 rounded-lg w-full'
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option value="">Select category</option>
                                        <option value="DOCUMENTS">Documents</option>
                                        <option value="PARCEL">Parcel</option>
                                        <option value="CARGO">Cargo</option>
                                    </select>
                                </div>
                                <div className='mx-2 my-3'>
                                    <label className='block' htmlFor="weight">Weight(kg)</label>
                                    <input 
                                        type="number" 
                                        name='weight' 
                                        className='bg-white px-4 py-4 rounded-lg w-full'
                                        value={weight}
                                        min="1"
                                        onChange={(e) => setWeight(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className='flex justify-end'>
                                <button 
                                    className='bg-gray-600 text-white p-4 rounded-lg'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleEstimatePrice();
                                    }}
                                >
                                    { loading ? 'loading...' : 'Estimate' }
                                </button>
                            </div>
                        </form>
                    </div>

                    <div>
                        <p className="sub-tile">
                            Total price(NGN):  
                            <span className='text-xl'>
                                <b>{ loading ? 'loading...' : totalPrice }</b>
                            </span>
                        </p>
                    </div>

                    
                </div>
            </div>
    </>

  )
}

export default PricingComp;