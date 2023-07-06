import React from 'react';
import {FiChevronRight} from 'react-icons/fi';
import logoBrand from '../assets/pictures/logoBrand.jpg';

export default function LazMall() {
    const flashSale = [
        {id:1,imgFlash:'https://picsum.photos/id/21/200/',detail:'CB Cotton',logo:logoBrand},
        {id:2,imgFlash:'https://picsum.photos/id/20/200/',detail:'CB Cotton',logo:logoBrand},
        {id:3,imgFlash:'https://picsum.photos/id/30/200/',detail:'CB Cotton',logo:logoBrand},
        {id:4,imgFlash:'https://picsum.photos/id/21/200/',detail:'CB Cotton',logo:logoBrand},
        {id:5,imgFlash:'https://picsum.photos/id/30/200/',detail:'CB Cotton',logo:logoBrand},
        {id:6,imgFlash:'https://picsum.photos/id/20/200/',detail:'CB Cotton',logo:logoBrand},
    ];

  return (
    <div>
        <div className='flex justify-between items-center'>
            <label className='text-[#323332] text-2xl py-2'>LazMall</label>
            <div className='flex items-center gap-1 text-[#01BFA6]'>
                <a className=' px-2 text-sm'>เลือกซื้อสินค้าต่อ</a>
                <FiChevronRight/>
            </div>
        </div>
        <div className='drop-shadow-md px-5'>
            <div className='grid grid-cols-[188px_188px] justify-center gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
                {flashSale.map(item => (
                    <div className='relative bg-white hover:shadow-basic'>
                        <img src={item.imgFlash} loading='lazy' alt='imgFlash' className='h-[200px] w-full pb-10'/>
                        <img src={item.logo} loading='lazy' alt='imgFlash' className='absolute top-[120px] left-[50px] w-18 h-18 shadow'/>
                        <div className='px-2 py-3 overflow-hidden whitespace-nowrap overflow-ellipsis text-center text-sm'>{item.detail}</div>

                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
