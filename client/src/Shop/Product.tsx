import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { storeData } from "../data/constant";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

const Product = () => {

    const { id } = useParams()
    const { user } = useUser()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [removeloading, setRemoveLoading] = useState(false)
    const [mainimg, setMainimg] = useState("")
    const [name, setName] = useState("")
    const [imgarr, setImgarr] = useState<string[]>()
    const [price, setPrice] = useState(0)
    const [noproduct, setNoproduct] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [size, setSize] = useState("")
    const [error, setError] = useState(false)
    const [exist, setExist] = useState(false)

    const get = async() => {
        setLoading(true)
        try {
            const response = await fetch(`${import.meta.env.VITE_REACT_SERVER}${user?.fullName}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const userobj = await response.json()
            if(id) {
                setExist(userobj.ids.includes(id))
            }
            setLoading(false)
        } catch (err) {
            toast.error("Something went wrong")
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        setLoading(true)
        try {
            const item = storeData.filter(item => item.id === Number(id))
            setMainimg(item[0].images[0])
            setImgarr(item[0].images)
            setName(item[0].name)
            setPrice(item[0].price)
            get()
            const myTimeout = setTimeout(() => setLoading(false), 1000);
            console.log(myTimeout)
        } catch (e) {
            setNoproduct(true)
            setLoading(false)
        }
    }, [id])

    const increment = () => {
        if(quantity >= 3) {
            setError(true)
            return
        }
        setQuantity(quantity + 1)
    }
    const decrement = () => {
        if(quantity <= 1) return
        setError(false)
        setQuantity(quantity - 1)
    }

    const addtocard = async () => {
        if(quantity === 0 || size === "" || size === "Size 0" ){
            toast.error("Choose size")
            return
        }
        const cart = {username: user?.fullName, email: user?.emailAddresses[0].emailAddress, cart: {name, imgarr, price, quantity, size, id}, id: id}
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
        navigate("/cart")
    }
    
    const remove = async () => {
        setRemoveLoading(true)
        const cart = { id: id, username: user?.fullName }
        try {
            const response = await fetch(`${import.meta.env.VITE_REACT_SERVER}updatecart`, {
                method: 'PUT',
                body: JSON.stringify(cart),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            console.log(response)
            setRemoveLoading(false)
            navigate("/cart")
            toast.success("Item deleted successfully")
        } catch (err) {
            toast.error("Something went wrong")
        } finally {
            setLoading(false)
        }
    }


    return ( 
        <div>
            {loading && <Loading params="Loading product"/>}
            {removeloading && <Loading params="Removing product"/>}
            <Navbar showcart={false}/>
            {!noproduct ? 
                (
                    <div className="flex min-h-[100vh] py-[100px] px-[15px] sm:py-[40px] lg:py-[80px] bg-[#f1f1f1] justify-center items-center flex-col md:flex-row gap-4">
                        <div className="flex flex-1 flex-col">
                            <img className="h-[400px] w-[90%] mx-auto md:w-[70%] lg:w-[50%] object-cover" src={mainimg} alt="product-img"/>
                                <div className="flex w-[100%] md:w-[60%] mx-auto mt-[10px] justify-evenly">
                                    {imgarr?.map((image) => (
                                        <img onClick={() => setMainimg(image)} key={image} className="h-[80px] cursor-pointer w-[60px] object-fill" src={image} alt="product_img" />
                                    ))}
                                </div>
                        </div>
                        <div className="mx-[15px] flex-1">
                            <p className="text-[50px] lg:text-[65px] font-bold font text-[#e7ab3c]">{name}</p>
                            <p className="text-[30px] lg:text-[45px] font-bold font text-[#e7ab3c]">Price: ${price}</p>
                            <p className="text-[20px] lg:text-[25px] mt-[15px] font text-[#e7ab3c]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo alias voluptas mollitia eligendi. Dignissimos, saepe dolores </p>
                            <div className="flex item-center gap-5 mt-[10px]">
                                <span className="text-xl py-2 font-bold text-[#e7ab3c] font">Size: </span>
                                <select onChange={(e) => setSize(e.target.value)} className="outline-none bg-transparent border-[1px] border-[#e7ab3c] py-2 w-[190px] text-[#e7ab3c] px-4">
                                    <option value={"Size 0"}>Choose a size</option>
                                    <option value={"Size S"}>Size S</option>
                                    <option value={"Size M"}>Size M</option>
                                    <option value={"Size L"}>Size L</option>
                                    <option value={"Size XL"}>Size XL</option>
                                </select>
                            </div>
                            <div className="my-[20px]">
                                <div className="flex items-center gap-3">
                                    <span className="text-xl py-2 font-bold text-[#e7ab3c] font">Quantity: </span>
                                    <div className="flex items-center justify-start">
                                        <img onClick={decrement} className="h-[40px] cursor-pointer w-[40px] border-[1px] border-[#e7ab3c] p-2" width={30} height={30} src="/product/minus.svg" alt="minus_icon" />
                                        <h1 className="h-[40px] w-[40px] border-t-[1px] border-b-[1px] text-xl font-bold text-[#e7ab3c] flex justify-center items-center border-[#e7ab3c]">{quantity}</h1>
                                        <img onClick={increment} className="h-[40px] cursor-pointer w-[40px] border-[1px] border-[#e7ab3c] p-2" width={30} height={30} src="/product/add.svg" alt="add_icon" />
                                    </div>
                                </div>
                            </div>
                            {error && <span className="text-rose-600 text-[14px] mt-[2px]">*Max Limit reached</span>}
                            {exist ? <button onClick={remove} className={`my-2 w-[200px] px-10 py-3 flex justify-center shadow-lg font-semibold text-sm text-white bg-[#e7ab3c] rounded-full focus:outline-none  hover:shadow-md z-10`}>Remove from cart</button> :<button onClick={addtocard} className={`my-2 w-[160px] px-10 py-3 flex justify-center shadow-lg font-semibold text-sm text-white bg-[#e7ab3c] rounded-full focus:outline-none  hover:shadow-md z-10`}>Add to cart</button>}
                        </div>
                    </div>
                ) : 
                (
                    <p className="h-[100vh] flex justify-center items-center flex-col">
                        <img className="w-[300px] sm:w-[450px]" src="/404.png" alt="404-img"/>
                        <a href="/home"><button className={`my-2 w-[260px] px-10 py-3 flex justify-center shadow-lg font-semibold text-md text-white bg-[#e7ab3c] rounded-full focus:outline-none  hover:shadow-md z-10`}>Go Back to homepage</button></a>
                    </p>
                )
            }
        </div>
    );
}

export default Product;