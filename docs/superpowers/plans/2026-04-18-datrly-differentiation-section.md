# Datrly LDP - Differentiation Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Thay thế PricingSection (Expert Subscription) bằng khối so sánh "Hành trình đối lập" (DifferentiationSection) và cập nhật SEO copy cho Hero + Features để tối ưu thông điệp Relationship-minded.

**Architecture:** Sử dụng cấu trúc hiện tại của `app/page.tsx` (function components inline styles). The new section will perfectly replace `PricingSection`. Content text will be managed via `lib/i18n.tsx` to maintain internationalization.

**Tech Stack:** Next.js (React), Typescript, Inline Styles (as per existing conventions)

---

## Chunk 1: Content Setup

### Task 1: Update SEO and Translation Copy

**Files:**
- Modify: `lib/i18n.tsx`

- [ ] **Step 1: Write/Update translation keys**
Tìm đến đoạn khai báo ngôn ngữ trong `lib/i18n.tsx` (thường là tiếng Việt và tiếng Anh) và thay đổi/thêm các key sau:
- Thay đổi `home.hero.title`: "Tự tin hẹn hò nghiêm túc với AI Coach cá nhân"
- Thay đổi `home.hero.subtitle`: "Vượt qua giai đoạn 'The Dip' với chiến lược hẹn hò từ AI. Datrly thấu hiểu profile của bạn và đối phương để tạo ra những cuộc trò chuyện sâu sắc, không phải thả thính dạo."
- Đảm bảo `home.features...` mang âm hưởng chẩn đoán và tâm lý.
- Thêm nhóm keys mới cho `home.differentiation.*`:
  ```typescript
  // For VI
  "home.differentiation.badge": "SỰ KHÁC BIỆT",
  "home.differentiation.title": "Ngừng copy văn mẫu AI. Hẹn hò nghiêm túc cần chiến lược thật.",
  "home.differentiation.subtitle": "Bạn đã thử Rizz hay Wingman và vẫn bị \"ghost\"? Đó là vì đối phương muốn hẹn hò với bạn, không phải với một cái máy.",
  "home.differentiation.card1.title": "Các App Thông Thường",
  "home.differentiation.card1.step1": "Xào nấu một câu thả thính rập khuôn từ trên mạng.",
  "home.differentiation.card1.step2": "Bạn gửi đi lời văn sượng sùng, không giống con người bạn.",
  "home.differentiation.card1.step3": "Đối phương tụt mood và im lặng (Ghosted).",
  "home.differentiation.card1.subtext": "Hẹn hò chỉ bằng văn mẫu sẽ không bao giờ tạo kết nối sâu sắc.",
  
  "home.differentiation.card2.title": "Đẳng Cấp Chuyên Gia Datrly",
  "home.differentiation.card2.step1": "Thấu hiểu tính cách BẠN và soi chiếu \"Red Flag\" của đối phương.",
  "home.differentiation.card2.step2": "Gợi ý chiến thuật dẫn dắt dựa trên giọng điệu thật của bạn.",
  "home.differentiation.card2.step3": "Tự tin nhắn tin, câu chuyện có chiều sâu, chốt hẹn chất lượng.",
  "home.differentiation.card2.subtext": "Datrly không nói hộ bạn. Chúng tôi coach để chính bạn thu hút nhất.",
  
  "home.differentiation.cta": "Tự tin làm chủ cuộc trò chuyện ngay hôm nay",
  ```

- [ ] **Step 2: Run build to verify types**
Run `npm run build` hoặc `npm run dev` để kiểm tra.

- [ ] **Step 3: Commit**
`git add lib/i18n.tsx`
`git commit -m "feat: update hero SEO strings and add differentiation keys"`

---

## Chunk 2: Replace Subscription Block

### Task 2: Implement DifferentiationSection

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace `PricingSection` logic**
Mở `app/page.tsx`, tìm function `PricingSection()`. Xóa toàn bộ function này và thay bằng `function DifferentiationSection()`.

- [ ] **Step 2: Build the UI Structure**
```tsx
function DifferentiationSection() {
  const { t } = useLang();
  return (
    <section id="differentiation" style={{ padding: 'clamp(64px, 10vw, 100px) 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header (Badge, Title, Subtitle) */}
        {/* 2-Column Grid for Cards */}
          {/* Card 1: Ordinary Apps (Dark/Grey Theme, ❌ icons) */}
          {/* Card 2: Datrly (Glassmorphism, #2DD4BF Theme, ✅ icons, Scale effect) */}
        {/* CTA Button below */}
      </div>
    </section>
  );
}
```
*Lưu ý: Apply các màu và shadow phù hợp với phong cách dark theme hiện tại trong file (VD: rgba(255, 255, 255, 0.04) cho thẻ thông thường).*

- [ ] **Step 3: Update bottom Call-to-action**
Sử dụng style button giống `HeroSection` cho nút CTA ở dưới cùng.

- [ ] **Step 4: Swap Component in Page render**
Trong component default export `export default function Home()`, thay thẻ `<PricingSection />` thành `<DifferentiationSection />`.

- [ ] **Step 5: Verify visually**
Run `npm run dev`. Mở trang `http://localhost:3000` và cuộn xuống vị trí thay thế xem giao diện có đúng ý không.

- [ ] **Step 6: Commit**
`git add app/page.tsx`
`git commit -m "feat: replace pricing section with differentiation comparison"`

