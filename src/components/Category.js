import React from 'react';
import {FiChevronRight} from 'react-icons/fi';

export default function Category() {
    const falshSale = [
        {id:1,imgFlash:'https://picsum.photos/id/9/200/',detail:'รองเท้าแตะแบบลำลอง'},
        {id:2,imgFlash:'https://picsum.photos/id/20/200/',detail:'รองเท้าแตะแบบลำลอง'},
        {id:3,imgFlash:'https://picsum.photos/id/22/200/',detail:'รองเท้าแตะแบบลำลอง'},
        {id:4,imgFlash:'https://picsum.photos/id/33/200/',detail:'รองเท้าแตะแบบลำลอง'},
        {id:5,imgFlash:'https://picsum.photos/id/51/200/',detail:'รองเท้าแตะแบบลำลอง'},
        {id:6,imgFlash:'https://picsum.photos/id/61/200/',detail:'รองเท้าแตะแบบลำลอง'},
        {id:7,imgFlash:'https://picsum.photos/id/9/200/',detail:'รองเท้าแตะแบบลำลอง'},
        {id:8,imgFlash:'https://picsum.photos/id/20/200/',detail:'รองเท้าแตะแบบลำลอง'},
        {id:9,imgFlash:'https://picsum.photos/id/22/200/',detail:'รองเท้าแตะแบบลำลอง'},
        {id:10,imgFlash:'https://picsum.photos/id/33/200/',detail:'รองเท้าแตะแบบลำลอง'},
        {id:11,imgFlash:'https://picsum.photos/id/51/200/',detail:'รองเท้าแตะแบบลำลอง'},
        {id:12,imgFlash:'https://picsum.photos/id/61/200/',detail:'รองเท้าแตะแบบลำลอง'},
        {id:13,imgFlash:'https://picsum.photos/id/9/200/',detail:'รองเท้าแตะแบบลำลอง'},
        {id:14,imgFlash:'https://picsum.photos/id/20/200/',detail:'รองเท้าแตะแบบลำลอง'},
        {id:15,imgFlash:'https://picsum.photos/id/22/200/',detail:'รองเท้าแตะแบบลำลอง'},
        {id:16,imgFlash:'https://picsum.photos/id/33/200/',detail:'รองเท้าแตะแบบลำลอง'},
    ];

  return (
    <div>
        <label className='text-[#323332] text-2xl py-2'>หมวดหมู่</label>
        <div className='bg-white shadow px-5 py-5'>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-8'>
                {falshSale.map(item => (
                    <div className='hover:shadow-basic'>
                        <img src={item.imgFlash} loading='lazy' alt='imgFlash'/>
                        <div className='text-center'>{item.detail}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
