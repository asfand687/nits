"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'

const PriceCard = ({ pricingData }: Record<string, any>) => {

  return (
    <div className='h-[610px] text-[#343d48] border sm:mr-10 flex flex-col gap-y-12 p-10 rounded-3xl relative transition all duration-300 ease-in hover:shadow-card'>
      {pricingData.header && (
        <div className='absolute -top-4 z-[1000] left-10 bg-amber-500 py-1 px-3 text-white font-semibold rounded-md'>{pricingData.header}</div>
      )}
      <div className='flex flex-col gap-4'>
        <h2 className='font-semibold text-2xl tracking-tighter'>{pricingData.name}</h2>
        <h3 className="text-lg">{pricingData.description}</h3>
      </div>
      <div className="flex flex-col gap-y-5">
        {
          pricingData.points.map(({ id, icon, text }: Record<string, any>) => (
            <li
              key={id}
              className='flex items-center gap-4'
            >
              <Image
                src={`/${icon}`}
                width={24}
                height={24}
                alt="available icon"
              />
              <h3 className='text-xl'>{text}</h3>
            </li>
          ))
        }
      </div>
      <div className='flex flex-col items-center gap-6'>
        <div className='flex items-center'>
          <span className="text-4xl font-semibold">{pricingData.priceWithUnit}</span><span className='font-medium'>/Monthly</span>
        </div>
        <button
          type="button"
          className="border-4 font-semibold border-[#ea3a60] rounded-full px-8 py-3 bg-[#ea3a60] text-white transition-all ease-in-out duration-300 hover:shadow-btn"
        >
          {pricingData.buttonText}
        </button>
        {
          pricingData.additionalButtonOption && (
            <button
          type="button"
          className="border-4 font-semibold border-transparent rounded-full px-8 bg-tranparent text-blue-700 transition-all ease-in-out duration-300 hover:shadow-btn"
        >
          {pricingData.additionalButtonOption}
        </button>
          )
        }
      </div>
    </div>
  )
}

export default PriceCard