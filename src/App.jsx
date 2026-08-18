import { Helmet } from "react-helmet-async";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Workflow from "./components/Workflow";
import CursorEffects from "./components/CursorEffects";
import "./App.css";

function App() {
  return <><Helmet><title>Abhiram K Rajan | Software Developer — Python | MERN Stack | Data Science</title><meta name="description" content="Software Developer in Dubai specializing in Python, MERN Stack development, REST APIs and Data Science." /><meta property="og:title" content="Abhiram K Rajan | Software Developer" /></Helmet><CursorEffects /><div className="site-shell"><div className="ambient ambient-one" /><div className="ambient ambient-two" /><div className="grid-overlay" /><Navbar /><main><Hero /><About /><Projects /><Workflow /><Experience /><Contact /></main><Footer /></div></>;
}

export default App;
