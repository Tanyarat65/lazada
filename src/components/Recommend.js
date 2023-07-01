import React from 'react';
import {FiChevronRight} from 'react-icons/fi';

export default function Recommend() {
    const falshSale = [
        {id:1,imgFlash:'https://picsum.photos/id/9/200/',detail:'มีสิทธิรับ❗❗ [วันที่ 1 ก.ค. 66] HAIER เครื่องปรับอากาศ ติดผนัง 9489 BTU [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]',price:389,fullPrice:'฿618',discroud:'-56%'},
        {id:2,imgFlash:'https://picsum.photos/id/20/200/',detail:'มีสิทธิรับ❗❗ [วันที่ 1 ก.ค. 66] HAIER เครื่องปรับอากาศ ติดผนัง 9489 BTU [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]',price:389,fullPrice:'฿618',discroud:'-56%'},
        {id:3,imgFlash:'https://picsum.photos/id/22/200/',detail:'มีสิทธิรับ❗❗ [วันที่ 1 ก.ค. 66] HAIER เครื่องปรับอากาศ ติดผนัง 9489 BTU [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]',price:389,fullPrice:'฿618',discroud:'-56%'},
        {id:4,imgFlash:'https://picsum.photos/id/33/200/',detail:'มีสิทธิรับ❗❗ [วันที่ 1 ก.ค. 66] HAIER เครื่องปรับอากาศ ติดผนัง 9489 BTU [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]',price:389,fullPrice:'฿618',discroud:'-56%'},
        {id:5,imgFlash:'https://picsum.photos/id/51/200/',detail:'มีสิทธิรับ❗❗ [วันที่ 1 ก.ค. 66] HAIER เครื่องปรับอากาศ ติดผนัง 9489 BTU [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]',price:389,fullPrice:'฿618',discroud:'-56%'},
        {id:6,imgFlash:'https://picsum.photos/id/61/200/',detail:'มีสิทธิรับ❗❗ [วันที่ 1 ก.ค. 66] HAIER เครื่องปรับอากาศ ติดผนัง 9489 BTU [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]',price:389,fullPrice:'฿618',discroud:'-56%'},
        {id:7,imgFlash:'https://picsum.photos/id/9/200/',detail:'มีสิทธิรับ❗❗ [วันที่ 1 ก.ค. 66] HAIER เครื่องปรับอากาศ ติดผนัง 9489 BTU [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]',price:389,fullPrice:'฿618',discroud:'-56%'},
        {id:8,imgFlash:'https://picsum.photos/id/20/200/',detail:'มีสิทธิรับ❗❗ [วันที่ 1 ก.ค. 66] HAIER เครื่องปรับอากาศ ติดผนัง 9489 BTU [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]',price:389,fullPrice:'฿618',discroud:'-56%'},
        {id:9,imgFlash:'https://picsum.photos/id/22/200/',detail:'มีสิทธิรับ❗❗ [วันที่ 1 ก.ค. 66] HAIER เครื่องปรับอากาศ ติดผนัง 9489 BTU [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]',price:389,fullPrice:'฿618',discroud:'-56%'},
        {id:10,imgFlash:'https://picsum.photos/id/33/200/',detail:'มีสิทธิรับ❗❗ [วันที่ 1 ก.ค. 66] HAIER เครื่องปรับอากาศ ติดผนัง 9489 BTU [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]',price:389,fullPrice:'฿618',discroud:'-56%'},
        {id:11,imgFlash:'https://picsum.photos/id/51/200/',detail:'มีสิทธิรับ❗❗ [วันที่ 1 ก.ค. 66] HAIER เครื่องปรับอากาศ ติดผนัง 9489 BTU [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]',price:389,fullPrice:'฿618',discroud:'-56%'},
        {id:12,imgFlash:'https://picsum.photos/id/61/200/',detail:'มีสิทธิรับ❗❗ [วันที่ 1 ก.ค. 66] HAIER เครื่องปรับอากาศ ติดผนัง 9489 BTU [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]',price:389,fullPrice:'฿618',discroud:'-56%'},
    ];

  return (
    <div>
        <label className='text-[#323332] text-2xl py-2'>สินค้าเพื่อคุณโดยเฉพาะ</label>
        <div className='bg-white shadow px-5 py-3'>
            <div className='grid grid-cols-[188px_188px] gap-4 md:grid-cols-[188px_188px_188px] lg:grid-cols-[188px_188px_188px_188px_188px_188px] xl:grid-cols-6'>
                {falshSale.map(item => (
                    <div className='hover:shadow-basic'>
                        <img src={item.imgFlash} loading='lazy' alt='imgFlash'/>
                        <div className='overflow-hidden whitespace-nowrap overflow-ellipsis'>{item.detail}</div>
                        <div className='text-[#F57224] text-lg'>฿{item.price}</div>
                        <label className='text-[#777777] text-sm line-through'>{item.fullPrice}</label>
                        <label className='text-black text-sm pl-3'>{item.discroud}</label>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
