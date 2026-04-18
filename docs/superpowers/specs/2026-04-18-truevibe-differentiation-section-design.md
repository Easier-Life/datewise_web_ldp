# TrueVibe LDP - Differentiation Section Design Spec

## 1. Overview
Khối nội dung này sẽ thay thế cho phần "Expert Subscription" trên trang Landing Page (LDP) của TrueVibe (`datewise_web_ldp` project). 
Mục tiêu là làm nổi bật sự khác biệt và chất lượng vượt trội của TrueVibe so với các ứng dụng dating assistant/AI "thả thính dạo" trên thị trường hiện nay (như Rizz, Wingman, Your Move AI). Khối này nhắm đến đối tượng khách hàng nghiêm túc (Relationship-minded), những người đang ở giai đoạn "The Dip" (thất vọng với kết quả hẹn hò hiện tại).

## 2. SEO & Copywriting Strategy
- **Góc độ (Angle):** So sánh trực tiếp và chạm vào "Pain point" của người dùng khi sử dụng AI không có chiều sâu.
- **Giọng văn (Tone):** Trực diện, chuyên gia, đánh thức người dùng khỏi sự kỳ vọng vào một công cụ AI copy/paste bề mặt. Thay vào đó là tư duy "coach" và làm chủ cuộc trò chuyện.
- **Heading (H2):** Ngừng copy văn mẫu AI. Hẹn hò nghiêm túc cần chiến lược thật.
- **Sub-heading:** Bạn đã thử Rizz hay Wingman và vẫn bị "ghost"? Đó là vì đối phương muốn hẹn hò với bạn, không phải với một cái máy.

## 3. UI/UX & Layout Structure
Thiết kế sử dụng cấu trúc **Z-pattern hoặc 2 Khối Xếp Cạnh Nhau (Workflow Contrast)** để tạo điểm nhấn thị giác đối lập mạnh mẽ.

### Khối Trái: Thực Trạng (The Fake Way)
- **Visuals:** Tone màu tối hoặc xám, viền mờ nhạt, icon cảnh báo (❌). Phản ánh cảm giác gượng gạo và thất bại.
- **Nội dung:**
  - *Đầu vào:* Cung cấp màn hình chat hoặc ảnh.
  - *Xử lý AI:* Xào nấu một câu thả thính (pick-up line) dạng văn mẫu từ trên mạng.
  - *Kết quả:* Bạn gửi đi ➔ Lời văn sượng sùng, không giống con người bạn ➔ Đối phương tụt mood và im lặng (Ghosted).
  - *Sub-text:* Hẹn hò chỉ bằng văn mẫu sẽ không bao giờ tạo ra kết nối sâu sắc.

### Khối Phải: Đẳng Cấp Chuyên Gia TrueVibe (The Real Strategy)
- **Visuals:** Hiệu ứng Glassmorphism, bóng đổ nổi bật, stroke gradient sử dụng màu chủ đạo của TrueVibe, mang cảm giác Premium/VIP. Icon thả tim hoặc checkmark xanh (✅).
- **Nội dung:**
  - *Chẩn đoán (LearnedProfile):* Thấu hiểu tính cách của BẠN trước, soi chiếu "Red Flag / Green Flag" của đối phương từ profile/chat.
  - *Chiến thuật (Playbook):* AI đưa ra cách dẫn dắt câu chuyện dựa trên chính giọng điệu thật của bạn, phân tích dynamics hội thoại.
  - *Kết quả:* Tự tin gửi tin nhắn ➔ Câu chuyện có rễ sâu ➔ Chốt buổi hẹn hò chất lượng.
  - *Sub-text:* TrueVibe không nói hộ bạn. Chúng tôi coach để chính bạn trở thành phiên bản cuốn hút nhất.

### 4. Call-to-Action (CTA)
- Đặt ngay dưới khối so sánh này trang bị CTA mạnh mẽ.
- **Button Text:** [ Tự tin làm chủ cuộc trò chuyện ngay hôm nay ]
- **Micro-copy:** Tải miễn phí trên App Store - Không cam kết trả phí.

## 5. Implementation Considerations
- Sử dụng framework CSS hiện tại (TailwindCSS - nếu có trong Next.js) để dựng UI Component.
- Đảm bảo thẻ `<section>`, `<h2>` và `<p>` đúng ngữ nghĩa Semantic HTML cho SEO.
- Sử dụng hiệu ứng hover hoặc micro-animations ở khối TrueVibe (Khối phải) để nó nổi trội hẳn lên (Scale up nhẹ, glow border) so với khối trái (Scale down, fade out).
