import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Novidades() {
    const [email, setEmail] = useState('')

    function sendEmail(e) {
        e.preventDefault();

        if (email === '') {
            alert("Preencha o campo");
            return;
        }

        const templateParams = {
            email: email
        }

        emailjs.send("service_rolo69o", "template_gdc6ofv", templateParams, "236LkqJ-Jzma4XSNe")
        .then((response) => {
            console.log("EMAIL ENVIADO", response.status, response.text)
            setEmail('')
        }), (erro) => {
            console.log("Erro", erro)
        }
    }

    return(
        <div>
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
                <form action="" onSubmit={sendEmail} className="flex flex-col w-8/12">
                    <input 
                    type="email" 
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} 
                    className="bg-foxus placeholder:text-ph mb-10 border-b-8 border-spectrum py-2 focus:outline-none text-3xl rounded-b-md"/>

                    <div className="flex justify-center mt-10">
                        <button type="submit" className="px-16 py-4 bg-spectrum text-foxus font-bold rounded-full focus:outline-none text-4xl">Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}