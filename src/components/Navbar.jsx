import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-row justify-between items-center p-4 md:p-6">
        <img src="../../public/logo.png" alt="Logo" className="w-40 md:w-80" />
        
        <div className="md:hidden">
          <button
            className="text-foxus text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            &#9776;
          </button>
        </div>
        
        <ul className={`flex-col md:flex md:flex-row md:items-center text-foxus text-xl md:text-2xl font-bold space-y-4 md:space-y-0 md:space-x-16 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <li><a href="#sobre">Sobre nós</a></li>
          <li><a href="#contato">Contato</a></li>
          <li><a href="#novas">Novidades</a></li>
        </ul>
      </div>
    </>
  );
}
