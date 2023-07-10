import './css/hero.css'
import { UilWhatsapp } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import { UilTwitterAlt } from '@iconscout/react-unicons'

const Hero = () =>
{
    return (
        <div className="hero">
            <div className="hero-left">
                <div className="hero-left-icon">
                    <svg width="64" height="498" viewBox="0 0 64 498" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="32.75" y1="3.27835e-08" x2="32.75" y2="272" stroke="#640E23" strokeWidth="1.5"/>
                        <circle cx="32.3333" cy="322.333" r="20.5833" stroke="#640E23" strokeWidth="1.5"/>
                        <circle cx="32" cy="389" r="15.25" stroke="#640E23" strokeWidth="1.5"/>
                        <circle cx="32" cy="466" r="31.25" stroke="#640E23" strokeWidth="1.5"/>
                    </svg>
                </div>
                <div className="hero-left-text">
                    <h1>Acurrúcate con Estilo</h1>
                    <p>
                        Duerme cómoda y con estilo con nuestras pijamas de alta calidad. Tenemos conjuntos clásicos y
                        diseños divertidos hechos con los materiales más suaves. ¡Compra ahora y disfruta de la felicidad
                        de dormir!
                    </p>
                    <button>Comprar Ahora</button>
                    <div className="hero-left-text-social">
                        <span><UilWhatsapp color="#640E23" /></span>
                        <span><UilInstagram color="#640E23" /></span>
                        <span><UilTwitterAlt color="#640E23" /></span>
                    </div>
                </div>
            </div>
            <div className="hero-right">
                <img src="https://i.imgur.com/6LpK7xO.png" alt="hero" />
            </div>
        </div>
    )
}

export default Hero;