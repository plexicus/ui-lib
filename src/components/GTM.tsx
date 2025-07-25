import React, { useEffect } from 'react';
import { gtmTrackingCode } from '../constants/Gtm';
/**
 * GoogleAnalytics Component
 *
 * This component is responsible for injecting the Google Analytics gtag.js
 * script into the document's <head> section. It ensures that Google Analytics
 * is loaded and configured when the component mounts.
 *
 * @param {string} trackingId - The Google Analytics Measurement ID (e.g., "G-XXXXXXXXXX").
 * This ID will be used to configure gtag.
 */
export const GoogleAnalytics: React.FC<{ trackingId: string }> = ({trackingId = gtmTrackingCode}) => {
  useEffect(() => {
 

    // Create the inline script element for dataLayer configuration
    const inlineScript = document.createElement('script');
    // Set the script as inline to avoid issues with module systems
    inlineScript.setAttribute('is:inline', ''); // This attribute is for Astro, but harmless in React.
                                            // For pure React, this attribute isn't strictly necessary for functionality.
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', '${trackingId}');
    `;
    document.head.prepend(inlineScript);


       // Create the external gtag.js script element
       const externalScript = document.createElement('script');
       externalScript.async = true;
       externalScript.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
       document.head.prepend(externalScript);
    // Cleanup function: Remove the scripts when the component unmounts
    return () => {
      document.head.removeChild(externalScript);
      document.head.removeChild(inlineScript);
    };
  }, [trackingId]); // Re-run effect if trackingId changes

  // This component does not render any visible elements, so it returns null.
  return null;
};

