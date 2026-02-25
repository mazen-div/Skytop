import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonical, lang = 'en', ogType = 'website', ogImage }) => {
    const siteName = 'SkyTop Legal Translation | سكاي توب للترجمة القانونية';
    const fullTitle = `${title} | SkyTop`;
    const url = `https://skytoptranslation.com${canonical || ''}`;
    const defaultDescription = 'SkyTop Legal Translation Dubai - Certified and professional translation services in over 100 languages. ترجمة قانونية معتمدة في دبي والإمارات بأكثر من 100 لغة.';
    const defaultImage = 'https://skytoptranslation.com/src/assets/logo.png';
    const arabicKeywords = 'ترجمة قانونية دبي, مكتب ترجمة معتمدة, ترجمة فورية, سكاي توب للترجمة, خدمات الترجمة في الإمارات, certified translation dubai, legal translation uae';

    const schemaData = {
        // ... (schema remains same but with updated siteName)
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "SkyTop Legal Translation & Interpretation",
        "alternateName": "سكاي توب للترجمة القانونية",
        "image": defaultImage,
        // ...
    };

    return (
        <Helmet htmlAttributes={{ lang }}>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords ? `${keywords}, ${arabicKeywords}` : `${arabicKeywords}, legal translation dubai`} />
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
