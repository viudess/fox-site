import ImgInsta from "../../public/icon insta.png";
import ImgLinkedin from "../../public/Group 2 1.png";
import Ana from "../../public/ana.png";
import Viudes from "../../public/viudes.png";
import Julia from "../../public/julia.png";
import Laura from "../../public/laura.png";
import Pedro from "../../public/pedro.png";
import Yannie from "../../public/yannie.png"


function cards(foto, nome, linkInsta, linkedIn) {
    return (
            <div className="flex flex-col items-center mt-7">
                <img src={foto} alt="" className="md:size-36 size-32 rounded-full mb-3"/>
                <h1 className="mb-3 md:text-2xl text-center text-xl text-tpg">{nome}</h1>
                <div className="flex flex-row space-x-3">
                    <a href={linkInsta}><img src={ImgInsta} alt="" className="w-12"/></a>
                    <a href={linkedIn}><img src={ImgLinkedin} alt="" className="w-12"/></a>
                </div>
            </div>
    )
}

export default function Equipe(){

    const time = [
        {
          foto: Ana,
          nome: "Ana Oliveira",
          linkInsta: "https://www.instagram.com/nanagoround_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          linkedIn: ""
        },
        {
          foto: Viudes,
          nome: "Eduardo Viudes",
          linkInsta: "https://www.instagram.com/viudes_ch/?utm_source=ig_web_button_share_sheet",
          linkedIn: "https://www.linkedin.com/in/eduardo-chorro-0978ba28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
          foto: Julia,
          nome: "Julia Leal",
          linkInsta: "https://www.instagram.com/lju.gomes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          linkedIn: "https://www.linkedin.com/in/j%C3%BAlia-leal-benevides-gomes-4a128224a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
          foto: Laura,
          nome: "Laura Kalybatas",
          linkInsta: "https://www.instagram.com/laurakalybatas/?utm_source=ig_web_button_share_sheet",
          linkedIn: ""
        },
        {
          foto: Pedro,
          nome: "Pedro Araújo",
          linkInsta: "https://www.instagram.com/p.araujozr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          linkedIn: "https://www.linkedin.com/in/pedro-ara%C3%BAjo-8a054b314"
        },
        {
          foto: Yannie,
          nome: "Yannie Yshin",
          linkInsta: "https://www.instagram.com/4luv7_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          linkedIn: ""
        }
      ];

      return (
        <>
        <div className="flex justify-center md:mt-32 mt-16">
            <h1 className="md:text-6xl text-5xl text-center">Nossa equipe</h1>
        </div>
          <div className="xl:flex xl:flex-row xl:space-x-6 xl:justify-center xl:mt-16 mt-10 grid md:grid-cols-3 grid-cols-2">
            {time.map(membro => 
              cards(membro.foto, membro.nome, membro.linkInsta, membro.linkedIn)
            )}
          </div>
        </>
        
      );

}