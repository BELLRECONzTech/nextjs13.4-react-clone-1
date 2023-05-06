import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Checkout = () => {
  return (
    <div className='w-full h-screen'>
      <div className='absolute ml-60 mt-48 opacity-70 z-[-100]  '>
        <Image 
        src="/element2.png" 
        alt=""
        width={300}
        height={300} />
      </div>
      <div className='absolute right-0 mt-20 '>
      <Image 
        src="/vector2.png" 
        alt=""
        width={500}
        height={500} />
      </div>
        <div className='flex flex-col items-center '>
            <h1 className=''>Check out our latest article</h1>
            <h2 className='mt-10'>__________</h2>
        </div>
        <div className=' gap-10  m-40 px-40 ' >
                <div className='max-w-full justify-center flex gap-10'>
                    <div className='w-[300px] h-[300px] '>
                    <Image className='rounded-[55px]   rounded-b-none z-[100] '
                    src="/image 2.png" 
                    alt=""
                    width="300"
                    height="300" />
                    <h1 className='text-2xl mt-6 '>Disease detection, check up in the laboratory</h1>
                    <h2 className='mt-4 text-gray-600'>In this case, the role of the health laboratory is very important to do a disease detection...</h2>
                    <Link href="/">
                    <div className='flex pt-5'>
                    <h3 className='font-bold cursor-pointer  text-[#4089ED] pr-5'>Read more
                    
                    </h3>
                    <Image className=''
                    src="/line.png" 
                    alt=""
                    width={40}
                    height={50} />
                    </div>
                    </Link>
                    </div>

                    <div className='w-[300px] h-[300px]  '>
                    <Image className='rounded-[55px] rounded-b-none '
                    src="/image1.png" 
                    alt=""
                    width="300"
                    height="300" />
                    <h1 className='text-2xl mt-6 '>Disease detection, check up in the laboratory</h1>
                    <h2 className='mt-4 text-gray-600'>In this case, the role of the health laboratory is very important to do a disease detection...</h2>
                    <Link href="/">
                    <div className='flex pt-5'>
                    <h3 className='font-bold cursor-pointer  text-[#4089ED] pr-5'>Read more
                    </h3>
                    <Image className=''
                    src="/line.png" 
                    alt=""
                    width={40}
                    height={50} />
                    </div>
                    </Link>
                    </div>

                     <div className='w-[300px] h-[300px]  '>
                    <Image className=' rounded-[55px] rounded-b-none '
                    src="/image 3.png" 
                    alt=""
                    width="300"
                    height="300" />
                    <h1 className='text-2xl mt-6  '>Disease detection, check up in the laboratory</h1>
                    <h2 className='mt-4 text-gray-600'>In this case, the role of the health laboratory is very important to do a disease detection...</h2>
                    <Link href="/">
                    <div className='flex pt-5'>
                    <h3 className='font-bold cursor-pointer  text-[#4089ED] pr-5'>Read more
                    </h3>
                    <Image className=''
                    src="/line.png" 
                    alt=""
                    width={40}
                    height={50} />
                    </div>
                    </Link>
                    </div>
            </div>
        </div>
        <div className='max-w-[full] max-h-[full]  flex  justify-center'>
          <button className='mt-10 h-14 w-32 text-center border-[2px] rounded-[55px] text-[#458FF6] border-[#458FF6] cursor-pointer'>View All</button>
        </div>
    </div>
  )
}

export default Checkout