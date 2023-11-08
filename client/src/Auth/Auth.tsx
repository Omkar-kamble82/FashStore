import Authnav from "../components/Authnav";

const Auth = () => {
    return ( 
        <>
            <Authnav />
            <div className="w-[100vw] h-[90vh] flex justify-center items-center">
                <div className="h-[280px] flex flex-col justify-center items-center bg-[white] w-[90vw] sm:w-[450px] border-[2px] rounded-xl drop-shadow-lg mx-auto">
                    <a href="/sign-up" className="w-[90%] h-[50px] p-2 flex justify-center items-center gap-3 bg-[#171717] rounded-lg cursor-pointer"><img className="h-[20px] sm:h-[30px]" src="/google_icon.svg" alt="google-icon"/><button className="text-white font-bold sm:text-xl">Sign Up with google</button></a>
                    <p className="mt-[15px]">Already a member? <span className="underline cursor-pointer text-[#4f4f4f]"><a className="font-bold" href="/sign-in">Sign in</a></span></p>
                </div>
            </div>
        </>
    );
}

export default Auth;