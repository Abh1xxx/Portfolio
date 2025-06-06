import { WhatsApp, GitHub, Email } from '@mui/icons-material';
import { Box, Container, IconButton, Typography } from '@mui/material';
import { Linkedin } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abhiram-k-rajan-2ba243244/',
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/Abh1xxx',
      icon: GitHub,
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/916238033238',
      icon: WhatsApp,
    },
    {
      label: 'Email',
      href: 'mailto:abhirammain01@gmail.com',
      icon: Email,
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          paddingTop: 6,
          paddingBottom: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mb: 3,
          }}
        >
          {socialLinks.map((social, index) => (
            <IconButton
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Connect with Abhiram K Rajan on ${social.label}`}
              onMouseEnter={() => setHoveredIcon(index)}
              onMouseLeave={() => setHoveredIcon(null)}
              sx={{
                color: 'white',
                transition: 'all 0.3s ease-in-out',
                transform: hoveredIcon === index ? 'translateY(-4px)' : 'translateY(0)',
                '&:hover': {
                  color: 'white',
                },
              }}
            >
              <social.icon size={20} />
            </IconButton>
          ))}
        </Box>

        <Typography variant="body2" sx={{ mt: 2, opacity: 0.7 }}>
          &copy; {new Date().getFullYear()} Abhiram K Rajan
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
