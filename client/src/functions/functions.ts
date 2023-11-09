import { sendCart } from "../types/Types"
import toast from "react-hot-toast";

export const Addtocart = async (cart: sendCart) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_REACT_SERVER}addcart`, {
            method: 'POST',
            body: JSON.stringify(cart),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (!response.ok) {
            toast.error("Something went wrong")
            return
        }
        toast.success("Product added to cart successfully")
    } catch (err) {
        toast.error("Something went wrong")
    } 
}
