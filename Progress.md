# Progress — Rokka Portfolio

Trang web portfolio (CV) cá nhân, layout hai cột: sidebar trái cố định, nội dung phải scroll.

## Công nghệ

| Công nghệ | Phiên bản / Ghi chú |
|-----------|---------------------|
| **Vue.js** | 3.x — framework UI |
| **Vite** | 8.x — build tool & dev server |
| **Tailwind CSS** | 4.x — styling (`@tailwindcss/vite`) |
| **Inter** | Google Fonts — typography |

Không dùng Vue Router (single-page, scroll tới section).

## Các bước đã hoàn thành

### Bước 1 — Khởi tạo dự án
- [x] `npm create vite@latest . -- --template vue`
- [x] Cài Tailwind CSS 4 + plugin Vite
- [x] Cấu hình `vite.config.js`, `src/style.css` (theme nền đen `#000`, chữ trắng/xám)

### Bước 2 — Layout hai cột
- [x] Cột trái: `position: sticky`, full viewport height trên desktop
- [x] Cột phải: `overflow-y: auto`, scroll độc lập
- [x] Responsive: mobile xếp dọc, nav + social hiển thị phía trên nội dung

### Bước 3 — Navbar & scroll
- [x] Nav: Summary, Experience, Projects
- [x] Click nav → `scrollIntoView` mượt tới section tương ứng
- [x] Scroll spy (`IntersectionObserver`) — highlight mục nav đang xem

### Bước 4 — Summary (CV Rokka)
- [x] Profile: Rokka — Fullstack .Net Developer
- [x] Nội dung Summary trong `src/data/portfolio.js`
- [x] Component `SummarySection.vue`

### Bước 6 — Theme đen hiện đại
- [x] Nền `#000000`, glow nhẹ trắng mờ, typography trắng/xám

### Bước 7 — Panel layout (canvas + content)
- [x] Palette **Calm Developer**: canvas `#0F1115`, panel `#232A36` (sáng hơn `#151922`), text `#EAEAEA` / `#A7A7A7`, accent `#D6C7A1`
- [x] Bọc navbar trái trong 1 `div.content-panel`
- [x] Mỗi section phải (Summary / Experience / Projects) = 1 panel đen riêng
- [x] Khoảng cách `gap` giữa các panel — lộ nền canvas
- [x] Panel lighting **soft spotlight** trên `content-panel`
- [x] `min-height` full viewport + `scroll-snap` (desktop) — lướt hết 1 page mới sang page kế
- [x] Dữ liệu tạm Experience & Projects trong `portfolio.js`

### Bước 8 — Sidebar trái (ảnh + căn giữa)
- [x] Ảnh profile trên tên, bo góc, rộng `w-44` / `w-48`
- [x] Căn giữa toàn bộ navbar trái (ảnh, tên, nav, social)

### Bước 5 — Placeholder sections
- [x] `ExperienceSection.vue` — placeholder
- [x] `ProjectsSection.vue` — placeholder

## Cấu trúc thư mục chính

```
src/
├── App.vue                 # Layout chính
├── composables/
│   └── useScrollSpy.js     # Scroll spy + scroll tới section
├── components/
│   ├── SidebarNav.vue
│   ├── SocialLinks.vue
│   ├── icons/SocialIcon.vue
│   └── sections/
│       ├── SummarySection.vue
│       ├── ExperienceSection.vue
│       └── ProjectsSection.vue
└── data/
    └── portfolio.js        # Chỉnh tên, bio, links, nội dung tại đây
```

## Chạy dự án

```bash
npm install
npm run dev
```

Build production: `npm run build`

## Việc cần làm sau

- [x] Đổi `profile`, Summary trong `portfolio.js` (Rokka)
- [ ] Cập nhật `socialLinks` với URL thật của bạn
- [ ] Thêm nội dung **Experience** (`experienceItems`)
- [ ] Thêm nội dung **Projects** (`projectItems`)
- [ ] (Tuỳ chọn) Favicon, meta SEO, deploy (Vercel / Netlify)
