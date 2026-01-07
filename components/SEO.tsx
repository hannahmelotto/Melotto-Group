
import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
}

/**
 * SEO Component
 * Dynamically updates the document title and meta description tag.
 * Essential for SPA SEO when not using SSR.
 */
const SEO: React.FC<SEOProps> = ({ title, description }) => {
  useEffect(() => {
    // Update Title
    const fullTitle = `${title} | Melotto Group`;
    document.title = fullTitle;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update Open Graph tags for social sharing
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

  }, [title, description]);

  return null;
};

export default SEO;
