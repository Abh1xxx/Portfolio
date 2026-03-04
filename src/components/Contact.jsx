import { LinkedIn, MailOutline } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

function Contact() {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
      }}
    >
      <Box
        sx={{
          border: "1px solid var(--border)",
          borderRadius: "20px",
          background:
            "linear-gradient(135deg, rgba(45, 212, 191, 0.11), rgba(245, 158, 11, 0.12), rgba(13, 27, 45, 0.8))",
          p: { xs: 2.6, md: 4 },
          textAlign: "center",
        }}
      >
        <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 1.2 }}>
          Let us build something strong.
        </Typography>
        <Typography sx={{ color: "var(--muted)", maxWidth: 680, mx: "auto", mb: 3 }}>
          If you are hiring or planning a new product, I can help with full-stack development,
          UI implementation, and shipping features from idea to production.
        </Typography>
        <Typography sx={{ color: "var(--muted)", mb: 0.6 }}>
          India: +91 6238033238 | UAE: +971 568674373
        </Typography>
        <Typography sx={{ color: "var(--muted)", mb: 3 }}>
          abhirammain01@gmail.com
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} justifyContent="center">
          <Button
            href="mailto:abhirammain01@gmail.com"
            startIcon={<MailOutline />}
            variant="contained"
            sx={{
              textTransform: "none",
              borderRadius: "12px",
              px: 2.4,
              py: 1.1,
              backgroundColor: "var(--accent)",
              color: "#022428",
              fontWeight: 700,
              "&:hover": { backgroundColor: "#40e0cb" },
            }}
          >
            Email Me
          </Button>
          <Button
            href="https://www.linkedin.com/in/abhiram-k-rajan-2ba243244/"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<LinkedIn />}
            variant="outlined"
            sx={{
              textTransform: "none",
              borderRadius: "12px",
              px: 2.4,
              py: 1.1,
              borderColor: "var(--border)",
              color: "var(--text)",
              "&:hover": { borderColor: "var(--accent)" },
            }}
          >
            LinkedIn
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Contact;
