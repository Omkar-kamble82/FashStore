import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Notfound = () => {
    return ( 
        <div>
            <Navbar showcart={false} />
            <div className="pt-[50px]">
                <div className="h-[60vh] flex justify-center items-center flex-col">
                    <img className="w-[300px] sm:w-[450px]" src="/404.png" alt="404-img"/>
                    <p className="text-[50px] font font-bold text-[#e7ab3c]">Page Not Found</p>
                    <a href="/home"><button className={`my-2 w-[260px] px-10 py-3 flex justify-center shadow-lg font-semibold text-md text-white bg-[#e7ab3c] rounded-full focus:outline-none  hover:shadow-md z-10`}>Go to home</button></a>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Notfound;