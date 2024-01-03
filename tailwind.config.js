module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // For the best performance and to avoid false positives,
    // be as specific as possible with your content configuration.
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};