import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 z-[100] bg-white '>
        <div className='flex justify-between items-center w-full h-full px-20 2xl:px-60'>
            <Image className='cursor-pointer '
            src="/Trafalgar.png"
            alt="/"
            width="125"
            height="50"/>
            <div>
                <ul className='md:flex hidden'>
                    <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer '>Home</li>
                    <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>Find a doctor</li>
                    <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>Apps</li>
                    <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>Testimonials</li>
                    <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>About us</li>
                </ul>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar