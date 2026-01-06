const fs = require('fs');  
const content = "@tailwind base;\\n@tailwind components;\\n@tailwind utilities;"  
fs.writeFileSync('frontend/app/globals.css', content) 
