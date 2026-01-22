import Hero from "./components/Hero";
import About from "./components/About"; // Novo import
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer"; 
import ContactCTA from "./components/ContaCTA"; 
function App() {
  return (
    <div className="bg-zinc-950 min-h-screen"> 
      <Hero />
      <About /> 
      <Skills />
      <Projects/>
      <ContactCTA/>
      <Footer/>
    </div>
  );
}

export default App;