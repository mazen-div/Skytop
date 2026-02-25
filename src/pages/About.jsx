import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Box, Typography, Paper, Grid } from '@mui/material';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ConfidentialIcon from '@mui/icons-material/Https';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import StarIcon from '@mui/icons-material/Star';

import SEO from '../components/SEO';

import aboutImg from '../assets/images/ph1.jpg';

const About = () => {
    return (
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
            <SEO
                title="About Us - Leading Language Experts | من نحن"
                description="Learn more about SkyTop Legal Translation. تعرف على سكاي توب للترجمة القانونية."
                canonical="/about"
                keywords="عن الشركة, من نحن, سكاي توب للترجمة, about skytop translation"
            />
            {/* Decorative Elements */}
            <Box className="vector-decoration vector-shape-1 floating-decoration" sx={{ top: -50, right: -100, opacity: 0.1 }} />
            <Box className="vector-decoration vector-shape-2 floating-decoration" sx={{ bottom: '20%', left: -50, opacity: 0.05 }} />

            {/* Banner */}
            <Box sx={{
                bgcolor: 'primary.main',
                py: { xs: 8, md: 15 },
                color: 'white',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1
            }}>
                <Container className="animate-fade-in">
                    <Typography variant="h2" fontWeight="900" gutterBottom>About Us</Typography>
                    <Typography variant="h6" sx={{ color: 'secondary.main', fontWeight: 500 }}>
                        Your Trusted Global Language Partner
                    </Typography>
                </Container>
            </Box>

            {/* Mission Section */}
            <Box sx={{ py: 12, position: 'relative', zIndex: 1, bgcolor: 'white' }}>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="animate-fade-in">
                            <Box component="img"
                                src={aboutImg}
                                alt="About SkyTop"
                                sx={{ width: '100%', borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            />
                        </Col>
                        <Col lg={6} className="ps-lg-5 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <Typography variant="h3" gutterBottom fontWeight="700">Expert Translation Since 2010</Typography>
                            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary' }}>
                                SkyTop Legal Translation is a specialist firm licensed from the Ministry of Justice in the UAE.
                                Our team provides high-quality translation services for legal and general documents in more than 100 languages.
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary' }}>
                                Under the management of professional translators who have been working in the legal and
                                technical translation field for 10 years, we ensure that every document is handled with
                                the highest level of accuracy and confidentiality.
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </Box>

            {/* Features */}
            <Box sx={{ py: 12, bgcolor: '#f8f9fa', position: 'relative', zIndex: 1 }}>
                <Container>
                    <Typography variant="h3" align="center" sx={{ mb: 8 }} fontWeight="700">Why Choose SkyTop?</Typography>
                    <Grid container spacing={4}>
                        {[
                            { title: 'Security & Privacy', icon: <SecurityIcon color="primary" />, desc: 'We maintain strict confidentiality protocols for all legal documents.' },
                            { title: 'Fast Delivery', icon: <SpeedIcon color="primary" />, desc: 'We understand the urgency of legal matters and ensure timely delivery.' },
                            { title: 'Premium Quality', icon: <VerifiedIcon color="primary" />, desc: 'Every translation undergoes a rigorous multi-step quality review.' },
                            { title: 'Certified Services', icon: <StarIcon color="primary" />, desc: 'Our translations are accepted by all government authorities in the UAE.' }
                        ].map((feature, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                <Paper elevation={0} sx={{ p: 4, textAlign: 'center', height: '100%', borderRadius: 4, bgcolor: 'white' }}>
                                    <Box sx={{ mb: 2 }}>{React.cloneElement(feature.icon, { sx: { fontSize: 50 } })}</Box>
                                    <Typography variant="h6" gutterBottom fontWeight="600">{feature.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">{feature.desc}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default About;
