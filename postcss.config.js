export default {
    plugins: {
      "@tailwindcss/postcss": {},
      'postcss-prefix-selector': {
            prefix: '.ui-lib', // The class that will scope your styles
            ignoreFiles: [
                'node_modules/vanilla-cookieconsent/dist/cookieconsent.css',
                'src/components/CookieConsent/styles.css'
            ],
            // Optional: transform to handle special cases like 'body' or ':root'
            transform: (prefix, selector, prefixedSelector) => {
                if (selector === 'body' || selector === ':root') {
                return prefix; // Applies styles directly to your root .my-lib element
                }
                return prefixedSelector;
            },
        },
    }
  }