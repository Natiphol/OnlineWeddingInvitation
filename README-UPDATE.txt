ICHI-JAPAN v1.5.6 · Build 1562 — STABILITY HOTFIX
====================================================
วันที่: 1 ตุลาคม 2026

ฐานของชุดนี้
- ต่อจาก v1.5.6 HOTFIX 1 โดยตรง
- ไม่เพิ่มฟีเจอร์ใหม่ และไม่เปลี่ยนข้อมูลทริปของผู้ใช้
- Transportation / Smart Logic / Data Quality เดิมยังอยู่ครบ

สิ่งที่แก้ใน Build 1562
1) แก้ Offline module version mismatch
   - discover.js เคยเรียก places-data.js?v=156 แต่ Service Worker เก็บ v=1561
   - ตอนนี้ core modules ทั้งชุดใช้ v=1562 เดียวกัน
   - ลดโอกาส Discover/Places โหลดไม่ขึ้นในโหมด Offline

2) ทำความสะอาด cache รุ่นเก่าอัตโนมัติ
   - Service Worker จะเก็บเฉพาะ app cache ปัจจุบันและ photo cache ปัจจุบันที่ขึ้นต้นด้วย ichi-
   - cache ICHI-JAPAN รุ่นเก่าจะถูกลบตอน Service Worker รุ่นใหม่ activate
   - ไม่ลบ localStorage หรือ IndexedDB จึงไม่ตั้งใจลบทริป บัญชี ตั๋ว หรือเอกสาร

3) แก้ Route 0/0
   - วันที่มี 0–1 จุดจะไม่ขึ้น 100% หรือ “พร้อมออฟไลน์” อีก
   - Dashboard แสดง “— · ยังไม่มีช่วงเดินทาง”
   - หน้า Transportation แสดง “— · ยังไม่มีช่วง”

4) แยก Release version กับ Build
   - Release ยังเป็น 1.5.6
   - Build ปัจจุบันคือ 1562
   - หน้า Trip / footer / ระบบตรวจอัปเดตอ่าน Build ด้วย
   - เครื่องที่ยังใช้ Build เก่าจะไม่ถูกบอกว่าเป็นรุ่นล่าสุดเพียงเพราะ version เท่ากัน

5) รองรับค่าโดยสาร ¥0
   - Shuttle / รถฟรี / ช่วงที่ไม่มีค่าโดยสารสามารถบันทึก 0 เยนได้
   - ¥0 จะแสดงใน Route card และ Offline Route Pack ตามจริง

6) Offline protocol bump
   - Offline status protocol เปลี่ยนเป็น 6 เพื่อป้องกัน app ใหม่คุยกับ Service Worker เก่าแล้วคิดว่าพร้อม

วิธีอัปเดต
1. แนะนำให้ Export Backup จากหน้า “ทริป” ก่อน
2. อัปโหลดไฟล์เว็บใน ZIP ทับไฟล์เดิมบน GitHub Pages
3. รวม recover.html ไว้ใน repository เหมือน HOTFIX 1
4. เปิดเว็บขณะออนไลน์ แล้วปิด/เปิดแท็บใหม่ 1 รอบ
5. ไปหน้า “ทริป” ตรวจว่าแสดง ICHI-JAPAN v1.5.6 · Build 1562
6. กด “เตรียมใช้ออฟไลน์” ใหม่ และทดลองเปิดโหมดเครื่องบิน

หากยังติด Service Worker รุ่นเก่า
เปิด https://natiphol.github.io/TravelJapan/recover.html หนึ่งครั้ง
หน้านี้ล้างเฉพาะ cache ที่ขึ้นต้นด้วย ichi- และ unregister Service Worker โดยไม่ตั้งใจลบ localStorage/IndexedDB

หมายเหตุ Transportation
- เวลาและค่าโดยสารเป็นค่าที่ผู้ใช้บันทึก ไม่ใช่ข้อมูลรถสด
- Google Maps / เว็บไซต์ผู้ให้บริการต้องใช้อินเทอร์เน็ต
- Offline Route Pack ใช้สำหรับเก็บ Station / Line / Transfer / Exit / Duration / Fare / Note ไว้อ่านหน้างาน
