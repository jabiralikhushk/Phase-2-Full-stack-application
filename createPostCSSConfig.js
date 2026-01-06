const fs = require('fs');  
const content = "module.exports = {\\n  plugins: {\\n    tailwindcss: {},\\n    autoprefixer: {},\\n  },\\n};"  
fs.writeFileSync('frontend/postcss.config.js', content) 
