import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/+971568559113"
            target="_blank"
            rel="noopener noreferrer"
            className="floating-whatsapp"
            title="Chat with us on WhatsApp"
        >
            <WhatsAppIcon sx={{ fontSize: 35 }} />
        </a>
    );
};

export default FloatingWhatsApp;
