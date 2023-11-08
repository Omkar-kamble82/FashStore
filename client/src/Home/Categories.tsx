import { Categoriesdata } from "../data/constant";

const Categories = () => {
    return (
        <div>
            <div className="px-3 py-10 flex items-center justify-center gap-5 flex-wrap">
                {Categoriesdata.map((data) => {
                    return(
                        <a href={`#${data.heading}`} className="min-w-[240px] w-[360px] lg:w-[340px] border-2 min-h-[360px] flex justify-between relative items-center cursor-pointer hover:z-[2] hover:bg-[#e7ab3c]/70 transition-all duration-500" key={data.id}>
                            <img src={data.image} className="" alt="left_arrow"/>
                            <h1 className="text-3xl absolute top-10 left-4 font-bold">{data.heading}</h1>
                            <h1 className="text-xl text-[#e7ab3c] absolute bottom-10 left-4 font-bold underline">Shop Now</h1>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Categories;