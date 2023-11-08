type Props = {
    image: string, 
    title: string
}

const Topbanner = ({image, title}: Props) => {
    return (
        <div className='relative w-full h-[30vh] sm:h-[35vh] lg:h-[40vh]'>
            <img height={2000} width={2000} src={image} alt="banner_img" className="object-cover w-full h-full"/>
            <h1 className="absolute inset-0 text-center z-[3] text-[58px] text-[#e7ab3c] font-bold justify-center items-center flex">{title}</h1>
            <div className="absolute inset-0 bg-black/60 z-[2]"/>
        </div>
    )
}

export default Topbanner