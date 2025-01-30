import { Banner } from "../components/Banner";
import Counter from "../components/Counter";
import Message from "../components/Message";
import Mission from "../components/Mission";
import Footer from "../components/Footer";
function HomePage () {
    return (
        <>
        <Banner />
        <Counter />
        <Message />
        <Mission />
        <Footer />
        </>
    )
}

export default HomePage;

{/* <div className="promo space-y-6 flex flex-col lg:flex-row justify-center">
        <div className="item flex items-center mx-4 mt-6 space-x-2 md:flex-col">
            <img className="w-[2rem]" src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Microsoft-365?wid=40&hei=40" alt="" />
            <span className="font-medium md:w-[8rem] md:text-center text-sm my-4">Choose Microsoft 365</span>
        </div>
        <div className="item flex md:flex-col items-center mx-4 mt-6 space-x-2">
            <img className="w-[2rem]" src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Xbox-Games-Consoles?wid=40&hei=40" alt="" />
            <span className="font-medium md:w-[8rem] md:text-center text-sm my-4">Shop Xbox</span>
        </div>
        <div className="item flex items-center mx-4 mt-6 space-x-2 md:flex-col">
            <img className="w-[2rem]" src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Microsoft-365?wid=40&hei=40" alt="" />
            <span className="font-medium md:w-[8rem] md:text-center text-sm my-4">Get Windows 11</span>
        </div>
        <div className="item flex items-center mx-4 mt-6 space-x-2 md:flex-col">
            <img className="w-[2rem]" src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Surface-Devices?wid=40&hei=40" alt="" />
            <span className="font-medium md:w-[8rem] md:text-center text-sm my-4">Explore Surface Video</span>
        </div>
    </div> */}

        // <section className="flex flex-col md:flex-row  bg-gray-100 mx-1">
        //     <div className="w-full md:w-6/12 p-4 pb-[8rem] order-2 md:order-1">
        //         <h1 className="md:text-[3rem] font-bold font-sans p-4 md:pt-[12rem]">Shamsul Huda Islamic Academy</h1>
        //         <p className="p-4">shamsul huda islamic academy , a graduate institute affiliated to darul huda islamic university kerala, is a prestigious centre of islamic higher learning founded upon the philosophy of imparting islamic education combined with modern curriculum and moral upbringing. it integrates both islamic and contemporary education.</p>
        //         <button className="bg-orange-400 p-2 rounded-lg m-4" >Explore</button>
        //     </div>
        //     <div className="w-full md:w-6/12 md:p-4 flex md:justify-center items-center order-1 md:order-2">
        //         <img className="md:w-[60%] md:h-[60%] md:rounded-[3rem] " src="/images/shia.JPG " alt="" />
        //     </div>
        // </section>