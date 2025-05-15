import { Box, Typography, Container, Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import myProfile from "../assets/Me.png";
import { theme } from '../theme';
import { useState } from 'react';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Helmet>
        <title>Abhiram K Rajan | Full-Stack Developer & Web3 Explorer</title>
        <meta name="description" content="Abhiram K Rajan is a Full-Stack Developer experienced in the MERN stack and passionate about blockchain and decentralized applications." />
        <meta name="keywords" content="Abhiram K Rajan, MERN Developer, Full-stack developer, Blockchain, dApps, React, Node.js, MongoDB, Express, Web3" />
        <meta name="author" content="Abhiram K Rajan" />
        <meta property="og:title" content="Abhiram K Rajan | Full-Stack Developer & Web3 Explorer" />
        <meta property="og:description" content="Building scalable full-stack apps and exploring the future with blockchain & dApps." />
      </Helmet>
      <Container maxWidth="lg" id="home">
        <header>
          <Box
            component="section"
            sx={{
              paddingTop: { xs: 4, md: 8 },
              paddingBottom: { xs: 4, md: 0 },
              minHeight: { xs: 'auto', md: '85vh' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              textAlign: 'center',
            }}
          >
            <Box sx={{ maxWidth: '600px', width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box
                component="img"
                src={myProfile}
                loading="lazy"
                alt="Abhiram K Rajan - Full-Stack Developer"
                sx={{
                  width: { xs: 120, md: 150 },
                  height: { xs: 120, md: 150 },
                  borderRadius: '50%',
                  mb: { xs: 2, md: 3 },
                  mx: 'auto'
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  ...theme.typography.h1,
                  fontSize: { xs: '1.75rem', sm: '2.5rem', md: '4rem' },
                  lineHeight: { xs: 1.1, sm: 1.2, md: 1.5 },
                  paddingBottom: { xs: 0.75, md: 0 },
                  mb: 0
                }}
              >
                Abhiram K Rajan
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  mb: 1.5,
                  mt: 0,
                  opacity: 0.85
                }}
              >
                Full-Stack Developer | MERN Stack | Web3 Enthusiast
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  fontFamily: 'Poppins',
                  fontSize: { xs: '1.125rem', sm: '1.375rem', md: '1.714rem' },
                  mb: { xs: 2, md: 3 },
                  position: 'relative'
                }}
              >
                <span
                  style={{
                    background: 'linear-gradient(131deg, rgba(156,131,255,1) 42%, rgba(224,240,16,0.94) 70%, rgba(255,144,81,1) 75%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: isHovered ? '0 2px 5px rgba(156,131,255,0.4)' : '0 1px 3px rgba(156,131,255,0.25)',
                    cursor: 'default',
                    transition: 'text-shadow 0.3s ease, transform 0.2s ease',
                    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                    display: 'inline-block'
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  MERN Stack & Web3 Explorer
                </span>
                <span style={{
                  transition: 'transform 0.2s ease',
                  display: 'inline-block',
                  marginLeft: '3px',
                  transform: isHovered ? 'translateY(-4px) rotate(10deg)' : 'translateY(0) rotate(0deg)'
                }}>
                  🔥
                </span>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  maxWidth: 600,
                  mb: 4,
                  lineHeight: { xs: 1.8, md: 1.6 },
                  px: { xs: 2, md: 0 }
                }}
              >
                <strong>Hey there!</strong> I&apos;m <strong>Abhiram K Rajan</strong>, a passionate full-stack developer focused on crafting modern, scalable applications using <strong>React, Node.js, MongoDB</strong> and more.
                <br /><br />
                I’ve built projects like a <strong>Movie Rating & Review platform</strong> and a <strong>Woodland eCommerce website clone</strong> to master responsive UI and backend scalability. My curiosity also drives me to explore <strong>Web3, ChatGPT</strong>, and <strong>blockchain technologies</strong> to build the future of the web.
                <br /><br />
                Whether it’s a startup idea or an open-source collaboration — I’m always eager to learn, build, and solve real-world problems through code.
              </Typography>

              <Button
                variant="contained"
                size="large"
                onClick={() => window.open('mailto:abhirammain01@example.com', '_blank')}              
                sx={{
                  borderRadius: 28,
                  px: { xs: 4, md: 6 },
                  py: { xs: 1, md: 1.5 },
                  border: '1px solid #585858',
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: '#333333',
                  },
                  fontSize: { xs: '0.875rem', md: '1rem' },
                }}
              >
                Contact Me
              </Button>
            </Box>
          </Box>
        </header>
      </Container>
    </>
  );
};

export default Hero;
