const fs = require('fs');
let html = fs.readFileSync('Dichvu_V2.html', 'utf8');

const startRetail = html.indexOf('<!-- TÍNH NĂNG MUA LẺ (Nằm dưới khối Upsell KC) -->');
const endRetail = html.indexOf('<!-- CHUNG: KHỐI TIỆN ÍCH QUAN TRỌNG HIỂN THỊ CỐ ĐỊNH Ở CUỐI MỌI TAB -->');

if (startRetail !== -1 && endRetail !== -1) {
    const retailStr = html.substring(startRetail, endRetail);
    
    // Remove it from original place
    html = html.substring(0, startRetail) + html.substring(endRetail);
    
    // Insert it before benefits-vang
    const targetToken = '<!-- Tính Năng Định Kỳ -->';
    const targetIdx = html.indexOf(targetToken);
    
    if (targetIdx !== -1) {
        html = html.substring(0, targetIdx) + retailStr + '\n            ' + html.substring(targetIdx);
        fs.writeFileSync('Dichvu_V2.html', html);
        console.log('Moved retail-packages block successfully!');
    } else {
        console.log('Error: Could not find target token');
    }
} else {
    console.log('Error: Could not find retail block');
}
