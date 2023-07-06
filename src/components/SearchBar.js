import React from 'react'
import {BiSearchAlt2, BiCart} from 'react-icons/bi'
import lazadaSearch from '../assets/pictures/search/lazadaSearch.png'
import newCustomer from '../assets/pictures/search/newcustomer.jpg'

export default function SearchBar() {
  return (
    <div className='grid grid-cols-2 items-center bg-white pt-3 pb-8 md:grid-cols-3'>
        <img src={lazadaSearch} alt='' className='w-[127px] h-[40px]'/>
        <div className='flex h-[45px]'>
            <input className='bg-[#EFF0F5] w-full pl-5 rounded-sm' placeholder='ค้นหาในลาซาด้า'/>
            <div className='relative bg-[#F57224] w-14 h-full flex justify-center items-center'>
                <BiSearchAlt2 className='absolute text-2xl text-white'/>
            </div>
        </div>
        <div className='flex justify-between items-center ml-5 w-full'>
            <BiCart className='text-black text-[35px]'/>
            <img src={newCustomer} alt='' className='w-[188px] h-[45px]'/>
        </div>
    </div>
  )
}
