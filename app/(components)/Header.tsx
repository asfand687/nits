import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'

const Header = () => {
  return (
    <header>
      <Navbar/>
      <section className="flex flex-col items-center mt-10 gap-6 mb-10">
        <div className='max-w-[580px] text-center'>
          <h2 className='font-semibold text-6xl leading-[4.5rem] pb-5'>Top Quality Digital Products To Explore</h2>
          <p className='text-xl leading-[3rem]'>Get your blood tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.</p>
        </div>
        <button 
          type="button"
          className="border-4 border-[#ea3a60] rounded-full px-8 py-3 bg-[#ea3a60] text-white transition-colors ease-in-out duration-300"
        >
          Explore
        </button>
      </section>
      <Banner/>
    </header>
  )
}

export default Header