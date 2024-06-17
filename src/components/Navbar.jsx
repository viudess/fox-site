export default function Navbar() {
    return(
    <>
    <div className="flex flex-row justify-between items-center">
        <img src="../../public/logo.png" alt="" className="w-80 ml-10" />
        <ul className="flex justify-end flex-row text-foxus text-2xl font-bold p-6 space-x-16 mr-4">
            <li><a href="#sobre">Sobre nós</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><a href="#novas">Novidades</a></li>
        </ul>
    </div>
    </>
    )
}