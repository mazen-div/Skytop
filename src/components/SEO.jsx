import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonical, lang = 'en', ogType = 'website', ogImage }) => {
    const siteName = 'SkyTop Legal Translation | سكاي توب للترجمة القانونية';
    const siteUrl = 'https://skytoptranslation.com';
    const fullTitle = `${title} | SkyTop Legal Translation Dubai`;
    const url = `${siteUrl}${canonical || ''}`;
    const defaultDescription = 'SkyTop Legal Translation Dubai - Certified and professional translation services in over 100 languages. Specialized in legal, medical, and financial translation. ترجمة قانونية معتمدة في دبي والإمارات.';
    const defaultImage = `${siteUrl}/logo.png`;
    const arabicKeywords = 'ترجمة قانونية دبي, مكتب ترجمة معتمدة, ترجمة فورية, سكاي توب للترجمة, خدمات الترجمة في الإمارات, certified translation dubai, legal translation uae, legal translation office dubai';

    const schemaData = [
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "SkyTop Legal Translation & Interpretation",
            "alternateName": "سكاي توب للترجمة القانونية",
            "image": defaultImage,
            "@id": siteUrl,
            "url": siteUrl,
            "telephone": "+971568559113",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sheikh Rashid Road, Port Saeed, Acico Business Park, Office 612",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "postalCode": "00000",
                "addressCountry": "AE"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.257812,
                "longitude": 55.334161
            },
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
            },
            "sameAs": [
                "https://wa.me/+971568559113"
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SkyTop Legal Translation",
            "url": siteUrl,
            "logo": defaultImage,
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971568559113",
                "contactType": "customer service",
                "areaServed": "AE",
                "availableLanguage": ["en", "ar"]
            }
        }
    ];

    return (
        <Helmet htmlAttributes={{ lang }}>
            {/* Google Site Verification */}
            <meta name="google-site-verification" content="xQBdbsyi8dqz4Br634wVmN1tZKGvWx0A2dqEJvedLJI" />

            {/* Basic Meta Tags */}

            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords ? `${keywords}, ${arabicKeywords}` : `${arabicKeywords}`} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={ogImage || defaultImage} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={ogImage || defaultImage} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
};


export default SEO;
