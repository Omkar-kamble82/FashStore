import { useState, useEffect } from "react";
import { useClerk } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

import Loading from "../components/Loading";
import Sidebar from "./Sidebar";

type params = {
    showcart: boolean
}

const Navbar = ({showcart}: params) => {

    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [load, setLoad] = useState(false);
    const [cartsize, setCartsize] = useState(0);

    const { signOut } = useClerk();
    const { user } = useUser()
    const navigate = useNavigate()

    const Logout = async () => {
        setLoading(true);
        try {
            await signOut();
            setLoading(false);
            navigate("/") 
            toast.success("Successfully logged out")
        } catch(e) {
            toast.error("Something went wrong")
            setLoading(false);
        }
    }

    const transition = () => {
        if(window.scrollY > 50) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    const get = async() => {
        setLoad(true)
        try {
            const response = await fetch(`${import.meta.env.VITE_REACT_SERVER}${user?.fullName}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const userobj = await response.json()
            setCartsize(userobj.cart.length)
            setLoad(false)
        } catch (err) {
            toast.error("Something went wrong")
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transition);   
        get()    
        return () => window.removeEventListener("scroll", transition);
    },[]);

    return ( 
        <nav className={`${show === true ? `bg-white` : `bg-transparent`} transition-all duration-700 fixed flex items-center justify-between w-full p-2 sm:px-6 sm:py-3 z-[2]`}>
            {loading && <Loading params="Logging Out" />}
            {load && <Loading params="Loading.." />}
            <div className="flex gap-4 lg:gap-10">
                <a href="/home"><img className="w-[150px] cursor-pointer md:w-[200px]" src="/logo.png" alt="logo" /></a>
                <div className="text-black gap-4 lg:gap-10 text-[18px] font-semibold items-center hidden md:flex">
                    <a href="/home"><li className="cursor-pointer hover:underline hover:text-[#e7ab3c] transition-all duration-700">Home</li></a>
                    <a href="/shop"><li className="cursor-pointer hover:underline hover:text-[#e7ab3c] transition-all duration-700">Shop</li></a>
                    <a href="/about"><li className="cursor-pointer hover:underline hover:text-[#e7ab3c] transition-all duration-700">About</li></a>
                    <a href="/contact"><li className="cursor-pointer hover:underline hover:text-[#e7ab3c] transition-all duration-700">Contact</li></a>
                </div>
            </div>
            <div className="flex items-center gap-1 sm:gap-4">
                {!showcart && <a href="/cart"><div className="relative flex w-[50px] h-[50px]">
                    <img width={30} height={30} src="/Navbar/cart.svg" className="cursor-pointer" alt="left_arrow"/>
                    <div className="px-[4px] rounded-full text-sm top-1 right-3 bg-rose-600 absolute text-white">{cartsize}</div>
                </div></a>}
                <button onClick={() => Logout()} className="py-3 px-6 rounded-full font-semibold text-[#fff] bg-[#e7ab3c] hover:opacity-70 cursor-pointer transition-all duration-700 hidden md:block">Logout</button>
                <div className="block md:hidden"><Sidebar /></div>
            </div>
        </nav>
    );
}

export default Navbar;