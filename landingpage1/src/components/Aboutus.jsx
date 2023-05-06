import Image from 'next/image'
import React from 'react'

const Aboutus = () => {
  return (
    <div id='about' className='h-[600px] w-full flex items-center flex-col '>
        <Image className=' ' 
        src="/testabout.png" 
        alt=""
        width="1000"
        height="600" />
    </div>
  )
}

export default Aboutus