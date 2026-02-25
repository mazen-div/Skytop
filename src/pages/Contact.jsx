import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Box, Typography, TextField, Button, Paper, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import image2 from "../assets/Image2.png";
import SEO from '../components/SEO';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message. We will get back to you soon!');
    };

    return (
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
            <SEO
                title="Contact Us - Free Quote for Translation"
                description="Get a free quote for your translation needs today. Reach out to SkyTop Legal Translation on WhatsApp or via our contact form."
                canonical="/contact"
            />
            {/* Decorative Background Patterns */}
            <Box className="decorative-blob" sx={{ top: -100, left: -100 }} />
            <Box className="decorative-blob" sx={{ top: '40%', right: -150, width: 600, height: 600 }} />

            <Box sx={{
                bgcolor: 'primary.main',
                py: { xs: 10, md: 15 },
                color: 'white',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1
            }}>
                <Container className="animate-fade-in">
                    <Typography variant="h2" fontWeight="900" gutterBottom>Contact Us</Typography>
                    <Typography variant="h6" sx={{ color: 'secondary.main', mb: 2, fontWeight: 500 }}>
                        Let's bridge the language gap together
                    </Typography>
                    <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', opacity: 0.8 }}>
                        We are here to help you solve your translation needs with precision and confidentiality.
                    </Typography>
                </Container>
            </Box>

            <Box sx={{ py: 12, position: 'relative', zIndex: 1 }}>
                <Container>
                    <Row className="gx-5">
                        {/* Contact Info */}
                        <Col lg={5} className="mb-5 mb-lg-0 animate-fade-in">
                            <Typography variant="h4" gutterBottom fontWeight="700">Get In Touch</Typography>
                            <Typography variant="body1" sx={{ mb: 6 }} color="text.secondary" lineHeight={1.8}>
                                Have a project in mind or need a quote? Reach out to us through any of the channels below.
                                Our experts are available 24/7 to assist you.
                            </Typography>

                            <Box sx={{ display: 'flex', gap: 3, mb: 4, transition: 'all 0.3s' }}>
                                <Paper elevation={0} sx={{
                                    p: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    bgcolor: 'primary.main',
                                    color: 'white',
                                    borderRadius: 3
                                }}>
                                    <LocationOnIcon />
                                </Paper>
                                <Box>
                                    <Typography variant="h6" fontWeight="600">Our Address</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Dubai, Sheikh Rashid Road, Port Saeed, Acico Business Park, Office 612
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
                                <Paper elevation={0} sx={{
                                    p: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    bgcolor: 'secondary.main',
                                    color: 'white',
                                    borderRadius: 3
                                }}>
                                    <PhoneIcon />
                                </Paper>
                                <Box>
                                    <Typography variant="h6" fontWeight="600">Phone & WhatsApp</Typography>
                                    <Typography variant="body2" color="text.secondary">+971 56 85 59 113 / +971 52 12 07 262</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 3 }}>
                                <Paper elevation={0} sx={{
                                    p: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    bgcolor: 'accent.color',
                                    color: 'black',
                                    borderRadius: 3
                                }}>
                                    <EmailIcon />
                                </Paper>
                                <Box>
                                    <Typography variant="h6" fontWeight="600">Email Us</Typography>
                                    <Typography variant="body2" color="text.secondary">info@skytoptranslation.com</Typography>
                                </Box>
                            </Box>
                        </Col>

                        {/* add image 2 here */}
                        <Col lg={7} className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <img src={image2} width="100%" alt="Contact" />
                        </Col>
                    </Row>
                </Container>
            </Box>

            {/* Map Section */}
            <Box sx={{ height: 400, width: '100%' }}>
                <iframe
                    title="SkyTop Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.379611250176!2d55.334160815010684!3d25.257812483868072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5b859859ee7ba898!2zMjXCsDE1JzI4LjgiTiA1NcKwMjAnMTAuNyJF!5e0!3m2!1sen!2seg!4v1667239500830!5m2!1sen!2seg"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </Box>
        </Box>
    );
};

export default Contact;
