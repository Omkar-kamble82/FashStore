const Footer = () => {
    return (
        <div className="bottom-0 w-full left-0 right-0 gap-6 flex px-4 justify-between md:px-10 py-14 items-center flex-wrap mt-[30px] min-h-[300px] (min-width: 1020px):px-14 bg-[#f5f5f7]">
            <div className="text-[#6e6e73]">
                <img width={300} height={250} src="/logo.png" alt=""/>
                <h5 className="mt-[40px]"><span className="font-semibold text-xl">Address:</span> 123 Main Street, Anytown, USA</h5>
                <h5 className="my-1"><span className="font-semibold text-xl">Phone no:</span> (555) 123-4567</h5>
                <h5><span className="font-semibold text-xl">Email:</span> example@email.com</h5>
            </div>
            <div className="text-[#6e6e73] text-xl">
                <h1 className="text-[35px] font-semibold text-[#191919] py-2 leading-[40px]">Join Our Newsletter Now </h1>
                <p className="mt-[25px] text-[15px]">Get E-mail updates about our latest shop and special offers.</p>
                <div className="my-4 flex justify-center items-center">
                    <input type="email" className="h-[45px] w-[80%] text-[15px] outline-[#e7ab3c] px-4 py-2" placeholder="Enter your email..."/>
                    <button className="px-3 py-2 h-full w-[20%] text-[15px] bg-[#e7ab3c] font-semibold text-white">Send</button>
                </div>
            </div>
            <div className="text-[#6e6e73] text-xl">
                <h1 className="text-[35px] font-semibold text-[#191919] py-2">Links</h1>
                <div className="flex gap-3  mt-[25px] items-center flex-wrap sm:flex-col sm:gap-1 sm:items-start sm:justify-start">
                <a href="/home"><li className="cursor-pointer hover:underline hover:text-[#e7ab3c] transition-all duration-700">Home</li></a>
                <a href="/shop"><li className="cursor-pointer hover:underline hover:text-[#e7ab3c] transition-all my-1 duration-700">Shop</li></a>
                <a href="/about"><li className="cursor-pointer hover:underline hover:text-[#e7ab3c] transition-all duration-700">About</li></a>
                <a href="/contact"><li className="cursor-pointer hover:underline hover:text-[#e7ab3c] transition-all mt-1 duration-700">Contact</li></a>
            </div></div>
        </div>
    )
}

export default Footer;