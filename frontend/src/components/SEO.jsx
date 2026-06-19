import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  url = 'https://www.siddhibinayak.in',
  image = '/logo.png',
  schema 
}) => {
  const siteTitle = 'Siddhi Binayak Catering | Best Catering Service in Bhubaneswar';
  const fullTitle = siteTitle; // Use siteTitle as fullTitle for all meta tags
  
  return (
    <Helmet>
      {/* User requested a static tab title across all pages */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Advanced SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content={siteTitle} />
      <meta name="publisher" content={siteTitle} />
      <meta name="theme-color" content="#c9973a" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#c9973a" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
