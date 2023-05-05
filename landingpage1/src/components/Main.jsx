import Image from 'next/image'
import React from 'react'

const Main = () => {
  return (
    <div>
        <div className='md:flex'>
            <Image className='absolute opacity-80 my-40 '
            src='/element.png'
            alt=''
            width='131'
            height='115'/>
            <div className='w-full h-screen'>
            <div className='md:flex max-w-[550px] flex-col mt-96 ml-60 
            '>
            <h1 className='mb-10 '>Virtual healthcare for you</h1>
            <h2 className='text-gray-600'>Trafalgar provides progressive, and affordable 
healthcare, accessible on mobile and online 
for everyone</h2>
            <button className=' max-w-[175px] px-4 py-4  mr-8 bg-[#458FF6] rounded-[55px] text-white mt-10'>Consult today</button>
            
            <div className='absolute top-40 right-80 '>
                <Image
                src='/traheader.png'
                alt=''
                width='693'
                height='598'/>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Main