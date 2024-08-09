export default function Sobre() {
    return (
      <div className="flex flex-col items-center md:pt-24 pt-10" id="sobre">
        <div className="flex justify-center w-full">
          <h1 className="hidden md:block md:text-6xl text-5xl md:w-full w-11/12 text-center">
            Sobre nós
          </h1>
          <h1 className="md:hidden md:text-6xl text-5xl md:w-full w-11/12 text-center">
            Foxpectrum
          </h1>
        </div>
        <div className="flex justify-center w-full md:mt-16 mt-10">
          <div className="md:text-[30px] text-justify text-xl w-11/12 md:w-10/12 md:leading-tight space-y-5 text-nav/90 dark:text-white">
            <p>
              A foxpectrum é um projeto desenvolvido pela startup RapoiTech de estudantes do ensino médio técnico.
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
    );
  }
  