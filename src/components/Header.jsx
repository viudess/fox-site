import Navbar from "./Navbar"
import Banner from "../../public/banner.png"

export default function Header() {
    return(
        <header >
            <div className="">
                <Navbar /> 
            </div>
            <img className="hidden md:block" src={Banner} alt="" />
        </header>
        
    )
}