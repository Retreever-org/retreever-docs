import Compare from "./home/Compare";
import Features from "./home/Features";
import Hero from "./home/Hero";
import Intro from "./home/Intro";
import { Quickstart } from "./home/Quickstart";

const Home: React.FC = () => {
    return (
        <div>
            <Hero />
            <Intro />
            <Features />
            <Compare />
            <Quickstart />
        </div>
    )
}

export default Home;