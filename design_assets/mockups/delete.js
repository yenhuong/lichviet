const fs = require('fs');
let content = fs.readFileSync('Dichvu_V2.html', 'utf8');
const lines = content.split('\n');
// Keep 0 to 1480 (lines 1 to 1481)
// Drop 1481 to 1681 (lines 1482 to 1682)
// Keep 1682 onwards (line 1683 onwards)
const newContent = lines.slice(0, 1481).join('\n') + '\n' + lines.slice(1682).join('\n');
fs.writeFileSync('Dichvu_V2.html', newContent);
console.log('Successfully deleted lines 1482-1682');
