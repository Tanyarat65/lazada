import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Header() {
    const menu = [
        {id:1, name:'SAVE MORE ON APP', color:'#0F1568', href:''},
        {id:2, name:'SELL ON LAZADA', color:'#0F1568', href:''},
        {id:3, name:'CUSTOMER CARE', color:'#9E9E9E', href:''},
        {id:4, name:'TRACK MY ORDER', color:'#9E9E9E', href:''},
        {id:5, name:'LOGIN', color:'#9E9E9E', href:''},
        {id:6, name:'SIGNUP', color:'#9E9E9E', href:''},
        {id:7, name:'เปลี่ยนภาษา', color:'#9E9E9E', href:''},
    ]
    return (
        <div className='flex gap-5 justify-end items-center bg-[#F7F7F7] h-8 text-xs  px-[10%] min-w-[1188px]'>
            {menu.map(item => (
                <div className='mx-3' key={item.id} style={{ color: item.color }}>
                    {item.name}
                </div>
            ))}
        </div>
    )
}
