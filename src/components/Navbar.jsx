import { useState } from 'react';
import Logo from "../../public/logo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav>
    <div className="flex flex-row justify-between items-center px-4 md:px-6 bg-spectrum">
        <img src={Logo} alt="Logo" className="w-40 md:w-80" />
        
        <div className="lg:hidden">
          <button
            className="text-foxus text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            &#9776;
          </button>
        </div>
        <div className='hidden lg:block'>
            <ul className={`flex flex-row items-center text-foxus text-2xl font-bold space-x-16`}>
                <li><a href="#sobre">Sobre nós</a></li>
                <li><a href="#contato">Contato</a></li>
                <li><a href="#novas">Novidades</a></li>
            </ul>
        </div>
      </div>
      <div className="lg:hidden bg-[#a5adb9] px-2">
            <ul className={`py-2 flex flex-row justify-center items-center text-foxus md:text-xl text-lg font-bold space-x-8 ${isOpen ? 'flex' : 'hidden'} lg:flex`}>
                <li><a href="#sobre">Sobre nós</a></li>
                <li><a href="#contato">Contato</a></li>
                <li><a href="#novas">Novidades</a></li>
            </ul>
        </div>
    </nav>
      
        
    </>
  );
}
