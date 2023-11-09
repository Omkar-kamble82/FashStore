import Navbar from "../components/Navbar";
import { useUser } from "@clerk/clerk-react";
import { cart } from "../types/Types";
import { useState, useEffect } from "react";
// import toast from "react-hot-toast";
import Loading from "../components/Loading";

const Cart = () => {

    const { user } = useUser()
    const [cart, setCart] = useState<cart[]>()
    const [loading, setLoading] = useState(false)
    const [empty, setEmpty] = useState(false)

    const get = async () => {
        setLoading(true)
        try {
            const response = await fetch(`${import.meta.env.VITE_REACT_SERVER}${user?.fullName}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const userobj = await response.json()
            setCart(userobj.cart)
        } catch (err) {
            setEmpty(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        get()
    }, [])
    
    return ( 
        <div>
            <Navbar />
            {loading && <Loading params="Loading Cart"/>}
            <div className="py-[80px]">
                {
                    !empty ? 
                    <div className="flex min-w-[90%] flex-wrap sm:max-w-[80%] mx-auto justify-center items-center min-h-[80vh] gap-4">
                        {cart?.map((cart) => (
                            <div key={cart.id} className="p-2 w-[90%] sm:w-[335px] border-2 rounded-xl flex flex-col justify-center">
                                <img width={200} height={300} className="object-contain mx-auto  rounded-xl h-[270px] w-[250px]" src={cart.imgarr[0]} alt="" />
                                <p className="ml-[4px] mt-[10px] text-[32px] font font-bold text-[#e7ab3c]">{cart.name}</p>
                                <p className="ml-[4px] mt-[2px] text-[20px] font font-bold text-[#e7ab3c]">Total price: {cart.quantity * cart.price}</p>
                                <p className="ml-[4px] mt-[2px] text-[20px] font font-bold text-[#e7ab3c]">Total quantity: {cart.quantity}</p>
                                <p className="ml-[4px] mt-[2px] text-[20px] font font-bold text-[#e7ab3c]">Size: {cart.size}</p>
                                <div className="my-[8px] flex gap-3 ">
                                    <button className="px-2 w-[100px] font-semibold bg-emerald-500 text-[white] py-1 rounded-md text-sm hover:opacity-90 duration-500 transition-all flex justify-center items-center gap-1">update order</button>
                                    <button className="px-2 w-[100px] font-semibold bg-rose-600 text-[white] py-1 rounded-md text-sm hover:opacity-90 duration-500 transition-all flex justify-center items-center gap-1">Delete item</button>
                                    <button></button>
                                </div>
                            </div>
                        ))}
                    </div> 
                    : 
                    <p className="h-[80vh] flex justify-center items-center flex-col">
                        <img className="w-[300px] sm:w-[450px]" src="/404.png" alt="404-img"/>
                        <h1 className="text-[50px] font font-bold text-[#e7ab3c]">Cart is Empty</h1>
                        <a href="/shop"><button className={`my-2 w-[260px] px-10 py-3 flex justify-center shadow-lg font-semibold text-md text-white bg-[#e7ab3c] rounded-full focus:outline-none  hover:shadow-md z-10`}>Go to shop</button></a>
                    </p>
                }
            </div>
        </div>
    );
}
export default Cart;