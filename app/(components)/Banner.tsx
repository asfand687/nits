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
          className='w-[400px] absolute left-0 bottom-[20px] z-[0]'
        />
      </div>
      <div>
        <Image
            width={500}
            height={800}
            src="/banner-right.png"
            alt="Banner right"
            className='w-[400px] absolute right-0 bottom-[50px] z-[0]'
          />
      </div>
      <Image
        width={1000}
        height={800}
        src="/banner-img.png"
        alt="Banner Image"
        className='max-w-[1100px] mx-auto relative z-[2]'
      />
    </div>
  )
}

export default Banner