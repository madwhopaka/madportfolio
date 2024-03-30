import "./App.css";
import BackgroundCircles from "./components/BackgroundCircles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ParticlesContainer from "./components/ParticlesContainer";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="bg-[rgb(1,1,1)] snap-y snap-mandatory text-white h-screen overflow-scroll z-0">
      <Header />
      <section id="hero" className="h-screen snap-center">
        <Hero />
      </section>
      <section className="h-screen snap-center">
        <About />
      </section>
      <section className="h-screen snap-center">
        <Experience />
      </section>
      <section className="h-screen snap-end">
        <Projects />
      </section>
    </div>
  );
}
