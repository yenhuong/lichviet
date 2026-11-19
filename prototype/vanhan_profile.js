// Shared profile data for Tu vi van han (job / marital / children).
// Used by tuvi_vanhan_ketqua.html (input block + Bottom Sheet) and tuvi_vanhan_matdoisong.html (personalized reading).
// Values live in localStorage user_vanhan_<field>, shared with tuvi_vanhan_input.html.

// Job reading profiles: clause = personalized sentence for "Công việc năm nay thế nào?", adviceTitle/advice replace the generic advice
const JOB_PROFILES = {
    leader: {
        clause: 'năm nay uy tín và năng lực điều hành dễ được ghi nhận, có cơ hội mở rộng hợp tác, dự án qua các mối quan hệ. Điều cần để ý là kế hoạch dễ hụt, nội bộ dễ có tranh luận, thị phi, nên thận trọng với các quyết định lớn.',
        adviceTitle: 'Giữ vững định hướng, thận trọng quyết định lớn',
        advice: 'Tập trung vào những kế hoạch đã chắc chắn, lắng nghe đội ngũ để sớm tháo gỡ bất đồng và cân nhắc kỹ trước khi mở rộng hay đầu tư lớn.'
    },
    manager: {
        clause: 'năm nay năng lực quản lý dễ được cấp trên ghi nhận, có thể được giao thêm trách nhiệm. Điều cần để ý là việc gấp dễ dồn về, dễ bất đồng giữa cấp trên và đội nhóm, áp lực tâm lý dễ tăng.',
        adviceTitle: 'Phân việc rõ ràng, giữ cầu nối trong đội',
        advice: 'Phân việc rõ ràng, theo sát tiến độ và chủ động trao đổi với cấp trên lẫn đội nhóm khi có vướng mắc, tránh ôm hết việc về mình.'
    },
    staff: {
        clause: 'năm nay năng lực dễ được cấp trên ghi nhận, có thể được giao thêm việc hoặc đổi vị trí. Điều cần để ý là va chạm, hiểu lầm với cấp trên, đồng nghiệp, nên trao đổi rõ ràng và có văn bản khi cần.',
        adviceTitle: 'Làm chắc việc được giao, giữ hòa khí nơi làm việc',
        advice: 'Hoàn thành tốt việc được giao để được ghi nhận. Nếu có đề xuất đổi vị trí, hãy cân nhắc kỹ và tránh tranh luận đúng sai với cấp trên.'
    },
    business: {
        clause: 'năm nay dễ có khách hàng, mối làm ăn mới đến qua người giới thiệu. Điều cần để ý là đối tác hứa hẹn không thành, khách chậm thanh toán và thủ tục giấy tờ chậm.',
        adviceTitle: 'Mở rộng qua quan hệ, chốt việc bằng hợp đồng',
        advice: 'Tận dụng các mối giới thiệu để tìm khách, mối làm ăn mới, nhưng mọi thỏa thuận nên rõ ràng bằng văn bản và dự trù thêm thời gian cho thủ tục.'
    },
    freelance: {
        clause: 'năm nay dễ có thêm việc, mối nhận việc mới qua người quen giới thiệu, nhiều dịp đi lại. Điều cần để ý là việc hứa hẹn dễ không thành, thu nhập lúc có lúc không và dễ bất đồng khi thỏa thuận công việc.',
        adviceTitle: 'Nhận việc chắc chắn, thỏa thuận rõ từ đầu',
        advice: 'Ưu tiên những mối việc chắc chắn, thỏa thuận rõ công và tiền trước khi làm, để dành một phần thu nhập cho những tháng ít việc.'
    },
    student: {
        clause: 'năm nay thuận thi cử, bằng cấp, hồ sơ, có cơ hội học bổng hoặc thực tập qua người giới thiệu. Điều cần để ý là dễ chán nản, áp lực tâm lý và dễ bất đồng khi làm việc nhóm.',
        adviceTitle: 'Tập trung thi cử, mạnh dạn tìm cơ hội thực tập',
        advice: 'Chuẩn bị kỹ cho các kỳ thi và hồ sơ quan trọng, mạnh dạn ứng tuyển thực tập, học bổng. Khi thấy áp lực, hãy chia sẻ với người thân, thầy cô.'
    },
    home: {
        clause: 'năm nay có thể được nhờ góp sức vào việc chung hoặc nhận thêm việc nhỏ. Điều cần để ý là việc gấp dễ phát sinh và dễ hiểu lầm khi làm cùng người khác.',
        adviceTitle: 'Nhận việc vừa sức, giữ nhịp nhẹ nhàng',
        advice: 'Chỉ nhận thêm những việc vừa sức, có kế hoạch rõ ràng. Khi làm việc chung, nên nói rõ phần việc của mỗi người ngay từ đầu.'
    },
    other: {   // "Khác": no tailored advice, keep the aspect's generic advice
        clause: 'năm nay năng lực dễ được ghi nhận và có cơ hội mới đến qua người giới thiệu. Điều cần để ý là kế hoạch dễ hụt, dễ hiểu lầm với người cùng làm, nên trao đổi rõ ràng và làm chắc từng việc.'
    }
};

// Job list (localStorage user_vanhan_job), grouped as in the job picker spec.
// Keys di_lam / kinh_doanh / hoc_sinh / nghi_huu match the "Công việc" picker on tuvi_vanhan_input.html.
// p = reading profile, main = shown as a radio row on the card, who = override for the "Với … như bạn" phrase.
// Only jobs from this list can be chosen (no free-text input); "Khác" is a plain option.
const JOB_GROUPS = [
    { name: 'Lãnh đạo, điều hành', p: 'leader', items: [
        ['giam_doc', 'Giám đốc'], ['ceo', 'CEO'], ['cto', 'CTO'], ['chu_dn', 'Chủ doanh nghiệp'], ['pho_giam_doc', 'Phó giám đốc']] },
    { name: 'Quản lý', p: 'manager', items: [
        ['truong_phong', 'Trưởng phòng'], ['truong_nhom', 'Trưởng nhóm'], ['ql_du_an', 'Quản lý dự án'], ['ql_cua_hang', 'Quản lý cửa hàng, nhà hàng']] },
    { name: 'Nhân viên, chuyên viên', p: 'staff', items: [
        ['ba', 'BA'], ['di_lam', 'Nhân viên', { main: true }], ['thu_ky', 'Thư ký'], ['lap_trinh', 'Kỹ sư lập trình'], ['bac_si', 'Bác sĩ'],
        ['giao_vien', 'Giáo viên, giảng viên'], ['y_ta', 'Y tá, điều dưỡng'], ['duoc_si', 'Dược sĩ'], ['ke_toan', 'Kế toán, kiểm toán'],
        ['ngan_hang', 'Nhân viên ngân hàng, tài chính', { who: 'người làm ngân hàng, tài chính' }],
        ['kinh_doanh', 'Kinh doanh, bán hàng (sales)', { main: true, p: 'business', who: 'người làm kinh doanh, bán hàng' }],
        ['marketing', 'Marketing, truyền thông'], ['nhan_su', 'Nhân sự, hành chính'], ['cskh', 'Chăm sóc khách hàng'], ['luat_su', 'Luật sư, pháp chế'],
        ['cong_chuc', 'Công chức, viên chức nhà nước'], ['cong_an', 'Công an, quân đội', { who: 'người trong ngành công an, quân đội' }],
        ['ky_su', 'Kỹ sư (xây dựng, cơ khí, điện)', { who: 'người làm kỹ sư' }], ['kien_truc', 'Kiến trúc sư, thiết kế nội thất'],
        ['thiet_ke', 'Thiết kế đồ họa, sáng tạo'], ['du_lieu', 'Phân tích dữ liệu, AI'], ['nha_bao', 'Nhà báo, biên tập viên'],
        ['hang_khong', 'Phi công, tiếp viên, hàng không', { who: 'người làm trong ngành hàng không' }],
        ['logistics', 'Xuất nhập khẩu, logistics'], ['cong_nhan', 'Công nhân']] },
    { name: 'Tự do', p: 'freelance', items: [
        ['tu_do', 'Lao động tự do', { main: true, who: 'người lao động tự do' }], ['buon_ban', 'Buôn bán', { p: 'business' }],
        ['ban_online', 'Bán hàng online', { p: 'business' }], ['kol', 'Sáng tạo nội dung, KOL'], ['freelancer', 'Freelancer (làm tự do)', { who: 'người làm freelancer' }],
        ['moi_gioi_bds', 'Môi giới bất động sản', { p: 'business' }], ['bao_hiem', 'Tư vấn bảo hiểm', { p: 'business' }],
        ['tai_xe', 'Tài xế, giao hàng'], ['nong_dan', 'Nông dân, chăn nuôi, thủy sản', { who: 'người làm nông nghiệp, chăn nuôi, thủy sản' }],
        ['tho', 'Thợ (điện, nước, sửa chữa, may…)', { who: 'người làm thợ' }], ['dau_bep', 'Đầu bếp, dịch vụ ăn uống'],
        ['lam_dep', 'Làm đẹp (tóc, nail, spa)', { who: 'người làm nghề làm đẹp' }], ['nghe_si', 'Nghệ sĩ, ca sĩ, diễn viên', { who: 'người làm nghệ thuật' }],
        ['hlv', 'Huấn luyện viên, vận động viên']] },
    { name: 'Học sinh', p: 'student', items: [['hoc_sinh', 'Học sinh', { who: 'học sinh' }]] },
    { name: 'Sinh viên', p: 'student', items: [['sinh_vien', 'Sinh viên', { who: 'sinh viên' }]] },
    { name: 'Nội trợ', p: 'home', items: [['noi_tro', 'Nội trợ', { who: 'người làm nội trợ' }]] },
    { name: 'Nghỉ hưu', p: 'home', items: [['nghi_huu', 'Nghỉ hưu', { who: 'người đã nghỉ hưu' }]] },
    { name: '', p: 'other', items: [['khac', 'Khác', { lead: 'Với công việc hiện tại của bạn' }]] }   // no header, not indented
];

// Flat lookup: key -> { label, group, p, who, main }
const lowerFirst = t => /^[A-ZÀ-Ỹ][a-zà-ỹ]/.test(t) ? t[0].toLowerCase() + t.slice(1) : t;   // keep acronyms (CEO, BA)
const JOBS = {};
JOB_GROUPS.forEach(g => g.items.forEach(([k, label, o = {}]) => {
    JOBS[k] = { label, group: g.name, p: o.p || g.p, main: !!o.main, lead: o.lead || `Với ${o.who || `người làm ${lowerFirst(label)}`} như bạn` };
}));

const esc = t => t.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Short options for the other fields. lead + clause = personalized paragraph, adviceTitle/advice replace the generic advice.
// Keys match the "Tình trạng hôn nhân" / "Con cái" pickers on tuvi_vanhan_input.html.
const MARITAL = {
    doc_than: { label: 'Độc thân', lead: 'Với người đang độc thân như bạn',
        clause: 'năm nay dễ được người lớn, bạn bè giới thiệu, vun vào, có thể quen người mới qua các mối quen biết. Điều cần để ý là dễ thấy trống trải, cảm xúc dễ lên xuống, nên tìm hiểu từ từ, chưa vội hứa hẹn.',
        adviceTitle: 'Mở lòng qua người quen, tìm hiểu từ từ',
        advice: 'Nhận lời những buổi gặp gỡ do người thân, bạn bè giới thiệu, nhưng dành thời gian tìm hiểu kỹ trước khi tiến xa.' },
    hen_ho: { label: 'Đang hẹn hò', lead: 'Với người đang hẹn hò như bạn',
        clause: 'năm nay hai người tôn trọng nhau hơn và dễ được gia đình hai bên ủng hộ. Điều cần để ý là dễ hiểu lầm, giận hờn, ghen tuông vì chuyện nhỏ, lời hứa khó giữ trọn.',
        adviceTitle: 'Vun đắp niềm tin, nói rõ khi có hiểu lầm',
        advice: 'Giữ lời hứa từ những việc nhỏ, chủ động nói chuyện khi có hiểu lầm. Nếu tính chuyện lâu dài, năm nay người lớn dễ tán thành.' },
    ket_hon: { label: 'Đã kết hôn', lead: 'Với người đã kết hôn như bạn',
        clause: 'năm nay quan hệ vợ chồng bền, êm nhưng có phần trầm lặng, một bên dễ có tiếng nói lớn hơn. Điều cần để ý là dễ to tiếng vì chuyện nhỏ và dễ xa cách khi một người phải đi lại nhiều.',
        adviceTitle: 'Quan tâm đều đặn, cùng bàn việc lớn',
        advice: 'Dành thời gian riêng cho hai vợ chồng, lắng nghe nhiều hơn và cùng bàn kỹ trước những việc lớn trong nhà.' },
    ly_hon: { label: 'Đã ly hôn', lead: 'Với người đã ly hôn như bạn',
        clause: 'năm nay dễ được người thân, bạn bè quan tâm, giới thiệu. Điều cần để ý là dễ tủi thân, nhạy cảm, chuyện cũ dễ khơi lại cảm xúc.',
        adviceTitle: 'Chăm sóc bản thân, mở lòng khi đã sẵn sàng',
        advice: 'Ưu tiên ổn định cảm xúc và cuộc sống của bản thân. Khi có người mới, hãy tìm hiểu từ từ, không vội so sánh với chuyện cũ.' }
};
const CHILDREN = {
    chua_co: { label: 'Chưa có con', lead: 'Với người chưa có con như bạn',
        clause: 'cung Tử Tức sáng năm nay là tín hiệu tốt nếu bạn đang tính chuyện con cái. Bên cạnh đó, năm nay nên dành nhiều thời gian gắn kết với cha mẹ và anh chị em.',
        adviceTitle: 'Gắn kết người thân, chuẩn bị cho dự định gia đình',
        advice: 'Giữ liên lạc, thăm hỏi cha mẹ, anh chị em đều đặn. Nếu đang tính chuyện con cái, năm nay là thời điểm thuận để chuẩn bị.' },
    da_co: { label: 'Đã có con', lead: 'Với người đã có con như bạn',
        clause: 'năm nay con cái có tin vui, gặp thầy giỏi, được người tốt nâng đỡ. Đây là năm nên dành thời gian cho việc học và dự định của con.',
        adviceTitle: 'Đồng hành cùng con, chia sẻ việc nhà',
        advice: 'Dành thời gian lắng nghe và đồng hành cùng con, nhất là vào tháng 3 âm lịch. Chia sẻ việc nhà để không dồn áp lực cho một người.' }
};

// Profile info, keyed by the aspect it personalizes. question = section title in the "Bổ sung thông tin" sheet;
// main = chips shown in the sheet; more = adds "Chọn công việc khác" -> full grouped job list with search.
const FIELDS = {
    congviec: {
        field: 'job', name: 'Công việc', question: 'Bạn đang làm công việc gì?', icon: 'i_congviec.svg', caption: 'Công việc hiện tại của bạn',
        sheetTitle: 'Chọn công việc', more: true,
        label: k => JOBS[k] ? JOBS[k].label : '',
        main: () => Object.entries(JOBS).filter(([, j]) => j.main).map(([k, j]) => [k, j.label]),
        reading: k => ({ lead: JOBS[k].lead, ...JOB_PROFILES[JOBS[k].p] })
    },
    tinhcam: {
        field: 'marital', name: 'Tình trạng hôn nhân', question: 'Tình trạng hôn nhân của bạn?', icon: 'i_tinhduyen.svg', caption: 'Tình trạng hôn nhân của bạn',
        sheetTitle: 'Tình trạng hôn nhân',
        label: k => MARITAL[k] ? MARITAL[k].label : '',
        main: () => Object.entries(MARITAL).map(([k, o]) => [k, o.label]),
        reading: k => MARITAL[k]
    },
    giadao: {
        field: 'children', name: 'Thông tin con cái', question: 'Bạn đã có con chưa?', icon: 'i_giadao.svg', caption: 'Thông tin con cái',
        sheetTitle: 'Thông tin con cái',
        label: k => CHILDREN[k] ? CHILDREN[k].label : '',
        main: () => Object.entries(CHILDREN).map(([k, o]) => [k, o.label]),
        reading: k => CHILDREN[k]
    }
};

const getVal = aspect => { try { return localStorage.getItem('user_vanhan_' + FIELDS[aspect].field) || ''; } catch (e) { return ''; } };

// Prototype helper: open any screen with ?reset=1 to clear saved job / marital / children
if (new URLSearchParams(location.search).get('reset') === '1') {
    try { ['job', 'marital', 'children'].forEach(f => localStorage.removeItem('user_vanhan_' + f)); } catch (e) {}
}
