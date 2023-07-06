import React,{useState,useEffect} from 'react'

export default function FlashSale() {
    const falshSale = [
        {id:1,imgFlash:'https://picsum.photos/id/21/200/',detail:'มีสิทธิรับ❗❗ [วันที่ 1 ก.ค. 66] HAIER เครื่องปรับอากาศ ติดผนัง 9489 BTU [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]',price:389,fullPrice:'฿618',discroud:'-56%'},
        {id:2,imgFlash:'https://picsum.photos/id/20/200/',detail:'มีสิทธิรับ❗❗ [วันที่ 1 ก.ค. 66] HAIER เครื่องปรับอากาศ ติดผนัง 9489 BTU [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]',price:389,fullPrice:'฿618',discroud:'-56%'},
        {id:3,imgFlash:'https://picsum.photos/id/30/200/',detail:'มีสิทธิรับ❗❗ [วันที่ 1 ก.ค. 66] HAIER เครื่องปรับอากาศ ติดผนัง 9489 BTU [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]',price:389,fullPrice:'฿618',discroud:'-56%'},
        {id:4,imgFlash:'https://picsum.photos/id/21/200/',detail:'มีสิทธิรับ❗❗ [วันที่ 1 ก.ค. 66] HAIER เครื่องปรับอากาศ ติดผนัง 9489 BTU [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]',price:389,fullPrice:'฿618',discroud:'-56%'},
        {id:5,imgFlash:'https://picsum.photos/id/20/200/',detail:'มีสิทธิรับ❗❗ [วันที่ 1 ก.ค. 66] HAIER เครื่องปรับอากาศ ติดผนัง 9489 BTU [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]',price:389,fullPrice:'฿618',discroud:'-56%'},
        {id:6,imgFlash:'https://picsum.photos/id/30/200/',detail:'มีสิทธิรับ❗❗ [วันที่ 1 ก.ค. 66] HAIER เครื่องปรับอากาศ ติดผนัง 9489 BTU [ONEDERFUL WALLET - 1 สิทธิ์/ลูกค้า]',price:389,fullPrice:'฿618',discroud:'-56%'},
    ];

    //-----CountDown-----
    const [remainingTime, setRemainingTime] = useState(5800); // ตั้งค่าเวลาเริ่มต้นให้เป็น 180 วินาที (3 นาที)
    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
        }, []);

    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;
    // console.log(remainingTime);
    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);

  return (
    <div>
        <label className='text-[#323332] text-2xl py-14'>FlashSale</label>
        <div className='bg-white shadow px-5'>
            <div className='grid grid-cols-1 justify-between items-center py-5 md:grid-cols-[500px_200px]'>
                <div className='flex items-center gap-3'>
                    <label className='text-sm text-[#F57224]'>ขณะนี้ลดราคาอยู่</label>
                    <label className='text-sm text-black pl-16'>จะสิ้นสุดใน</label>
                    <div className='flex justify-center items-center border rounded w-10 h-10 bg-[#FF0000] text-white '>{hours.toString().padStart(2, '0')}</div>:
                    <div className='flex justify-center items-center border rounded w-10 h-10 bg-[#FF0000] text-white '>{minutes.toString().padStart(2, '0')}</div>:
                    <div className='flex justify-center items-center border rounded w-10 h-10 bg-[#FF0000] text-white '>{seconds.toString().padStart(2, '0')}</div>
                </div>
                <button className='border border-[#F57224] px-2 py-1 text-[#F57224]'>ช้อปสินค้าทั้งหมด</button>
            </div>
            <div className='bg-[#b3b3b3] w-full h-[1px] mb-2'/>
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6'>
                {falshSale.map(item => (
                    <div className=' shadow-blue-gray-50 hover:shadow-basic'>
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
