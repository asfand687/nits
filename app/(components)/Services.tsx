import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div className='max-w-[1300px] mx-auto mb-44'>
      <article className='relative'>
        <div className='relative z-[3]'>
          <Image
            src="/woman.png"
            alt="Woman"
            width={600}
            height={800}
            className="max-w-[600px]"
          />
          {/* <div className='h-20 w-20 rounded-full animate-pulseGrow bg-red-400 absolute top-1/2 -translate-y-1/2 left-[23%]'></div> */}
          <div className="bg-white p-4 rounded-full absolute top-1/2 -translate-y-1/2 left-[21%] -translate-x-[21%] z-20 animate-pulse">
            <Image
              src="/play.svg"
              alt="Play"
              width={60}
              height={60}
            />
          </div>
        </div>
        <div className="max-w-[500px] absolute -bottom-20 -left-32 z-[0]">
          <Image
            src="/img-bg1.png"
            alt="Image Bg"
            width={500}
            height={500}
          />
        </div>
      </article>

    </div>
  )
}

export default Services