import './css/about.css';

const About = () =>
{
    return (
        <div className="about">
            <div className="about-left">
                <h1>Nosotros</h1>
                <div className="about-left-img">
                    <img src="https://i.imgur.com/mPcQfzs.png" alt="Pijama" />
                </div>
            </div>
            <div className="about-right">
                <div className="about-right-images">
                    <img src="https://i.imgur.com/JBEsJRW.png" alt="Pijama" />
                    <img src="https://i.imgur.com/xir84UY.png" alt="Pijama" />
                    <img src="https://i.imgur.com/gCwIYkC.png" alt="Pijama" />
                </div>
                <div className="about-right-text">
                    <p>
                        En Sweet Dreams, creemos que la comodidad y la elegancia no son mutuamente excluyentes. Fundada con la
                        idea de que todas las mujeres merecen sentirse bellas y cómodas mientras duermen, ofrecemos una amplia
                        variedad de pijamas y lencería de alta calidad que combinan estilo y confort.
                    </p>
                    <p>
                        Nuestro equipo está compuesto por amantes de la moda y el sueño, comprometidos en brindar una
                        experiencia de compra excepcional y un servicio al cliente personalizado. Trabajamos con diseñadores
                        talentosos y proveedores de confianza para garantizar que cada pieza de nuestra colección sea de la más
                        alta calidad.
                    </p>
                    <p>
                        En Sweet Dreams, nos enorgullece ofrecer pijamas y lencería para mujeres de todas las edades, formas y
                        tamaños. Desde la clásica camisón hasta la pijama de franela más cálida, tenemos algo para cada gusto y
                        presupuesto.
                    </p>
                </div>
                <button>Ver Más</button>
            </div>
        </div>
    );
}

export default About;