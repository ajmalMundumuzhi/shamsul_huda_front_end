import { Link } from "react-router-dom"
export default function Message () {
    return (
        <>
<div className="grid h-auto md:h-screen md:grid-cols-12">
  {/* Principal's Message Section */}
  <div className="col-span-12 md:col-span-6 bg-[#936639] grid place-items-center p-4 md:p-0">
    <div className="w-full md:w-8/12 bg-[#7f4f24] grid place-items-center p-4 md:p-6 text-center rounded-t-4xl rounded-l-4xl shadow-2xl">
      <h1 className="font-bold p-2 md:p-4 text-2xl md:text-4xl text-white">
        PRINCIPAL'S MESSAGE
      </h1>
      <p className="text-justify text-base md:text-xl font-semibold text-white">
        Shamsul Huda Islamic Academy, a graduate institute affiliated with Darul Huda Islamic University, Kerala, is a prestigious center of Islamic higher learning founded upon the philosophy of imparting Islamic education combined with a modern curriculum and moral upbringing. It integrates both Islamic and contemporary education.
      </p>
    </div>
  </div>

  {/* Principal's Image and Details Section */}
  <div className="col-span-12 md:col-span-6 bg-[#936639] grid place-items-center p-4 md:p-0">
    <div className="flex flex-col items-center w-full md:w-7/12">
      <img
        className="w-full rounded-2xl shadow-2xl"
        src="/images/principal.jpg"
        alt="Principal"
      />
      <div className="mt-2 text-center">
        <h1 className="font-bold text-2xl md:text-3xl text-white">Unais Hudawi</h1>
        <h1 className="text-white text-xl md:text-2xl">Principal</h1>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

{/* <div className="slider flex flex-col-reverse md:flex-col-reverse lg:flex-row bg-amber-500 min-h-[70vh] p-10 lg:p-16 mb-4"> */}
  {/* Left Side */}
  {/* <div className="left w-full lg:w-8/12 flex flex-col justify-center items-center md:items-center py-12 lg:py-16">
    <h1 className="text-3xl md:text-6xl mx-6 font-bold text-center lg:mb-4">
      PRINCIPAL'S MESSAGE
    </h1>
    <p className="md:w-3/5 mx-6 text-center my-4 md:text-2xl">
      Shamsul Huda Islamic Academy, a graduate institute affiliated with Darul Huda Islamic University, Kerala, is a prestigious center of Islamic higher learning founded upon the philosophy of imparting Islamic education combined with a modern curriculum and moral upbringing. It integrates both Islamic and contemporary education.
    </p>
  </div> */}

  {/* Right Side (Image) */}
  {/* <div className="right w-full lg:w-4/12 max-w-full flex justify-center p-12 lg:p-16">
    <img className="w-[250px] md:w-[350px] lg:w-[450px] h-auto object-cover rounded-xl shadow-lg" src="/images/principal.jpg" alt="Principal" />
  </div>
</div> */}