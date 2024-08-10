import Image from 'next/image'
import React from 'react'
import SectionHeader from './subcomponents/SectionHeader'

const MoreFeatures = () => {
  return (
    <section className='max-w-[1300px] mx-auto py-16 mt-20 flex flex-col gap-10'>
      <SectionHeader
        slogan='QUALITY FEATURES'
        title="Amazing useful features"
        textCenter
        sloganGapClass='pb-4'
      />
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
      <div className='flex gap-8 items-center'>
        <article className="max-w-lg flex flex-col gap-6">
          <SectionHeader
            slogan="CORE FEATURES"
            title="Smart Jackpots that you may love this anytime & anywhere"
            gapClass='pb-16'
            titleFont='text-5xl leading-[4rem]'
            sloganGapClass='pb-2'
          />
          <p className='text-xl max-w-[29rem] leading-loose'>
            Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.
          </p>
          <div>
            <button
              type="button"
              className="border-4 border-[#ea3a60] rounded-full px-8 py-3 bg-[#ea3a60] text-white transition-all ease-in-out duration-300 hover:shadow-btn"
            >
              Get Started
            </button>
          </div>
        </article>
        <article className="flex-1 relative">
          <Image
            src="/woman-2.png"
            width={800}
            height={800}
            alt="Woman"
            className='max-w-2xl relative z-10'
          />
          <div className="max-w-[500px] absolute -bottom-14 -right-32 z-[0]">
            <Image
              src="/img-bg1.png"
              alt="Image Bg"
              width={500}
              height={500}
              className='-scale-x-[1]'
            />
          </div>
        </article>
      </div >
    </section >
  )
}

export default MoreFeatures