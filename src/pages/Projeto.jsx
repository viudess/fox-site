import Carrossel from "../components/Carrossel";

export default function Projeto() {
  return (
    <div className="flex flex-col items-center md:pt-24 pt-10">
      <div className="flex justify-center w-full">
        <h1 className="md:text-6xl text-5xl text-center">
          Nosso projeto
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center w-11/12 md:w-10/12 md:mt-16 mt-10">
        <div className="md:text-[30px] md:text-start text-justify text-xl md:leading-tight text-nav/90 lg:w-1/2">
          <p>
            A versão beta do nosso aplicativo contará com funções como mood
            tracker, agenda compartilhada, to-do, organização e monitoração
            de medicamentos e um botão de emergência para crises,
            facilitando a organização da pessoa neurodivergente e de sua
            família, e também permitindo um monitoramento mais amplo sobre
            suas crises. O app também inclui implementação da linguagem
            C.A.A e acesso rápido a histórias socias.
          </p>
        </div>
        <div className="hidden lg:flex lg:ml-10 lg:w-1/2">
          <Carrossel />
        </div>
      </div>
      <div className="lg:hidden flex justify-center lg:mt-10 md:mt-24 mt-10">
        <Carrossel />
      </div>
    </div>
  );
}
