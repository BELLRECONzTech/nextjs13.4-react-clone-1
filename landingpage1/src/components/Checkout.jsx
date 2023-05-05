import Image from 'next/image'
import React from 'react'

const Checkout = () => {
  return (
    <div className='w-full h-screen'>
        <div className='flex flex-col items-center '>
            <h1 className=''>Check out our latest article</h1>
            <h2 className='mt-10'>__________</h2>
        </div>
        <div className=' gap-10 bg-red-300 m-40 p-10' >
                <div className='w-[300px] rounded-[55px] bg-white'>
                    <div>
                    <Image className=' '
                    src="/image 2.png" 
                    alt=""
                    width="300"
                    height="300" />
                    <h1 className='text-[21px] '>Disease detection, check up in the laboratory</h1>
                    <h2>In this case, the role of the health laboratory is very important to do a disease detection...</h2>
                    </div>
                    <div>
                    <Image className=' '
                    src="/image 2.png" 
                    alt=""
                    width="300"
                    height="300" />
                    <h1 className='text-[21px] '>Disease detection, check up in the laboratory</h1>
                    <h2>In this case, the role of the health laboratory is very important to do a disease detection...</h2>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout