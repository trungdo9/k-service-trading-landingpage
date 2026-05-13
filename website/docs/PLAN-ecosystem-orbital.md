# PROJECT PLAN: Orbital Ecosystem 3D

## 1. Context & Goal
- **Project:** K Service Trading Website (Landing Page).
- **Goal:** Replace the current Ecosystem 3D section with an "Orbital System" UI inspired by the sepay3d reference.
- **Visuals:** 
  - A central glowing core representing "K Service Trading".
  - 7 satellite nodes (the business lines) orbiting the central core on elliptical paths.
  - Glowing trails or data particles moving along the orbital paths connecting the satellites to the core.
  - Logos or icons floating inside the semi-transparent satellite spheres.
  - Dark, deep-space aesthetic to maintain the "Eco-luxury" VIP feel.

---

## 2. Socratic Gate (Pending User Confirmation)

> **WARNING**
> Please answer these questions before we proceed to implementation:

1. **Icons vs. Logos:** Currently, we use generic `lucide-react` icons (Leaf, ShoppingBag, etc.). For the spheres, should we use these icons floating inside them, or do you have specific brand logos (PNGs) for each of the 7 business lines?
2. **Camera Controls:** Should the user be able to freely rotate and zoom the entire orbital system using their mouse/touch (OrbitControls), or should it be a fixed perspective that just auto-rotates?
3. **Data Particles:** The reference shows particles traveling along the lines. This can be performance-heavy on mobile. Do you want full particle physics, or a lighter shader effect (glowing lines) for better performance?

---

## 3. Architecture & Tech Stack (Frontend)
- **Framework:** Next.js (React) + Tailwind CSS.
- **3D Engine:** `three`, `@react-three/fiber`, `@react-three/drei`.
- **Components:**
  - `OrbitalCore`: Central glowing sphere.
  - `OrbitPath`: `EllipseCurve` rendered via Drei's `<Line>`.
  - `SatelliteNode`: Semi-transparent glass spheres with `<Html>` or textured planes inside for the icons.
  - `DataParticle`: Small glowing spheres animating along the curves using `useFrame`.

---

## 4. Task Breakdown (Phân rã công việc)

### Phase 1: Foundation & Scene Setup
- [ ] Khởi tạo file `Ecosystem3D.tsx` mới (hoặc viết đè file hiện tại).
- [ ] Thiết lập `Canvas` với nền tối (`color="#050505"` hoặc dùng `Environment` tối).
- [ ] Thêm `OrbitControls` (nếu cần) và thiết lập Camera góc nhìn chéo (Isometric/Perspective).

### Phase 2: Core & Orbits Construction
- [ ] Tạo `OrbitalCore`: Khối cầu trung tâm phát sáng (MeshPhysicalMaterial + PointLight).
- [ ] Xây dựng logic tạo quỹ đạo (Orbits): Sử dụng `THREE.EllipseCurve` để tính toán đường đi của 7 business lines. Vẽ các đường này bằng `<Line>`.

### Phase 3: Satellites & Animations
- [ ] Tạo `SatelliteNode`: Các khối cầu vệ tinh xoay quanh quỹ đạo. Đặt icon vào trong khối cầu.
- [ ] Animation: Dùng `useFrame` để cập nhật vị trí của vệ tinh trên đường cong dựa vào thời gian (time).
- [ ] Tạo `DataParticle`: Các luồng sáng chạy dọc theo đường cong từ lõi ra vệ tinh.

### Phase 4: Interactivity & UI Overlay
- [ ] Xử lý sự kiện Hover/Click: Phóng to vệ tinh, hiển thị thông tin chi tiết (Tooltip) bên cạnh hoặc dưới góc màn hình.
- [ ] Tích hợp HTML Overlay UI (Tiêu đề, mô tả chung) tương thích với thiết kế Dark Mode.

---

## 5. Agent Assignments
| Agent | Role | Focus Area |
|-------|------|------------|
| `@project-planner` | Plan Creation | Lên kế hoạch và theo dõi tiến độ |
| `@frontend-specialist` | 3D UI/UX Dev | Viết code WebGL, Three.js, tối ưu hiệu năng |

---

## 6. Verification Checklist
- [ ] Giao diện giống hệ mặt trời (Orbital system) với đường cong và hạt di chuyển.
- [ ] Đảm bảo hiệu năng mượt mà (60 FPS) trên cả Mobile và Desktop.
- [ ] Hover vào vệ tinh hoạt động tốt, hiển thị đúng thông tin của 7 business lines.
