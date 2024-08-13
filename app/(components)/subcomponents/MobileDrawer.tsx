"use client"
import Image from 'next/image'
import React from 'react'


const MobileDrawer = () => {
  const [isDrawerShown, setIsDrawerShown] = React.useState(false)
  return (
    <div>
      <div onClick={() => setIsDrawerShown(prev => !prev)}>
        <Image
          width={26}
          height={26}
          alt="Hamburger"
          src="/hamburger.svg"
        />
      </div>
      <aside className={`transition-all shadow-xl duration-300 ease-in-out md:hidden fixed z-[999] top-0 ${isDrawerShown ? "right-0" : "-right-full"} w-[320px] h-screen bg-white p-8`}>
        <div className="flex flex-col gap-y-24">
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-row-reverse">
              <button onClick={() => setIsDrawerShown(false)}>
                <Image
                  width={26}
                  height={26}
                  alt="Close"
                  src="/close.svg"
                />
              </button>
            </div>
            <ul className="flex flex-col gap-y-12 text-[#0f2137] text-xl">
              <li className='border-b border-gray-300 pb-3'>Home</li>
              <li className='border-b border-gray-300 pb-3'>Features</li>
              <li className='border-b border-gray-300 pb-3'>Pricing</li>
              <li className='border-b border-gray-300 pb-3'>Testimonials</li>
            </ul>
          </div>

          <button
            type="button"
            className="border-4 border-[#ea3a60] rounded-full px-10 py-4 text-[#ea3a60] hover:bg-[rgb(234,58,96)] hover:text-white transition-colors ease-in-out duration-300"
          >
            Get Started
          </button>
        </div>
      </aside>
    </div>
  )
}

export default MobileDrawer

{/* <React.Fragment>
      <Drawer
        width="320px"
        open={isDrawerShown}
        className='drawer bg-black relative z-50'
        height="100vh"
        placement='left'
        {...{ ease: 'cubic-bezier(0.4, 0, 0.2, 1)', duration: ".5s" }}
      >
        Hello World
        <button onClick={() => setIsDrawerShown(false)}>close</button>
      </Drawer>
      <div onClick={() => setIsDrawerShown(prev => !prev)}>
        <Image
          width={26}
          height={26}
          alt="Hamburger"
          src="/hamburger.svg"
        />
      </div>
    </React.Fragment> */}