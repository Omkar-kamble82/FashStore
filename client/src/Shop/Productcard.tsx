import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type dataobj = {
    data: { id: number, name: string, price: number, category: string, images: string[] }
}

const Productcard = (data: dataobj) => {

    const [btn, setbtn] = useState(false)

    const navigate = useNavigate()

    return ( 
        <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} className="product w-[320px] lg:w-[300px] border-2 p-2 rounded-3xl" onMouseOver={() => (setbtn(true))} onMouseOut={() => (setbtn(false))}>
            <div className='w-full cursor-pointer rounded-3xl mx-auto px-3 py-6 relative min-h-[350px] lg:h-[400px] overflow-hidden'>
                <img width={200} height={300} className="absolute inset-0 w-full h-full object-cover hover:scale-110 overflow-hidden transition-all duration-500" src={data.data.images[0]} alt="" />
                <button onClick={() => navigate(`/product/${data.data.id}`)}  className={`absolute bottom-4 left-[30%] lg:left-[30%] bg-[#e7ab3c] py-2 px-6 rounded-full text-[#fff] font-semibold ${!btn ? `translate-y-[140%]` : `translate-y-[0%]`} transition-all duration-700`}>View Item</button>
            </div>
            <div className="mt-[18px] mb-[4px] flex items-center justify-between">
                <div>
                    <p onClick={() => {}} className="text-[19px] cursor-pointer font-bold text-[#e7ab3c] hover:underline duration-700 transition-all">{data.data.name}</p>
                    <p className="text-[15px] text-[#e7ab3c] font-semibold">${data.data.price}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default Productcard;