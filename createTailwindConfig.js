const fs = require('fs');  
const content = "module.exports = {\\n  content: [\\n    './pages/**/*.{js,ts,jsx,tsx,mdx}',\\n    './components/**/*.{js,ts,jsx,tsx,mdx}',\\n    './app/**/*.{js,ts,jsx,tsx,mdx}',\\n  ],\\n  theme: {\\n    extend: {},\\n  },\\n  plugins: [],\\n};"  
fs.writeFileSync('frontend/tailwind.config.js', content) 
