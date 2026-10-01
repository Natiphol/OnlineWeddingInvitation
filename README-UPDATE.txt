ICHI-JAPAN v1.5.2 — Dashboard Layout Hotfix
Released: 2026-10-01

ฐาน: v1.5.1

แก้บัคหลัก
- แก้ Dashboard บนมือถือที่ Hotel Hub / Budget / Quick actions ลอยทับ Hero และ Fuji Visibility
- สาเหตุ: Dashboard ใช้แท็ก <aside> ซ้ำกับ selector aside ของ sidebar หลัก ทำให้ sidebar CSS (position: fixed / width / padding) ถูกนำไปใช้กับกล่อง Dashboard
- เปลี่ยนคอลัมน์รองของ Dashboard เป็น .companion-secondary และแยก CSS ออกจาก sidebar โดยสมบูรณ์
- เพิ่ม mobile hardening: width/min-width/max-width และ grid 1 คอลัมน์ที่ <=720px
- Fuji Visibility ยังคงแสดงบน Dashboard แบบ contextual ตามที่ขอ

ไม่ได้เปลี่ยนข้อมูลทริป
- ยังใช้ localStorage key: tabi-v1
- ฟีเจอร์ v1.5 เดิมยังอยู่

อัปเดต
1. สำรอง JSON ก่อน
2. อัปโหลดไฟล์ใน ZIP ทับไฟล์เดิม
3. Commit GitHub Pages
4. ปิดแท็บเว็บเดิม แล้วเปิดใหม่
5. หากยังเห็นหน้าเก่า ให้ refresh / update service worker อีกครั้ง
