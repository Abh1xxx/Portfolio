import { useMemo, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

const navItems = [
  { label: "About", target: "about" },
  { label: "Education", target: "education" },
  { label: "Certifications", target: "certifications" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const resumeLink = useMemo(() => "/ABHIRAM K Rajan-UAE.pdf", []);

  return (
    <AppBar
      elevation={0}
      position="sticky"
      sx={{
        top: 10,
        mt: 1,
        borderRadius: "16px",
        border: "1px solid var(--border)",
        backgroundColor: "rgba(6, 15, 28, 0.7)",
        backdropFilter: "blur(12px)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", minHeight: 72 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Space Grotesk", sans-serif',
            letterSpacing: 0.6,
            fontWeight: 700,
          }}
        >
          Abhiram K Rajan
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1.25 }}>
          {navItems.map((item) => (
            <Button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              sx={{
                textTransform: "none",
                color: "var(--text)",
                borderRadius: "12px",
                px: 2,
                py: 1,
                "&:hover": {
                  backgroundColor: "rgba(45, 212, 191, 0.12)",
                },
              }}
            >
              {item.label}
            </Button>
          ))}

          <Button
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textTransform: "none",
              borderRadius: "12px",
              px: 2,
              py: 1,
              ml: 1,
              border: "1px solid rgba(45, 212, 191, 0.5)",
              color: "var(--text)",
              background: "linear-gradient(120deg, rgba(45, 212, 191, 0.22), rgba(245, 158, 11, 0.08))",
              "&:hover": {
                borderColor: "var(--accent)",
                background: "linear-gradient(120deg, rgba(45, 212, 191, 0.34), rgba(245, 158, 11, 0.18))",
              },
            }}
          >
            Resume
          </Button>
        </Box>

        <IconButton
          sx={{ display: { xs: "inline-flex", md: "none" }, color: "var(--text)" }}
          onClick={() => setMobileOpen(true)}
          aria-label="open navigation"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 260,
            pt: 3,
            px: 2,
            backgroundColor: "rgba(7, 17, 31, 0.95)",
            borderLeft: "1px solid var(--border)",
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item.target}
              onClick={() => {
                scrollToSection(item.target);
                setMobileOpen(false);
              }}
              sx={{
                justifyContent: "flex-start",
                textTransform: "none",
                color: "var(--text)",
                py: 1.25,
              }}
            >
              {item.label}
            </Button>
          ))}
          <Button
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            sx={{
              textTransform: "none",
              mt: 1,
              border: "1px solid var(--accent)",
              color: "var(--text)",
              justifyContent: "flex-start",
            }}
          >
            Resume
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
