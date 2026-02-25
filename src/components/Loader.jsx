import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const Loader = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            bgcolor: 'primary.main',
            color: 'white'
        }}>
            <CircularProgress color="secondary" size={60} thickness={4} />
            <Typography variant="h6" sx={{ mt: 3, fontWeight: 500, letterSpacing: 2 }}>
                SKYTOP TRANSLATION
            </Typography>
        </Box>
    );
};

export default Loader;
