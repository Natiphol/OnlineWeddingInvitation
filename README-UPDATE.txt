ICHI-JAPAN v1.4.2 — Dashboard Balance & Mobile Polish
1 ตุลาคม 2026

รอบนี้เน้น “ความสวย ความบาลานซ์ และการใช้งานบนมือถือ” โดยไม่ตัดฟังก์ชันหลักของ v1.4.x

ก่อนอัปเดต
1) เปิดเว็บเดิม > ทริปของฉัน > ส่งออกสำรอง JSON เก็บไว้ก่อน
2) อัปโหลดไฟล์ทั้ง 9 ไฟล์ด้านล่างทับไฟล์เดิมใน repository TravelJapan ระดับเดียวกับ index.html
3) Commit แล้วรอ GitHub Pages เผยแพร่
4) เปิดเว็บขณะออนไลน์ > ทริปของฉัน > ตรวจอัปเดต > ติดตั้งเวอร์ชันใหม่
5) ตรวจ footer ว่าเป็น v1.4.2 แล้วกด “เตรียมใช้ออฟไลน์” อีกครั้ง

ไฟล์ที่ต้องอัปโหลด
- index.html
- app.js
- style.css
- travel-data.js
- sw.js
- version.json
- discover.js
- discover.css
- places-data.js

สิ่งที่ปรับใน v1.4.2

1. Fuji Hero ใหม่
- ทำภาพ Fuji ให้เห็นเด่นขึ้น ลด overlay ที่ทึบเกินไป
- ปรับตำแหน่งภาพสำหรับมือถือให้เห็นบรรยากาศมากขึ้น
- ลดกรอบ/วงกลมตกแต่งที่แย่งสายตา
- ข้อมูลเวลา จุดวันนี้ และเส้นทาง เปลี่ยนจาก pill หลายก้อนเป็นข้อความสั้นคั่นด้วยจุด

2. CTA ใน Hero จัด hierarchy ใหม่
- “เปิดแผนวันนี้” เป็น Primary action หลักเพียงตัวเดียว
- Smart Day Planner ลดน้ำหนักเป็น action รอง ไม่แย่งสายตา
- ปุ่มแจ้งเตือนเวลาเสี่ยงชนยังแสดงเมื่อจำเป็น

3. Trip Health ทำให้ compact และอ่านเร็ว
- บนมือถือวางซ้อนใต้ Hero เล็กน้อย เพื่อเชื่อมเป็นองค์ประกอบเดียวกัน
- ลดความสูงของกล่องและวงคะแนน
- ข้อความบอกความพร้อมชัดขึ้น เช่น “พร้อม 69% · เหลือ 4 เรื่องที่ควรจัดการ”
- ปุ่มเหลือ “ดู” บนจอเล็ก

4. Dashboard cards ลดอาการ “กล่องซ้อนกล่อง”
- Today Flow และ Food Near Your Plan บนมือถือใช้ section โปร่งแทน card ใหญ่
- เนื้อหาภายในใช้ white surface เฉพาะส่วนที่จำเป็น
- Hotel / Alerts / Budget ยังคงเป็น card เพื่อแบ่งกลุ่มสำคัญ
- radius และ shadow ใช้ระบบเดียวกันมากขึ้น

5. Metric row แบบ swipe
- การจอง / Ticket Wallet / Route / Hotel / Conflict เปลี่ยนเป็นแนวนอนบนมือถือ
- การ์ดกว้างขึ้นและเห็นการ์ดถัดไปบางส่วน เพื่อบอกว่าปัดได้
- ใช้ scroll snap เพื่อหยุดการ์ดเป็นจังหวะ

6. Header มือถือ compact ขึ้น
- ลดความสูง top bar
- SOS เล็กลงแต่ยังชัด
- Online / Offline เบาลงและมี status dot
- Header เป็น glass/sticky เพื่อไม่กินพื้นที่หน้า

7. Bottom navigation สมดุลขึ้น
- หน้า “ตอนนี้” ไม่แสดงซ้ำใน bottom nav บนมือถือ เพราะเข้าผ่าน Dashboard ได้
- เหลือ 6 เมนูหลักบน bottom nav ทำให้ icon / label ไม่แน่นเกินไป
- หน้า “ตอนนี้” ยังไม่ได้ลบจากระบบ และเปิดได้จากปุ่มใน Dashboard
- Desktop sidebar ยังเข้าถึงหน้าเดิมได้ตามปกติ

8. Fuji Visibility ปรับ visual
- Card ลดกรอบแข็ง
- ใช้ภาพ Fuji เป็น texture ด้านขวา พร้อมพื้นหลังอ่านง่าย
- ยังคงข้อมูล visibility / forecast logic เดิม

9. Micro interaction
- Hero / Health / metric cards มี reveal animation เบา ๆ
- ปุ่มมี press feedback เล็กน้อย
- เคารพ prefers-reduced-motion ของระบบ

ความเข้ากันได้
- ยังใช้ localStorage key tabi-v1 เดิม
- ทริป / บัญชี / Ticket Wallet / โรงแรม / Booking / Route / Plan B เดิมไม่ถูกล้าง
- Live Trip Mode, Trip Health Check, Time Conflict Detector, Smart Day Planner, Hotel Hub และ Fuji Visibility ยังอยู่ครบ
- Service Worker เปลี่ยน cache เป็น ichi-1.4.2 และ core files ใช้ ?v=142

หมายเหตุ
- fuji.webp, fonts/, maps/, audio/, icons และ manifest เดิมให้เก็บไว้ใน repository ตามเดิม
- หลังอัปเดตควรเปิดออนไลน์หนึ่งครั้งและเตรียมออฟไลน์ใหม่ เพื่อให้ Service Worker เปลี่ยนเป็น v1.4.2
