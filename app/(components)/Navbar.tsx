import Image from "next/image"
import MobileDrawer from "./subcomponents/MobileDrawer"

const Navbar = () => {
  return (
    <nav className="w-full max-w-[1300px] mx-auto p-4 py-8 flex items-center justify-between">
      <article>
        <Image
          src="/logo.svg"
          width={180}
          height={37}
          alt="Logo"
        />
      </article>
      <ul className="hidden md:flex gap-x-12 text-[#0f2137] text-base">
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Testimonials</li>
      </ul>
      <article>
        <button 
          type="button"
          className="hidden md:block border-4 border-[#ea3a60] rounded-full px-10 py-4 text-[#ea3a60] hover:bg-[rgb(234,58,96)] hover:text-white transition-colors ease-in-out duration-300"
        >
          Get Started
        </button>
        <MobileDrawer/>
      </article>
    </nav>
  )
}

export default Navbar