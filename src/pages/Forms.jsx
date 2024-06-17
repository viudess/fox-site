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
            <div className="flex justify-center mt-32" id="contato">
                    <h1 className="text-6xl">Contate-nos</h1>
                </div>
                <div className="flex justify-center mt-16">
                    <form action="" onSubmit={sendEmail} className="flex flex-col w-8/12">

                        <input 
                        type="text" 
                        placeholder="Nome" 
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="bg-foxus placeholder:text-ph mb-10 border-b-8 border-spectrum py-2 focus:outline-none text-3xl rounded-b-md"/>

                        <input 
                        type="email" 
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="bg-foxus placeholder:text-ph mb-10 border-b-8 border-spectrum py-2 focus:outline-none text-3xl rounded-b-md"/>

                        <textarea
                        type="text" 
                        placeholder="Mensagem" 
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        className="bg-foxus placeholder:text-ph mb-10 border-b-8 border-spectrum py-2 focus:outline-none text-3xl rounded-b-md"/>

                        <div className="flex justify-center mt-10">
                            <button type='submit' value="enviar" className="px-16 py-4 bg-spectrum text-foxus font-bold rounded-full focus:outline-none text-4xl">Enviar</button>
                        </div>

                    </form>
                </div>
        </div>
    )
}