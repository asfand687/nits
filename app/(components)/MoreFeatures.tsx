import Image from 'next/image'
import React from 'react'

const MoreFeatures = () => {
  return (
    <section className='max-w-[1300px] mx-auto py-16 mt-20 flex flex-col gap-10'>
      <div className='flex flex-col gap-2 text-center'>
        <h2 className='text-[#ea395f] tracking-widest font-bold'>QUALITY FEATURES</h2>
        <h2 className='text-4xl font-bold leading-[4rem]'>Amazing useful features</h2>
      </div>
      <div className='grid grid-cols-2 justify-items-center gap-y-14'>
        <article className='flex gap-6'>
          <div>
            <Image
              src="/performance.svg"
              width={100}
              height={100}
              alt="Performance"
            />
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-semibold'>Fast Performance</h2>
            <p className='max-w-xs leading-loose'>
              Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.
            </p>
          </div>
        </article>
        <article className='flex gap-6'>
          <div>
            <Image
              src="/subscription.svg"
              width={100}
              height={100}
              alt="Subscription"
            />
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-semibold'>Pro Subscription</h2>
            <p className='max-w-xs leading-loose'>
              Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.
            </p>
          </div>
        </article>
        <article className='flex gap-6'>
          <div>
            <Image
              src="/partnership.svg"
              width={100}
              height={100}
              alt="Partnership"
            />
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-semibold'>Partnership deal</h2>
            <p className='max-w-xs leading-loose'>
              Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.
            </p>
          </div>
        </article>
        <article className='flex gap-6'>
          <div>
            <Image
              src="/message.svg"
              width={100}
              height={100}
              alt="Message"
            />
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-semibold'>Customer Support</h2>
            <p className='max-w-xs leading-loose'>
              Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.
            </p>
          </div>
        </article>
      </div>
      {/* CORE FEATURES */}
      <div>

      </div>
    </section>
  )
}

export default MoreFeatures