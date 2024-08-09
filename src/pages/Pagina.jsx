import Equipe from "./Equipe"
import Forms from "./Forms"
import Novidades from "./Novidades"
import Sobre from "./Sobre"
import ImgInsta from "../../public/icon insta.png"
import Projeto from "./Projeto"

export default function Pagina() {
    return(
            <div className="text-tpg">
                <Sobre />
                <Projeto />
                <Equipe />
                <Forms />
                <Novidades />
                <div className="flex justify-center md:mt-32 mt-20">
                    <h1 className="md:text-6xl text-[40px] md:w-full w-11/12 text-center">Nos siga nas redes sociais</h1>
                </div>
                <div className=" flex justify-center mt-20 pb-24">
                    <a href="https://www.instagram.com/foxpectrum/?utm_source=ig_web_button_share_sheet"><img src={ImgInsta} alt="" className="w-36" /></a>
                </div>
            </div>
    )
}