import { dataitem } from "../types/Types";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    dataitems: dataitem[],
    heading: string
    id: string
}

const Homeproduct = ({dataitems, heading, id}: Props) => {

    const [btn, setbtn] = useState(false)
    const navigate = useNavigate()

    return (
        <div id={id} className="mb-[20px] mt-[40px] px-2">
            <h1 className={`font font-light text-[45px] sm:text-[65px] mb-[20px] text-center text-[#e7ab3c]`}>{heading}</h1>
            <div className="flex w-full overflow-hidden justify-center items-center gap-4 gap-y-6 flex-wrap">
                {dataitems.map((data) => {
                    return (
                        <div key={data.id} className="border-2 p-2 rounded-2xl" onMouseOver={() => (setbtn(true))} onMouseOut={() => (setbtn(false))}>
                            <div className='w-[300px] cursor-pointer rounded-3xl mx-auto px-3 py-6 relative min-h-[350px] lg:h-[400px] overflow-hidden'>
                                <img width={400} height={300} className="absolute inset-0 w-full h-full object-cover hover:scale-110 overflow-hidden transition-all duration-500" src={data.images[0]} alt="" />
                                <button onClick={() => navigate(`/product/${data.id}`)}  className={`absolute bottom-4 left-[30%] lg:left-[30%] bg-[#e7ab3c] py-2 px-6 rounded-full text-[#fff] font-semibold ${!btn ? `translate-y-[140%]` : `translate-y-[0%]`} transition-all duration-700`}>View Item</button>
                            </div>
                            <div className="mt-[18px] mb-[4px] flex items-center justify-between">
                                <div>
                                    <p className="text-[19px] cursor-pointer font-bold text-[#e7ab3c] hover:underline duration-700 transition-all">{data.name}</p>
                                    <p className="text-[15px] font-light text-[#e7ab3c]">${data.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-center items-center">
                <a href="/shop"><button className="my-[20px] py-2 px-6 rounded-full bg-[#e7ab3c] text-white font-bold border-2 border-[#e7ab3c] transition-all duration-700 hover:bg-transparent hover:text-[#e7ab3c]">Shop Now</button></a>
            </div>
        </div>
    )
}

export default Homeproduct