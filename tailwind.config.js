/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,ts,css,scss}"],
  theme: {
    extend: {
    fontFamily: {
        sans: ['Inter', 'Geist Sans', 'ui-sans-serif', 'system-ui'],
        mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular'],
        logo: ['Pacifico', 'cursive']
      },
      fontSize: {
        '5xl': ['48px', { lineHeight: '1.1' }],  // Main name
        '3xl': ['30px', { lineHeight: '1.2' }],  // Section headings
        '2xl': ['24px', { lineHeight: '1.3' }],  // Job title
        xl: ['20px', { lineHeight: '1.4' }],     // Subsection headings
        lg: ['18px', { lineHeight: '1.5' }],     // Intro paragraphs
        base: ['16px', { lineHeight: '1.6' }],   // Body
        sm: ['14px', { lineHeight: '1.5' }],     // Small text
        xs: ['12px', { lineHeight: '1.4' }]      // Tiny tags
      },
      boxShadow: {
        "brand-sm": "0 6px 20px rgba(74,91,255,.35)",
        "brand-lg": "0 10px 28px rgba(74,91,255,.45)",
        "card-strong": "0 10px 30px rgba(0,0,0,.35)",
        "card-light": "0 10px 24px rgba(0,0,0,.08)",
      },
    },
  },
  plugins: [],
};
