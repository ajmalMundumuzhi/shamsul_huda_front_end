export default function About() {
  return (
    <>
      <div className="flex flex-col items-center">
        {/* Single Row for All Three Cards */}
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Card 1 - OUR PHILOSOPHY */}
          <div className="w-full lg:w-1/3 max-w-sm bg-white rounded-lg shadow-sm m-5 border-2 border-white hover:shadow-[0_0_15px_5px_rgba(255,223,0,0.7)] p-4">
            <div className="flex flex-col items-center pb-10">
              <h5 className="mb-1 text-4xl pt-4 pb-4 text-black font-bold">OUR PHILOSOPHY</h5>
              <span className="text-sm text-black-200 text-justify p-3 font-semibold">
                Shamsul Huda is founded upon the educational philosophy of Islam which in turn is inspired by the principles of hierarchy and unity of knowledge in its intents, contents, and methods. Therefore, our philosophy is based on recognizing the Almighty Allah as the fountain-source of all knowledge as well as acknowledging Him as the ultimate end of every human endeavor; and believing that His guidance (Hidaya) is an absolute essentiality for human development. Hence, we stand with a clear-cut philosophy that the knowledge should be acquired, internalized, and propagated (Ta'lim, Tarbiyah, Dawah) for the sake of the Almighty Allah and for the benefit of the self and people.
              </span>
            </div>
          </div>

          {/* Card 2 - MISSION */}
          <div className="w-full lg:w-1/3 max-w-sm bg-white rounded-lg shadow-sm m-5 border-2 border-white hover:shadow-[0_0_15px_5px_rgba(255,223,0,0.7)] p-4">
            <div className="flex flex-col items-center pb-10">
              <h5 className="mb-1 text-4xl pt-4 pb-4 text-black font-bold">MISSION</h5>
              <span className="text-sm text-black-200 text-justify p-3 font-semibold">
                To develop an innovative system of Islamic education capable of grooming a group of 'ulema' who can spread the message of Islam throughout the world. To promote propagators of Islam who would be talented in religious and modern teachings and could understand the new challenges that the religion has been facing. To impart the Islamic religious education combined with modern sciences among its products as to help them in facilitating widespread propagation of Islam. To create a spiritual environment that instills within students the love and subservience to the Almighty Allah. To provide quality and holistic education that would help to sharpen students' capabilities and ensure their all-round improvement in spiritual, social, psychological as well as intellectual spheres all of which guided by Islamic principles and teachings.
              </span>
            </div>
          </div>

          {/* Card 3 - VISION */}
          <div className="w-full lg:w-1/3 max-w-sm bg-white rounded-lg shadow-sm m-5 border-2 border-white hover:shadow-[0_0_15px_5px_rgba(255,223,0,0.7)] p-4">
            <div className="flex flex-col items-center pb-10">
              <h5 className="mb-1 text-4xl pt-4 pb-4 text-black font-bold">VISION</h5>
              <span className="text-sm text-black-200 text-justify p-3 font-semibold">
                To develop an Islamic educational framework in order to prepare religious scientists (‘ulama) who acquire, practice and propagate Islam, and to be a center for intellectual leadership for holistic empowerment of society rooted in moral values and principles and to offer a comprehensive educational system to provide opportunities for students of different walks of the society instilled with skill and values.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}