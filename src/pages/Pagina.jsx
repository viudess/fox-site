import Equipe from "./Equipe"
import Forms from "./Forms"
import Novidades from "./Novidades"
import Sobre from "./Sobre"

export default function Pagina() {
    return(
            <div className="text-spectrum ">
                <Sobre />
                <div className="flex justify-center mt-32">
                    <h1 className="text-6xl">Nossa equipe</h1>
                </div>
                <Equipe />
                <Forms />
                <Novidades />
                <div className="flex justify-center mt-32">
                    <h1 className="text-6xl">Nos siga nas redes sociais</h1>
                </div>
                <div className=" flex justify-center mt-20 mb-32">
                    <a href="https://www.instagram.com/foxpectrum/?utm_source=ig_web_button_share_sheet"><img src="../../public/icon insta.png" alt="" className="w-36" /></a>
                </div>
            </div>
    )
}