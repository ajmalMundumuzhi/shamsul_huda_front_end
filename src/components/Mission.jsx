import { Link } from "react-router-dom";

export default function Mission () {
    return (
        <>
<div className="grid gap-4 w-full grid-cols-1 md:grid-cols-3 h-auto md:h-screen p-4 md:m-2 place-items-center">
  <h1 className="col-span-1 md:col-span-3 mx-auto text-amber-500 text-4xl md:text-6xl font-bold text-center">
    ABOUT US
  </h1>
  
  <div className="w-full p-4 md:p-8 m-2 md:m-5 shadow-2xl h-auto grid place-items-center">
    <h1 className="text-center font-bold text-2xl md:text-3xl p-4">OUR PHILOSOPHY</h1>
    <p className="text-justify font-normal text-base md:text-lg">
      Shamsul Huda is founded upon the educational philosophy of Islam, which in turn is inspired by the principles of hierarchy and unity of knowledge in its intents, contents, and methods. Therefore, our philosophy is based on recognizing the Almighty Allah as the fountain-source of all knowledge as well as acknowledging Him as the ultimate end of every human endeavor; and believing that His guidance (Hidaya) is an absolute essentiality for human development. 
      <Link to='/about' className="text-blue-600 underline">Read more</Link>
    </p>
  </div>
  
  <div className="w-full p-4 md:p-8 m-2 md:m-5 shadow-2xl h-auto grid place-items-center">
    <h1 className="text-center font-bold text-2xl md:text-3xl p-4">VISION</h1>
    <p className="text-justify font-normal text-base md:text-lg">
      To develop an Islamic educational framework in order to prepare religious scientists (‘ulama) who acquire, practice, and propagate Islam, and to be a center for intellectual leadership for holistic empowerment of society rooted in moral values and principles and to offer a comprehensive educational system to provide opportunities for students of different walks of the society instilled with skill and values.
      <Link to='/about' className="text-blue-600 underline">Read more</Link>
    </p>
  </div>
  
  <div className="w-full p-4 md:p-8 m-2 md:m-5 shadow-2xl h-auto grid place-items-center">
    <h1 className="text-center font-bold text-2xl md:text-3xl p-4">MISSION</h1>
    <p className="text-justify font-normal text-base md:text-lg">
      To develop an innovative system of Islamic education capable of grooming a group of 'ulema' who can spread the message of Islam throughout the world. To promote propagators of Islam who would be talented in religious and modern teachings and could understand the new challenges that the religion has been facing.
      <Link to='/about' className="text-blue-600 underline">Read more</Link>
    </p>
  </div>
</div>
        </>
    )
}

    {/* <div className="flex flex-col mb-4 items-center bg-[#f2f2f2] border border-gray-200 rounded-lg shadow-sm md:flex-row w-full h-auto md:h-[450px] mx-0 hover:bg-gray-100 ">
          <img
            className="object-cover p-4 w-full h-full rounded-t-lg md:w-1/3 md:rounded-none md:rounded-s-lg"
            src="/images/mission_prin.jpg"
            alt="Technology Acquisitions"
          />
          <div className="flex flex-col justify-between p-6 leading-normal w-full md:w-2/3">
            <h5 className="mb-2 text-5xl md:text-8xl font-bold tracking-tight text-black">
              MISSION 
            </h5>
            <p className="mb-3 text-base font-normal text-gray-700">
            to develop an innovative system of islamic education capable at grooming a group of 'ulema' who can spread the message of islam throughout the world.
    to promote propagators of islam who would be talented in religious and modern teachings and could understand the new challenges that the religion has been facing.
    
            </p>
            <Link to="/about" className="w-35 inline-flex items-center px-4 py-2 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </Link>
          </div>
        </div> */}