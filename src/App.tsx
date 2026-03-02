import About from "./Components/About"
import Contact from "./Components/Contact"
import Details from "./Components/Details"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"

const App = () => {

  return (
    <main className="min-h-screen animated-bg">  
      <Header />
      <About />
      <section id="details">
      <Details />
      </section>
      <section id="skills">
      <Skills />
      </section>
      <section id="projects">
      <Projects />
      </section>
      <section id="contact">
      <Contact />
      </section>
      <Footer />
    </main>
  )
}

export default App
