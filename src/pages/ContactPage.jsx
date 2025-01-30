function ContactPage () {
    return (
        <>
            <div className="h-screen flex flex-col">
      {/* First half of the screen with image */}
      <div className="h-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/images/shia.JPG')" }}>
        {/* Optional overlay if needed */}
        <div className="bg-black opacity-50 h-full w-full"></div>
      </div>

      {/* Second half of the screen with contact information */}
      <div className="h-1/2 p-6 flex flex-col justify-start items-center bg-white">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 underline hover:text-red-500"> Contact Us</h1>
        
        <p className="text-lg text-black mb-2">Shamsul Huda Islamic Academy</p>
        <p className="text-lg text-black mb-2">Kuttikkattoor, Kozhikode</p>
        <p className="text-lg text-black mb-2">Kuttikkattoor PO</p>
        <p className="text-lg text-black mb-2">Kozhikode Distl.</p>
        <p className="text-lg text-black mb-2">Pin: 673008</p>
        <p className="text-lg text-black mb-6">Kerala, India</p>

        {/* Embed Google Map */}
        <div className="w-full h-[300px] bg-gray-200">
          <iframe
            className="w-full h-full"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=420&height=288&hl=en&q=Kuttikatoor, Shamsul Huda Islamic Academy&t=h&z=14&ie=UTF8&iwloc=B&output=embed"
          ></iframe>
        </div>
      </div>
    </div>

        </>
    )
}

export default ContactPage;




{/* <div className="relative w-[420px] h-[288px]">
  <div className="overflow-hidden w-full h-full bg-none">
    <iframe
      className="w-[420px] h-[288px]"
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
      src="https://maps.google.com/maps?width=420&height=288&hl=en&q=Kuttikatoor, Shamsul Huda Islamic Academy&t=h&z=14&ie=UTF8&iwloc=B&output=embed"
    ></iframe>
  </div>
  {/* Optional: Remove this link if not needed */}
  {/* <a href="https://sprunkiplay.com" className="absolute bottom-0 right-0 text-sm text-blue-500 hover:underline">
    Sprunki
  </a>
</div>  */}