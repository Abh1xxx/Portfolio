const skillGroups = [["FRONTEND","React · JavaScript · HTML · CSS · Tailwind"],["BACKEND","Node.js · Express · REST APIs"],["DATABASE","MongoDB · MySQL"],["DATA + AI","Python · NumPy · Pandas · Matplotlib · ChatGPT · Gemini · Claude · Codex"]];

function About() {
  return <section id="about" className="section about"><div><p className="eyebrow">01 / ABOUT</p><h2 className="section-title">Engineering ideas into <em>useful systems.</em></h2><p className="lede">I’m a Computer Science graduate and postgraduate Data Science student at MAHE Dubai. I build full-stack products with thoughtful interfaces, reliable APIs, and a growing data-first mindset.</p><div className="ecosystem"><span>Python</span><span>React</span><span>Node.js</span><span>MongoDB</span><span>Data Science</span><span>AI</span></div></div><div id="skills" className="skill-grid">{skillGroups.map(([name,items],i)=><article className="skill-card" key={name}><b>0{i+1}</b><h3>{name}</h3><p>{items}</p><i /></article>)}</div></section>;
}

export default About;
