import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';

function WhatsappButton() {
    const url = `https://api.whatsapp.com/send?phone=2348108816975`;
  return (
    <>
        <div className='fixed bottom-6 right-2'>
            <div className='rounded-full p-4 bg-green-600 hover:bg-green-800'>
                <a href={url} target="_blank" rel='noreferrer' className='text-3xl text-white'>
                    <BsWhatsapp />
                </a>
            </div>
        </div>
    </>
  )
}

export default WhatsappButton;