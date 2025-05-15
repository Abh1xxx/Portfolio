import { Box, Typography, Container } from '@mui/material';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const [isTextHovered, setIsTextHovered] = useState(false);

  return (
    <>
      <Helmet>
        <title>Abhiram | MERN Stack & Future Tech Developer</title>
        <meta
          name="description"
          content="Get to know Abhiram, a dedicated MERN Stack Developer with a passion for AI, Web3, and futuristic technologies. Learn about his journey, skills, and project experience." />
      </Helmet>
      <Container id="about">
        <Box
          sx={{
            py: { xs: 8, md: 8 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 'bold',
              letterSpacing: '5px',
              fontFamily: 'Poppins',
              fontSize: { xs: '32px', sm: '40px', md: '47.42px' },
              lineHeight: { xs: 1.3, md: 1.2 },
            }}
          >
            ABOUT ME
          </Typography>
          <Typography
            gutterBottom
            align="center"
            sx={{
              mb: 2,
              opacity: 0.7,
              background:
                'linear-gradient(131deg, rgba(156,131,255,1) 42%, rgba(224,240,16,0.94) 70%, rgba(255,144,81,1) 75%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '0.2em',
              fontSize: { xs: '12px', md: '14px' },
            }}
          >
            EXPLORE NOW
          </Typography>
          <Box
            sx={{
              width: '100%',
              maxWidth: '600px',
              px: { xs: 2, md: 0 },
              position: 'relative',
              '&::after': isTextHovered
                ? {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100px',
                    height: '2px',
                    background:
                      'linear-gradient(131deg, rgba(156,131,255,1) 42%, rgba(224,240,16,0.94) 70%, rgba(255,144,81,1) 75%)',
                    borderRadius: '1px',
                    transition: 'width 0.3s ease',
                  }
                : {},
            }}
            onMouseEnter={() => setIsTextHovered(true)}
            onMouseLeave={() => setIsTextHovered(false)}
          >
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontSize: { xs: '0.875rem', md: '1rem' },
                lineHeight: { xs: 1.6, md: 1.5 },
                transition: 'opacity 0.3s ease',
                opacity: isTextHovered ? 1 : 0.9,
              }}
            >
              I am <strong>Abhiram</strong>, a passionate <strong>MERN Stack Developer</strong> with a strong interest in <strong>Artificial Intelligence, Blockchain, and Web3</strong> technologies. I recently completed my B.Tech in Computer Science and am now building projects that combine <strong>React, Node.js, Express, and MongoDB</strong> with emerging tech trends.
            </Typography>
            <Typography
  variant="body1"
  sx={{
    mb: 3,
    fontSize: { xs: '0.875rem', md: '1rem' },
    lineHeight: { xs: 1.6, md: 1.5 },
    transition: 'opacity 0.3s ease',
    opacity: isTextHovered ? 1 : 0.9,
  }}
>
  I have successfully completed full-stack projects like a <strong>Movie Rating & Review platform</strong> and a <strong>Woodland eCommerce website clone</strong> using modern UI libraries and responsive design techniques. My focus was on building impactful applications that combine a great <strong>user experience</strong> with <strong>scalable backend architectures</strong>, while also exploring technologies like <strong>ChatGPT, blockchain, and decentralized apps</strong>.
</Typography>

          </Box>
        </Box>
      </Container>
    </>
  );
};

export default About;
