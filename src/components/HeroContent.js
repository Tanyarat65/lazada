import React from 'react'
import { Carousel} from '@material-tailwind/react';
import img1 from '../assets/pictures/heroContent/1.jpg';
import img2 from '../assets/pictures/heroContent/2.jpg';
import img3 from '../assets/pictures/heroContent/3.jpg';
import img4 from '../assets/pictures/heroContent/4.jpg';
import img5 from '../assets/pictures/heroContent/5.jpg';
import img6 from '../assets/pictures/heroContent/6.jpg';

export default function HeroContent() {
    const imgSlice =[
        {id:1,imgSlice:img1},
        {id:2,imgSlice:img2},
        {id:3,imgSlice:img3},
        {id:4,imgSlice:img4},
        {id:5,imgSlice:img5},
        {id:6,imgSlice:img6},
    ]
    return (
    <div className='w-[988px]'>
        <Carousel transition={{ type: 'easeInOut' }} autoplay={true} autoplayDelay={3000} loop={true} className='w-full h-[344px] ml-[200px]' >
        {/* <Carousel transition={{ duration: 0.5 }} autoplay={true} autoplayDelay={3000} loop={true} className='w-full h-[344px] ml-[200px]' > */}
            {imgSlice.map(item=>(
                <div key={item.id} className='h-[344px] w-full cursor-pointer'>
                    <img
                        src={item.imgSlice}
                        alt='pic1'
                        className='h-full w-full'
                    />
                </div>
            ))}
            
        </Carousel> 
    </div>
    )
}
