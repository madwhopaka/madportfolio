import BackgroundCircles from "./BackgroundCircles";
import Typewriter from "./Typewriter"
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const Hero = () => {
    const [text, count] = useTypewriter({
        words: ["Hi, I am Madhu Paka", "Guy-who-loves-Food.tsx", "<ButLovesToCodeMore />"],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className="min-h-screen flex flex-col space-y-3 justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <h1>
                <span>{text}</span>
                <Cursor cursorColor="orange" />
            </h1>

        </div>
    )
}

export default Hero;