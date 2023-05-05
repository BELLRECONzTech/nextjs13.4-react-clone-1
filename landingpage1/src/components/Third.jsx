import Image from 'next/image'
import React from 'react'

const Third = () => {
  return (
    
    <div className='h-screen w-full'>
        <div className=''>
            <Image className='absolute'
                src='/vector.png'
                alt=''
                width='500'
                height='200'/>
            <Image className='absolute right-[80px] top-[1800px] '
                src='/element1.png'
                alt=''
                width='200'
                height='200'/>
            <div className='w-full h-screen absolute'>
                <div className='grid grid-cols-3 mx-20 p-20  gap-10'>
                    <div className='bg-white  rounded-2xl px-20 py-20' >
                    <Image 
                        src='/group.png'
                        alt=''
                        width='100'
                        height='100'/>
                        <h1 className='text-2xl mt-10' >Search doctor</h1>
                        <h2 className=' text-gray-600 mt-3'>Choose your doctor from thousands of specialist, general, and trusted hospitals</h2>
                    </div>
                    
                    <div className='bg-white  rounded-2xl px-20 py-20' >
                    <Image 
                        src='/online.png'
                        alt=''
                        width='100'
                        height='100'/>
                        <h1 className='text-2xl mt-10' >Online pharmacy</h1>
                        <h2 className=' text-gray-600 mt-3'>Buy  your medicines with our mobile application with a simple delivery system</h2>
                    </div>

                    <div className='bg-white  rounded-2xl px-20 py-20' >
                    <Image 
                        src='/consultation.png'
                        alt=''
                        width='100'
                        height='100'/>
                        <h1 className='text-2xl mt-10' >Consultation</h1>
                        <h2 className=' text-gray-600 mt-3'>Free consultation with our trusted doctors and get the best recomendations</h2>
                    </div>

                    <div className='bg-white  rounded-2xl px-20 py-20' >
                    <Image 
                        src='/detail.png'
                        alt=''
                        width='100'
                        height='100'/>
                        <h1 className='text-2xl mt-10' >Details info</h1>
                        <h2 className=' text-gray-600 mt-3'>Free consultation with our trusted doctors and get the best recomendations</h2>
                    </div>

                    <div className='bg-white  rounded-2xl px-20 py-20' >
                    <Image 
                        src='/emergency.png'
                        alt=''
                        width='100'
                        height='100'/>
                        <h1 className='text-2xl mt-10' >Emergency care</h1>
                        <h2 className=' text-gray-600 mt-3'>You can get 24/7 urgent care for yourself or your children and your lovely family</h2>
                    </div>

                    <div className='bg-white  rounded-2xl px-20 py-20' >
                    <Image 
                        src='/tracking.png'
                        alt=''
                        width='100'
                        height='100'/>
                        <h1 className='text-2xl mt-6' >Tracking</h1>
                        <h2 className=' text-gray-600 mt-3'>Track and save your medical history and health data </h2>
                    </div>
                </div>
                <div className='w-full h-screen text-center '>
                <button className=' h-14 w-32 text-center border-[2px] rounded-[55px] text-[#458FF6] border-[#458FF6] cursor-pointer '>Learn more</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Third