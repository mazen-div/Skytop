import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Box, Typography, Button, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from '../assets/images/logofo3.png';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header>
            {/* Top Bar */}
            <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 0.5, display: { xs: 'none', md: 'block' } }}>
                <Container>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', gap: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <PhoneIcon sx={{ fontSize: 16, color: 'secondary.main' }} />
                                <Typography variant="caption">+971 56 85 59 113</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <EmailIcon sx={{ fontSize: 16, color: 'secondary.main' }} />
                                <Typography variant="caption">info@skytoptranslation.com</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                            <Typography variant="caption">Mon - Fri: 9-6 | Sat: 9-3</Typography>
                            <IconButton
                                size="small"
                                sx={{ color: '#25D366' }}
                                component="a"
                                href="https://wa.me/+971568559113"
                                target="_blank"
                            >
                                <WhatsAppIcon sx={{ fontSize: 18 }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Main Navigation */}
            <Navbar
                expand="lg"
                sticky="top"
                className={`${scrolled ? 'glass-nav shadow' : 'bg-white'} py-2 transition-all`}
            >
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <Box component="img"
                            src={logo}
                            alt="SkyTop Legal Translation"
                            sx={{ height: scrolled ? 50 : 65, transition: 'height 0.3s ease' }}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                        <Nav className="me-auto align-items-lg-center" style={{ fontWeight: 600 }}>
                            <Nav.Link as={Link} to="/" className="nav-link-custom ms-lg-4 mx-lg-2">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="nav-link-custom mx-lg-2">About</Nav.Link>
                            <NavDropdown title="Services" id="services-dropdown" className="mx-lg-2">
                                <NavDropdown.Item as={Link} to="/services">All Services</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/services">Legal Translation</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/services">General Translation</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/services">Technical Translation</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/contact" className="nav-link-custom mx-lg-2">Contact</Nav.Link>
                        </Nav>
                        <Button
                            as={Link}
                            to="/contact"
                            variant="contained"
                            color="secondary"
                            sx={{
                                mt: { xs: 2, lg: 0 },
                                borderRadius: '50px',
                                px: 4,
                                fontWeight: 'bold',
                                boxShadow: '0 4px 14px 0 rgba(212,175,55,0.39)',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 6px 20px rgba(212,175,55,0.23)'
                                }
                            }}
                        >
                            Get a Quote
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
