import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Box, Typography, Card, CardContent, Grid, Button, Paper } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import TranslateIcon from '@mui/icons-material/Translate';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import WebIcon from '@mui/icons-material/Web';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import InterpretingIcon from '@mui/icons-material/InterpreterMode';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SEO from '../components/SEO';

const allServices = [
    {
        title: 'Legal Translation',
        icon: <GavelIcon fontSize="large" sx={{ color: 'white' }} />,
        color: '#003366',
        desc: 'Certified translation for legal systems worldwide. We handle litigation documents, certificates, and translation affidavits with extreme precision. Licensed by the Ministry of Justice UAE.'
    },
    {
        title: 'General Translation',
        icon: <TranslateIcon fontSize="large" sx={{ color: 'white' }} />,
        color: '#D4AF37',
        desc: 'Translation of non-specialized texts across all languages. Perfect for personal correspondence, general business documents, and everyday linguistic needs.'
    },
    {
        title: 'Medical Translation',
        icon: <LocalHospitalIcon fontSize="large" sx={{ color: 'white' }} />,
        color: '#e91e63',
        desc: 'Precise technical translation for medical documents, pharma journals, and patient records. Our experts ensure accurate terminology for the healthcare sector.'
    },
    {
        title: 'Financial Translation',
        icon: <MonetizationOnIcon fontSize="large" sx={{ color: 'white' }} />,
        color: '#2e7d32',
        desc: 'Expert conversion of financial statements, audit reports, and banking documents. We ensure full compliance with international financial reporting standards.'
    },
    {
        title: 'Technical Translation',
        icon: <SettingsSuggestIcon fontSize="large" sx={{ color: 'white' }} />,
        color: '#607d8b',
        desc: 'Scientific material and technical manuals dealing with specialized engineering, IT, or manufacturing subjects. Accuracy in industry-specific terms is our priority.'
    },
    {
        title: 'Website Translation',
        icon: <WebIcon fontSize="large" sx={{ color: 'white' }} />,
        color: '#0288d1',
        desc: 'Full localization and translation of web content. We adapt your digital presence to resonate with global audiences while maintaining brand voice.'
    },
    {
        title: 'Subtitling',
        icon: <VideoLibraryIcon fontSize="large" sx={{ color: 'white' }} />,
        color: '#ed6c02',
        desc: 'Professional subtitling for movies, corporate videos, and educational content. We ensure cultural context and timing are perfectly aligned.'
    },
    {
        title: 'Software Localization',
        icon: <PhonelinkSetupIcon fontSize="large" sx={{ color: 'white' }} />,
        color: '#9c27b0',
        desc: 'Adapting software interfaces, date formats, and currencies for local markets. We help your software feel "native" anywhere in the world.'
    },
    {
        title: 'Interpretation',
        icon: <InterpretingIcon fontSize="large" sx={{ color: 'white' }} />,
        color: '#003366',
        desc: 'Simultaneous and consecutive interpreting for conferences, legal depositions, and business meetings. Professional linguists at your service 24/7.'
    }
];

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <Box className={`${className} custom-arrow next`} onClick={onClick}>
            <ArrowForwardIosIcon />
        </Box>
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <Box className={`${className} custom-arrow prev`} onClick={onClick}>
            <ArrowBackIosNewIcon />
        </Box>
    );
};

const Services = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1, arrows: false } }
        ]
    };

    return (
        <Box>
            <SEO
                title="Translation Services in 100+ Languages"
                description="Explore our wide range of translation services: legal, medical, financial, technical, and more. Certified and professional solutions for global communication."
                canonical="/services"
                keywords="legal translation services dubai, medical translation uae, financial translation dubai, technical translation uae, website localization"
            />
            {/* Header Section */}
            <Box sx={{
                bgcolor: 'primary.main',
                py: { xs: 8, md: 15 },
                color: 'white',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <Box className="vector-decoration vector-shape-1 floating-decoration" sx={{ top: -50, right: -100, opacity: 0.1 }} />
                <Box className="vector-decoration vector-shape-2 floating-decoration" sx={{ bottom: -20, left: -50, opacity: 0.05 }} />
                <Container className="animate-fade-in" sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography variant="h2" gutterBottom fontWeight="900" sx={{ mb: 3 }}>Expert Translation Services</Typography>
                    <Typography variant="h6" sx={{ color: 'secondary.main', mb: 3, fontWeight: 500, letterSpacing: 1.5 }}>
                        PRECISION • CONFIDENTIALITY • RELIABILITY
                    </Typography>
                    <Typography variant="body1" sx={{ maxWidth: '850px', mx: 'auto', opacity: 0.9, lineHeight: 1.8 }}>
                        With over 10 years of experience and a team of licensed professionals, we provide high-quality
                        linguistic solutions in more than 100 languages.
                    </Typography>
                </Container>
            </Box>

            {/* Slider Section */}
            <Box sx={{ py: 15, bgcolor: '#fdfdfd', position: 'relative' }}>
                <Container>
                    <Box sx={{ textAlign: 'center', mb: 10 }}>
                        <Typography variant="h3" fontWeight="800" sx={{ mb: 2 }}>Featured Services</Typography>
                        <Box sx={{ width: 80, height: 4, bgcolor: 'secondary.main', mx: 'auto' }} />
                    </Box>

                    <Paper className="service-slider-frame animate-fade-in" elevation={0}>
                        <Box className="slider-container">
                            <Slider {...sliderSettings}>
                                {allServices.slice(0, 5).map((service, index) => (
                                    <Box key={index} sx={{ px: 2, pb: 4 }}>
                                        <Card className="hover-scale" sx={{
                                            height: 480,
                                            border: 'none',
                                            borderRadius: 6,
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            overflow: 'hidden'
                                        }}>
                                            <Box sx={{
                                                bgcolor: service.color,
                                                py: 5,
                                                textAlign: 'center',
                                                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0))'
                                            }}>
                                                {service.icon}
                                            </Box>
                                            <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                                                <Typography variant="h5" gutterBottom fontWeight="800">
                                                    {service.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                                                    {service.desc}
                                                </Typography>
                                                <Box sx={{ mt: 'auto' }}>
                                                    <Button
                                                        as={Link}
                                                        to="/contact"
                                                        variant="text"
                                                        sx={{
                                                            color: service.color,
                                                            fontWeight: 'bold',
                                                            '&:hover': { background: 'transparent', textDecoration: 'underline' }
                                                        }}
                                                    >
                                                        Learn More →
                                                    </Button>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                ))}
                            </Slider>
                        </Box>
                    </Paper>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box sx={{ py: 10, textAlign: 'center', bgcolor: 'white' }}>
                <Container>
                    <Typography variant="h3" gutterBottom>Ready to start your project?</Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                        Get a free quote within hours and 24/7 customer support.
                    </Typography>
                    <Button
                        as={Link}
                        to="/contact"
                        variant="contained"
                        size="large"
                        color="secondary"
                        sx={{ px: 6, py: 1.5, borderRadius: '50px', fontWeight: 'bold' }}
                    >
                        Contact Our Experts
                    </Button>
                </Container>
            </Box>
        </Box>
    );
};

export default Services;
