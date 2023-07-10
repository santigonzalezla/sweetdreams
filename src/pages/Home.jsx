import './css/home.css';
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import Contact from "../components/home/Contact";
import ContactBanner from "../components/home/ContactBanner";
import Sign from "../components/home/Sign";
import About from "../components/home/About";

const Home = () =>
{
    return (
        <div className="home">
            <Navbar />
            <Hero />
            <About />
            <Contact />
            <ContactBanner />
            <Sign />
        </div>
    );
}

export default Home;