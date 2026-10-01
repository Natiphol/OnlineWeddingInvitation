ICHI-JAPAN v1.5.1 — Mobile Layout Fix + Contextual Fuji

ฐาน: v1.5.0 (ซึ่งพัฒนาจาก v1.4.1)
วันที่: 1 ต.ค. 2026

แก้ไขรอบนี้
1) แก้ Dashboard มือถือแตก/การ์ดซ้อนกันตามภาพ
   - ต้นเหตุหลักคือ Dashboard 1.5 ใช้ <main> ซ้อนอยู่ภายใน <main id="app">
   - CSS global ของเว็บจึงไปกระทบคอลัมน์ด้านใน ทำให้ Hotel/Budget/Quick tools ลอยทับ Hero บนมือถือบางเบราว์เซอร์
   - เปลี่ยนโครงด้านในเป็น .companion-primary และบังคับ min-width/max-width/overflow ให้ทุกคอลัมน์อยู่ใน viewport
   - Desktop 2-column ยังทำงานเหมือนเดิม และ <=900px จะเรียงเป็น 1 column

2) Fuji Visibility แสดงบน Dashboard เสมอ แต่ทำงานแบบ Contextual
   - ถ้ามี Fuji/Kawaguchiko ใกล้วันโฟกัส ±2 วัน: แจ้งบริบทวันฟูจิแบบเด่น
   - ถ้ามีวันฟูจิแต่ยังอีกหลายวัน: แสดงวันที่ฟูจิ และเตือนว่าพยากรณ์ด้านล่างเป็นเพียง 3 วันข้างหน้า ไม่ใช่วันทริป
   - ถ้ายังไม่มี Fuji ในแผน: ยังแสดง Fuji Visibility พร้อมข้อความว่าปัจจุบันยังไม่มีวันฟูจิใน itinerary
   - พยากรณ์ใช้ cache เดิม และโหลดใหม่ขณะออนไลน์ตาม logic เดิม

3) ปรับหัว Contextual บนมือถือ
   - แยกหัวข้อ + คำอธิบายเป็น 2 บรรทัดบนจอเล็ก
   - ป้องกันข้อความดัน card ให้ล้นแนวนอน

เวอร์ชัน/cache
- APP_VERSION: 1.5.1
- asset query: v=151
- service worker cache: ichi-1.5.1

วิธีอัปเดต
1. สำรอง JSON ของทริปก่อน
2. อัปโหลดไฟล์ในชุดนี้ทับไฟล์เดิม
3. Commit / Push GitHub Pages
4. เปิดเว็บออนไลน์และ Reload
5. ถ้ายังเห็นหน้ารุ่นเก่า ให้ปิดแท็บ/เปิดใหม่ หรือรอ Service Worker เปลี่ยนเป็น v1.5.1

ข้อมูลทริปยังใช้ localStorage key tabi-v1 เดิม จึงไม่ต้องสร้างทริปใหม่
