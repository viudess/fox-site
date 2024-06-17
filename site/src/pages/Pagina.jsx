import Cards from "./Cards"

export default function Pagina() {
    return(
            <div className="flex flex-col text-spectrum mt-32" id="sobre">
                <div className="flex justify-center">
                    <h1 className="text-6xl">Sobre nós</h1>
                </div>
                <div className="flex justify-center">
                <div className="text-[40px] mt-16 w-9/12 text-center">
                    <p>
                        A foxpectrum é uma startup desenvolvida por um grupo de estudantes do ensino médio técnico.
                    </p>
                    <p>
                        O projeto visa impactar de forma positiva o cotidiano de pessoas neurodivergentes e de seus familiares.
                    </p>
                    <p>
                        Nosso aplicativo consiste em um organizador de rotina familiar com funções pensadas para dar maior apoio e aumentar a eficiência da rotina e do acompanhamento de pessoas neurodivergentes.
                    </p>
                </div>
                </div>

                <div className="flex justify-center mt-32">
                    <h1 className="text-6xl">Nossa equipe</h1>
                </div>
                <Cards />

                <div className="flex justify-center mt-32" id="contato">
                    <h1 className="text-6xl">Contate-nos</h1>
                </div>
                <div className="flex justify-center mt-16">
                    <form action="" className="flex flex-col w-8/12">
                        <input type="text" placeholder="Nome" className="bg-foxus placeholder:text-ph mb-10 border-b-8 border-spectrum py-2 focus:outline-none text-3xl rounded-b-md"/>
                        <input type="email" placeholder="E-mail" className="bg-foxus placeholder:text-ph mb-10 border-b-8 border-spectrum py-2 focus:outline-none text-3xl rounded-b-md"/>
                        <input type="text" placeholder="Mensagem" className="bg-foxus placeholder:text-ph mb-10 border-b-8 border-spectrum py-2 focus:outline-none text-3xl rounded-b-md"/>
                        <div className="flex justify-center mt-10">
                            <button className="px-16 py-4 bg-spectrum text-foxus font-bold rounded-full focus:outline-none text-4xl">Enviar</button>
                        </div>
                    </form>
                    
                </div>

                <div className="flex justify-center mt-32" id="novas">
                    <h1 className="text-6xl">Seja o primeiro a saber</h1>
                </div>

                <div className="flex justify-center">
                <div className="text-[40px] mt-16 w-9/12 text-center">
                    <p>
                    Registre seu e-mail para receber novidades sobre o lançamento do app!
                    </p>
                </div>
                </div>
                    <div className="flex justify-center mt-16">
                    <form action="" className="flex flex-col w-8/12">
                        <input type="email" placeholder="E-mail" className="bg-foxus placeholder:text-ph mb-10 border-b-8 border-spectrum py-2 focus:outline-none text-3xl rounded-b-md"/>
                        <div className="flex justify-center mt-10">
                            <button className="px-16 py-4 bg-spectrum text-foxus font-bold rounded-full focus:outline-none text-4xl">Registrar</button>
                        </div>
                    </form>
                    </div>
                <div className="flex justify-center mt-32">
                    <h1 className="text-6xl">Nos siga nas redes sociais</h1>
                </div>
                <div className=" flex justify-center mt-20 mb-32">
                <img src="../../public/icon insta.png" alt="" className="w-36" />
                </div>
            </div>
    )
}