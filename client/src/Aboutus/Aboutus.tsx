import Navbar from "../components/Navbar";
import Topbanner from "../components/Topbanner";
import Footer from "../components/Footer";

const Aboutus = () => {
    return ( 
        <div>
            <Navbar />
            <div className="pt-[100px]">
                <Topbanner image={"/about_banner.jpg"} title={"About Us"}/>
                <div className="mt-[20px] px-4 md:px-8">
                    <h1 className="text-[25px] text-[#e7ab3c] font-semibold">About FashStore:</h1>
                    <p className="mt-[10px] text-[14px] text-justify text-[#6e6e73]">Welcome to FashStore, your ultimate destination for trendy and fashionable clothing and accessories. We pride ourselves on offering a curated selection of stylish apparel for both women and men, ensuring that you stay ahead of the fashion curve.At FashStore, we understand that fashion is more than just clothing; its a form of self-expression and a way to showcase your unique style. Thats why we carefully handpick every item in our collection to bring you the latest trends, high-quality materials, and a wide range of options to suit your personal taste.</p>
                    <h1 className="text-[25px] mt-[25px] text-[#e7ab3c] font-semibold">For Women:</h1>
                    <p className="mt-[10px] text-[14px] text-justify text-[#6e6e73]">Our womens collection caters to all occasions and preferences, whether youre looking for casual everyday wear, elegant evening dresses, or chic office attire. Discover a plethora of options, including tops, dresses, skirts, pants, and more. Complete your outfit with our stunning range of accessories, including handbags, jewelry, and shoes, designed to elevate your style and make a statement.</p>
                    <h1 className="text-[25px] mt-[25px] text-[#e7ab3c] font-semibold">For Men:</h1>
                    <p className="mt-[10px] text-[14px] text-justify text-[#6e6e73]">Our mens collection is designed to cater to the modern mans fashion needs. Whether youre dressing for a formal event, a casual weekend outing, or updating your wardrobe essentials, we have you covered. Explore our range of shirts, t-shirts, trousers, jeans, jackets, and more. Complement your look with our stylish accessories, including watches, belts, and wallets, that add a touch of sophistication to any ensemble.</p>
                    <h1 className="text-[25px] mt-[25px] text-[#e7ab3c] font-semibold">Quality and Customer Satisfaction:</h1>
                    <p className="mt-[10px] text-[14px] text-justify text-[#6e6e73]">We understand the importance of quality when it comes to clothing and accessories. Thats why we collaborate with renowned brands and trusted manufacturers who share our commitment to delivering products that are not only fashionable but also durable and comfortable. Our team meticulously inspects each item to ensure it meets our high standards before it reaches your doorstep. Customer satisfaction is at the core of everything we do. We strive to provide an exceptional shopping experience, from seamless browsing and effortless ordering to secure payment and timely delivery. Our friendly and knowledgeable customer support team is always ready to assist you with any queries or concerns you may have.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Aboutus;