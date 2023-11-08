import Navbar from "../components/Navbar";
import Topbanner from "../components/Topbanner";
import Footer from "../components/Footer";

import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Contactus = () => {

    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")

    const navigate = useNavigate()

    const Submit = () => {
        if(email === "" || msg === "") {
            toast.error("Fill all required fields")
            return 
        }
        console.log(email, msg)
        navigate("/home")
        toast.success("Thanks for your feedback")
    }

    return ( 
        <div>
            <Navbar />
            <div className="pt-[100px]">
                <Topbanner image={"/contact_banner.jpg"} title={"Contact Us"}/>
            </div>
            <div className="max-w-[1000px] mx-4 gap-2 border-2 lg:mx-auto border-[#a8a8aa] rounded-lg min-h-[80vh] py-6 my-[40px] flex justify-center items-center flex-col lg:flex-row xl:max-w-[1200px]">
                <div className="m-3 flex justify-center items-center gap-4 flex-col flex-1/2 w-full h-full">
                    <h1 className="text-[40px] sm:text-[50px] font-extralight text-[#e7ab3c]">Send a message</h1>
                    <input onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="Enter your Email..." className="p-3 outline-[#e7ab3c] h-[60px] w-[90%] border-2"/>
                    <textarea onChange={(e) => setMsg(e.target.value)} required className="outline-[#e7ab3c] h-[200px] w-[90%] border-2 resize-none p-4" placeholder="Enter a message...."/>
                    <button onClick={Submit} className="py-3 px-auto text-center mb-[15px] rounded-full font-semibold text-[#f1f1f1] bg-[#e7ab3c] w-[90%] hover:opacity-70 cursor-pointer transition-all duration-700 block">Submit</button>
                </div>
                <div className="w-[90%] h-[2px] mx-auto lg:w-[2px] lg:h-[90%] lg:my-auto bg-[#a8a8aa]"/>
                <div className="p-1 sm:p-3 flex  gap-1 flex-col justify-between items-center flex-1/2 w-full h-full mt-[15px]">
                    <h1 className="text-[40px] font-light text-[#e7ab3c]">Address: </h1>
                    <p className="text-[#6e6e73] text-center text-[12px] sm:text-[16px]">123 Main Street, Anytown, USA</p>
                    <h1 className="text-[40px] font-light text-[#e7ab3c] mt-[20px] lg:mt-[40px]">Phone no: </h1>
                    <p className="text-[#6e6e73] mb-[20px] lg:mb-[40px] text-[12px] sm:text-[16px]"> (555) 123-4567</p>
                    <h1 className="text-[40px] font-light text-[#e7ab3c]">Email: </h1>
                    <p className="text-[#6e6e73] text-[12px] sm:text-[16px]">example@email.com</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Contactus;