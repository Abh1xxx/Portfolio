import { Box, Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#07111f",
      paper: "#0d1b2d",
    },
    primary: { main: "#2dd4bf" },
    secondary: { main: "#f59e0b" },
  },
  typography: {
    fontFamily: '"Outfit", sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 18,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: "relative", overflowX: "clip" }}>
        <Box
          aria-hidden
          sx={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              borderRadius: "999px",
              filter: "blur(60px)",
            },
            "&::before": {
              width: 280,
              height: 280,
              top: { xs: 80, md: 110 },
              left: { xs: -120, md: -80 },
              background: "rgba(45, 212, 191, 0.24)",
            },
            "&::after": {
              width: 260,
              height: 260,
              top: { xs: 320, md: 240 },
              right: { xs: -100, md: -70 },
              background: "rgba(245, 158, 11, 0.15)",
            },
          }}
        />

        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
