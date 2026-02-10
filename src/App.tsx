import About from "./Components/About"
import Contact from "./Components/Contact"
import Details from "./Components/Details"
import Header from "./Components/Header"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Details />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
