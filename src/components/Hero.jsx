import { useEffect, useRef } from "react";
import myProfile from "../assets/Me.png";

function Hero() {
  const visual = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (innerWidth > 767 && visual.current) {
        const x = (e.clientX / innerWidth - 0.5) * 12,
          y = (e.clientY / innerHeight - 0.5) * 12;
        visual.current.style.transform = `translate(${x}px,${y}px)`;
      }
    };
    addEventListener("pointermove", move);
    return () => removeEventListener("pointermove", move);
  }, []);
  return (
    <section id="home" className="hero section">
      <div className="hero-copy">
        <p className="eyebrow">
          <i /> AVAILABLE FOR OPPORTUNITIES · DUBAI, UAE
        </p>
        <p className="hero-kicker">Hello, I’m</p>
        <h1>
          ABHIRAM
          <br />K RAJAN<span>.</span>
        </h1>
        <h2>
          Software <em>Developer</em>
        </h2>
        <p className="hero-tech">
          PYTHON <b>·</b> MERN STACK <b>·</b> DATA SCIENCE
        </p>
        <p className="lede">
          Computer Science graduate pursuing a Postgraduate Program in Data
          Science at MAHE Dubai, focused on building modern full-stack
          applications, APIs and data-driven solutions.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">
            Explore My Work <span>↗</span>
          </a>
          <a className="button" href="#contact">
            Let’s Connect
          </a>
        </div>
      </div>
      <div className="hero-visual" ref={visual}>
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="hero-image">
          <img src={myProfile} alt="Abhiram K Rajan" />
        </div>
        <span className="node node-one">AI</span>
        <span className="node node-two">API</span>
        <span className="node node-three">DATA</span>
        <span className="node node-four">MERN</span>
        <div className="code-card">
          <small>const build = () =&gt; &#123;</small>
          <code>
            {" "}
            learn(); code();
            <br /> test(); improve();
          </code>
          <small>&#125;</small>
        </div>
      </div>
    </section>
  );
}

export default Hero;
