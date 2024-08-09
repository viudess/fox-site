import { useState } from 'react';
import Logo from "../../public/logo.png";
import { Link } from 'react-scroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className='top-0 left-0 right-0 bg-spectrum shadow-lg'>
        <div className="flex flex-row justify-between items-center px-4 md:px-6">
          <img src={Logo} alt="Logo" className="w-40 md:w-80" />
          
          <div className="lg:hidden">
            <button
              className="text-black text-3xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              &#9776;
            </button>
          </div>
          <div className='hidden lg:block'>
            <ul className='flex flex-row items-center text-gray-700 text-2xl font-bold space-x-16'>
              <li>
                <Link to="sobre" smooth={true} duration={500} className="cursor-pointer hover:underline">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link to="contato" smooth={true} duration={500} className="cursor-pointer hover:underline">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="novas" smooth={true} duration={500} className="cursor-pointer hover:underline">
                  Novidades
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:hidden bg-[#a5adb9] px-2">
          <ul className={`py-2 flex flex-row justify-center items-center text-gray-700 md:text-xl text-lg font-bold space-x-8 ${isOpen ? 'flex' : 'hidden'}`}>
            <li>
              <Link to="sobre" smooth={true} duration={500} className="cursor-pointer hover:underline">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link to="contato" smooth={true} duration={500} className="cursor-pointer hover:underline">
                Contato
              </Link>
            </li>
            <li>
              <Link to="novas" smooth={true} duration={500} className="cursor-pointer hover:underline">
                Novidades
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
