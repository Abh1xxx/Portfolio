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
  return (
    <>
      <Helmet>
        <title>Abhiram K Rajan | Software Developer — Python | MERN | NLP</title>
        <meta name="description" content="Abhiram K Rajan, a software developer in Dubai building Python and MERN applications. Explore full-stack projects and NLP work with NLTK, scikit-learn and TF-IDF." />
        <meta property="og:title" content="Abhiram K Rajan | Software Developer — Python, MERN &amp; NLP" />
        <meta property="og:description" content="Abhiram K Rajan, a software developer in Dubai building Python and MERN applications. Explore full-stack projects and NLP work with NLTK, scikit-learn and TF-IDF." />
      </Helmet>
      <CursorEffects />
      <div className="site-shell">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
        <div className="grid-overlay" />
        <Navbar />
        <main><Hero /><About /><Projects /><Workflow /><Experience /><Contact /></main>
        <Footer />
      </div>
    </>
  );
}

export default App;
