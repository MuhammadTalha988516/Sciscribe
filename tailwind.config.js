/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'class',  // ✅ Best practice: 'class' gives you full control

  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        // ✅ Example: Add your brand colors here for reusability
        primary: '#00A86B',
        secondary: '#212D35',
        accent: '#C6F2E3',
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'), // ✅ Better form styling
    require('@tailwindcss/typography'), // ✅ Beautiful prose
  ],
};
