import Navbar from "./Navbar"
import Banner from "../../public/banner.png"
import Banner2 from "../../public/banner2.png"

export default function Header() {
    return(
        <header className="flex flex-col justify-center">
            <div>
                <Navbar /> 
            </div>
            <img className="hidden md:block dark:hidden w-full" src={Banner} alt="" />
            <img className="hidden dark:md:block w-full" src={Banner2} alt="" />
        </header>
        
    )
}