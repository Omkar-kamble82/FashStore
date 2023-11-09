import Navbar from "../components/Navbar";
import { storeData, Categories } from "../data/constant";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Productcard from "./Productcard";

const Shop = () => {

    const [category, setCategory] = useState("All Category")
    const [productlist, setProductlist] = useState(storeData)

    useEffect(() => {
        if (category === 'All Category') {
            setProductlist(storeData)
            return
        }
        const list = storeData.filter(data => data.category === category)
        setProductlist(list)
    }, [category]);

    return ( 
        <div>
            <Navbar />
            <div className="pt-[80px] px-[15px] md:px-[10px]">
                    <div className="py-[30px] px-[15px] md:px-[40px]">
                        <p className="pb-[20px] text-[22px] font-bold md:text-3xl">Select a category</p>
                        <span className="flex items-center flex-wrap gap-1 md:gap-4">
                            {Categories.map(item => {
                                return(
                                    <h1 key={item.id} onClick={() => setCategory(item.category)} className={`text-[17px] md:text-2xl px-4 py-2 hover:bg-black/10 rounded-full transition-all duration-700 cursor-pointer hover:text-[#e7ab3c] hover:font-bold ${category === item.category ? "bg-black/10 text-[#e7ab3c] font-bold" : "font-extralight"}`}>{item.category}</h1>
                                )
                            })}
                        </span>

                    </div>
                    <div className="flex mt-[10px] overflow-hidden justify-center items-center gap-4 gap-y-6 flex-wrap">
                        <AnimatePresence>
                            {productlist?.map(data => {
                                return (
                                    <motion.div layout key={data.id}>
                                        <>
                                            <Productcard data = {data} />
                                        </>
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            <Footer />
        </div>
    );
}
export default Shop;