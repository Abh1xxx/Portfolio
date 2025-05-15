import { Box, Typography, Container, Grid, Link } from "@mui/material";
import MVicon from "../assets/MVicon.png";
import todo from "../assets/todo.jpg";
import fakestoreapi from "../assets/fakestoreapi.png";
import WoodlandWebsiteClone from "../assets/WoodlandWebsiteClone.png";
import { useMemo, useState } from "react";
import cr7 from "../assets/cr7.jpg";

import { Helmet } from "react-helmet-async";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = useMemo(
    () => [
      {
        title: "MovieVerse - Movie Rating & Review Platform",
        description:
          "MovieVerse is a full-stack movie review application built with the MERN Stack (MongoDB, Express.js, React.js, Node.js). It allows users to discover movies, rate and review them, manage watchlists, and provides an admin panel for managing the movie database and users.",
        logo: MVicon,
        url: "https://movie-verse-app-c4yp.vercel.app/",
      },
      {
        title: "E-Commerce Web App",
        description:
          "An interactive and responsive e-commerce web application that allows users to browse products, view product details, add items to the cart, and proceed to purchase. Built using modern web technologies to ensure a seamless user experience.",
        logo: fakestoreapi,
        url: "https://3module-end-assgnmt.netlify.app/",
      },
      {
        title: "To-Do App",
        description:
          "This project is a Website Replication assignment followed by the creation of a To-Do App. The objective was to replicate the layout of the provided website and implement form validation, password visibility toggle, and task management features.",
        logo: todo,
        url: "https://registerhere-todolist.netlify.app/ ",
      },
      {
        title: "Woodland Website Clone",
        description:
          "A front-end project to replicate the homepage of the official Woodland Worldwide website. This project is designed to strengthen skills in HTML, CSS, and Bootstrap by utilizing responsive design techniques and various UI components provided by Bootstrap.",
        logo: WoodlandWebsiteClone,
        url: "https://abh1xxx.github.io/Woodland-Site-Clone/  ",
      },
      {
        title: "Ronaldo-Portfolio-React-Bootstrap5",
        description:
          "This project is a clone of a modern website built using React and React-Bootstrap. The goal of the project is to demonstrate proficiency in working with React components, utilizing React-Bootstrap for layout and styling, and ensuring the website is responsive across all devices.",
        logo: cr7,
        url: "https://asgm12.netlify.app/",
      },
    ],
    []
  );

  return (
    <>
      <Helmet>
        <title>Muhammad Ahmad - Full-Stack & Web3 Developer</title>
        <meta
          name="description"
          content="Explore Muhammad Ahmad's blockchain and web development projects including Popit Game, PerkSwap, and Cro Create - showcasing expertise in DeFi, smart contracts, and Web3 technologies."
        />
      </Helmet>
      <Container maxWidth="lg" id="projects">
        <Box
          sx={{
            paddingTop: { xs: 3, md: 6 },
            paddingBottom: { xs: 4, md: 6 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins",
              letterSpacing: "5px",
              fontSize: { xs: "2rem", md: "3.5rem" },
              mb: { xs: 1, md: 3 },
            }}
          >
            PROJECTS
          </Typography>
          <Typography
            gutterBottom
            align="center"
            sx={{
              mb: 2,
              opacity: 0.7,
              background:
                "linear-gradient(131deg, rgba(156,131,255,1) 42%, rgba(224,240,16,0.938813025210084) 70%, rgba(255,144,81,1) 75%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "0.2em",
              fontSize: "14px",
            }}
          >
            EXPLORE NOW
          </Typography>

          <Grid container spacing={4} alignItems="center">
            {projects.map((project, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                  maxWidth: "600px",
                  flexDirection: { xs: "column", sm: "row" },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                {/* Logo on the left */}
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  aria-label={`Visit ${project.title} website`}
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    transition: "transform 0.3s ease",
                    display: "block",
                  }}
                >
                  <Box
                    component="img"
                    loading="lazy"
                    src={project.logo}
                    alt={`${project.title} - Web3 Project by Muhammad Ahmad`}
                    sx={{
                      width: 150,
                      maxWidth: "100%",
                      minWidth: 150,
                      height: 100,
                      objectFit: "contain",
                      borderRadius: "16px",
                      backgroundColor: "white",
                      p: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow:
                        hoveredProject === index
                          ? "0px 6px 25px rgba(255, 255, 255, 0.67)"
                          : "0px 4px 20px rgba(255, 255, 255, 0.57)",
                      transform:
                        hoveredProject === index
                          ? "translateY(-5px)"
                          : "translateY(0)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                  />
                </Link>
                {/* Text & Link on the right */}
                <Box>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={{
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                      transition: "background-position 0.3s ease",
                      background:
                        hoveredProject === index
                          ? "linear-gradient(131deg, rgba(156,131,255,1) 42%, rgba(224,240,16,0.938813025210084) 70%, rgba(255,144,81,1) 75%)"
                          : "linear-gradient(131deg, rgba(156,131,255,1) 42%, rgba(224,240,16,0.938813025210084) 70%, rgba(255,144,81,1) 75%) right",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      backgroundSize: "200% auto",
                      display: "inline-block",
                    }}
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {project.title}
                  </Link>
                  <Typography
                    variant="body2"
                    sx={{ opacity: 0.7, color: "#ccc" }}
                  >
                    {project.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Projects;
