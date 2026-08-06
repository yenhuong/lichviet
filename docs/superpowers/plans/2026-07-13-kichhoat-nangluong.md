# Kích hoạt năng lượng cá nhân - Màn hình nhập thông tin Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Xây dựng màn hình nhập thông tin cho tính năng "Kích hoạt năng lượng cá nhân" dưới dạng file prototype HTML, sử dụng thiết kế Card nổi xếp chồng (Card Overlay) phủ lên nền núi non và sơ đồ Ngũ Hành tĩnh, đi kèm các bộ chọn ngày sinh/giờ sinh dạng Bottom Sheet cuộn bánh xe (Wheel Picker).

**Architecture:** Màn hình được xây dựng bằng một file HTML đơn lẻ chứa mã CSS và JavaScript thuần để mô phỏng tương tác kéo trượt của Card và chuyển động cuộn 3D của bánh xe chọn ngày/giờ trên thiết bị di động (Mobile Device Mockup).

**Tech Stack:** HTML5, CSS3 (Vanilla), JavaScript (ES6).

---

### Task 1: Khung sườn HTML & Thiết kế Mockup Thiết bị (Layout & Frame)

**Files:**
- Create: `prototype/KichHoatNangLuong_Input.html`

- [ ] **Step 1: Tạo cấu trúc HTML cơ bản và thiết lập style cho khung điện thoại di động mô phỏng (390px x 844px).**

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kích Hoạt Năng Lượng Cá Nhân - Lịch Việt</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Lora:ital,wght@0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-bg: #FAF6EE;
            --text-dark: #1b4332;
            --text-gray: #666666;
            --btn-red: #A1201B;
            --btn-red-hover: #801814;
            --border-color: #E5E7EB;
        }
        body {
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            font-family: 'Inter', sans-serif;
            color: var(--text-dark);
        }
        .phone-mockup {
            position: relative;
            width: 390px;
            height: 844px;
            background: #1F1F1F;
            border-radius: 48px;
            padding: 12px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3), 0 0 0 12px #111;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
        }
        .screen-content {
            width: 100%;
            height: 100%;
            background-color: #f1ebd9;
            border-radius: 38px;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }
        .status-bar {
            height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 24px;
            font-size: 14px;
            font-weight: 600;
            color: #333;
            z-index: 10;
        }
        .status-icons {
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .app-bar {
            height: 48px;
            display: flex;
            align-items: center;
            padding: 0 16px;
            z-index: 10;
        }
        .back-btn {
            width: 32px;
            height: 32px;
            background: rgba(255, 255, 255, 0.85);
            border: none;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 2px 6px rgba(0,0,0,0.08);
        }
    </style>
</head>
<body>
    <div class="phone-mockup">
        <div class="screen-content">
            <div class="status-bar">
                <div>09:50</div>
                <div class="status-icons">📶 🔋</div>
            </div>
            <div class="app-bar">
                <button class="back-btn" onclick="alert('Trở về')">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</body>
</html>
```

- [ ] **Step 2: Lưu và chạy thử trong trình duyệt để đảm bảo khung hiển thị đúng chuẩn.**

---

### Task 2: Giao diện nền núi non & Sơ đồ Ngũ Hành tĩnh

**Files:**
- Modify: `prototype/KichHoatNangLuong_Input.html`

- [ ] **Step 1: Định nghĩa CSS và cấu trúc cho phần nền núi non và biểu đồ Ngũ Hành.**

```html
<!-- Thêm vào phần style của head -->
<style>
    .background-area {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 50%;
        background: url('./lotus_temple_v2.png') no-repeat top center;
        background-size: cover;
        z-index: 1;
        transition: transform 0.4s ease, opacity 0.4s ease;
    }
    .background-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(241, 235, 217, 0.1) 0%, rgba(241, 235, 217, 0.9) 95%);
    }
    .spiritual-header {
        position: relative;
        z-index: 2;
        text-align: center;
        padding: 0 20px;
        margin-top: 10px;
        transition: transform 0.4s ease, opacity 0.4s ease;
    }
    .header-title {
        font-family: 'Lora', serif;
        font-size: 21px;
        font-weight: 700;
        color: var(--text-dark);
        margin: 0 0 6px 0;
        letter-spacing: 0.5px;
    }
    .header-subtitle {
        font-size: 11px;
        font-weight: 500;
        color: var(--text-gray);
        line-height: 1.4;
        margin: 0;
        padding: 0 10px;
    }
    
    /* Ngũ hành diagram */
    .wuxing-container {
        position: relative;
        width: 180px;
        height: 180px;
        margin: 15px auto 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.4s ease, opacity 0.4s ease;
        z-index: 2;
    }
    .lotus-center {
        width: 64px;
        height: 64px;
        background: url('./lotus_illustration.png') no-repeat center;
        background-size: contain;
        z-index: 4;
        filter: drop-shadow(0 0 8px rgba(212, 163, 89, 0.6));
        animation: pulseLotus 3s infinite ease-in-out;
    }
    @keyframes pulseLotus {
        0%, 100% { transform: scale(1); filter: drop-shadow(0 0 8px rgba(212, 163, 89, 0.6)); }
        50% { transform: scale(1.06); filter: drop-shadow(0 0 14px rgba(212, 163, 89, 0.95)); }
    }
    
    .wuxing-circle {
        position: absolute;
        width: 130px;
        height: 130px;
        border: 1px dashed rgba(212, 163, 89, 0.4);
        border-radius: 50%;
        z-index: 2;
    }
    
    .element-node {
        position: absolute;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 8px;
        font-weight: bold;
        z-index: 3;
        box-shadow: 0 4px 10px rgba(0,0,0,0.12);
        color: #333;
    }
    
    /* Tọa độ các nguyên tố ngũ hành */
    .node-thuy { top: -16px; left: calc(50% - 16px); border: 2px solid #3b82f6; box-shadow: 0 0 10px rgba(59, 130, 246, 0.4); } /* Thủy - Top */
    .node-moc  { top: 28px; right: -16px; border: 2px solid #10b981; box-shadow: 0 0 10px rgba(16, 185, 129, 0.4); }  /* Mộc - Right */
    .node-hoa  { bottom: -16px; right: 10px; border: 2px solid #ef4444; box-shadow: 0 0 10px rgba(239, 68, 68, 0.4); }   /* Hỏa - Bottom Right */
    .node-tho  { bottom: -16px; left: 10px; border: 2px solid #b45309; box-shadow: 0 0 10px rgba(180, 83, 9, 0.4); }    /* Thổ - Bottom Left */
    .node-kim  { top: 28px; left: -16px; border: 2px solid #d4a359; box-shadow: 0 0 10px rgba(212, 163, 89, 0.4); }   /* Kim - Left */
    
    .element-label {
        position: absolute;
        bottom: -15px;
        font-size: 8px;
        font-weight: 800;
        white-space: nowrap;
    }
</style>
```

- [ ] **Step 2: Thêm cây DOM tương ứng vào trong `.screen-content`.**

```html
<!-- Dưới phần app-bar -->
<div class="background-area">
    <div class="background-overlay"></div>
</div>

<div class="spiritual-header" id="spiritualHeader">
    <h1 class="header-title">KÍCH HOẠT NĂNG LƯỢNG</h1>
    <h2 class="header-title" style="font-size:17px; margin-top:-4px; margin-bottom: 6px;">CÁ NHÂN</h2>
    <p class="header-subtitle">Biết rõ điểm mạnh và điều bạn cần cân bằng. Khám phá cách kích hoạt năng lượng phù hợp với bạn.</p>
</div>

<div class="wuxing-container" id="wuxingContainer">
    <div class="wuxing-circle">
        <!-- Thủy: Sóng -->
        <div class="element-node node-thuy">
            🌊
            <span class="element-label" style="color:#1d4ed8">THỦY</span>
        </div>
        <!-- Mộc: Lá -->
        <div class="element-node node-moc">
            🌿
            <span class="element-label" style="color:#047857">MỘC</span>
        </div>
        <!-- Hỏa: Lửa -->
        <div class="element-node node-hoa">
            🔥
            <span class="element-label" style="color:#b91c1c">HỎA</span>
        </div>
        <!-- Thổ: Núi -->
        <div class="element-node node-tho">
            ⛰️
            <span class="element-label" style="color:#78350f">THỔ</span>
        </div>
        <!-- Kim: Kim cương -->
        <div class="element-node node-kim">
            ✨
            <span class="element-label" style="color:#b45309">KIM</span>
        </div>
    </div>
    <div class="lotus-center"></div>
</div>
```

---

### Task 3: Thẻ nhập liệu nổi (Form Card Overlay)

**Files:**
- Modify: `prototype/KichHoatNangLuong_Input.html`

- [ ] **Step 1: Tạo CSS định hình Card Overlay trượt lên.**

```html
<!-- Thêm vào style -->
<style>
    .form-card {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 52%;
        background-color: var(--primary-bg);
        border-radius: 32px 32px 0 0;
        box-shadow: 0 -8px 30px rgba(0,0,0,0.1);
        z-index: 5;
        display: flex;
        flex-direction: column;
        transition: height 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        box-sizing: border-box;
    }
    .drag-handle {
        width: 36px;
        height: 4px;
        background-color: #D1D5DB;
        border-radius: 2px;
        margin: 10px auto 14px auto;
        flex-shrink: 0;
    }
    .form-header-title {
        font-family: 'Lora', serif;
        font-size: 16px;
        font-weight: 700;
        text-align: center;
        letter-spacing: 2px;
        margin-bottom: 2px;
        flex-shrink: 0;
    }
    .form-deco-line {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin-bottom: 12px;
        flex-shrink: 0;
    }
    .form-deco-line::before, .form-deco-line::after {
        content: '';
        width: 60px;
        height: 1px;
        background-color: rgba(27, 67, 50, 0.25);
    }
    .form-deco-line span {
        font-size: 8px;
        color: #d4a359;
    }
    .form-body {
        flex: 1;
        overflow-y: auto;
        padding: 0 20px 20px 20px;
    }
    
    .input-group {
        margin-bottom: 12px;
    }
    .input-label {
        font-size: 11px;
        font-weight: 800;
        margin-bottom: 6px;
        display: block;
        letter-spacing: 0.5px;
    }
    .input-wrapper {
        display: flex;
        align-items: center;
        background: #FFFFFF;
        border: 1px solid #E5E7EB;
        border-radius: 12px;
        padding: 10px 14px;
        gap: 10px;
    }
    .input-icon-box {
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background: #F9FAFB;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: #d4a359;
    }
    .input-field {
        border: none;
        outline: none;
        flex: 1;
        font-size: 13.5px;
        font-weight: 500;
        background: transparent;
    }
    
    .calendar-toggle-box {
        display: flex;
        justify-content: flex-end;
        gap: 15px;
        margin-bottom: 6px;
    }
    .toggle-option {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
    }
    .toggle-radio {
        appearance: none;
        width: 14px;
        height: 14px;
        border: 1.5px solid #d4a359;
        border-radius: 50%;
        outline: none;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .toggle-radio:checked {
        border-color: var(--btn-red);
    }
    .toggle-radio:checked::after {
        content: '';
        width: 8px;
        height: 8px;
        background: var(--btn-red);
        border-radius: 50%;
    }
    
    .row-2col {
        display: flex;
        gap: 12px;
    }
    .row-2col > div {
        flex: 1;
    }
    
    .select-field {
        border: none;
        outline: none;
        flex: 1;
        font-size: 13.5px;
        font-weight: 500;
        background: transparent;
        appearance: none;
    }
    
    .submit-btn {
        width: 100%;
        background-color: var(--btn-red);
        color: white;
        border: none;
        border-radius: 12px;
        padding: 14px;
        font-size: 14px;
        font-weight: 800;
        letter-spacing: 0.5px;
        cursor: pointer;
        transition: background-color 0.2s;
        margin-top: 15px;
        box-shadow: 0 4px 12px rgba(161, 32, 27, 0.2);
    }
    .submit-btn:hover {
        background-color: var(--btn-red-hover);
    }
</style>
```

- [ ] **Step 2: Thêm thẻ HTML Form Card vào DOM.**

```html
<!-- Dưới wuxing-container -->
<div class="form-card" id="formCard">
    <div class="drag-handle"></div>
    <div class="form-header-title">ĐĂNG NHẬP THÔNG TIN</div>
    <div class="form-deco-line"><span>◆</span></div>
    
    <div class="form-body">
        <!-- Họ và Tên -->
        <div class="input-group">
            <span class="input-label">HỌ VÀ TÊN</span>
            <div class="input-wrapper">
                <div class="input-icon-box">👤</div>
                <input type="text" class="input-field" placeholder="Nhập tên khách (không bắt buộc)">
            </div>
        </div>
        
        <!-- Ngày sinh -->
        <div class="input-group">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <span class="input-label">NGÀY SINH</span>
                <div class="calendar-toggle-box">
                    <label class="toggle-option">
                        <input type="radio" name="calendar_type" value="lunar" class="toggle-radio" checked>
                        <span>ÂM LỊCH</span>
                    </label>
                    <label class="toggle-option">
                        <input type="radio" name="calendar_type" value="solar" class="toggle-radio">
                        <span>DƯƠNG LỊCH</span>
                    </label>
                </div>
            </div>
            <div class="input-wrapper" id="dateInputTrigger" style="cursor: pointer;">
                <div class="input-icon-box" style="font-size:16px;">🗓️</div>
                <input type="text" class="input-field" id="dateDisplay" placeholder="Chọn ngày tháng năm sinh" readonly style="cursor: pointer;">
            </div>
        </div>
        
        <!-- Giờ sinh & Giới tính -->
        <div class="row-2col">
            <div class="input-group">
                <span class="input-label">GIỜ SINH</span>
                <div class="input-wrapper" id="timeInputTrigger" style="cursor: pointer;">
                    <div class="input-icon-box" style="font-size:16px;">🕒</div>
                    <input type="text" class="input-field" id="timeDisplay" placeholder="Giờ sinh" readonly style="cursor: pointer;">
                </div>
            </div>
            <div class="input-group">
                <span class="input-label">GIỚI TÍNH</span>
                <div class="input-wrapper">
                    <select class="select-field" id="genderSelect">
                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                    </select>
                    <span style="font-size: 10px; color: var(--text-gray);">▼</span>
                </div>
            </div>
        </div>
        
        <button class="submit-btn" onclick="alert('Đang lập bản đồ ngũ hành...')">XEM BẢN ĐỒ NGŨ HÀNH CỦA BẠN</button>
    </div>
</div>
```

---

### Task 4: Bộ chọn Ngày sinh (DatePicker Bottom Sheet)

**Files:**
- Modify: `prototype/KichHoatNangLuong_Input.html`

- [ ] **Step 1: Xây dựng cấu trúc CSS cho Bottom Sheet và con lăn bánh xe 3D.**

```html
<!-- Thêm vào style -->
<style>
    .backdrop {
        position: absolute;
        inset: 0;
        background: rgba(0,0,0,0.4);
        z-index: 10;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
    }
    .backdrop.active {
        opacity: 1;
        pointer-events: auto;
    }
    
    .bottom-sheet {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: #FFFFFF;
        border-radius: 24px 24px 0 0;
        z-index: 11;
        transform: translateY(100%);
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        display: flex;
        flex-direction: column;
        height: 280px;
        box-sizing: border-box;
    }
    .bottom-sheet.active {
        transform: translateY(0);
    }
    
    .sheet-header {
        height: 48px;
        border-bottom: 1px solid #F3F4F6;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
    }
    .sheet-title {
        font-size: 14.5px;
        font-weight: 700;
        color: var(--text-dark);
    }
    .sheet-btn {
        background: none;
        border: none;
        font-size: 14px;
        font-weight: 700;
        color: #0f766e;
        cursor: pointer;
    }
    
    .picker-container {
        flex: 1;
        display: flex;
        position: relative;
        overflow: hidden;
        background: #FAF8F5;
        padding: 10px 0;
    }
    .picker-column {
        flex: 1;
        height: 100%;
        position: relative;
        overflow: hidden;
    }
    .picker-wheel {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        transform-style: preserve-3d;
        transition: transform 0.1s ease-out;
    }
    .picker-item {
        position: absolute;
        height: 36px;
        line-height: 36px;
        font-size: 15px;
        font-weight: 600;
        color: #9CA3AF;
        text-align: center;
        width: 100%;
        backface-visibility: hidden;
        cursor: pointer;
        user-select: none;
    }
    .picker-item.active {
        color: var(--text-dark);
        font-weight: 700;
    }
    
    .picker-highlight {
        position: absolute;
        top: calc(50% - 18px);
        left: 0;
        right: 0;
        height: 36px;
        border-top: 1px solid #E5E7EB;
        border-bottom: 1px solid #E5E7EB;
        pointer-events: none;
        z-index: 12;
    }
</style>
```

- [ ] **Step 2: Thêm cấu trúc DOM Bottom Sheet vào đáy màn hình.**

```html
<!-- Dưới formCard -->
<div class="backdrop" id="backdrop"></div>

<div class="bottom-sheet" id="datePickerSheet">
    <div class="sheet-header">
        <button class="sheet-btn" id="sheetCalendarToggle" style="font-size: 11px; border: 1px solid #E5E7EB; padding: 4px 8px; border-radius: 6px; background:#f9fafb;">DƯƠNG LỊCH</button>
        <span class="sheet-title">Chọn ngày sinh</span>
        <button class="sheet-btn" id="dateDoneBtn">Xong</button>
    </div>
    <div class="picker-container">
        <div class="picker-highlight"></div>
        <!-- Ngày -->
        <div class="picker-column" id="colDay">
            <div class="picker-wheel" id="wheelDay"></div>
        </div>
        <!-- Tháng -->
        <div class="picker-column" id="colMonth">
            <div class="picker-wheel" id="wheelMonth"></div>
        </div>
        <!-- Năm -->
        <div class="picker-column" id="colYear">
            <div class="picker-wheel" id="wheelYear"></div>
        </div>
    </div>
</div>
```

- [ ] **Step 3: Viết mã JavaScript mô phỏng con lăn bánh xe 3D.**

```html
<!-- Trước thẻ đóng body -->
<script>
    const backdrop = document.getElementById('backdrop');
    const datePickerSheet = document.getElementById('datePickerSheet');
    const dateInputTrigger = document.getElementById('dateInputTrigger');
    const dateDisplay = document.getElementById('dateDisplay');
    const dateDoneBtn = document.getElementById('dateDoneBtn');
    
    // Khởi tạo bánh xe cuộn
    function initWheel(wheelId, items, defaultVal, onChange) {
        const wheel = document.getElementById(wheelId);
        wheel.innerHTML = '';
        const itemHeight = 36;
        const radius = 90; // R của hình tròn 3D
        
        items.forEach((item, index) => {
            const el = document.createElement('div');
            el.className = 'picker-item';
            el.innerText = item;
            
            // Xoay 3D
            const angle = index * 20; // 20 độ mỗi phần tử
            el.style.transform = `rotateX(${-angle}deg) translateZ(${radius}px)`;
            el.style.top = `calc(50% - 18px)`;
            wheel.appendChild(el);
        });
        
        let currentIdx = items.indexOf(defaultVal);
        if (currentIdx === -1) currentIdx = 0;
        
        let startY = 0;
        let currentY = -currentIdx * itemHeight;
        let isDragging = false;
        
        function updateWheelPosition(y) {
            wheel.style.transform = `rotateX(${-y / itemHeight * 20}deg)`;
            
            // Highlight item chính giữa
            const activeIdx = Math.round(-y / itemHeight);
            const children = wheel.children;
            for (let i = 0; i < children.length; i++) {
                if (i === activeIdx) {
                    children[i].classList.add('active');
                } else {
                    children[i].classList.remove('active');
                }
            }
        }
        
        updateWheelPosition(currentY);
        
        wheel.parentElement.addEventListener('mousedown', (e) => {
            startY = e.clientY;
            isDragging = true;
            wheel.style.transition = 'none';
        });
        
        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const diff = e.clientY - startY;
            updateWheelPosition(currentY + diff);
        });
        
        window.addEventListener('mouseup', (e) => {
            if (!isDragging) return;
            isDragging = false;
            const diff = e.clientY - startY;
            currentY += diff;
            
            // Trượt về vị trí item gần nhất
            currentIdx = Math.round(-currentY / itemHeight);
            currentIdx = Math.max(0, Math.min(items.length - 1, currentIdx));
            currentY = -currentIdx * itemHeight;
            
            wheel.style.transition = 'transform 0.2s ease-out';
            updateWheelPosition(currentY);
            if (onChange) onChange(items[currentIdx]);
        });
        
        // Touch events
        wheel.parentElement.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
            isDragging = true;
            wheel.style.transition = 'none';
        });
        wheel.parentElement.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const diff = e.touches[0].clientY - startY;
            updateWheelPosition(currentY + diff);
        });
        wheel.parentElement.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            isDragging = false;
            const diff = e.changedTouches[0].clientY - startY;
            currentY += diff;
            
            currentIdx = Math.round(-currentY / itemHeight);
            currentIdx = Math.max(0, Math.min(items.length - 1, currentIdx));
            currentY = -currentIdx * itemHeight;
            
            wheel.style.transition = 'transform 0.2s ease-out';
            updateWheelPosition(currentY);
            if (onChange) onChange(items[currentIdx]);
        });
        
        // Mouse wheel
        wheel.parentElement.addEventListener('wheel', (e) => {
            e.preventDefault();
            currentIdx += e.deltaY > 0 ? 1 : -1;
            currentIdx = Math.max(0, Math.min(items.length - 1, currentIdx));
            currentY = -currentIdx * itemHeight;
            wheel.style.transition = 'transform 0.15s ease-out';
            updateWheelPosition(currentY);
            if (onChange) onChange(items[currentIdx]);
        });
        
        return {
            getValue: () => items[currentIdx],
            setValue: (val) => {
                currentIdx = items.indexOf(val);
                if (currentIdx === -1) currentIdx = 0;
                currentY = -currentIdx * itemHeight;
                wheel.style.transition = 'none';
                updateWheelPosition(currentY);
            }
        };
    }
    
    // Khởi động các cột
    const days = Array.from({length: 31}, (_, i) => String(i + 1).padStart(2, '0'));
    const months = Array.from({length: 12}, (_, i) => String(i + 1).padStart(2, '0'));
    const years = Array.from({length: 87}, (_, i) => String(1940 + i));
    
    let dayPicker, monthPicker, yearPicker;
    
    document.addEventListener('DOMContentLoaded', () => {
        dayPicker = initWheel('wheelDay', days, '15');
        monthPicker = initWheel('wheelMonth', months, '06');
        yearPicker = initWheel('wheelYear', years, '1995');
    });
    
    // Tương tác đóng mở
    dateInputTrigger.addEventListener('click', () => {
        backdrop.classList.add('active');
        datePickerSheet.classList.add('active');
    });
    
    backdrop.addEventListener('click', () => {
        backdrop.classList.remove('active');
        datePickerSheet.classList.remove('active');
        timePickerSheet.classList.remove('active');
    });
    
    dateDoneBtn.addEventListener('click', () => {
        const calType = document.querySelector('input[name="calendar_type"]:checked').value === 'lunar' ? 'Âm lịch' : 'Dương lịch';
        dateDisplay.value = `${dayPicker.getValue()}/${monthPicker.getValue()}/${yearPicker.getValue()} (${calType})`;
        backdrop.classList.remove('active');
        datePickerSheet.classList.remove('active');
    });
</script>
```

---

### Task 5: Bộ chọn Giờ sinh (TimePicker Bottom Sheet)

**Files:**
- Modify: `prototype/KichHoatNangLuong_Input.html`

- [ ] **Step 1: Bổ sung HTML cấu trúc TimePicker Bottom Sheet có Checkbox "Không rõ giờ sinh".**

```html
<!-- Dưới datePickerSheet -->
<div class="bottom-sheet" id="timePickerSheet">
    <div class="sheet-header">
        <span class="sheet-title">Chọn giờ sinh</span>
        <button class="sheet-btn" id="timeDoneBtn">Xong</button>
    </div>
    <div class="picker-container" style="flex: 1;">
        <div class="picker-highlight"></div>
        <!-- Giờ -->
        <div class="picker-column" id="colHour">
            <div class="picker-wheel" id="wheelHour"></div>
        </div>
        <!-- Phút -->
        <div class="picker-column" id="colMinute">
            <div class="picker-wheel" id="wheelMinute"></div>
        </div>
    </div>
    <div style="padding: 10px 20px; border-top: 1px solid #F3F4F6; background:#fff; display:flex; align-items:center; gap:8px;">
        <input type="checkbox" id="unknownTimeCheck" style="width:16px; height:16px; accent-color:#0f766e;">
        <label for="unknownTimeCheck" style="font-size:12.5px; font-weight:600; color:var(--text-gray);">Tôi không nhớ rõ giờ sinh</label>
    </div>
</div>
```

- [ ] **Step 2: Viết JavaScript liên kết tương tác cho TimePicker.**

```html
<!-- Thêm vào bên trong thẻ script trước đóng body -->
<script>
    const timePickerSheet = document.getElementById('timePickerSheet');
    const timeInputTrigger = document.getElementById('timeInputTrigger');
    const timeDisplay = document.getElementById('timeDisplay');
    const timeDoneBtn = document.getElementById('timeDoneBtn');
    const unknownTimeCheck = document.getElementById('unknownTimeCheck');
    
    const hours = Array.from({length: 24}, (_, i) => String(i).padStart(2, '0'));
    const minutes = Array.from({length: 60}, (_, i) => String(i).padStart(2, '0'));
    
    let hourPicker, minutePicker;
    
    document.addEventListener('DOMContentLoaded', () => {
        hourPicker = initWheel('wheelHour', hours, '09');
        minutePicker = initWheel('wheelMinute', minutes, '30');
    });
    
    timeInputTrigger.addEventListener('click', () => {
        backdrop.classList.add('active');
        timePickerSheet.classList.add('active');
    });
    
    unknownTimeCheck.addEventListener('change', () => {
        const cols = [document.getElementById('colHour'), document.getElementById('colMinute')];
        if (unknownTimeCheck.checked) {
            cols.forEach(col => col.style.opacity = '0.35');
        } else {
            cols.forEach(col => col.style.opacity = '1');
        }
    });
    
    timeDoneBtn.addEventListener('click', () => {
        if (unknownTimeCheck.checked) {
            timeDisplay.value = 'Không rõ giờ sinh';
        } else {
            timeDisplay.value = `${hourPicker.getValue()}:${minutePicker.getValue()}`;
        }
        backdrop.classList.remove('active');
        timePickerSheet.classList.remove('active');
    });
</script>
```

---

### Task 6: Tương tác co giãn giao diện nền khi Focus (Smooth Keyboard Resize)

**Files:**
- Modify: `prototype/KichHoatNangLuong_Input.html`

- [ ] **Step 1: Viết JavaScript để theo dõi sự kiện Focus trên các ô input và tự động nâng chiều cao Card, thu nhỏ sơ đồ Ngũ Hành.**

```html
<!-- Bổ sung vào script cuối trang -->
<script>
    const nameInput = document.querySelector('.input-field[type="text"]:not([readonly])');
    const formCard = document.getElementById('formCard');
    const spiritualHeader = document.getElementById('spiritualHeader');
    const wuxingContainer = document.getElementById('wuxingContainer');
    
    nameInput.addEventListener('focus', () => {
        // Nâng Card lên 80%
        formCard.style.height = '80%';
        // Thu nhỏ mờ sơ đồ ở trên
        spiritualHeader.style.opacity = '0';
        spiritualHeader.style.transform = 'scale(0.8) translateY(-20px)';
        wuxingContainer.style.opacity = '0';
        wuxingContainer.style.transform = 'scale(0.8) translateY(-20px)';
    });
    
    nameInput.addEventListener('blur', () => {
        // Trả Card về 52%
        formCard.style.height = '52%';
        // Hiện lại sơ đồ
        spiritualHeader.style.opacity = '1';
        spiritualHeader.style.transform = 'scale(1) translateY(0)';
        wuxingContainer.style.opacity = '1';
        wuxingContainer.style.transform = 'scale(1) translateY(0)';
    });
</script>
```

- [ ] **Step 2: Chạy thử toàn bộ giao diện trên trình duyệt và tự tay xác thực hoạt động của từng thành phần.**
