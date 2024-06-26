import Navbar from "./Navbar"

export default function Header() {
    return(
        <header className="bg-spectrum">
            <Navbar />
            <img className="hidden md:block" src="../../public/banner.png" alt="" />
        </header>
        
    )
}