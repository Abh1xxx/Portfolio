import { Box, Chip, Grid, Typography } from "@mui/material";

const skillGroups = [
  ["React.js", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap"],
  ["MongoDB", "Express.js", "React.js", "Node.js", "RESTful APIs"],
  ["MongoDB", "MySQL (Basics)", "Git", "GitHub", "Netlify", "Vercel"],
  ["Problem-Solving", "Communication", "Adaptability", "Teamwork"],
];

function About() {
  return (
    <Box id="about" component="section" sx={{ py: { xs: 6, md: 8 } }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "1.9rem", md: "2.7rem" }, lineHeight: 1.1, mb: 2 }}
          >
            Summary
          </Typography>
          <Typography sx={{ color: "var(--muted)", mb: 2, lineHeight: 1.7 }}>
            Computer Science graduate currently pursuing a Postgraduate Program in Data Science in
            Dubai. Experienced in building web applications using JavaScript, React.js, Node.js, and
            MongoDB with a strong foundation in RESTful APIs and responsive UI development.
          </Typography>
          <Typography sx={{ color: "var(--muted)", mb: 2, lineHeight: 1.7 }}>
            I am actively seeking internship and entry-level opportunities where I can apply my
            technical skills and contribute to real-world projects.
          </Typography>
          <Typography sx={{ color: "var(--muted)", lineHeight: 1.7 }}>
            My recent work includes a facility management platform, a movie review application, and
            multiple e-commerce-style projects. I am also exploring Web3 concepts and AI-powered
            features.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              border: "1px solid var(--border)",
              borderRadius: "18px",
              background: "var(--surface)",
              p: { xs: 2.5, md: 3 },
              backdropFilter: "blur(6px)",
            }}
          >
            <Typography sx={{ mb: 2, fontWeight: 600, fontSize: "1.1rem" }}>Skills</Typography>
            <Box sx={{ display: "grid", gap: 1.3 }}>
              {skillGroups.map((group, groupIndex) => (
                <Box key={groupIndex} sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  {group.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      sx={{
                        color: "var(--text)",
                        border: "1px solid rgba(167, 184, 204, 0.3)",
                        backgroundColor: "rgba(13, 27, 45, 0.65)",
                        borderRadius: "10px",
                      }}
                    />
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
