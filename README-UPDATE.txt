ICHI-JAPAN v1.5.3 — UX Stability & Visual Polish
Released: 2026-10-01

ฐาน: v1.5.2

เป้าหมายของรุ่นนี้
- ไม่เพิ่มฟีเจอร์ใหม่
- จัด Information Hierarchy ของหน้าให้ถูกลำดับ
- เก็บ Mobile layout ให้เสถียรและอ่านง่าย
- ปรับ visual consistency: spacing, radius, button, card และ typography

สิ่งที่เปลี่ยน
- หน้า “ทริปของฉัน” จัดใหม่ทั้งลำดับ:
  1) ข้อมูลทริป
  2) ที่พัก
  3) ตั๋วและเอกสาร
  4) Checklist ความพร้อม
  5) ข้อมูลฉุกเฉิน
  6) Offline / Backup
  7) เวอร์ชันและอัปเดตเว็บ — ย้ายไปล่างสุด
- Version panel ลดน้ำหนักเป็นส่วน maintenance ไม่แย่งข้อมูลทริป
- Mobile <= 800px บังคับ layout หลักเป็นคอลัมน์เดียวและเผื่อพื้นที่ bottom navigation / safe area
- ปรับ Card / Button / Heading / Empty state ให้ใช้ visual language เดียวกัน
- หน้า Trip ใช้ layout ใหม่ที่อ่านง่ายและบาลานซ์บนจอเล็ก
- Quick Rail Guide ลดน้ำหนัก visual ให้ไม่แย่งหัวข้อหลัก
- ไม่เปลี่ยน localStorage key และไม่เปลี่ยนข้อมูลทริปเดิม

ข้อมูลเดิม
- localStorage: tabi-v1
- Dashboard / Live Trip / Ticket Wallet / Hotel Hub / Smart Planner / Fuji Visibility ยังคงเหมือน v1.5.2

แนะนำก่อนอัปเดต
1. Export JSON สำรองทริป
2. อัปโหลดไฟล์ใน ZIP ทับไฟล์เดิม
3. Commit GitHub Pages
4. ปิดแท็บเว็บเดิม แล้วเปิดใหม่
5. Refresh หนึ่งครั้งหาก Service Worker ยังแสดงไฟล์เก่า
