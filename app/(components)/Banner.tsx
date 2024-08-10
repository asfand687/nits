import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='relative'>
      <div>
        <Image
          width={500}
          height={800}
          src="/banner-left.png"
          alt="Banner Left"
          className='w-[clamp(150px,40vw,500px)] h-auto lg:h-[750px] absolute left-0 bottom-[40px] z-[0]'
        />
      </div>
      <div>
        <Image
            width={500}
            height={800}
            src="/banner-right.png"
            alt="Banner right"
            className='w-[clamp(150px,40vw,400px)] h-auto  absolute right-0 bottom-[70px] z-[0]'
          />
      </div>
      <Image
        width={1000}
        height={800}
        src="/banner-img.png"
        alt="Banner Image"
        className='w-full max-w-[1100px] mx-auto relative z-[2]'
      />
    </div>
  )
}

export default Banner