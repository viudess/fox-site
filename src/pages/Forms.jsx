import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Forms() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e) {
        e.preventDefault();

        if (name === '' || email === '' || message === '') {
            alert("Preencha todos os campos");
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_9zaf96t", "template_rja4a8j", templateParams, "236LkqJ-Jzma4XSNe")
        .then((response) => {
            console.log("EMAIL ENVIADO", response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')
        }), (erro) => {
            console.log("Erro", erro)
        }
    }

    return(
        <div>
            <div className="flex justify-center md:pt-24 pt-10">
                    <h1 className="md:text-6xl text-5xl md:w-full w-11/12 text-center md:pt-10 pt-10" id="contato">Contate-nos</h1>
                </div>
                <div className="flex justify-center mt-12">
                    <form action="" onSubmit={sendEmail} className="flex flex-col md:w-7/12 w-11/12">

                        <input 
                        type="text" 
                        placeholder="Nome" 
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="bg-foxus placeholder:text-ph placeholder:text-2xl mb-5 border-b-8 border-tpg py-1 focus:outline-none text-3xl rounded-b-md"/>

                        <input 
                        type="email" 
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="bg-foxus placeholder:text-ph placeholder:text-2xl mb-5 border-b-8 border-tpg py-1 focus:outline-none text-3xl rounded-b-md"/>

                        <input
                        type="text" 
                        placeholder="Mensagem" 
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        className="bg-foxus placeholder:text-ph placeholder:text-2xl mb-10 border-b-8 border-tpg py-1 focus:outline-none text-3xl rounded-b-md"/>

                        <div className="flex justify-center mt-3">
                            <button type='submit' value="enviar" className="px-7 py-2 bg-tpg text-foxus font-bold rounded-full focus:outline-none text-3xl">Enviar</button>
                        </div>

                    </form>
                </div>
        </div>
    )
}