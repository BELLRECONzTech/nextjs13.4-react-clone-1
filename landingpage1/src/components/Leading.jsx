import Image from 'next/image'
import React from 'react'

const Leading = () => {
  return (
    <div className='w-full h-full m-44 p-40 flex md:flex gap-20'>
        <div className='max-w-[600px] h-auto'>
            <Image 
            src="/leading.png" 
            alt=""
            width="600"
            height="600" />
        </div>
        <div className='max-w-[600px] h-auto'>
            <h1 className='font-[36px]'>Leading healthcare providers</h1>
            <h2 className='mt-10'>_________</h2>
            <h2 className='mt-10  text-gray-600'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</h2>
            <button className=' mt-10 h-14 w-32 text-center border-[2px] rounded-[55px] text-[#458FF6] border-[#458FF6] cursor-pointer '>Learn more</button>
        </div>
    </div>
  )
}

export default Leading