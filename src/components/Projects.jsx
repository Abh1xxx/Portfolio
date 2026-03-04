import { ArrowOutward } from "@mui/icons-material";
import { Box, Card, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import MVicon from "../assets/MVicon.png";
import WoodlandWebsiteClone from "../assets/WoodlandWebsiteClone.png";
import cr7 from "../assets/cr7.jpg";
import drclean from "../assets/drclean.png";
import fakestoreapi from "../assets/fakestoreapi.png";
import todo from "../assets/todo.jpg";

const projects = [
  {
    title: "Dr. Clean Facility Management System",
    description:
      "A full-stack MERN app where users browse and request facility services while admins manage operations with a secure dashboard.",
    image: drclean,
    // url: "https://dr-clean-app-x78g.vercel.app/",
    url: "https://dr-clean-app.vercel.app/",
    fit: "contain",
  },
  {
    title: "MovieVerse",
    description:
      "Movie rating and review platform with watchlists and admin tools, built using MongoDB, Express, React, and Node.js.",
    image: MVicon,
    url: "https://movie-verse-app-c4yp.vercel.app/",
    fit: "contain",
  },
  {
    title: "E-Commerce Web App",
    description:
      "Responsive shopping experience with product pages and cart features, focused on smooth user flow and clean component structure.",
    image: fakestoreapi,
    url: "https://3module-end-assgnmt.netlify.app/",
    fit: "contain",
  },
  {
    title: "To-Do App",
    description:
      "Task manager created after replicating a website layout, including form validation and interactive task handling features.",
    image: todo,
    url: "https://registerhere-todolist.netlify.app/",
    fit: "contain",
  },
  {
    title: "Woodland Website Clone",
    description:
      "Front-end clone of the Woodland homepage built to strengthen responsive layout and visual composition skills.",
    image: WoodlandWebsiteClone,
    url: "https://abh1xxx.github.io/Woodland-Site-Clone/",
    fit: "contain",
  },
  {
    title: "Ronaldo Portfolio",
    description:
      "Portfolio clone built with React and Bootstrap 5 to demonstrate reusable components and responsive page structure.",
    image: cr7,
    url: "https://asgm12.netlify.app/",
    fit: "cover",
  },
];

function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects | Abhiram K Rajan</title>
        <meta
          name="description"
          content="Projects by Abhiram K Rajan, featuring full-stack apps and modern frontend work."
        />
      </Helmet>

      <Box id="projects" component="section" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.7rem" }, mb: 1.5 }}>
          Featured Projects
        </Typography>
        <Typography sx={{ color: "var(--muted)", mb: 3.5, maxWidth: 780 }}>
          Selected projects focused on product thinking, scalable architecture, and polished UI implementation.
        </Typography>

        <Grid container spacing={2.2}>
          {projects.map((project) => (
            <Grid item key={project.title} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "18px",
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                  backdropFilter: "blur(8px)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.22s ease, border-color 0.22s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "rgba(45, 212, 191, 0.5)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    height: 170,
                    objectFit: project.fit || "contain",
                    objectPosition: "center",
                    p: project.fit === "contain" ? 2 : 0,
                    backgroundColor: project.fit === "contain" ? "rgba(255,255,255,0.96)" : "transparent",
                    borderBottom: "1px solid var(--border)",
                  }}
                />
                <CardContent sx={{ display: "grid", gap: 1.1 }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "1.05rem", lineHeight: 1.3 }}>
                    {project.title}
                  </Typography>
                  <Typography sx={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.65 }}>
                    {project.description}
                  </Typography>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      width: "fit-content",
                      mt: 0.2,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.4,
                      color: "var(--accent)",
                      fontWeight: 600,
                    }}
                  >
                    View Project <ArrowOutward sx={{ fontSize: 18 }} />
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Projects;
