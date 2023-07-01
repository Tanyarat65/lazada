import React from 'react';

import lazadaGift from '../assets/pictures/lazada-e-gift-card.jpeg';
import citiCard from '../assets/pictures/citi-card.jpeg';
import masterCard from '../assets/pictures/master-card.jpeg';

export default function Footer() {
    return (
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
            <img src={lazadaGift} className='w-full h-auto cursor-pointer' alt='lazadaGift' />
            <img src={citiCard} className='w-full h-auto cursor-pointer' alt='citiCard' />
            <img src={masterCard} className='w-full h-auto cursor-pointer col-span-1 sm:col-span-2 sm:h-[180px] md:col-span-1 md:h-auto' alt='masterCard' />
        </div>
    )
}
