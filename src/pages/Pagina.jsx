import Equipe from "./Equipe"
import Forms from "./Forms"
import Novidades from "./Novidades"
import Sobre from "./Sobre"

export default function Pagina() {
    return(
            <div className="text-spectrum ">
                <Sobre />
                <Equipe />
                <Forms />
                <Novidades />
                <div className="flex justify-center md:mt-32 mt-20">
                    <h1 className="md:text-6xl text-5xl md:w-full w-11/12 text-center">Nos siga nas redes sociais</h1>
                </div>
                <div className=" flex justify-center mt-20 pb-32">
                    <a href="https://www.instagram.com/foxpectrum/?utm_source=ig_web_button_share_sheet"><img src="../../public/icon insta.png" alt="" className="w-36" /></a>
                </div>
            </div>
    )
}