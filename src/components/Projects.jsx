import drclean from "../assets/drclean.png";
import movieVerse from "../assets/MVicon.png";
import store from "../assets/fakestoreapi.png";
import woodland from "../assets/WoodlandWebsiteClone.png";
import cr7 from "../assets/cr7.jpg";
import todo from "../assets/todo.jpg";

const projects = [
  {
    name: "Product Listing Analyzer",
    subtitle: "NLP · E-Commerce Text Analysis",
    image: "/projects/product-listing-analyzer.svg",
    imageAlt: "Product Listing Analyzer: text preprocessing, corpus TF-IDF keywords and explainable scoring",
    url: "https://product-listing-analyzer.vercel.app/",
    source: "https://github.com/Abh1xxx/product-listing-analyzer",
    id: "product-listing-analyzer",
    featured: true,
    description: "An explainable NLP application for exploring e-commerce titles and descriptions, built around a 500-product corpus.",
    stack: ["Python", "NLTK", "scikit-learn", "Pandas", "Streamlit", "Vercel"],
    features: [
      "Text cleaning, tokenization, stemming and lemmatization",
      "Corpus-fitted TF-IDF keywords and cosine similarity",
      "Dataset-backed attributes, word frequencies and n-grams",
      "Transparent educational score with practical suggestions",
    ],
    note: "The demo may require Vercel sign-in. Source code is public.",
  },
  {
    name: "Dr. Clean",
    subtitle: "Full Stack Home Services Platform",
    image: drclean,
    url: "https://dr-clean-app.vercel.app/",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT",
      "Cloudinary",
    ],
    features: [
      "Role-based authentication",
      "Protected REST APIs",
      "Bookings & user management",
      "Responsive dashboard",
    ],
  },

  {
    name: "Movie Verse",
    subtitle: "Movie Rating & Review Website",
    image: movieVerse,
    url: "https://movie-verse-app-c4yp.vercel.app/",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Axios",
    ],
    features: [
      "Authentication & authorization",
      "Ratings and reviews",
      "Watchlist functionality",
      "CRUD workflows",
    ],
  },

  {
    name: "E-Commerce App",
    subtitle: "Responsive Shopping Experience",
    image: store,
    url: "https://3module-end-assgnmt.netlify.app/",
    stack: [
      "React",
      "JavaScript",
      "CSS",
    ],
    features: [
      "Product browsing",
      "Cart experience",
      "Reusable UI components",
    ],
  },

  {
    name: "Woodland Website Clone",
    subtitle: "E-Commerce Website Clone",
    image: woodland,
    url: "#",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    features: [
      "Responsive website design",
      "Product-focused UI",
      "Reusable interface sections",
      "Responsive layouts",
    ],
  },

  {
    name: "CR7 Website",
    subtitle: "Sports & Personal Brand Website",
    image: cr7,
    url: "#",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    features: [
      "Responsive design",
      "Modern landing page",
      "Interactive UI elements",
      "Personal brand presentation",
    ],
  },

  {
    name: "To-Do Application",
    subtitle: "Task Management Application",
    image: todo,
    url: "#",
    stack: [
      "React",
      "JavaScript",
      "CSS",
    ],
    features: [
      "Add and manage tasks",
      "Task completion tracking",
      "Interactive user interface",
      "Responsive design",
    ],
  },
];

function Architecture() {
  return (
    <div className="architecture">
      <p className="arch-label">DR. CLEAN · SYSTEM FLOW</p>

      <div className="arch-flow">
        {[
          "USER",
          "REACT",
          "AXIOS",
          "REST API",
          "EXPRESS / NODE",
          "MONGODB",
        ].map((x, i) => (
          <span key={x}>
            {x}
            {i < 5 && <i>→</i>}
          </span>
        ))}
      </div>

      <div className="arch-side">
        <span>JWT AUTH</span>
        <span>CLOUDINARY</span>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="section projects">
      <p className="eyebrow">02 / SELECTED WORK</p>

      <h2 className="section-title">
        Products built to be <em>used.</em>
      </h2>

      <p className="lede">
        A focused selection of real applications that explore full-stack
        architecture, practical NLP, user flows, and clean interfaces.
      </p>

      <div className="project-list">
        {projects.map((p, index) => (
          <article
            className={`project-card${p.featured ? " project-card-featured" : ""}`}
            id={p.id}
            key={p.name}
          >
            
            {/* Project Number */}
            <div className="project-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Project Image */}
            <div className={`project-image${p.featured ? " project-image-analyzer" : ""}`}>
              <img
                src={p.image}
                alt={p.imageAlt || `${p.name} preview`}
                loading="lazy"
              />
            </div>

            {/* Project Content */}
            <div className="project-body">

              <p className="project-type">
                {p.subtitle}
              </p>

              <h3>{p.name}</h3>
              {p.description && <p className="project-description">{p.description}</p>}

              {/* Technology Stack */}
              <div className="tags">
                {p.stack.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              {/* Features */}
              <ul>
                {p.features.map((feature) => (
                  <li key={feature}>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Project Link */}
              <div className="project-actions">
              {p.url !== "#" ? (
                <a
                  className="project-link"
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit live project <b>↗</b>
                </a>
              ) : (
                <span className="project-link project-coming-soon">
                  Demo unavailable
                </span>
              )}
              {p.source && (
                <a className="project-link project-source" href={p.source} target="_blank" rel="noopener noreferrer" aria-label={`View ${p.name} source code on GitHub`}>
                  Source code <b>↗</b>
                </a>
              )}
              </div>
              {p.note && <p className="project-note">{p.note}</p>}

            </div>
          </article>
        ))}
      </div>

      {/* Architecture Diagram */}
      <Architecture />
    </section>
  );
}

export default Projects;