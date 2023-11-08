type params = {
    params: string
}
const Loading = ({params}: params) => {
    return (
        <div className="min-h-[100vh] w-full flex items-center justify-center overflow-scroll overflow-x-hidden flex-col fixed top-0 left-0 right-0 bottom-0 backdrop-filter backdrop-blur-lg z-50">
            <div className="flex flex-col justify-center items-center h-[200px] w-[350px] rounded-lg">
                <img className="h-[80px]" src="/loading.gif" alt="loading"/>
                <h1 className="text-[40px] mt-[5px] font font-bold">{params}</h1>
            </div>
        </div>
    )
}

export default Loading