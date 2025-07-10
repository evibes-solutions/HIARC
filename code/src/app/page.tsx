import NavBar from "./components/NavBar/page";
import Home from "./components/Home/page";
import Services from "./components/Services/page";
import PortfolioPage from "./components/Portfolio/page";
import About from "./components/About/page";
import Contact from "./components/Contact/page";
import Footer from "./components/Footer/page";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#1A3C36] text-white">
      <NavBar />
      <div className="h-32" />
      <section id="home"> 
      <Home />
      </section>
      <section id="services"> 
      <Services />
      </section>
      <section id="portfolio">  
      <PortfolioPage />
      </section>
      <section id="about"> 
      <About />
      </section>
      <section id="contact"> 
      <Contact />
      </section>
      <Footer />
    </div>
  );
}
  