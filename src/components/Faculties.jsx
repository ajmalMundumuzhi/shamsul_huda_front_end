function Faculties({ Name, Role, Profile, Whatsapp, Email }) {
  return (
    <div className="w-full">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <a href="#">
          <img className="h-80 w-full rounded-md md:rounded-lg object-cover" src={Profile || "/placeholder.svg"} alt="Person Image" />
        </a>
        <div className="p-6">
          <a href="#">
            <h5 className="text-2xl font-bold text-gray-800 text-center mb-2">{Name}</h5>
            <h6 className="text-xl font-semibold text-gray-600 text-center mb-4">{Role}</h6>
          </a>
          <div className="flex justify-center space-x-4">
            {Whatsapp && (
              <a href={Whatsapp} className="text-green-500 hover:text-green-600">
                <i className="fa-brands fa-whatsapp text-3xl"></i>
              </a>
            )}
            {Email && (
              <a href={Email} className="text-blue-500 hover:text-blue-600">
                <i className="fa-solid fa-envelope text-3xl"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faculties

