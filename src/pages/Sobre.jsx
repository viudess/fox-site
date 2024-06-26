export default function Sobre() {
    return(
        <>
        <div className="flex flex-col md:pt-32 pt-5">
            <div className="flex justify-center pt-10" id="sobre">
                <h1 className="md:text-6xl text-5xl md:w-full w-11/12 text-center">Sobre nós</h1>
            </div>
            <div className="flex justify-center">
                <div className="md:text-[40px] md:mt-16 md:w-9/12 text-start mt-8 text-xl w-11/12 md:leading-tight space-y-5 text-spectrum/40">
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
        </div>
        </>
        
    )
}