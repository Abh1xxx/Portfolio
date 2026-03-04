import { Box, Grid, Typography } from "@mui/material";

function Experience() {
  return (
    <Box id="education" component="section" sx={{ py: { xs: 6, md: 8 } }}>
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: "1.9rem", md: "2.7rem" }, lineHeight: 1.1, mb: 1.5 }}
      >
        Education
      </Typography>
      <Typography sx={{ color: "var(--muted)", mb: 3, maxWidth: 760 }}>
        Academic progression focused on modern software development, data systems, and AI-driven
        problem solving.
      </Typography>

      <Grid container spacing={2.2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              border: "1px solid var(--border)",
              borderRadius: "18px",
              background: "var(--surface)",
              p: { xs: 2.3, md: 2.8 },
              height: "100%",
            }}
          >
            <Typography sx={{ fontWeight: 700, mb: 0.6 }}>
              Postgraduate Degree in Data Science
            </Typography>
            <Typography sx={{ color: "var(--accent)", fontSize: "0.95rem", mb: 1.1 }}>
              Manipal Academy of Higher Education (MAHE), Dubai
            </Typography>
            <Typography sx={{ color: "var(--muted)", fontSize: "0.92rem", mb: 1.1 }}>
              Feb 2026 - Feb 2027
            </Typography>
            <Typography sx={{ color: "var(--muted)", lineHeight: 1.65 }}>
              Currently strengthening expertise in data-driven systems, analytics workflows, and AI
              technologies.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              border: "1px solid var(--border)",
              borderRadius: "18px",
              background: "var(--surface)",
              p: { xs: 2.3, md: 2.8 },
              height: "100%",
            }}
          >
            <Typography sx={{ fontWeight: 700, mb: 0.6 }}>B.Tech in Computer Science</Typography>
            <Typography sx={{ color: "var(--accent)", fontSize: "0.95rem", mb: 1.1 }}>
              SNGCE, KTU (APJ Abdul Kalam Technological University), Ernakulam, Kerala
            </Typography>
            <Typography sx={{ color: "var(--muted)", fontSize: "0.92rem", mb: 1.1 }}>
              Oct 2020 - Jul 2024
            </Typography>
            <Typography sx={{ color: "var(--muted)", lineHeight: 1.65 }}>
              Built a strong foundation in software engineering fundamentals and full-stack
              development, now applied in production-style projects.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box id="certifications" sx={{ mt: 5 }}>
        <Typography
          variant="h3"
          sx={{ fontSize: { xs: "1.45rem", md: "1.9rem" }, lineHeight: 1.2, mb: 1.2 }}
        >
          Certifications
        </Typography>
        <Grid container spacing={2.2}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                border: "1px solid var(--border)",
                borderRadius: "18px",
                background: "var(--surface)",
                p: { xs: 2.3, md: 2.8 },
                height: "100%",
              }}
            >
              <Typography sx={{ fontWeight: 700, mb: 0.6 }}>
                Certification in Full Stack Development (MERN Stack)
              </Typography>
              <Typography sx={{ color: "var(--accent)", fontSize: "0.95rem", mb: 1.1 }}>
                Issued by Entri Elevate
              </Typography>
              <Typography sx={{ color: "var(--muted)", fontSize: "0.92rem", mb: 1.1 }}>
                Aug 2024 - Jul 2025
              </Typography>
              <Typography sx={{ color: "var(--muted)", lineHeight: 1.65 }}>
                Trained in MongoDB, Express.js, React, and Node.js with hands-on project development.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                border: "1px solid var(--border)",
                borderRadius: "18px",
                background: "var(--surface)",
                p: { xs: 2.3, md: 2.8 },
                height: "100%",
              }}
            >
              <Typography sx={{ fontWeight: 700, mb: 0.6 }}>
                Full Stack Development Coursework
              </Typography>
              <Typography sx={{ color: "var(--accent)", fontSize: "0.95rem", mb: 1.1 }}>
                Illinois Tech, US
              </Typography>
              <Typography sx={{ color: "var(--muted)", lineHeight: 1.65 }}>
                Strengthened practical web development knowledge through structured coursework and
                project assignments.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Experience;
