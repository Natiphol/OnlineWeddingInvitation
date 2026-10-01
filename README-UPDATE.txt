ICHI-JAPAN v1.5.6 · Build 1563 — MICRO STABILITY HOTFIX
=========================================================
วันที่: 1 ตุลาคม 2026

ฐานของชุดนี้
- ต่อจาก v1.5.6 Build 1562 โดยตรง
- ไม่เพิ่มฟีเจอร์ใหม่ และไม่เปลี่ยนโครงสร้างข้อมูลทริป
- เป้าหมายคือปิดบัคเล็กของ Transportation / Update / Recovery ก่อน Freeze 1.5.6

สิ่งที่แก้ใน Build 1563
1) แก้ค่าโดยสาร ¥0 ตอนกลับมาแก้ Route
   - Build 1562 บันทึก ¥0 ได้แล้ว แต่เมื่อเปิดแก้ Route ช่องค่าโดยสารกลับเป็นค่าว่าง
   - Build 1563 ใช้ nullish handling จึงคงค่า 0 ไว้ในฟอร์ม
   - Save → Edit → Save ซ้ำ ค่า ¥0 จะไม่หาย

2) ป้องกัน Route ว่างถูกบันทึกเป็น ROUTE SAVED
   - Structured Route ใหม่จะไม่นับข้อความที่ระบบสร้างจากชื่อโหมดอย่างเดียวเป็นข้อมูล Route
   - ถ้ายังไม่ได้ใส่ข้อมูลจริง ระบบจะไม่ยอมบันทึกเป็น Route ที่พร้อม
   - Route แบบเก่าจาก 1.5.5 ที่มีเพียงข้อความ offline note ยังอ่านต่อได้ตามเดิม

3) แก้ icon ของสายตามรูปแบบการเดินทาง
   - Rail = 🚆
   - Bus = 🚌
   - Walk = 🚶
   - Taxi = 🚕
   - Other = 🧭
   - ก่อนหน้านี้ช่อง line แสดงไอคอนรถไฟทุกโหมด

4) Recovery ปลอดภัยกับเว็บอื่นบน origin เดียวกันมากขึ้น
   - recover.html จะ unregister เฉพาะ Service Worker ใน scope /TravelJapan/
   - ไม่ unregister Service Worker ของโปรเจกต์อื่นบน natiphol.github.io โดยไม่จำเป็น
   - ยังคงล้างเฉพาะ cache ที่ขึ้นต้นด้วย ichi-

5) Build / Offline assets ขยับเป็น 1563 ทั้งชุด
   - index.html / app.js / discover.js / places-data reference / CSS / travel-data / Service Worker ใช้ build เดียวกัน
   - Release version ยังคง 1.5.6 เพื่อไม่สร้าง feature release ใหม่

วิธีอัปเดต
1. Export Backup จากหน้า “ทริป” ก่อนถ้าต้องการความมั่นใจสูงสุด
2. อัปโหลดไฟล์ 11 ไฟล์ใน ZIP ทับไฟล์เดิมที่ root ของ repository TravelJapan
3. เปิดเว็บขณะออนไลน์ แล้วกด “ตรวจอัปเดต” ในหน้า “ทริป”
4. ตรวจ footer ว่าเป็น “v1.5.6 · b1563”
5. กด “เตรียมใช้ออฟไลน์” ใหม่หลังอัปเดต
6. ถ้ายังค้าง build เก่า เปิด /TravelJapan/recover.html หนึ่งครั้ง

Regression checks ที่ใช้กับชุดนี้
- ES module syntax/import
- Structured Route ว่างต้องไม่ถูกบันทึก
- Legacy text-only Route ต้องยังอ่านได้
- ค่าโดยสาร ¥0: Save → Edit ต้องเห็น 0 → Save ซ้ำต้องยังเป็น 0
- Route 0/0 ต้องไม่ขึ้น 100% / พร้อม
- Build references ต้องเป็น 1563 ตรงกันทุก core asset
- Recover ต้อง scope เฉพาะ TravelJapan

ไม่มีการเปลี่ยน localStorage key (`tabi-v1`) หรือ IndexedDB เอกสาร/ตั๋ว
