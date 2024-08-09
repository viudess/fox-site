import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Novidades() {
  const [email, setEmail] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (email === "") {
      alert("Preencha o campo");
      return;
    }

    const templateParams = {
      email: email,
    };

    emailjs
      .send(
        "service_rolo69o",
        "template_gdc6ofv",
        templateParams,
        "236LkqJ-Jzma4XSNe"
      )
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text);
        setEmail("");
      }),
      (erro) => {
        console.log("Erro", erro);
      };
  }

  return (
    <div>
      <div className="flex justify-center md:pt-24 pt-10">
        <h1
          className="md:text-6xl text-[40px] md:w-full w-11/12 text-center md:pt-10 pt-10"
          id="novas"
        >
          Seja o primeiro a saber
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="md:text-[30px] text-[25px] md:mt-16 mt-10 md:w-9/12 w-11/12 text-center md:leading-tight text-black/90 dark:text-white">
          <p>
            Registre seu e-mail para receber novidades sobre o lançamento do
            app!
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <form
          action=""
          onSubmit={sendEmail}
          className="flex flex-col md:w-7/12 w-11/12">
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="bg-foxus dark:bg-nav placeholder:text-ph dark:placeholder:text-white placeholder:text-2xl mb-10 border-b-8 border-tpg dark:border-dmnav py-1 focus:outline-none text-3xl rounded-b-md"/>

          <div className="flex justify-center mt-3">
            <button
              type="submit"
              className="px-7 py-2 bg-tpg dark:bg-dmnav text-foxus dark:text-nav font-bold rounded-full focus:outline-none text-3xl">
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
