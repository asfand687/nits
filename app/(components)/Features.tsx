import Image from 'next/image'
import React from 'react'
import SectionHeader from './subcomponents/SectionHeader'

const Features = () => {
  return (
    <div className='mt-20 pt-20 max-w-[1300px] mx-auto'>
      <SectionHeader
        slogan='WHATS THE FUNCTION'
        title="Meet the feature of product"
        textCenter
        sloganGapClass='pb-4'
      />
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