
import About from "./Components/About";
import ContactMe from "./Components/Contact";
import Footer from "./Components/Footer";
import Front from "./Components/Front";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";



function App() {
  return (
    <>
      <div className=" min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
        <Front />
        <About />
        <Skills />
        <Projects />
        <ContactMe />
        <Footer  />
      </div>
    </>
  );
}

export default App;
