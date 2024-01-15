import About from "./Components/About";
import Blogs from "./Components/Blogs";
import ContactMe from "./Components/Contact";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Front from "./Components/Front";
import Projects from "./Components/Projects";

function App() {
	return (
		<>
			<div className=" min-h-screen py-10 px-3 sm:px-5 bg-black">
				<Front />
				<About />
				<Experience />
				<Projects />
				<Blogs />
				<ContactMe />
			</div>
		</>
	);
}

export default App;
