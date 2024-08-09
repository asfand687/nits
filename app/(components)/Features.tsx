import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div className='mt-20 pt-20 max-w-[1300px] mx-auto'>
      <div className='text-center font-semibold'>
        <h2 className='text-[#ea3a60] tracking-wider pb-4'>WHATS THE FUNCTION</h2>
        <h2 className='text-4xl'>Meet the feature of product</h2>
      </div>
      <div className="flex gap-8 pt-20">
        <article className='flex-1'>
          <Image
            src="/performance.svg"
            width={100}
            height={100}
            alt="Performance"
          />
          <h2 className='font-semibold text-xl pb-6'>Fast Performance</h2>
          <p className='text-lg'>
            Get your blood tests delivered at home collect a sample from the your blood tests.
          </p>
        </article>
        <article className='flex-1'>
          <Image
            src="/partnership.svg"
            width={100}
            height={100}
            alt="Partnership"
          />
          <h2 className='font-semibold text-xl pb-6'>Partnership deal</h2>
          <p className='text-lg'>
            Get your blood tests delivered at home collect a sample from the your blood tests.
          </p>
        </article>
        <article className='flex-1'>
          <Image
            src="/subscription.svg"
            width={100}
            height={100}
            alt="Subscription"
          />
          <h2 className='font-semibold text-xl pb-6'>Pro Subscription</h2>
          <p className='text-lg'>
            Get your blood tests delivered at home collect a sample from the your blood tests.
          </p>
        </article>
        <article className='flex-1'>
          <Image
            src="/message.svg"
            width={100}
            height={100}
            alt="Message"
          />
          <h2 className='font-semibold text-xl pb-6'>Customer Support</h2>
          <p className='text-lg'>
            Get your blood tests delivered at home collect a sample from the your blood tests.
          </p>
        </article>
        
      </div>
    </div>
  )
}

export default Features