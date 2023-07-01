import React from 'react';

import availableAppStore from '../assets/pictures/availableAppStore.png'; //หารูปใหม่
import availableGooglePlay from '../assets/pictures/Android-app-on-google-play.png';
import availableAppGallery from '../assets/pictures/exploreOnAppGallery.png';
import lazadaIcon from '../assets/pictures/lazadaIcon.jpeg';

export default function Footer2() {
    return (
        <div className='grid grid-cols-[297px_297px_297px_297px] py-6 text-[#0F136D]'>
            <div className='text-xs'>
                <div className='text-base mb-1'>ศูนย์ดูแลลูกค้า</div>
                <div className='cursor-pointer hover:underline'>ศูนย์ช่วยเหลือ</div>
                <div className='cursor-pointer hover:underline'>การสั่งซื้อสินค้า</div>
                <div className='cursor-pointer hover:underline'>การส่งสินค้า</div>
                <div className='cursor-pointer hover:underline'>นโยบายของสินค้าต่างประเทศ</div>
                <div className='cursor-pointer hover:underline'>การคืนสินค้า</div>
                <div className='cursor-pointer hover:underline'>ติดต่อเรา</div>
                <div className='row-span-4'></div>
            </div>
            <div className='text-xs'>
                <div className='text-base mb-1'>ลาซาด้า</div>
                <div className='cursor-pointer hover:underline'>ประเภท</div>
                <div className='cursor-pointer hover:underline'>เกี่ยวกับลาซาด้า</div>
                <div className='cursor-pointer hover:underline'>Affiliate Program</div>
                <div className='cursor-pointer hover:underline'>ร่วมงานกับเรา</div>
                <div className='cursor-pointer hover:underline'>ข้อตกลงและเงื่อนไข</div>
                <div className='cursor-pointer hover:underline'>นโยบายความเป็นส่วนตัว</div>
                <div className='cursor-pointer hover:underline'>ข่าวประชาสัมพันธ์</div>
                <div className='cursor-pointer hover:underline'>ความปลอดภัยกับลาซาด้า</div>
                <div className='cursor-pointer hover:underline'>สินค้ายอดนิยม</div>
                <div className='cursor-pointer hover:underline'>Intellectual Property Protection</div>
            </div>
            <div className='flex justify-start items-top gap-x-2 pt-5'>
                <img src={lazadaIcon} className='w-[42px] h-[42px] rounded-lg' alt='lazada' />
                <div>
                    <div className='text-[#F36F36] text-base'>Go where your heart beats</div>
                    <div className='text-sm'>Download the App</div>
                </div>
            </div>
            <div className='grid grid-cols-2 pt-5'>
                <img src={availableAppStore} alt='app-store' className='cursor-pointer' />
                <img src={availableAppGallery} alt='app-gallery' className='cursor-pointer' />
                <img src={availableGooglePlay} alt='google-play' className='cursor-pointer' />
            </div>
        </div>
    )
}
