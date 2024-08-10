import Image from 'next/image'
import React from 'react'

const HowItWorks = () => {
  return (
    <div
      style={{
        backgroundColor: "#EA3A60",
        backgroundImage: "url('/how-it-works-bg.png')"
      }}
      className='bg-no-repeat bg-center bg-cover text-white pt-24 pb-40 flex flex-col gap-10'
    >
      <div className='max-w-[1300px] mx-auto flex flex-col gap-2 text-center'>
        <h2 className='tracking-widest font-bold opacity-70'>WHATS THE FUNCTION</h2>
        <h2 className='text-4xl font-bold leading-[4rem]'>Let’s see how it works</h2>
      </div>
      <div className='max-w-[1280px] mx-auto grid grid-cols-4 gap-8'>
        <article className='flex flex-col gap-4'>
          <div className='relative text-[#224381] w-16 h-16 rounded-3xl bg-white font-bold text-3xl inline-flex justify-center place-items-center'>
            <span>01</span>
            <div className="absolute -right-60 top-0">
              <Image
                src="/arrow-down.svg"
                width={230}
                height={60}
                alt="Arrow"
              />
            </div>
          </div>
          <h2 className='text-2xl font-semibold leading-10'>Set disbursement Instructions</h2>
          <p className='leading-9 max-w-[16rem] opacity-75'>
            Get your blood tests delivered at home collect a sample from the your blood tests.
          </p>
        </article>
        <article className='flex flex-col gap-4'>
          <div className='relative text-[#224381] w-16 h-16 rounded-3xl bg-white font-bold text-3xl inline-flex justify-center place-items-center'>
            <span>02</span>
            <div className="absolute -right-60 top-6">
              <Image
                src="/arrow-up.svg"
                width={230}
                height={60}
                alt="Arrow"
              />
            </div>
          </div>
          <h2 className='text-2xl font-semibold leading-10'>Assembly retrieves funds from your account</h2>
          <p className='leading-9 max-w-[16rem] opacity-75'>
            Get your blood tests delivered at home collect a sample from the your blood tests.
          </p>
        </article>
        <article className='flex flex-col gap-4'>
          <div className='relative text-[#224381] w-16 h-16 rounded-3xl bg-white font-bold text-3xl inline-flex justify-center place-items-center'>
            <span>03</span>
            <div className="absolute -right-60 top-0">
              <Image
                src="/arrow-down.svg"
                width={230}
                height={60}
                alt="Arrow"
              />
            </div>
          </div>
          <h2 className='text-2xl font-semibold leading-10'>Assembly initiates disbursement</h2>
          <p className='leading-9 max-w-[16rem] opacity-75'>
            Get your blood tests delivered at home collect a sample from the your blood tests.
          </p>
        </article>
        <article className='flex flex-col gap-4'>
          <div className='relative text-[#224381] w-16 h-16 rounded-3xl bg-white font-bold text-3xl inline-flex justify-center place-items-center'>
            <span>04</span>
          </div>
          <h2 className='text-2xl font-semibold leading-10'>Customer receives funds payment</h2>
          <p className='leading-9 max-w-[16rem] opacity-75'>
            Get your blood tests delivered at home collect a sample from the your blood tests.
          </p>
        </article>
      </div>
    </div>
  )
}

export default HowItWorks