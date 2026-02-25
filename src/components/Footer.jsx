import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Box, Typography, IconButton, Link as MuiLink } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: '#002244', color: '#bbae8c', pt: 8, pb: 4 }}>
            <Container>
                <Row className="gy-4">
                    <Col lg={4} md={6}>
                        <Typography variant="h5" sx={{ color: 'white', mb: 3 }}>About SkyTop</Typography>
                        <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                            SkyTop Legal Translation is a specialist firm licensed from the Ministry of Justice in the UAE.
                            We provide high-quality translation services for legal and general documents in more than 100 languages.
                        </Typography>
                        <Box sx={{ mt: 3, display: 'flex', gap: 1 }}>
                            <IconButton sx={{ color: 'secondary.main' }} component="a" href="https://wa.me/+971568559113"><FacebookIcon /></IconButton>
                            <IconButton sx={{ color: 'secondary.main' }} component="a" href="https://wa.me/+971568559113"><TwitterIcon /></IconButton>
                            <IconButton sx={{ color: 'secondary.main' }} component="a" href="https://wa.me/+971568559113"><InstagramIcon /></IconButton>
                            <IconButton sx={{ color: 'secondary.main' }} component="a" href="https://wa.me/+971568559113"><LinkedInIcon /></IconButton>
                            <IconButton sx={{ color: 'secondary.main' }} component="a" href="https://wa.me/+971568559113"><WhatsAppIcon /></IconButton>
                        </Box>
                    </Col>

                    <Col lg={4} md={6}>
                        <Typography variant="h5" sx={{ color: 'white', mb: 3 }}>Quick Links</Typography>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '10px' }}>
                                <MuiLink href="/" color="inherit" underline="hover">Home</MuiLink>
                            </li>
                            <li style={{ marginBottom: '10px' }}>
                                <MuiLink href="/about" color="inherit" underline="hover">About Us</MuiLink>
                            </li>
                            <li style={{ marginBottom: '10px' }}>
                                <MuiLink href="/services" color="inherit" underline="hover">Our Services</MuiLink>
                            </li>
                            <li style={{ marginBottom: '10px' }}>
                                <MuiLink href="/contact" color="inherit" underline="hover">Contact Us</MuiLink>
                            </li>
                        </ul>
                    </Col>

                    <Col lg={4} md={12}>
                        <Typography variant="h5" sx={{ color: 'white', mb: 3 }}>Contact Info</Typography>
                        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                            <LocationOnIcon sx={{ color: 'secondary.main' }} />
                            <Typography variant="body2">
                                Dubai, Sheikh Rashid Road, Port Saeed, Acico Business Park, Office 612
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                            <PhoneIcon sx={{ color: 'secondary.main' }} />
                            <Typography variant="body2">+971 56 85 59 113 / +971 52 12 07 262</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <EmailIcon sx={{ color: 'secondary.main' }} />
                            <Typography variant="body2">info@skytoptranslation.com</Typography>
                        </Box>
                    </Col>
                </Row>
                <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: 6, pt: 4, textAlign: 'center' }}>
                    <Typography variant="body2">
                        Copyright © {new Date().getFullYear()} SkyTop Legal Translation - All rights reserved
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
