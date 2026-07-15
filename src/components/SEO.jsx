import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords = '', 
  canonical = '',
  ogImage = '',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  schema = null,
  noIndex = false
}) => {
  const siteName = 'HeyDay Realty Pvt. Ltd.';
  const siteUrl = 'https://heydayrealty.in';
  const defaultImage = `${siteUrl}/og-default.jpg`;
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const fullCanonical = canonical || siteUrl;
  const fullOgImage = ogImage || defaultImage;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Additional Meta */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      
      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
