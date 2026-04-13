const fs = require('fs');
let content = fs.readFileSync('Dichvu_V2.html', 'utf8');
const lines = content.split('\n');
const newContent = lines.slice(0, 1481).join('\n') + '\n' + `                <!-- Góc nhìn User Cơ Bản (Danh mục tính năng) -->
                <div data-show-for="coban" class="flex flex-col mb-8 animate-[fadeIn_0.3s_ease-in-out] w-full">
                    <!-- Info Box about Ads -->
                    <div class="bg-[#FFF8F8] p-3.5 rounded-xl border border-red-100 mb-6 flex items-start gap-3 shadow-sm w-full">
                        <div class="text-[20px] leading-none shrink-0 mt-0.5">⚠️</div>
                        <div class="text-left w-full">
                            <h4 class="text-[13px] font-bold text-red-800 tracking-tight">Kèm theo quảng cáo</h4>
                            <p class="text-[11.5px] text-red-700/90 mt-1 leading-[1.35] text-justify">
                                Tài khoản Cơ Bản sẽ hiển thị quảng cáo trong quá trình sử dụng. Nâng cấp Bạc hoặc Vàng để loại bỏ quảng cáo.
                            </p>
                        </div>
                    </div>

                    <h4 class="text-[14px] font-bold text-gray-800 mb-3 ml-1">Tính Năng Của Bạn:</h4>
                    <div class="mb-2 bg-slate-50 border border-slate-200 p-3.5 rounded-2xl shadow-sm">
                        <div class="grid grid-cols-2 gap-2.5">
                            <div class="flex flex-col gap-[3px] bg-white p-3 rounded-xl border border-slate-100 text-left items-start shadow-sm hover:border-slate-300 transition-all cursor-pointer">
                                <div class="flex items-center gap-2">
                                    <div class="w-[28px] h-[28px] shrink-0 bg-gradient-to-br from-slate-100 to-gray-100 rounded-[8px] flex items-center justify-center text-[15px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] pb-[1px]">
                                        📅</div>
                                    <h6 class="text-[13px] font-bold text-gray-800 leading-tight">Lịch Vạn Niên</h6>
                                </div>
                                <p class="text-[11px] text-gray-500 line-clamp-2 mt-0.5 leading-[1.3]">Tra cứu ngày Tốt Xấu</p>
                            </div>
                            <div class="flex flex-col gap-[3px] bg-white p-3 rounded-xl border border-slate-100 text-left items-start shadow-sm hover:border-slate-300 transition-all cursor-pointer">
                                <div class="flex items-center gap-2">
                                    <div class="w-[28px] h-[28px] shrink-0 bg-gradient-to-br from-slate-100 to-gray-100 rounded-[8px] flex items-center justify-center text-[15px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] pb-[1px]">
                                        🔮</div>
                                    <h6 class="text-[13px] font-bold text-gray-800 leading-tight">Tử Vi Hàng Ngày</h6>
                                </div>
                                <p class="text-[11px] text-gray-500 line-clamp-2 mt-0.5 leading-[1.3]">Dự báo cá nhân hoá</p>
                            </div>
                            <div class="flex flex-col gap-[3px] bg-white p-3 rounded-xl border border-slate-100 text-left items-start shadow-sm hover:border-slate-300 transition-all cursor-pointer">
                                <div class="flex items-center gap-2">
                                    <div class="w-[28px] h-[28px] shrink-0 bg-gradient-to-br from-slate-100 to-gray-100 rounded-[8px] flex items-center justify-center text-[15px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] pb-[1px]">
                                        📜</div>
                                    <h6 class="text-[13px] font-bold text-gray-800 leading-tight">Văn Khấn</h6>
                                </div>
                                <p class="text-[11px] text-gray-500 line-clamp-2 mt-0.5 leading-[1.3]">Đầy đủ các dịp Lễ</p>
                            </div>
                            <div class="flex flex-col gap-[3px] bg-white p-3 rounded-xl border border-slate-100 text-left items-start shadow-sm hover:border-slate-300 transition-all cursor-pointer">
                                <div class="flex items-center gap-2">
                                    <div class="w-[28px] h-[28px] shrink-0 bg-gradient-to-br from-slate-100 to-gray-100 rounded-[8px] flex items-center justify-center text-[15px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] pb-[1px]">
                                        🔄</div>
                                    <h6 class="text-[13px] font-bold text-gray-800 leading-tight">Đổi Ngày</h6>
                                </div>
                                <p class="text-[11px] text-gray-500 line-clamp-2 mt-0.5 leading-[1.3]">Âm Dương dễ dàng</p>
                            </div>
                            <div class="flex flex-col gap-[3px] bg-white p-3 rounded-xl border border-slate-100 text-left items-start shadow-sm hover:border-slate-300 transition-all cursor-pointer">
                                <div class="flex items-center gap-2">
                                    <div class="w-[28px] h-[28px] shrink-0 bg-gradient-to-br from-slate-100 to-gray-100 rounded-[8px] flex items-center justify-center text-[15px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] pb-[1px]">
                                        💓</div>
                                    <h6 class="text-[13px] font-bold text-gray-800 leading-tight">Nhịp Sinh Học</h6>
                                </div>
                                <p class="text-[11px] text-gray-500 line-clamp-2 mt-0.5 leading-[1.3]">Theo dõi trạng thái</p>
                            </div>
                            <div class="flex flex-col gap-[3px] bg-white p-3 rounded-xl border border-slate-100 text-left items-start shadow-sm hover:border-slate-300 transition-all cursor-pointer">
                                <div class="flex items-center gap-2">
                                    <div class="w-[28px] h-[28px] shrink-0 bg-gradient-to-br from-slate-100 to-gray-100 rounded-[8px] flex items-center justify-center text-[15px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] pb-[1px]">
                                        ☯️</div>
                                    <h6 class="text-[13px] font-bold text-gray-800 leading-tight">Gieo Quẻ</h6>
                                </div>
                                <p class="text-[11px] text-gray-500 line-clamp-2 mt-0.5 leading-[1.3]">Tiên đoán sự việc</p>
                            </div>
                        </div>
                    </div>
                </div>` + '\n' + lines.slice(1682).join('\n');
fs.writeFileSync('Dichvu_V2.html', newContent);
console.log('Done replacing lines 1482-1682');
