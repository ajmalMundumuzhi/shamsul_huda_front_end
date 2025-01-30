import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <header className="bg-stone-100 text-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex-shrink-0">
              <img className="h-10" src='/images/logo.png' alt="Logo" />
            </div>

            {/* Navbar */}
            <nav className="hidden md:flex space-x-10">
              <Link to="/" className="text-white bg-amber-400 w-[4rem] pt-1 pb-1 rounded-b-lg text-center hover:text-white hover:underline hover:underline-offset-8 cursor-pointer">Home</Link>
              <Link to="/about" className="text-black font-medium hover:text-black hover:underline hover:underline-offset-8 cursor-pointer">About</Link>
              <Link to='/facilities' className="text-black font-medium hover:text-black hover:underline hover:underline-offset-8 cursor-pointer">Facilities</Link>
              <Link to="/faculties" className="text-black font-medium hover:text-black hover:underline hover:underline-offset-8 cursor-pointer">Faculties</Link>
              <Link to="/management" className="text-black font-medium hover:text-black hover:underline hover:underline-offset-8 cursor-pointer">Management</Link>
              <Link to='/contact' className="text-black font-medium hover:text-black hover:underline hover:underline-offset-8 cursor-pointer">Contact Us</Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button type="button" className="text-black hover:text-black">
                <span className="sr-only">Open menu</span>
                <svg className="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M2 6h16M2 10h16M2 14h16" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Shine section - Hide on mobile */}
      <div className="shine md:w-full h-16 bg-gradient-to-r from-white via-yellow-300 to-white bg-[length:200%] border-2 border-yellow-300 rounded-b-lg shadow-[0_0_20px_rgba(200,200,100,1)] animate-shining  flex-row justify-between items-center text-black font-bold text-xl hidden md:flex">
        <a href="">
          <div className="item flex flex-row items-center mx-4">
            <i className="fa-brands fa-whatsapp text-4xl mr-2"></i>
            <span className="text-sm">Whatsapp : +91 86060 71078</span>
          </div>
        </a>
        <div className="item flex flex-row items-center mx-4">
          <i className="fa-solid fa-phone text-2xl mr-2"></i>
          <span className="text-sm">Mobile : +91 9745804605</span>
        </div>
        <div className="item flex flex-row items-center mx-4">
          <i className="fa-solid fa-tty text-3xl mr-2"></i>
          <span className="text-sm">Telephone : +91 0000000000</span>
        </div>
        <div className="item flex flex-row items-center mx-4">
          <i className="fa-regular fa-envelope text-2xl mr-2"></i>
          <span className="text-sm">Email : shamsulhuda@gmail.com</span>
        </div>
      </div>
    </>
  );
}
