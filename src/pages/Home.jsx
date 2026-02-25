import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import GavelIcon from '@mui/icons-material/Gavel';
import TranslateIcon from '@mui/icons-material/Translate';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VerifiedIcon from '@mui/icons-material/Verified';
import LanguageIcon from '@mui/icons-material/Language';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StarIcon from '@mui/icons-material/Star';


import FlagSlider from '../components/FlagSlider';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
            <SEO
                title="Certified Legal Translation in Dubai & UAE | ترجمة قانونية معتمدة"
                description="SkyTop Legal Translation provides certified translation services from the Ministry of Justice. 100+ languages. ترجمة معتمدة من وزارة العدل في دبي والإمارات."
                keywords="ترجمة قانونية, ترجمة معتمدة دبي, مكتب ترجمة دبي, legal translation dubai, moj translator"
                canonical="/"
            />
            {/* Hero Section */}
            <Box sx={{ position: 'relative', height: '90vh', overflow: 'hidden' }}>
                <Carousel fade interval={5000} controls={false} indicators={true}>
                    <Carousel.Item style={{ height: '90vh' }}>
                        <Box sx={{
                            height: '100%',
                            backgroundImage: 'linear-gradient(rgba(0,51,102,0.6), rgba(0,51,102,0.6)), url("/src/assets/images/ph2.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: 'white',
                            px: 3
                        }}>
                            <Container className="animate-fade-in">
                                <Typography variant="h1" fontWeight="900" sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '4rem' } }}>
                                    SkyTop Legal Translation
                                </Typography>
                                <Typography variant="h4" sx={{ mb: 5, color: 'secondary.main', fontWeight: 500, fontStyle: 'italic' }}>
                                    Your Premier Linguistic Gateway in Dubai
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <Button as={Link} to="/contact" variant="contained" color="secondary" size="large" sx={{ px: 4, py: 1.5, borderRadius: '50px', fontWeight: 'bold' }}>
                                        Request a Quote
                                    </Button>
                                    <Button as={Link} to="/services" variant="outlined" sx={{ color: 'white', borderColor: 'white', px: 4, py: 1.5, borderRadius: '50px', '&:hover': { borderColor: 'secondary.main', color: 'secondary.main' } }}>
                                        Our Services
                                    </Button>
                                </Box>
                            </Container>
                        </Box>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: '90vh' }}>
                        <Box sx={{
                            height: '100%',
                            backgroundImage: 'linear-gradient(rgba(0,51,102,0.6), rgba(0,51,102,0.6)), url("/src/assets/images/slider-02.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: 'white',
                            px: 3
                        }}>
                            <Container className="animate-fade-in">
                                <Typography variant="h1" fontWeight="900" sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '4rem' } }}>
                                    Precision. Trust. Speed.
                                </Typography>
                                <Typography variant="h4" sx={{ mb: 5, color: 'secondary.main', fontWeight: 500 }}>
                                    Certified Legal Translation Experts in UAE
                                </Typography>
                                <Button as={Link} to="/contact" variant="contained" color="secondary" size="large" sx={{ px: 4, py: 1.5, borderRadius: '50px', fontWeight: 'bold' }}>
                                    Get Free Quote
                                </Button>
                            </Container>
                        </Box>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: '90vh' }}>
                        <Box sx={{
                            height: '100%',
                            backgroundImage: 'linear-gradient(rgba(0,51,102,0.6), rgba(0,51,102,0.6)), url("/src/assets/images/slider-03.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: 'white',
                            px: 3
                        }}>
                            <Container className="animate-fade-in">
                                <Typography variant="h1" fontWeight="900" sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '4rem' } }}>
                                    Global Solutions
                                </Typography>
                                <Typography variant="h4" sx={{ mb: 5, color: 'secondary.main', fontWeight: 500 }}>
                                    Translating over 100 Languages Worldwide
                                </Typography>
                                <Button as={Link} to="/services" variant="contained" color="secondary" size="large" sx={{ px: 4, py: 1.5, borderRadius: '50px', fontWeight: 'bold' }}>
                                    Explore Services
                                </Button>
                            </Container>
                        </Box>
                    </Carousel.Item>
                </Carousel>
            </Box>

            {/* Flag Slider Section */}
            <FlagSlider />

            {/* Specialized Solutions Enhanced UI */}
            <Box sx={{ py: 15, position: 'relative', zIndex: 1, bgcolor: '#f4f7f9', overflow: 'hidden' }}>
                <Box className="decorative-blob" sx={{ top: -200, right: -150, width: 600, height: 600, opacity: 0.2 }} />
                <Box className="decorative-blob" sx={{ bottom: -200, left: -150, width: 500, height: 500, opacity: 0.1, background: 'radial-gradient(circle, var(--secondary-color) 0%, rgba(255, 255, 255, 0) 70%)' }} />

                <Container>
                    <Grid container spacing={4} className="animate-fade-in" sx={{ mb: 10, alignItems: 'center' }}>
                        <Grid item xs={12} md={7}>
                            <Typography variant="h6" color="secondary" sx={{ letterSpacing: 4, textTransform: 'uppercase', mb: 1, fontWeight: 800 }}>
                                Excellence in Language
                            </Typography>
                            <Typography variant="h2" fontWeight="900" sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' }, color: 'primary.main' }}>
                                Specialized Solutions
                            </Typography>
                            <Box sx={{ width: 120, height: 6, bgcolor: 'secondary.main', borderRadius: 3 }} />
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary', borderLeft: '4px solid', borderColor: 'secondary.main', pl: 3, py: 1, opacity: 0.8 }}>
                                We provide legally recognized translation services that bridge the gap between cultures and jurisdictions.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={4}>
                        {[
                            {
                                title: 'Legal Translation',
                                icon: <GavelIcon sx={{ fontSize: 45 }} />,
                                desc: 'Certified and notarized translations for court documents, contracts, and legal certificates, recognized by UAE Ministry of Justice.',
                                iconBg: 'linear-gradient(135deg, #003366 0%, #0055aa 100%)'
                            },
                            {
                                title: 'General Translation',
                                icon: <TranslateIcon sx={{ fontSize: 45 }} />,
                                desc: 'High-quality translation for business communication, marketing materials, and personal documents in 100+ languages.',
                                iconBg: 'linear-gradient(135deg, #D4AF37 0%, #f1c40f 100%)'
                            },
                            {
                                title: 'Interpretation',
                                icon: <RecordVoiceOverIcon sx={{ fontSize: 45 }} />,
                                desc: 'Professional simultaneous and consecutive interpretation services for conferences, legal trials, and corporate meetings.',
                                iconBg: 'linear-gradient(135deg, #003366 0%, #0055aa 100%)'
                            }
                        ].map((service, index) => (
                            <Grid item xs={12} md={4} key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                                <Paper
                                    elevation={0}
                                    className="service-card-new floating-premium"
                                    sx={{
                                        p: 6,
                                        textAlign: 'left',
                                        height: '100%',
                                        borderRadius: '30px',
                                        transition: 'all 0.4s ease',
                                        position: 'relative',
                                        overflow: 'visible',
                                        '&:hover': {
                                            transform: 'translateY(-20px) scale(1.02) !important',
                                            boxShadow: '0 40px 80px rgba(0,51,102,0.15) !important',
                                            '& .read-more-btn': {
                                                color: 'secondary.main',
                                                transform: 'translateX(10px)'
                                            }
                                        }
                                    }}
                                >
                                    <Box
                                        className="icon-box-premium"
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            background: service.iconBg,
                                            borderRadius: '22px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mb: 4,
                                            color: 'white',
                                            boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
                                        }}
                                    >
                                        {service.icon}
                                    </Box>
                                    <Typography variant="h4" fontWeight="900" gutterBottom sx={{ fontSize: '1.75rem', mb: 2 }}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ opacity: 0.86, lineHeight: 1.8, mb: 4, height: '100px', overflow: 'hidden' }}>
                                        {service.desc}
                                    </Typography>
                                    <Box
                                        className="read-more-btn"
                                        component={Link}
                                        to="/services"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            textDecoration: 'none',
                                            color: 'primary.main',
                                            fontWeight: 800,
                                            fontSize: '1rem',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        Discover Detail <span style={{ fontSize: '1.2rem' }}>→</span>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Special Offer Section */}
            <Box sx={{ py: 12, bgcolor: 'secondary.main', position: 'relative', overflow: 'hidden' }}>
                <Container>
                    <Box
                        sx={{
                            p: { xs: 5, md: 8 },
                            bgcolor: 'primary.main',
                            borderRadius: '32px',
                            color: 'white',
                            textAlign: 'center',
                            position: 'relative',
                            zIndex: 1,
                            boxShadow: '0 20px 50px rgba(0,51,102,0.3)',
                            overflow: 'hidden'
                        }}
                    >
                        <Box sx={{ position: 'absolute', top: -100, right: -100, width: 300, height: 300, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />
                        <Box sx={{ position: 'absolute', bottom: -50, left: -50, width: 200, height: 200, bgcolor: 'rgba(212,175,55,0.1)', borderRadius: '50%' }} />

                        <Typography variant="overline" sx={{ letterSpacing: 4, fontWeight: 700, mb: 2, display: 'block', color: 'secondary.main' }}>
                            Limited Time Promotion
                        </Typography>
                        <Typography variant="h2" fontWeight="900" sx={{ mb: 3, fontSize: { xs: '2rem', md: '3.5rem' } }}>
                            Get 20% Discount On Your First Order!
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 5, opacity: 0.9, fontWeight: 400, maxWidth: '800px', mx: 'auto' }}>
                            Our exclusive offer is still valid if you contact us today. Get professional translation services at unbeatable rates.
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Button
                                href="https://wa.me/+971568559113"
                                target="_blank"
                                variant="contained"
                                color="secondary"
                                size="large"
                                startIcon={<WhatsAppIcon />}
                                sx={{
                                    px: 5,
                                    py: 2,
                                    borderRadius: '50px',
                                    fontWeight: '900',
                                    fontSize: '1.1rem',
                                    boxShadow: '0 10px 20px rgba(212,175,55,0.4)',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 15px 30px rgba(212,175,55,0.5)'
                                    },
                                    transition: 'all 0.3s'
                                }}
                            >
                                Claim Offer on WhatsApp
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Why Choose Us with premium feel */}
            <Box sx={{ py: 15, bgcolor: 'primary.main', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <Box className="decorative-blob" sx={{ bottom: -200, left: -200, opacity: 0.1 }} />
                <Container>
                    <Row className="align-items-center">
                        <Col lg={5} className="animate-fade-in">
                            <Typography variant="h2" fontWeight="800" gutterBottom>Why Partner With Us?</Typography>
                            <Typography variant="body1" sx={{ mb: 6, opacity: 0.8, lineHeight: 1.8 }}>
                                We combine industry expertise with cutting-edge linguistic technology to deliver translations
                                that are not only accurate but culturally relevant.
                            </Typography>
                            <Button as={Link} to="/about" variant="contained" color="secondary" sx={{ px: 5, py: 1.5, borderRadius: '50px', fontWeight: 'bold' }}>
                                Learn More About Us
                            </Button>
                        </Col>
                        <Col lg={7}>
                            <Grid container spacing={4} sx={{ mt: { xs: 5, lg: 0 } }}>
                                {[
                                    { title: '100+ Languages', icon: <TranslateIcon /> },
                                    { title: '24/7 Support', icon: <SupportAgentIcon /> },
                                    { title: 'Licensed Firm', icon: <VerifiedIcon /> },
                                    { title: 'Native Linguists', icon: <LanguageIcon /> }
                                ].map((item, index) => (
                                    <Grid item xs={6} key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                        <Box sx={{ p: 4, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 4, textAlign: 'center', transition: 'all 0.3s', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}>
                                            <Box sx={{ mb: 2, color: 'secondary.main' }}>
                                                {React.cloneElement(item.icon, { sx: { fontSize: 40 } })}
                                            </Box>
                                            <Typography variant="h6" fontWeight="600">{item.title}</Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Col>
                    </Row>
                </Container>
            </Box>
        </Box>
    );
};

export default Home;
