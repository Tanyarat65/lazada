import React from 'react';
import { IoMdClose } from 'react-icons/io';
import brander from '../assets/pictures/brander.jpg';

export default function BranderHead() {
    return (
        <div className='bg-[#01BFA6] min-w-[1280px] h-22'>
            <div className='flex justify-center items-center w-full'>
                <img src={brander} alt='lazada-brander' className='w-[80%] cursor-pointer' />
                <IoMdClose className='text-white text-2xl font-bold' />
            </div>
        </div>
    )
}
