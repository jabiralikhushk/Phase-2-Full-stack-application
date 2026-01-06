const fs = require('fs');  
const content = "module.exports = {\\n  output: 'export',\\n  env: {\\n    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'\\n  },\\n  images: {\\n    unoptimized: true\\n  }\\n};"  
fs.writeFileSync('frontend/next.config.js', content) 
