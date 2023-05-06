import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full md:h-[40vh] bg-gradient-to-t from-blue-700 to-cyan-400'>
        <div className='flex flex-rows bg-green justify-center h-full gap-40 '>
            <div className='pt-24 w-[51vh]'>
                <Image 
                src="/Trafalgar.png" 
                alt=""
                width={150}
                height={50} />
                <h2 className='text-white pt-4   font-light'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</h2>
                <h2 className='text-white pt-8   font-light'>©Trafalgar PTY LTD 2020. All rights reserved</h2>
            </div>
            <div className='pt-24'>
                <ul className='cursor-pointer '>
                    <li className='text-2xl font-bold text-white '>Company</li>
                    <li className='text-white pt-4'>About</li>
                    <li className='text-white pt-2'>Testimonials</li>
                    <li className='text-white pt-2'>App</li>
                    <li className='text-white pt-2'>Find a doctor</li>
                </ul>
            </div>
            <div className='pt-24'>
                <ul className='cursor-pointer '>
                    <li className='text-2xl font-bold text-white '>Region</li>
                    <li className='text-white pt-4'>Indonesia</li>
                    <li className='text-white pt-2'>Singapore</li>
                    <li className='text-white pt-2'>Hongkong</li>
                    <li className='text-white pt-2'>Canada</li>
                </ul>
            </div>
            <div className='pt-24'>
                <ul className='cursor-pointer '>
                    <li className='text-2xl font-bold text-white '>Help</li>
                    <li className='text-white pt-4'>Help center</li>
                    <li className='text-white pt-2'>Contract support</li>
                    <li className='text-white pt-2'>Instruction</li>
                    <li className='text-white pt-2'>How it works</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer