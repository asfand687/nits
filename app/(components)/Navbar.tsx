import Image from "next/image"

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
      <ul className="flex gap-x-12 text-[rgb(234,58,96)] text-base">
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Testimonials</li>
      </ul>
      <article>
        <button 
          type="button"
          className="border-4 border-[rgb(234,58,96)] rounded-full px-10 py-4 text-[rgb(234,58,96)] hover:bg-[rgb(234,58,96)] hover:text-white transition-colors ease-in-out duration-300"
        >
          Get Started
        </button>
      </article>
    </nav>
  )
}

export default Navbar