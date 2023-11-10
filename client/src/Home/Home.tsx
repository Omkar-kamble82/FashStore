import Navbar from "../components/Navbar";
import Homebanner from "./Homebanner";
import Categories from "./Categories";
import Homeproduct from "./Homeproduct";
import { Womendata, MenData, AccessoriesData } from "../data/constant";
import Footer from "../components/Footer";
// import { useEffect } from "react";


const Home = () => {

    return ( 
        <div className="overflow-x-hidden">
            <Navbar showcart={false}/>
            <Homebanner />
            <Categories />
            <Homeproduct dataitems={Womendata} heading={"Women's Clothing"} id={"Women"}/>
            <Homeproduct dataitems={MenData} heading={"Men's Clothing"} id={"Men"}/>
            <Homeproduct dataitems={AccessoriesData} heading={"Accessories"} id={"Accessories"}/>
            <Footer />
        </div>
    );
}

export default Home;