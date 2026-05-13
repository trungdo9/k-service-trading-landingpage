

### 1. Art Direction & Ngôn ngữ Giao diện (UI/UX System)

* **Triết lý Song ngữ (Bilingual UX):** Website hỗ trợ Tiếng Việt và Tiếng Anh. Nút chuyển đổi ngôn ngữ (Toggle `VN | EN`) sẽ được thiết kế tinh tế, dính (sticky) ở góc phải của thanh điều hướng (Header). Hệ thống lưới (Grid) sẽ được tính toán linh hoạt (Fluid Typography) để không bị vỡ layout khi chuyển đổi giữa 2 ngôn ngữ có độ dài ký tự khác nhau.
* **Bảng màu (Color Palette):**
    * **Nền tối (Midnight Slate - #161D1A):** Dùng cho Header, Footer và các phần giới thiệu dịch vụ VIP để tạo chiều sâu quyền lực.
    * **Nền sáng (Eco Cream - #F7F6F1):** Làm màu nền chính cho nội dung trang, giúp người dùng "nghỉ mắt".
    * **Màu nhấn (Premium Gold - #D1B05A):** Dành cho các nút CTA (Call-to-Action), icon và text highlight.
* **Nghệ thuật chữ (Typography):** Kết hợp Font Serif có chân cổ điển (vd: Playfair Display) cho Tiêu đề (Heading) và Font Sans-serif hiện đại (vd: Inter/Montserrat) cho Văn bản (Body Text). Sẽ sử dụng nhịp điệu *In đậm (Bold)* xen kẽ *In nghiêng (Italic)* cho các thông điệp cảm xúc như *"Building the Future Together"*.
* **Hình khối & Trực quan (Visual Elements):** Các khối hình ảnh, nút bấm và thẻ Card UI đều được **bo góc (Rounded Corners)**. Không dùng đổ bóng gắt (Drop Shadow), thay vào đó là viền mỏng (Border) và sử dụng icon dạng nét mảnh (Line Icons). 
* **Hình ảnh (Photography):** Tone màu ấm (warm-toned), ngập tràn ánh sáng tự nhiên, tập trung vào kiến trúc resort, thiên nhiên và phong cách sống cao cấp.

---

### 2. Triển khai Layout chi tiết theo Sitemap

#### A. Global Components (Thành phần chung toàn trang)
### 1. Header (Thanh điều hướng)
* **Giao diện (UI):** Sticky Header (cố định khi cuộn). Ban đầu có nền trong suốt (Transparent) nằm trên Hero Banner. Khi người dùng cuộn trang, nền chuyển sang màu **Midnight Slate (#161D1A)** để đảm bảo độ tương phản và sang trọng.
* **Logo:** Sử dụng logo dạng Negative (viền gradient vàng kim trên nền tối) đặt ở góc trái.
* **Menu Navigation (Căn giữa):** About | Services | K-Ecotourism | Partners | Heritage | Contact. Font chữ Sans-serif hiện đại (VD: Inter), màu Trắng ngà (#F0F0F0).
* **Góc phải:** * Nút chuyển đổi ngôn ngữ (Toggle `VN | EN`).
    * Nút CTA "Partner with Us" (Thiết kế dạng Outline bo góc nhẹ, viền màu **Premium Gold #D1B05A**).

### 7. Footer (Chân trang)
* **Background:** **Midnight Slate (#161D1A)**.
* **Bố cục (4 cột):**
    1.  **Cột 1 (Thương hiệu):** Logo K SERVICE huy hiệu vương miện và vòng nguyệt quế vàng kim (Negative). Dòng chữ *"Unlocking Value – Building the Future Together"* Profile K Service Trading .pdf].
    2.  **Cột 2 (Quick Links):** Liên kết nhanh tới các trang About, Services, Ecotourism, Heritage. Chữ màu Trắng ngà (#F0F0F0).
    3.  **Cột 3 (Ecosystem):** K-Trading, K-Investment, K-Counsel, K-Duty Free, K-7 Entertainment Profile K Service Trading .pdf].
    4.  **Cột 4 (Contact Us):** * Hotline: `(+84) 935 7777 27` Profile K Service Trading .pdf].
        * Email: `info@k-tourism.club` Profile K Service Trading .pdf].
        * Mạng xã hội: Sử dụng các Line Icons màu Gold bo góc cho Facebook, LinkedIn, Instagram.

#### B. Homepage (Trang chủ)
Là bộ mặt tóm tắt toàn bộ hệ sinh thái của K-Service Trading.

Mục tiêu của trang chủ là thể hiện sự sang trọng, chuyên nghiệp, định vị "Premium & Eco-luxury", đồng thời làm nổi bật hệ sinh thái đa ngành của doanh nghiệp.

### 1. Hero Section (Màn hình đầu tiên)
* **Visual:** Video background tự động lặp (Auto-play loop) chất lượng cao. Video xen kẽ các cảnh: Kiến trúc đô thị hiện đại, khu resort cao cấp hòa mình vào thiên nhiên, và các cánh đồng nông nghiệp thông minh (K-Smart Farm) Profile K Service Trading .pdf]. Ánh sáng trong video mang tone màu ấm (warm-toned).
* **Typography:** * Dòng Text nhỏ (Eyebrow text): *K SERVICE TRADING CO., LTD* Profile K Service Trading .pdf].
    * Tiêu đề chính (H1): Khẩu hiệu **"Unlocking Value – Building the Future Together"** Profile K Service Trading .pdf]. Sử dụng font Serif cổ điển, có chân (VD: Playfair Display), kết hợp chữ In đậm (Bold) ở từ khóa và In nghiêng (Italic) ở cụm "Building the Future Together".
* **Call-to-Action (CTA):** Nút bấm màu **Solid Gold**, chữ màu trắng hoặc than chì, nội dung: "Explore Our Ecosystem". 

### 2. Introduction Section (Giới thiệu ngắn)
* **Background:** Nền màu **Eco Cream (#F7F6F1)** tạo cảm giác sáng sủa, giúp mắt nghỉ ngơi.
* **Bố cục (Layout):** Chia 2 cột (Cột trái 40%, cột phải 60%) với khoảng trắng (Padding) cực lớn để tạo sự "thoáng thở".
* **Nội dung:**
    * Cột trái: Tiêu đề H2 (Font Serif): *"A gateway connecting multi-sector trade and services in Vietnam and Southeast Asia."* Profile K Service Trading .pdf, color-guidelines.md].
    * Cột phải: Đoạn văn mô tả (Font Sans-serif, màu xám than chì #333333): Giới thiệu K Service Trading là đơn vị tiên phong trong lĩnh vực thương mại và dịch vụ đa ngành, là cầu nối chiến lược giữa Việt Nam, Hàn Quốc và Đông Nam Á Profile K Service Trading .pdf].

### 3. The Integrated Ecosystem (Hệ sinh thái Đa ngành)
Đây là khu vực quan trọng nhất (Grid-based layout).
* **Background:** Kéo dài từ nền Eco Cream sang màu nền sáng tinh khiết.
* **Thẻ Dịch vụ (Card UI):** Hiển thị 5 trụ cột kinh doanh dưới dạng các thẻ màu **Pure White (#FFFFFF)** nổi bật trên nền kem, được bo góc mềm mại (Rounded Corners), không dùng đổ bóng mà dùng đường viền mờ mỏng.
* Khi người dùng di chuột (Hover) vào từng thẻ, viền sẽ sáng lên màu Gold.
* **5 Thẻ bao gồm:**
    1.  **K-Ecotourism:** Resort cao cấp, dịch vụ VIP, Wellness Profile K Service Trading .pdf]. Icon: Lá cây/Hoa sen nét mảnh (Line icon) màu Gold.
    2.  **K-Trading:** Phân phối hàng tiêu dùng, mỹ phẩm, Smart Farm (Nông nghiệp thông minh trong container) và K-Duty Free Profile K Service Trading .pdf]. Icon: Hộp hàng/Tàu biển nét mảnh.
    3.  **K-Counsel:** Tư vấn tài chính và đầu tư đa ngành Profile K Service Trading .pdf]. Icon: Biểu đồ/Bắt tay.
    4.  **K-Investment:** Đầu tư công nghệ xanh, y tế kỹ thuật số, chuỗi cung ứng (ROI dự kiến >20%) Profile K Service Trading .pdf]. Icon: Đồng tiền/Mũi tên tăng trưởng.
    5.  **K-7 Entertainment:** Tổ chức sự kiện quốc tế, lễ hội văn hóa Profile K Service Trading .pdf]. Icon: Pháo hoa/Ngôi sao.

### 4. Why Choose Us / Vision & Core Values
* **Background:** Phủ màu nền tối **Midnight Slate (#161D1A)** để tạo chiều sâu và độ tương phản cao cho phần vinh danh tầm nhìn.
* **Hình ảnh:** Sử dụng 1 bức ảnh lớn bo góc cảnh quan resort hiện đại hoặc đô thị lung linh ánh đèn.
* **Nội dung:** * Tầm nhìn: Trở thành công ty thương mại và dịch vụ đa ngành hàng đầu Đông Nam Á Profile K Service Trading .pdf].
    * Giá trị cốt lõi (Hiển thị dạng List với icon màu Gold): *Innovation* (Đổi mới với AI/Big Data), *Sustainability* (Phát triển bền vững ESG), *Professionalism* (Đội ngũ quốc tế), *Transparency* (Minh bạch), *Efficiency* (Tập trung vào ROI cao) Profile K Service Trading .pdf].

### 5. Global Network & Partners (Mạng lưới & Đối tác)
* **Background:** Trở lại nền **Eco Cream (#F7F6F1)**.
* **Bản đồ:** Một bản đồ thế giới thiết kế tối giản, đánh dấu các điểm kết nối chiến lược: Hàn Quốc, Nhật Bản, Châu Âu, Mỹ, Thái Lan, Indonesia (Bali), Singapore, Hong Kong Profile K Service Trading .pdf].
* **Logo Carousel:** Dải băng chuyền tự động chạy ngang hiển thị logo âm bản hoặc đơn sắc của các đối tác chiến lược để giữ vững sự tối giản.



#### C. About (Về chúng tôi)
* **Hero Section:** Hình ảnh tòa nhà văn phòng hiện đại (như trong profile) kết hợp với thiên nhiên. 
* **Vision & Mission:** Layout chia 2 cột. Nhấn mạnh tầm nhìn trở thành công ty đa ngành hàng đầu Đông Nam Á Profile K Service Trading .pdf].
* **Core Values (Giá trị cốt lõi):** Sử dụng các ô lưới chứa Line Icons màu Gold. Thể hiện các giá trị: *Innovation (Đổi mới), Sustainability (Bền vững), Professionalism (Chuyên nghiệp), Transparency (Minh bạch), Efficiency (Hiệu quả)* Profile K Service Trading .pdf].

#### D. Services (Dịch vụ Đa ngành)
Trang này dùng layout **Zig-zag** (Ảnh bên trái/Text bên phải và ngược lại) để tạo nhịp điệu cuộn trang không nhàm chán. Hình ảnh bo góc tròn mềm mại.
* **K-Trading:** Nhấn mạnh vào phân phối FMCG, K-Duty Free (hàng miễn thuế tại cửa khẩu), và K-Smart Farm (nông nghiệp thông minh trong container Hàn Quốc) Profile K Service Trading .pdf].
* **K-Counsel & K-Investment:** Nhấn mạnh tỷ suất hoàn vốn (ROI >20%) và các dự án công nghệ xanh Profile K Service Trading .pdf]. 
* **K-7 Entertainment:** Các hình ảnh về lễ hội văn hóa và tổ chức sự kiện quốc tế Profile K Service Trading .pdf].

#### E. K-Ecotourism (Trang đặc tả Sinh thái - Mảng chủ lực)
Trang này sẽ được thiết kế đẳng cấp nhất, mang cảm giác như một chuyên trang của tạp chí du lịch cao cấp.
* **Hero Image:** Cảnh quan resort 4-5 sao hoặc Wellness Center tuyệt đẹp với tone màu ấm Profile K Service Trading .pdf].
* **VIP Concierge & Membership:** Khu vực nền đen than chì (Midnight Slate) giới thiệu thẻ thành viên "Membership Club Program". Nút "Join the Club" màu Solid Gold Profile K Service Trading .pdf].
* **Global Network:** Bản đồ thế giới tối giản (Minimalist Map) đánh dấu các điểm đến chiến lược: Thái Lan, Bali (Indonesia), Singapore, Hong Kong Profile K Service Trading .pdf].

#### F. Partners (Đối tác chiến lược)
* **Intro:** "Global Network - Cầu nối chiến lược quốc tế" Profile K Service Trading .pdf].
* **Logo Carousel:** Dải băng chuyền hiển thị logo các đối tác từ Hàn Quốc, Nhật Bản, Châu Âu, Mỹ Profile K Service Trading .pdf].
* **Collaboration Benefits:** Danh sách liệt kê dạng gạch đầu dòng có icon checkmark màu Gold (High ROI, Immediate cash flow, Truy cập kênh phân phối quốc tế) Profile K Service Trading .pdf]. 

#### G. Heritage (Di sản & Giá trị nguyên bản)
Được truyền cảm hứng từ biểu tượng Logo.
* **Brand Story:** Thiết kế dạng cuộn ngang (Horizontal scroll) hoặc Timeline. Giải thích ý nghĩa của Huy hiệu (Emblem): *Chữ K vững chãi, Vương miện 5 đỉnh vươn lên mạnh mẽ (chất lượng đỉnh cao), và Vòng nguyệt quế bao bọc (sự vinh quang và phát triển bền vững)*.
* **Cam kết Bền vững (ESG):** Nhấn mạnh sự giao thoa giữa di sản kinh doanh truyền thống và tương lai sinh thái bền vững Profile K Service Trading .pdf].

#### H. Contact Us (Liên hệ)
* **Giao diện:** Thiết kế chia nửa màn hình. Bên trái là thông tin liên hệ và triết lý đón tiếp khách hàng. Bên phải là Form liên hệ.
* **Contact Form:** Form điền thông tin tối giản (Clean Input Fields). Chỉ có viền mờ dưới (Bottom Border), không dùng box kín. Nút Submit là khối màu Premium Gold bo góc.
* **Tương tác:** Cho phép người dùng chọn chủ đề liên hệ (vd: Investment, K-Ecotourism Booking, K-Duty Free Partnership) qua một dropdown thanh lịch.

---

### 3. Tương tác & Hiệu ứng (Micro-interactions)
* **Reveal Animations:** Khi cuộn trang (scroll), các khối text và hình ảnh sẽ từ từ hiện ra (Fade-in up) mượt mà, từ tốn, đúng chuẩn "phong thái" luxury.
* **Hover Effect (Hiệu ứng di chuột):** Khi di chuột vào các thẻ Card UI dịch vụ, thẻ sẽ nảy nhẹ lên (Translate Y) vài pixel và đường viền (Border) mờ mỏng ban đầu sẽ chuyển dần sang ánh Premium Gold. 
* **Nút bấm (Buttons):** Khi hover, các nút Solid Gold sẽ sáng lên một tone màu, hoặc các nút viền (Outline Button) sẽ được lấp đầy bởi màu Gold từ trái sang phải.

Với bản đề xuất này, giao diện website sẽ không chỉ đáp ứng tính thẩm mỹ đẳng cấp, sang trọng, mà còn truyền tải hoàn hảo thông điệp "Eco-luxury" theo đúng bộ quy chuẩn Brand Guidelines của K-Service Trading. Nếu bạn đồng ý với định hướng này, tôi sẽ tiến hành lên Wireframe chi tiết (Figma) cho từng màn hình!