import './App.css'
import BackgroundCircles from './components/BackgroundCircles';
import Header from './components/Header'
import Hero from './components/Hero';


export default function App() {
  return (
    <div className="bg-[rgb(36,36,36)] z-0 text-white snap-y snap-mandatory overflow-scroll">
      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>

    </div>
  )
}


