import Navbar from "./Navbar"
import Banner from "../../public/banner.png"

export default function Header() {
    return(
        <header className="flex flex-col justify-center">
            <div>
                <Navbar /> 
            </div>
            <img className="hidden md:block w-full" src={Banner} alt="" />
        </header>
        
    )
}