import { Email, GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abhiram-k-rajan-2ba243244/", icon: LinkedIn },
  { label: "GitHub", href: "https://github.com/Abh1xxx", icon: GitHub },
  { label: "WhatsApp", href: "https://wa.me/916238033238", icon: WhatsApp },
  { label: "Email", href: "mailto:abhirammain01@gmail.com", icon: Email },
];

function Footer() {
  return (
    <Box component="footer" sx={{ py: { xs: 4, md: 5 }, textAlign: "center" }}>
      <Stack direction="row" spacing={1.2} justifyContent="center">
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <IconButton
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              sx={{
                color: "var(--text)",
                border: "1px solid var(--border)",
                backgroundColor: "rgba(13, 27, 45, 0.5)",
                "&:hover": {
                  color: "var(--accent)",
                  borderColor: "rgba(45, 212, 191, 0.55)",
                },
              }}
            >
              <Icon fontSize="small" />
            </IconButton>
          );
        })}
      </Stack>
      <Typography sx={{ mt: 2, color: "var(--muted)", fontSize: "0.9rem" }}>
        {new Date().getFullYear()} Abhiram K Rajan. Built with React and MUI.
      </Typography>
    </Box>
  );
}

export default Footer;
