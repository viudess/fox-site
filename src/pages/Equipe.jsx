function cards(foto, nome, linkInsta, linkedIn) {
    return (
            <div className="flex flex-col items-center">
                <img src={foto} alt="" className="w-40 h-40 rounded-full mb-3"/>
                <h1 className="mb-3 text-2xl text-spectrum">{nome}</h1>
                <div className="flex flex-row space-x-3">
                    <a href={linkInsta}><img src="../../public/icon insta.png" alt="" className="w-12"/></a>
                    <a href={linkedIn}><img src="../../public/Group 2 1.png" alt="" className="w-12"/></a>
                </div>
            </div>
    )
}

export default function Equipe(){

    const time = [
        {
          foto: "../../public/ana.png",
          nome: "Ana Oliveira",
          linkInsta: "https://www.instagram.com/nanagoround_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          linkedIn: ""
        },
        {
          foto: "../../public/viudes.png",
          nome: "Eduardo Viudes",
          linkInsta: "https://www.instagram.com/viudes_ch/?utm_source=ig_web_button_share_sheet",
          linkedIn: "https://www.linkedin.com/in/eduardo-chorro-0978ba28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
          foto: "../../public/julia.png",
          nome: "Julia Leal",
          linkInsta: "https://www.instagram.com/lju.gomes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          linkedIn: "https://www.linkedin.com/in/j%C3%BAlia-leal-benevides-gomes-4a128224a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
          foto: "../../public/laura.png",
          nome: "Laura Kalybatas",
          linkInsta: "https://www.instagram.com/laurakalybatas/?utm_source=ig_web_button_share_sheet",
          linkedIn: ""
        },
        {
          foto: "../../public/pedro.png",
          nome: "Pedro Araújo",
          linkInsta: "https://www.instagram.com/p.araujozr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          linkedIn: "https://www.linkedin.com/in/pedro-ara%C3%BAjo-8a054b314"
        },
        {
          foto: "../../public/yannie.png",
          nome: "Yannie Yshin",
          linkInsta: "https://www.instagram.com/4luv7_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          linkedIn: ""
        }
      ];

      return (
        <div className="flex flex-row space-x-6 justify-center mt-24">
          {time.map(membro => 
            cards(membro.foto, membro.nome, membro.linkInsta, membro.linkedIn)
          )}
        </div>
      );

}