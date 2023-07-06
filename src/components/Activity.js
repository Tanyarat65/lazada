import React from 'react'
import lasMall from '../assets/pictures/activity/lazMall.png'
import coupon  from '../assets/pictures/activity/coupon.png'
import topUp  from '../assets/pictures/activity/topUp.png'
import blog  from '../assets/pictures/activity/blog.png'
import advice  from '../assets/pictures/activity/advice.png'

export default function Activity() {
    const activityButton = [
        {id:1,name:'LazMall', icon:lasMall},
        {id:2,name:'คูปองลดเพิ่ม', icon:coupon},
        {id:3,name:'เติมเงิน&ดีลอาหาร', icon:topUp},
        {id:4,name:'LazBlog', icon:blog},
        {id:5,name:'ร้านค้าแนะนำ', icon:advice},
    ];
    return (
        <div className='grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-5 gap-5 px-6 items-center'>
            {activityButton.map(item => (
                <div key={item.id} className='flex justify-center items-center pl-3 py-3 gap-4 shadow rounded-full bg-white w-auto cursor-pointer'>
                    <img src={item.icon} alt={item.name} className='w-8 h-8'/>
                    <div>{item.name}</div>
                </div>
            ))}
        </div>
    )
}