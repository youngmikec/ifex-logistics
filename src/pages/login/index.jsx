import React, { useState } from 'react';
import axios from 'axios';

import logo from  '../../assets/images/ifex-logo.png';
import './style.css';

const Login = () => {
    const [email, setEmail] = useState({value: '', error: false});
    const [password, setPassword] = useState({value: '', error: false});

    const inputCheck = () => {
        let result = true;
        if(email.value === '' || undefined || null){
            setEmail({...email, error: true});
            result = false;
        }
        if(password.value === '' || undefined || null){
            setPassword({...password, error: true});
            result = false;
        }
        return result;
    }

    const handleSubmit = () => {
        if(inputCheck()){
            console.log('submitted');
            const payload = { email: email.value, password: password.value };
            const url = `http://localhost/ifex-backend/api/employee/login.php`;
            axios.post(url, payload)
            .then(res => {
                const {status, payload} = res.data;
                if(status){
                    localStorage.setItem('expiresIn', payload.expiresIn);
                    window.location = `/admin/dashboard`;
                }
            })
            .catch(err => console.log(err));
        }
        return;
    }
    return (
        <>
            <div className='bg-blue-400 wrapper'>
                <div className="flex justify-center">

                    <div className="my-6 bg-white rounded-lg mx-auto lg:w-5/12 sm:w-6/12 lg:px-20 sm:px-12 py-6">
                        <div className='flex justify-center'>
                            <img src={logo} alt="logo" />
                        </div>

                        <h1 className='text-blue-400 text-center my-6 text-3xl'><b>Welcome! Please Login!</b></h1>

                        <div className=''>
                            <form>
                                <div className='my-6'>
                                    <input 
                                        className='px-6 py-2 rounded-lg w-full bg-gray-50' 
                                        type="text" 
                                        placeholder='email'
                                        value={email.value}
                                        onChange={(e) => setEmail({...email, value: e.target.value})} 
                                    />
                                </div>
                                <div className='my-6'>
                                    <input 
                                        className='px-6 py-2 rounded-lg w-full bg-gray-50' 
                                        type="password" 
                                        placeholder='****' 
                                        value={password.value}
                                        onChange={(e) => setPassword({...password, value: e.target.value})}
                                    />
                                </div>
                                <div className='my-6 text-center'>
                                    <button 
                                        className='bg-blue-400 text-white px-12 py-3 rounded-lg'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleSubmit();
                                        }}
                                    >Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;