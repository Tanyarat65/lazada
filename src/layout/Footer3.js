import React from 'react';

import cashOnDelivery from '../assets/pictures/cashOnDelivery.jpg';
import visaSmallIcon from '../assets/pictures/visaSmallIcon.jpg';
import masterCardSmallIcon from '../assets/pictures/masterCardSmallIcon.jpg';
import jcbSmallIcon from '../assets/pictures/jcbSmallIcon.jpg';

import lazadaLogistic from '../assets/pictures/delivery/lazadaLogistic.png';
import flashExpress from '../assets/pictures/delivery/flashExpress.png';
import kerryExpress from '../assets/pictures/delivery/kerryExpress.png';
import ninjaVan from '../assets/pictures/delivery/ninjaVan.png';
import bestExpress from '../assets/pictures/delivery/bestExpress.png';
import thailandPost from '../assets/pictures/delivery/thailandPost.png';
import tpLogistic from '../assets/pictures/delivery/tpLogistic.png';
import giztixExpress from '../assets/pictures/delivery/giztixExpress.png';
import nimExpress from '../assets/pictures/delivery/nimExpress.png'

import iso from '../assets/pictures/verify/iso.png';
import pciDss from '../assets/pictures/verify/pciDss.png';

export default function Footer3() {
    return (
        <div className='bg-white py-[22px]'>
            <div className='grid grid-cols-[594px_297px_297px] mb-[15px]'>
                <div>วิธีการชำระเงิน</div>
                <div>Delivery Services</div>
                <div>Verified by</div>
            </div>

            <div className='grid grid-cols-[594px_594px]'>
                <div className='grid grid-cols-1'>
                    <div className='flex justify-start items-start gap-x-[39px]'>
                        <img src={cashOnDelivery} alt='cash on delivery' className='w-[90px] select-none pointer-events-none' />
                        <img src={visaSmallIcon} alt='visa' className='w-[53px] h-[39px] select-none pointer-events-none' />
                        <img src={masterCardSmallIcon} alt='master card' className='w-[53px] h-[39px] select-none pointer-events-none' />
                        <img src={jcbSmallIcon} alt='JCB' className='w-[53px] h-[39px] select-none pointer-events-none' />

                    </div>
                </div>
                <div className='grid grid-cols-[297px_297px]'>
                    <div className='grid grid-cols-[297px]'>
                        <div className='grid grid-cols-[96px_96px_96px]'>
                            <img src={lazadaLogistic} alt='lazada' />
                            <img src={flashExpress} alt='flash' />
                            <img src={kerryExpress} alt='kerry' />
                            <img src={ninjaVan} alt='ninja van' />
                            <img src={bestExpress} alt='best' />
                            <img src={thailandPost} alt='ไปรษณีย์ไทย' />
                            <img src={tpLogistic} alt='TP' />
                            <img src={giztixExpress} alt='GizTix' />
                            <img src={nimExpress} alt='nim' />
                        </div>
                    </div>
                    <div className='grid grid-cols-[297px]'>
                        <div className='grid grid-cols-[96px_96px_96px] gap-x-[7px]'>
                            <img src={iso} alt='iso' className='cursor-pointer' />
                            <img src={pciDss} className='w-[92px] cursor-pointer' alt='PCIDSS' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
