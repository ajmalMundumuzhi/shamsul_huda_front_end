export default function Faculties (props) {
    return (
        <>
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg m-5 overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <a href="#">
            <img className="w-full h-48 object-cover" src={props?.Profile} alt="Person Image" />
          </a>
          <div className="p-6">
            <a href="#">
              <h5 className="text-2xl font-bold text-gray-800 text-center mb-2">{props?.Name}</h5>
              <h6 className="text-xl font-semibold text-gray-600 text-center mb-4">{props?.Role}</h6>
            </a>
            <div className="flex justify-center space-x-4">
              <a href={props?.Whatsapp} className="text-green-500 hover:text-green-600">
                <i className="fa-brands fa-whatsapp text-3xl"></i>
              </a>
              <a href={props?.Email} className="text-blue-500 hover:text-blue-600">
                <i className="fa-solid fa-envelope text-3xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}