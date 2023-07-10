import './css/contact.css';
import { UilEnvelope, UilPhone, UilCompass, UilClock } from '@iconscout/react-unicons'

const Contact = () =>
{
    return (
        <section className="contact">
            <div className="contact-left">
                <h1>Contacto</h1>
                <p>
                    En Sweet Dreams, creemos que la comodidad y la elegancia no son mutuamente excluyentes. Fundada con
                    la idea de que todas las mujeres merecen sentirse bellas y cómodas mientras duermen, ofrecemos una
                    amplia variedad de pijamas y lencería de alta calidad que combinan estilo y confort.
                </p>
                <form className="contact-left-form">
                    <div className="contact-left-form-top">
                        <input type="text" placeholder="Nombre"/>
                        <input type="number" placeholder="Teléfono"/>
                    </div>
                    <input type="email" placeholder="Email"/>
                    <textarea placeholder="Mensaje"></textarea>
                    <button>Enviar Mensaje</button>
                </form>
            </div>
            <div className="contact-right">
                <h1>Info</h1>
                <div className="contact-right-item">
                    <span><UilEnvelope size="30px" /> sweetdreams@gmail.com</span>
                    <span><UilPhone size="30px" /> +57 (316) 824 8385</span>
                    <span><UilCompass size="30px" /> Calle 4N, 23 - 87, Valledupar, Cesar.</span>
                    <span><UilClock size="30px" /> Lunes a Viernes de 8:00am a 5:00pm.</span>
                </div>
            </div>
        </section>
    )
}

export default Contact;