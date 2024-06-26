import Navbar from "./Navbar"
import Banner from "../../public/banner.png"

export default function Header() {
    return(
        <header className="bg-spectrum">
            <Navbar />
            <img className="hidden md:block" src={Banner} alt="" />
        </header>
        
    )
}