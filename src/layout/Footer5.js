import React from 'react'

import indoFlag from '../assets/pictures/flag/Indonesia_flag_large.png';
import malaysiaFlag from '../assets/pictures/flag/malaysiaFlag.png';
import philippineFlag from '../assets/pictures/flag/philippineFlag.png';
import singaporeFlag from '../assets/pictures/flag/singaporeFlag.avif';
import thailandFlag from '../assets/pictures/flag/thailandFlag.webp';
import vietnamFlag from '../assets/pictures/flag/vietnamFlag.webp';

import facebook from '../assets/pictures/footer/fb.png';
import linkedIn from '../assets/pictures/footer/in.png';
import youtube from '../assets/pictures/footer/yt.png';
import instragram from '../assets/pictures/footer/isg.png';
import twitter from '../assets/pictures/footer/tw.png';
import tiktok from '../assets/pictures/footer/tt.png';
import lazBlog from '../assets/pictures/footer/laz.png';

export default function Footer5() {
    return (
        <div className='grid grid-cols-1 py-10 bg-white md:grid-cols-[594px] lg:grid-cols-[594px_594px]'>
            <div>
                <div className='mb-1'>Lazada Southeast Asia</div>
                <div className='flex justify-start items-start gap-x-1'>
                    <div className='border border-[#9999] rounded-full overflow-hidden'><img src={indoFlag} alt='indoFlag' className='w-[34px] h-[34px]' /></div>
                    <div className='border border-[#9999] rounded-full overflow-hidden'><img src={malaysiaFlag} alt='malaysiaFlag' className='w-[34px] h-[34px]' /></div>
                    <div className='border border-[#9999] rounded-full overflow-hidden'><img src={philippineFlag} alt='philippineFlag' className='w-[34px] h-[34px]' /></div>
                    <div className='border border-[#9999] rounded-full overflow-hidden'><img src={singaporeFlag} alt='singaporeFlag' className='w-[34px] h-[34px]' /></div>
                    <div className='border border-[#9999] rounded-full overflow-hidden'><img src={thailandFlag} alt='thailandFlag' className='w-[34px] h-[34px]' /></div>
                    <div className='border border-[#9999] rounded-full overflow-hidden'><img src={vietnamFlag} alt='vietnamFlag' className='w-[34px] h-[34px]' /></div>
                </div>
            </div>
            <div>
                <div className='flex flex-col justify-between items-start md:flex-row'>
                    <div>
                        <div className='mb-1 pt-10  md:pt-0'>Follow Us</div>
                        <div className='flex justify-start items-start gap-x-1'>
                            <div><img src={facebook} alt='facebook' className='w-[34px] h-[34px]' /></div>
                            <div><img src={linkedIn} alt='linkedIn' className='w-[34px] h-[34px]' /></div>
                            <div><img src={youtube} alt='youtube' className='w-[34px] h-[34px]' /></div>
                            <div><img src={instragram} alt='instragram' className='w-[34px] h-[34px]' /></div>
                            <div><img src={twitter} alt='twitter' className='w-[34px] h-[34px]' /></div>
                            <div><img src={tiktok} alt='tiktok' className='w-[34px] h-[34px]' /></div>
                            <div><img src={lazBlog} alt='lazBlog' className='w-[34px] h-[34px]' /></div>
                        </div>
                    </div>
                    <div  className='pt-10 md:pt-0'>© Lazada 2023</div>
                </div>
            </div>
        </div>
    )
}
