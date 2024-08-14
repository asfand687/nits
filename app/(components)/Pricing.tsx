"use client"
import React, { useState } from 'react'
import { packages, responsive, sliderParams } from './data/packages'
import SectionHeader from './subcomponents/SectionHeader'
import Carousel from 'react-multi-carousel'
import ButtonGroup from './subcomponents/ButtonGroup'
import PriceCard from './subcomponents/PriceCard'

const Pricing = () => {
  const { monthly, annual } = packages
  const [pricing, setPricing] = useState({
    active: "monthly",
    pricingPlan:monthly
  })

  const handlePricingChange = (plan: string) => {
    if (plan === "monthly") {
      setPricing({
        active: "monthly",
        pricingPlan: monthly
      })
    } else {
      setPricing({
        active: "annual",
        pricingPlan: annual
      })
    }
  }
  return (
    <section className='max-w-[1300px] mx-auto py-16 mt-8 flex flex-col gap-10'>
      <SectionHeader
        slogan='PRICING PLAN'
        title='Choose your pricing plan'
        textCenter
      />
      <div className="flex justify-center">
        <div className='flex bg-gray-200 p-1 rounded shadow'>
          <button 
            onClick={() => handlePricingChange("monthly")} 
            className={`${pricing.active === "monthly" ? "bg-white" : "bg-transparent"} rounded px-4 py-2 transition-colors ease-in-out duration-300`}>
              Monthly Plan
            </button>
          <button 
            onClick={() => handlePricingChange("annual")} 
            className={`${pricing.active === "annual" ? "bg-white" : "bg-transparent"} rounded px-4 py-2 transition-colors ease-in-out duration-300`}>
              Annual Plan
          </button>
        </div>
      </div>
      <div>
        <Carousel 
          customButtonGroup={<ButtonGroup/>}
          {...sliderParams}
        >
          {
            pricing.pricingPlan.map(pricingData => (
              <article
                key={pricingData.id}
              >
                <PriceCard/>
              </article>
            ))
          }
        </Carousel>
      </div>
    </section>
  )
}

export default Pricing