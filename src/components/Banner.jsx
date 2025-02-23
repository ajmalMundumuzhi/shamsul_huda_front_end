import { Link } from "react-router-dom"
export function Banner () {
    return (
        <>
        <div className="grid md:h-screen md:grid-cols-12" style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), transparent), url('/images/shia.JPG')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          <div className="col-span-12">
            <h1 className="w-7/12 text-2xl pt-20 md:text-7xl text-white font-bold font-serif md:p-3 md:pt-40">Shamsul Huda Islamic Academy</h1>
<p className="w-8/12 max-w-2xl font-semibold text-white text-justify p-3 pt-8 md:pt-10">
  shamsul huda islamic academy, a graduate institute affiliated to darul huda islamic university kerala, is a prestigious centre of islamic higher learning founded upon the philosophy of imparting islamic education combined with modern curriculum and moral upbringing. 
</p>

            <a href="#counter"><button className="text-white p-3 m-3 bg-amber-700 rounded-2xl">Explore</button></a>
          </div>
        </div>
        </>
    )
}
{/* <div className="slider flex flex-col-reverse md:flex-col lg:flex-row bg-[#f2f2f2] mt-5 min-h-[60vh] mb-6 m-1">
  <div className="left w-full flex flex-col justify-center items-center py-8 lg:py-2 md:mb-6">
    <h1 className="text-2xl md:text-4xl mx-5 font-bold text-center lg:my-2 md:mt-14 ">Shamsul Huda Islamic Academy</h1>
    <p className="w-3/4 mx-5 text-center md:text-center mt-5">
      shamsul huda islamic academy, a graduate institute affiliated to darul huda islamic university kerala, is a prestigious centre of islamic higher learning founded upon the philosophy of imparting islamic education combined with modern curriculum and moral upbringing. it integrates both islamic and contemporary education.
    </p>
    <a href="#counter"><button className="text-white bg-orange-400 px-4 py-2 my-4 font-bold mx-5 md:mt-5">Explore</button></a>
  </div>
  {/* right side slider */}
  // <div className="right w-full flex justify-center lg:w-6/12 max-w-full">
    // <img className="w-full h-auto object-cover md:rounded-[3rem]" src="/images/shia.JPG" alt="" />
  // </div>
// </div>
{/* <div className="flex justify-center items-center h-[150px] bg-cover bg-center bg-[#f2f2f2] md:mb-20"> */}
  // <div className="flex flex-row h-[7rem] w-[7rem] rounded-full border border-solid border-red-400 justify-center items-center">
  // <i class="fa-solid fa-angle-down text-5xl"></i>
  // </div>
// </div> 