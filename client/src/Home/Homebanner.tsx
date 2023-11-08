import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Slides } from "../data/constant";
import { motion } from "framer-motion";
import { textVariant, buttonVariant ,buttonrightVariant } from "../data/motion";

const Homebanner = () => {
    return ( 
        <div className='h-[100vh] w-[100vw] overflow-hidden relative'>
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                interval={6000}
                showArrows={false}
                showStatus={false}
            >
                {Slides.map((slide) => (
                    <div key={slide.id} className="relative">
                        <img className="h-[100vh] w-[100vw] object-cover" src={slide.image} alt={slide.heading}/>
                        <motion.div 
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.25 }} className="absolute top-[35%] sm:top-[40%] left-[5%] sm:left-[10%]"
                        >
                            <motion.h1 variants={buttonVariant(1.6)} className="text-xl font-light sm:text-3xl py-1">{slide.semiheading}</motion.h1>
                            <motion.p variants={textVariant(1.2)} className={`font font-extrabold text-[45px] sm:text-[70px] lg:text-[75px]`}>{slide.heading}</motion.p>
                            <a href="/shop"><motion.button variants={buttonrightVariant(1.6)} className="py-3 px-6 rounded-full mt-2 font-semibold text-[#f1f1f1] bg-[#e7ab3c] hover:opacity-70 cursor-pointer transition-all duration-700">{slide.button}</motion.button></a>
                        </motion.div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
export default Homebanner;