import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div className='max-w-[1300px] mx-auto mt-36 flex items-center gap-20'>
      <article className='relative'>
        <div className='relative z-[3]'>
          <Image
            src="/woman.png"
            alt="Woman"
            width={650}
            height={800}
            className="max-w-[650px]"
          />
          {/* <div className='h-20 w-20 rounded-full animate-pulseGrow bg-red-400 absolute top-1/2 -translate-y-1/2 left-[23%]'></div> */}
          <div className="bg-white p-4 rounded-full absolute top-1/2 -translate-y-1/2 left-[25%] -translate-x-[25%] z-20 animate-pulse">
            <Image
              src="/play.svg"
              alt="Play"
              width={60}
              height={60}
            />
          </div>
        </div>
        <div className="max-w-[500px] absolute -bottom-20 -left-36 z-[0]">
          <Image
            src="/img-bg1.png"
            alt="Image Bg"
            width={500}
            height={500}
          />
        </div>
      </article>
      <article className="flex-1">
        <div className='flex flex-col gap-2 pb-16'>
          <h2 className='text-[#ea395f] tracking-widest pb-4 font-bold'>OUR SERVICES</h2>
          <h2 className='text-5xl font-bold max-w-lg leading-[4rem]'>Business Goals Achieved with Design</h2>
        </div>
        <div className='flex flex-col gap-8'>
          <article className='flex gap-4'>
            <div>
              <Image
                src="/subscription.svg"
                width={80}
                height={80}
                alt="Subscription"
              />
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='text-xl font-semibold'>Smart Features</h2>
              <p className='max-w-xs leading-loose'>
                Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.
              </p>
            </div>
          </article>
          <article className='flex gap-4'>
            <div>
              <Image
                src="/partnership.svg"
                width={80}
                height={80}
                alt="Partnership"
              />
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='text-xl font-semibold'>Secure Contents</h2>
              <p className='max-w-xs leading-loose'>
                Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.
              </p>
            </div>
          </article>
        </div>
      </article>
    </div>
  )
}

export default Services