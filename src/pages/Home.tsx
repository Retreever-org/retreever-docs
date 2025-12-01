import Compare from "./home/Compare";
import Features from "./home/Features";
import Footer from "./home/Footer";
import Hero from "./home/Hero";
import Intro from "./home/Intro";
import Navbar from "./home/Navbar";
import { Quickstart } from "./home/Quickstart";

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Intro />
            <Features />
            <Compare />
            <Quickstart />
            <Footer />
        </div>
    )
}

export default Home;