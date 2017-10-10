const fs = require('fs')
const path = require('path')
const shrekFile = path.resolve(__dirname, './shrek')
const shrek = fs.readFileSync(shrekFile, 'utf8')
const safeShrek = shrek.replace(/(`|\\)/g, '\\$1')

const binFile = path.resolve(__dirname, './bin/git-shrekt.js')
fs.writeFileSync(binFile, `#!/usr/bin/env node

console.info(\`
${safeShrek}
\`)
`)
