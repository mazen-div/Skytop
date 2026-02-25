import React from 'react';
import { Box, Typography, Container } from '@mui/material';

// Import all flags
import austria from '../assets/images/austria.png';
import bangladesh from '../assets/images/bangladesh.png';
import belgium from '../assets/images/belgium.png';
import british from '../assets/images/british.png';
import bulgaria from '../assets/images/bulgaria.png';
import china from '../assets/images/china.png';
import croatia from '../assets/images/croatia.png';
import finland from '../assets/images/finland.png';
import france from '../assets/images/france.png';
import germany from '../assets/images/germany.png';
import greece from '../assets/images/greece.png';
import hungary from '../assets/images/hungary.png';
import india from '../assets/images/india.png';
import indonesia from '../assets/images/indonesia.png';
import iran from '../assets/images/iran.png';
import italy from '../assets/images/italy.png';
import japan from '../assets/images/japan.png';
import netherlands from '../assets/images/netherlands.png';
import norway from '../assets/images/norway.png';
import pakistan from '../assets/images/pakistan.png';
import philippines from '../assets/images/philippines.png';
import poland from '../assets/images/poland.png';
import portugal from '../assets/images/portugal.png';
import romania from '../assets/images/romania.png';
import russia from '../assets/images/russia.png';
import serbia from '../assets/images/serbia.png';
import south from '../assets/images/south.png';
import spain from '../assets/images/spain.png';
import sweden from '../assets/images/sweden.png';
import turkey from '../assets/images/turkey.png';
import ukraine from '../assets/images/ukraine.png';
import usa from '../assets/images/usa.png';

const flags = [
    { name: 'Austria', src: austria },
    { name: 'Bangladesh', src: bangladesh },
    { name: 'Belgium', src: belgium },
    { name: 'UK', src: british },
    { name: 'Bulgaria', src: bulgaria },
    { name: 'China', src: china },
    { name: 'Croatia', src: croatia },
    { name: 'Finland', src: finland },
    { name: 'France', src: france },
    { name: 'Germany', src: germany },
    { name: 'Greece', src: greece },
    { name: 'Hungary', src: hungary },
    { name: 'India', src: india },
    { name: 'Indonesia', src: indonesia },
    { name: 'Iran', src: iran },
    { name: 'Italy', src: italy },
    { name: 'Japan', src: japan },
    { name: 'Netherlands', src: netherlands },
    { name: 'Norway', src: norway },
    { name: 'Pakistan', src: pakistan },
    { name: 'Philippines', src: philippines },
    { name: 'Poland', src: poland },
    { name: 'Portugal', src: portugal },
    { name: 'Romania', src: romania },
    { name: 'Russia', src: russia },
    { name: 'Serbia', src: serbia },
    { name: 'South Korea', src: south },
    { name: 'Spain', src: spain },
    { name: 'Sweden', src: sweden },
    { name: 'Turkey', src: turkey },
    { name: 'Ukraine', src: ukraine },
    { name: 'USA', src: usa },
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
