import About from "./Components/About";
import Blogs from "./Components/Blogs";
import ContactMe from "./Components/Contact";
import Experience from "./Components/Experience";
import Front from "./Components/Front";
import Projects from "./Components/Projects";

// import AnimatedCursor from "react-animated-cursor";

function App() {
	return (
		<>
			<div className="antialiased min-h-screen py-10 px-3 sm:px-5 bg-myCustomColor text-white ">
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
