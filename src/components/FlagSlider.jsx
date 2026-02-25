import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const flags = [
    { name: 'Austria', src: '/src/assets/images/austria.png' },
    { name: 'Bangladesh', src: '/src/assets/images/bangladesh.png' },
    { name: 'Belgium', src: '/src/assets/images/belgium.png' },
    { name: 'UK', src: '/src/assets/images/british.png' },
    { name: 'Bulgaria', src: '/src/assets/images/bulgaria.png' },
    { name: 'China', src: '/src/assets/images/china.png' },
    { name: 'Croatia', src: '/src/assets/images/croatia.png' },
    { name: 'Finland', src: '/src/assets/images/finland.png' },
    { name: 'France', src: '/src/assets/images/france.png' },
    { name: 'Germany', src: '/src/assets/images/germany.png' },
    { name: 'Greece', src: '/src/assets/images/greece.png' },
    { name: 'Hungary', src: '/src/assets/images/hungary.png' },
    { name: 'India', src: '/src/assets/images/india.png' },
    { name: 'Indonesia', src: '/src/assets/images/indonesia.png' },
    { name: 'Iran', src: '/src/assets/images/iran.png' },
    { name: 'Italy', src: '/src/assets/images/italy.png' },
    { name: 'Japan', src: '/src/assets/images/japan.png' },
    { name: 'Netherlands', src: '/src/assets/images/netherlands.png' },
    { name: 'Norway', src: '/src/assets/images/norway.png' },
    { name: 'Pakistan', src: '/src/assets/images/pakistan.png' },
    { name: 'Philippines', src: '/src/assets/images/philippines.png' },
    { name: 'Poland', src: '/src/assets/images/poland.png' },
    { name: 'Portugal', src: '/src/assets/images/portugal.png' },
    { name: 'Romania', src: '/src/assets/images/romania.png' },
    { name: 'Russia', src: '/src/assets/images/russia.png' },
    { name: 'Serbia', src: '/src/assets/images/serbia.png' },
    { name: 'South Korea', src: '/src/assets/images/south.png' },
    { name: 'Spain', src: '/src/assets/images/spain.png' },
    { name: 'Sweden', src: '/src/assets/images/sweden.png' },
    { name: 'Turkey', src: '/src/assets/images/turkey.png' },
    { name: 'Ukraine', src: '/src/assets/images/ukraine.png' },
    { name: 'USA', src: '/src/assets/images/usa.png' },
];

const FlagSlider = ({ language = 'en' }) => {
    const headlines = {
        en: 'Our Global Presence',
        ar: 'تواجدنا العالمي',
        fr: 'Notre Présence Globale',
        de: 'Unsere Globale Präsenz'
    };

    // Duplicate the flags array for a seamless loop
    const displayFlags = [...flags, ...flags];

    return (
        <Box sx={{ py: 6, bgcolor: '#f8f9fa' }}>
            <Container>
                <Box align="center" sx={{ mb: 4 }}>
                    <Typography variant="h4" fontWeight="800" sx={{ mb: 1, color: 'primary.main' }}>
                        {headlines[language] || headlines.en}
                    </Typography>
                    <Box sx={{ width: 60, height: 3, bgcolor: 'secondary.main', mx: 'auto' }} />
                </Box>
            </Container>

            <div className="marquee-container">
                <div className="marquee-content">
                    {displayFlags.map((flag, index) => (
                        <div key={index} className="flag-item">
                            <img src={flag.src} alt={flag.name} className="flag-img" />
                            <span className="country-name">{flag.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Box>
    );
};

export default FlagSlider;
