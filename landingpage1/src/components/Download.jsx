import Image from 'next/image'
import React from 'react'

const Download = () => {
  return (
    
    <div className='w-full h-full m-60  flex md:flex gap-20 mt-20'>
        
        <div className='max-w-[600px] h-auto'>
            <h1 className='font-[36px]'>Download our mobile apps</h1>
            <h2 className='mt-10'>_________</h2>
            <h2 className='mt-10  '>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</h2>
            <button className=' mt-10 h-14 w-32 text-center border-[2px] rounded-[55px] text-[#458FF6] border-[#458FF6] cursor-pointer '>Learn more</button>
        </div>
        <div className='max-w-[600px] h-auto'>
            <Image 
            src="/download.png" 
            alt=""
            width="600" 
            height="600" />
        </div>
    </div>
  )
}

export default Download