import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description, 
  keywords = '', 
  canonical = '',
  ogImage = '',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  schema = null,
  noIndex = false,
  noFollow = false
}) => {
  const location = useLocation();
  
  const siteName = import.meta.env.VITE_SITE_NAME || 'HeyDay Realty';
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://heydayrealty.in';
  const defaultDescription = import.meta.env.VITE_SITE_DESCRIPTION || '';
  const defaultKeywords = import.meta.env.VITE_SITE_KEYWORDS || '';
  const author = import.meta.env.VITE_AUTHOR || 'HeyDay Realty Pvt. Ltd.';
  const locale = import.meta.env.VITE_LOCALE || 'en_IN';
  const defaultImage = import.meta.env.VITE_DEFAULT_IMAGE || '/og-default.jpg';
  const twitterHandle = import.meta.env.VITE_TWITTER_HANDLE || '@heydayrealty';
  
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const fullDescription = description || defaultDescription;
  const fullKeywords = keywords || defaultKeywords;
  const fullCanonical = canonical || `${siteUrl}${location.pathname}`;
  const fullOgImage = ogImage || `${siteUrl}${defaultImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {fullKeywords && <meta name="keywords" content={fullKeywords} />}
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots */}
      <meta name="robots" content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Additional Meta */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      
      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : [schema])}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
