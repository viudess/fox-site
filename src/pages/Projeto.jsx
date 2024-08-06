import Carrossel from "../components/Carrossel"

export default function Projeto() {
    return(
        <>
        <div className="flex flex-col md:pt-24">
            <div>
                <div className="flex justify-center md:pt-10 pt-10">
                    <h1 className="md:text-6xl text-5xl md:w-full w-11/12 text-center">Nosso projeto</h1>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex justify-center space-x-52">
                    <div className="md:text-[30px] md:mt-16 md:w-4/12 text-start mt-10 text-xl w-11/12 md:leading-tight space-y-5 text-tpg/90">
                        <p>

                            A versão beta do nosso aplicativo contará com funções como mood tracker, agenda compartilhada, to-do, organização e monitoração de medicamentos e um botão de emergência para crises, facilitando a organização da pessoa neurodivergente e de sua família, e também permitindo um monitoramento mais amplo sobre suas crises. O app também inclui implementação da linguagem C.A.A e acesso rápido a histórias socias.

                        </p>
                    </div>
                    <div className="md:flex md:items-center">
                        <Carrossel />
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}