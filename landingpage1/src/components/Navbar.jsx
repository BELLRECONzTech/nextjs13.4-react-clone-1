import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 z-[100] bg-white '>
        <div className='flex justify-between items-center w-full h-full px-20 2xl:px-60'>
        <Link href="/" >
            <Image className='cursor-pointer '
            src="/Trafalgar.png"
            alt="/"
            width="125"
            height="50"/>
            </Link>
            <div>
            
                <ul className='md:flex hidden ' >
                    <Link href="/" >
                    <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer font-bold '>Home</li>
                    </Link>
                    <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>Find a doctor</li>
                    <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>Apps</li>
                    <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>Testimonials</li>
                    <Link href="/#about" >
                    <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>About us</li>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar