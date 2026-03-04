import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import myProfile from "../assets/Me.png";

function Hero() {
  return (
    <>
      <Helmet>
        <title>Abhiram K Rajan | Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Abhiram K Rajan, a full-stack developer building modern web apps with React, Node.js, and MongoDB."
        />
      </Helmet>

      <Box
        id="home"
        component="section"
        sx={{
          minHeight: { xs: "auto", md: "78vh" },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
          alignItems: "center",
          gap: { xs: 4, md: 6 },
          py: { xs: 6, md: 10 },
        }}
      >
        <Box>
          <Chip
            label="Currently looking for internship and entry-level opportunities"
            sx={{
              mb: 3,
              borderRadius: "10px",
              border: "1px solid rgba(45, 212, 191, 0.5)",
              backgroundColor: "rgba(45, 212, 191, 0.1)",
              color: "var(--text)",
            }}
          />

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.2rem", md: "4.1rem" },
              lineHeight: 1.05,
              mb: 2,
            }}
          >
            Building sleek products with reliable code.
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.15rem" },
              fontWeight: 600,
              mb: 0.8,
            }}
          >
            Software Developer | MERN Stack | Open to Internship Opportunities
          </Typography>
          <Typography sx={{ fontSize: { xs: "0.95rem", md: "1rem" }, color: "var(--muted)", mb: 2 }}>
            Dubai, UAE | Student Visa (Available for Internship / Entry-Level Roles)
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", md: "1.15rem" }, color: "var(--muted)", maxWidth: 700 }}>
            I am Abhiram K Rajan, a full-stack developer focused on React and Node.js.
            I design responsive interfaces, architect backend APIs, and ship production-ready features.
            I am currently looking for internship and entry-level software developer roles.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 4 }}>
            <Button
              variant="contained"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              sx={{
                textTransform: "none",
                px: 3.2,
                py: 1.2,
                borderRadius: "12px",
                backgroundColor: "var(--accent)",
                color: "#052023",
                fontWeight: 700,
                "&:hover": { backgroundColor: "#40e0cb" },
              }}
            >
              See Projects
            </Button>
            <Button
              variant="outlined"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              sx={{
                textTransform: "none",
                px: 3.2,
                py: 1.2,
                borderRadius: "12px",
                borderColor: "var(--border)",
                color: "var(--text)",
                "&:hover": { borderColor: "var(--accent)" },
              }}
            >
              Contact Me
            </Button>
          </Stack>
        </Box>

        <Box
          sx={{
            justifySelf: { xs: "center", md: "end" },
            width: { xs: 240, md: 320 },
            height: { xs: 240, md: 320 },
            borderRadius: "26px",
            background:
              "linear-gradient(145deg, rgba(45, 212, 191, 0.28), rgba(245, 158, 11, 0.16), rgba(13, 27, 45, 0.9))",
            p: 1.2,
            boxShadow: "0 22px 60px rgba(0, 0, 0, 0.35)",
          }}
        >
          <Box
            component="img"
            src={myProfile}
            alt="Portrait of Abhiram K Rajan"
            loading="lazy"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "22px",
              border: "1px solid rgba(255, 255, 255, 0.16)",
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default Hero;
