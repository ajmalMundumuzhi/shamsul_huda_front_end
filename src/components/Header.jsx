import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="bg-stone-100 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex-shrink-0">
              <img className="h-10" src="/images/shia_logo.png" alt="Logo" />
            </div>

            {/* Desktop Navbar */}
            <nav className="hidden md:flex space-x-10">
              <Link
                to="/"
                className="text-white bg-amber-400 w-[4rem] pt-1 pb-1 rounded-b-lg text-center hover:text-white hover:underline hover:underline-offset-8"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-black font-medium hover:text-black hover:underline hover:underline-offset-8"
              >
                About
              </Link>
              <Link
                to="/facilities"
                className="text-black font-medium hover:text-black hover:underline hover:underline-offset-8"
              >
                Facilities
              </Link>
              <Link
                to="/faculties"
                className="text-black font-medium hover:text-black hover:underline hover:underline-offset-8"
              >
                Faculties
              </Link>
              <Link
                to="/management"
                className="text-black font-medium hover:text-black hover:underline hover:underline-offset-8"
              >
                Management
              </Link>
              <Link
                to="/contact"
                className="text-black font-medium hover:text-black hover:underline hover:underline-offset-8"
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button type="button" className="text-black hover:text-black" onClick={toggleMenu}>
                <span className="sr-only">Toggle menu</span>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="text-black hover:bg-amber-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-black hover:bg-amber-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </Link>
              <Link
                to="/facilities"
                className="text-black hover:bg-amber-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Facilities
              </Link>
              <Link
                to="/faculties"
                className="text-black hover:bg-amber-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Faculties
              </Link>
              <Link
                to="/management"
                className="text-black hover:bg-amber-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Management
              </Link>
              <Link
                to="/contact"
                className="text-black hover:bg-amber-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Shine section - Hide on mobile */}
      <div className="shine md:w-full h-16 bg-gradient-to-r from-white via-yellow-300 to-white bg-[length:200%] border-2 border-yellow-300 rounded-b-lg shadow-[0_0_20px_rgba(200,200,100,1)] animate-shining flex-row justify-between items-center text-black font-bold text-xl hidden md:flex">
        <a
          href="https://wa.me/918281536145"
          target="_blank"
          rel="noopener noreferrer"
          className="item flex flex-row items-center mx-4"
        >
          <i className="fa-brands fa-whatsapp text-4xl mr-2"></i>
          <span className="text-sm">Whatsapp : +91 8281 536 145</span>
        </a>
        <div className="item flex flex-row items-center mx-4">
          <i className="fa-solid fa-phone text-2xl mr-2"></i>
          <span className="text-sm">Mobile : +91 0495 2351534</span>
        </div>
        <div className="item flex flex-row items-center mx-4">
          <i className="fa-solid fa-tty text-3xl mr-2"></i>
          <span className="text-sm">Phone : +91 8281 536 145</span>
        </div>
        <a href="mailto:shamsulhudaacademy@yahoo.com" className="item flex flex-row items-center mx-4">
          <i className="fa-regular fa-envelope text-2xl mr-2"></i>
          <span className="text-sm">Email : shamsulhudaacademy@yahoo.com</span>
        </a>
      </div>
    </>
  )
}

