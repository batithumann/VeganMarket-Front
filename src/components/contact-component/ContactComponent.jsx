import Button from 'react-bootstrap/Button';

const ContactoComponent = () => {
    return (

        <div className="contacto-container">
            <div className="contact-card">
                <div className="contact-form">
                    <h2 className="pt-2">Contactanos!</h2>
                    <div className="name-email-container">
                        <div>
                            <p className="m-0">Nombre Apellido</p>
                            <input type="text" placeholder="Nombre Apellido"/>
                        </div>
                        <div>
                            <p className="m-0">Correo</p>
                            <input type="email" placeholder="usuario@correo.cl"/>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="m-0">Asunto</p>
                        <input className="w-75" type="text" placeholder="Orden al por mayor"/>
                    </div>
                    <div className="mt-4">
                        <p className="m-0">Mensaje</p>
                        <textarea className="w-100" placeholder="Mensaje" />
                    </div>
                    <Button className="enviar-button mt-4 mb-4">Enviar</Button>
                </div>
            </div>
        </div>
    )
}

export default ContactoComponent;
