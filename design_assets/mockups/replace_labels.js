const fs = require('fs');
const file = '/Users/dohuong/Desktop/BA/design_assets/mockups/Dichvu_V2.html';
let content = fs.readFileSync(file, 'utf8');

// The regex matches: Xem Ngày Tốt ... <span ...>Cơ Bản</span>
// and replaces Cơ Bản with 41 Việc
content = content.replace(/(Xem Ngày Tốt[\s\S]*?<span[^>]*?>)Cơ Bản(<\/span>)/g, '$141 Việc$2');

// The regex matches: Xem Ngày Tốt ... <span ...>Nâng Cao</span>
// and replaces Nâng Cao with Trọn Bộ
content = content.replace(/(Xem Ngày Tốt[\s\S]*?<span[^>]*?>)Nâng Cao(<\/span>)/g, '$1Trọn Bộ$2');

fs.writeFileSync(file, content);
console.log('Labels updated to 41 Việc and Trọn Bộ successfully!');
