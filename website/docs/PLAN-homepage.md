# PROJECT PLAN: K Service Trading - VIP Landing Page (One-Page Story)

## 1. Context & Goal
- **Project:** K Service Trading Website (Landing Page Format).
- **Target Audience:** Khách hàng quốc tế, VIP (Châu Âu, Mỹ, Hàn Quốc, Nhật Bản, v.v.). Yêu cầu sự tinh tế, không phô trương nhưng đẳng cấp.
- **Task:** Build a Conversion-Optimized One-Page Landing Page based on "Option A: The One-Page Story" flow.
- **Design Philosophy:** 
  - Bilingual UX (Default: Tiếng Anh, Option: Tiếng Việt).
  - Dark Header/Hero (Midnight Slate #161D1A) with Gold (#D1B05A) logo/accents.
  - Light Body (Pure White #FFFFFF & Eco Cream #F7F6F1) cho các section nội dung.
  - Components: Soft rounded cards, Serif headings (Playfair Display), line icons.
  - **Effects (Hiệu ứng):** Hiện đại, chuyên nghiệp, đồng nhất (Consistent smooth scroll, fade-in up, hover glow) - không dùng hiệu ứng giật cục hoặc quá rườm rà.

---

## 2. Socratic Gate (Resolved)
*Đã xác nhận và chốt phương án implement:*

1. **Architecture:** Là một **Landing Page Cuộn dọc Nguyên khối**. Mọi nút bấm (CTA) đều hướng luồng người dùng cuộn (scroll) về form liên hệ cuối trang thay vì mở trang mới.
2. **Flagship Brand:** Sẽ tự động chọn K-Ecotourism hoặc K-Smart Farm làm Flagship (dựa vào hình ảnh extract được từ PDF) để tối ưu hiển thị trên giao diện lưới (Bento-grid).
3. **Nguồn Hình Ảnh:** Ưu tiên trích xuất từ file `EN-Profile-K-Service-Trading.pdf`. Nếu hình ảnh không đủ phân giải, sẽ sử dụng AI (`generate_image`) để bổ sung các hình ảnh mang phong cách Eco-luxury.
4. **Copywriting:** Mặc định sử dụng **Tiếng Anh (English)**. Nội dung text trích xuất trực tiếp từ file Profile PDF để đảm bảo văn phong chuyên nghiệp cho tệp khách quốc tế.

---

## 3. Architecture & Tech Stack (Frontend)
- **Framework:** Next.js (React).
- **Styling:** Tailwind CSS (cấu hình biến màu Midnight Slate, Eco Cream, Premium Gold).
- **i18n:** Cấu hình routing song ngữ.
- **Animations:** Framer Motion (Đảm bảo sự đồng nhất: tất cả các section đều dùng chung một bộ preset animation *fade-in-up* mượt mà).

---

## 4. Task Breakdown (Phân rã công việc)

### Phase 1: Foundation & Setup
- [ ] Khởi tạo dự án Next.js, cấu hình Tailwind CSS theo `color-guidelines.md`.
- [ ] Cấu hình đa ngôn ngữ (i18n) cho `EN | VN`.
- [ ] Xây dựng bộ Global Components: Nút bấm (Solid/Outline bo góc), Text Styles. Tạo file thiết lập chung cho Framer Motion để đảm bảo hiệu ứng đồng nhất toàn trang.

### Phase 2: Core Components Development (UI/UX)
- [ ] **Task 2.1 - Anchor Header:** Sticky Header. Ban đầu trong suốt (Transparent), khi cuộn chuyển sang Midnight Slate. Menu căn giữa với cấu trúc Sitemap mới:
  - Giới thiệu
  - SERVICE
  - TRADING (Dropdown: FMCG, VLXD (Vật liệu xây dựng), Nông sản, THỦY HẢI SẢN)
  - K - DELTAFARM (Dropdown: AN NAM)
  - K.ECO TOURISM
  - CONTACT
  Góc phải có Toggle `EN | VN`.
- [ ] **Task 2.2 - Hero Section:** Video background (tone ấm), Tiêu đề H1 "Unlocking Value – Building the Future Together" (Serif in đậm/nghiêng). Primary CTA "Explore Our Ecosystem" (cuộn xuống #ecosystem).
- [ ] **Task 2.3 - Who we are (`#about`):** Nền Eco Cream. Giới thiệu K Service Trading. Tích hợp dải ngang Key Achievements (Counters: ROI >20%, 50+ Partners...) ở dưới đoạn text.
- [ ] **Task 2.4 - Business Lines & Flagship Brand (`#ecosystem`):** Bento-grid bất đối xứng. 
  - **1 thẻ lớn (Flagship Brand):** Chiếm 2/3 diện tích.
  - **6 thẻ còn lại:** Nằm trong các ô nhỏ hơn xung quanh. 
  - Nút "Explore" ở mỗi thẻ sẽ gọi modal hoặc cuộn thẳng xuống Form `#contact` kèm chủ đề (subject) được điền sẵn.
- [ ] **Task 2.5 - ESG & Brand Heritage (`#heritage`):** Khối kể chuyện cảm xúc (Emotional Storytelling). 
  - **The Emblem of Excellence:** Giải thích ý nghĩa Huy hiệu Logo (Vương miện = Đỉnh cao, Nguyệt quế = Bền vững, K = Cửa ngõ) thông qua đồ họa hoặc hiệu ứng Parallax.
  - **Commitment to ESG:** Khẳng định trách nhiệm Sinh thái (Môi trường - Xã hội - Quản trị) của K Service Trading để thuyết phục các đối tác/quỹ đầu tư Âu-Mỹ.
- [ ] **Task 2.6 - Why K Service Trading (`#why-us`):** Nền tối Midnight Slate. Gộp chung Tầm nhìn (Vision), 6 Giá trị cốt lõi (list icon Gold), và Bản đồ Global Network vào một khối trải nghiệm quyền lực.
- [ ] **Task 2.7 - Get in touch (`#contact`):** Layout chia đôi (Split screen). Trái là thông tin liên hệ VIP (Hotline, Email, Trụ sở). Phải là **Contact Form "Select your inquiry"** chuyên nghiệp với nút Submit Solid Gold.
- [ ] **Task 2.8 - Minimal Footer:** Tối giản, tránh gây xao nhãng khỏi Form liên hệ. Chứa Logo, Quick Links, và bản quyền.

*(Lưu ý: Đã lược bỏ mục News & Insights theo chuẩn Landing Page để tránh việc khách hàng click và thoát khỏi phễu chuyển đổi).*

### Phase 3: Integration & Refinement
- [ ] Lắp ráp toàn bộ Sections vào `app/[locale]/page.tsx` (hoặc `pages/index`).
- [ ] Tích hợp Micro-animations (Smooth scrolling cho Header, Fade-in-up cho các khối nội dung, Hover thẻ sáng viền Gold).
- [ ] Tối ưu hóa Responsive (Bento-grid tự chuyển thành Stacked layout trên Mobile để khách VIP thao tác bằng một tay dễ dàng).

---

## 5. Agent Assignments
| Agent | Role | Focus Area |
|-------|------|------------|
| `@project-planner` | Plan Creation | Theo dõi tiến độ và đảm bảo scope |
| `@frontend-specialist` | UI/UX Dev | Xây dựng components, layout, animations đồng nhất |
| `@clean-code` | Code Review | Đảm bảo code i18n, components gọn nhẹ |

---

## 6. Verification Checklist
- [ ] Là một trang One-Page hoàn chỉnh, không có liên kết nào (Leaky links) đẩy người dùng sang trang khác ngoài ý muốn.
- [ ] Hiệu ứng animation xuất hiện mượt mà, đồng nhất (không giật lag, không lạm dụng rườm rà) chuẩn phong cách VIP.
- [ ] Form `#contact` hoạt động trơn tru (auto-fill subject khi click từ thẻ Ecosystem).
- [ ] Nút Toggle EN|VN hoạt động và Header đổi màu khi scroll.
- [ ] Giao diện khớp 100% với Brand Colors (Midnight Slate, Gold, Cream) & Typography.
