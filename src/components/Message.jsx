import { Link } from "react-router-dom"
export default function Message () {
    return (
        <>
<div className="slider flex flex-col-reverse md:flex-col-reverse lg:flex-row bg-amber-500 min-h-[70vh] p-10 lg:p-16 mb-4">
  {/* Left Side */}
  <div className="left w-full lg:w-8/12 flex flex-col justify-center items-center md:items-center py-12 lg:py-16">
    <h1 className="text-3xl md:text-6xl mx-6 font-bold text-center lg:mb-4">
      PRINCIPAL'S MESSAGE
    </h1>
    <p className="md:w-3/5 mx-6 text-center my-4 md:text-2xl">
      Shamsul Huda Islamic Academy, a graduate institute affiliated with Darul Huda Islamic University, Kerala, is a prestigious center of Islamic higher learning founded upon the philosophy of imparting Islamic education combined with a modern curriculum and moral upbringing. It integrates both Islamic and contemporary education.
    </p>
  </div>

  {/* Right Side (Image) */}
  <div className="right w-full lg:w-4/12 max-w-full flex justify-center p-12 lg:p-16">
    <img className="w-[250px] md:w-[350px] lg:w-[450px] h-auto object-cover rounded-xl shadow-lg" src="/images/principal.jpg" alt="Principal" />
  </div>
</div>

        </>
    )
}