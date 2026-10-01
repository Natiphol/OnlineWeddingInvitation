ICHI-JAPAN v1.4.1 — Fuji Dashboard Visual Refresh
1 ตุลาคม 2026

รอบนี้เป็น UI/UX polish ของ Dashboard v1.4.0 โดยคงฟังก์ชัน Live Trip Mode, Ticket Wallet,
Trip Health Check, Time Conflict Detector, Hotel Hub, Smart Day Planner และ Fuji Visibility ไว้ครบ

ก่อนอัปเดต
1) เปิดเว็บเดิม > ทริปของฉัน > ส่งออกสำรอง JSON เก็บไว้ก่อน
2) อัปโหลดไฟล์ทั้ง 9 ไฟล์ด้านล่างทับไฟล์เดิมใน repository TravelJapan ระดับเดียวกับ index.html
3) Commit แล้วรอ GitHub Pages เผยแพร่
4) เปิดเว็บขณะออนไลน์ > ทริปของฉัน > ตรวจอัปเดต > ติดตั้งเวอร์ชันใหม่
5) ตรวจ footer ว่าเป็น v1.4.1 แล้วกด “เตรียมใช้ออฟไลน์” อีกครั้ง

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

สิ่งที่เปลี่ยนใน v1.4.1

1. Dashboard Hero ใช้ภูเขาไฟฟูจิเป็นพื้นหลัง
- ใช้ไฟล์ fuji.webp เดิมของโปรเจกต์ จึงไม่ต้องอัปโหลดรูปใหม่
- เพิ่ม dark emerald overlay เพื่อให้ข้อความอ่านง่ายทั้งกลางวัน/กลางคืน
- ลดวงกลมกราฟิกเดิมที่ทำให้ Hero ดูเหมือน dashboard enterprise มากเกินไป
- เพิ่มคำว่า FUJI · JAPAN แบบเบา ๆ บนภาพ

2. ปรับความบาลานซ์ของ Dashboard ใหม่
- Hero และ Health Card ใช้ radius/spacing ชุดเดียวกัน
- ลดความสูงของ Health Card บนมือถือให้เป็น status strip แบบ compact
- ปุ่ม “ตรวจทั้งทริป” บนมือถือเล็กลง ไม่แย่งสายตาจาก Hero
- ลดกรอบเส้นรอบ card ที่ซ้ำซ้อน และใช้เงาบางแทน

3. Metrics row ใหม่
- Desktop ยังแสดง 5 ช่องเท่ากัน
- Mobile เปลี่ยนเป็นแถวเลื่อนแนวนอน เพื่อไม่ให้กล่อง 2x3 ดูแน่น/ไม่บาลานซ์
- แต่ละ metric มีน้ำหนักตัวเลข/ข้อความสม่ำเสมอ

4. Action ใน Hero
- ปุ่มหลัก “เปิดแผนวันนี้” เด่นที่สุด
- Smart Day Planner เป็น secondary action ที่เบากว่า
- แจ้งเตือนเวลาชนจะลงแถวของตัวเองเมื่อจำเป็น

5. Card system
- Dashboard ใช้ 24px outer radius และ 18px inner radius เป็นระบบเดียวกัน
- Today Flow / Food / Hotel / Alerts / Budget / Fuji Visibility ใช้ภาษา visual เดียวกัน
- ลดเส้น border และเพิ่ม soft shadow เพื่อให้หน้าเบาขึ้น

6. Mobile polish
- ลดพื้นที่ว่างก่อน Hero
- หัวข้อ Command Center กระชับขึ้น
- Quick tools ด้านล่างเปลี่ยนเป็น 4 ช่องเท่ากัน
- Food cards เปลี่ยนเป็น 1 คอลัมน์เพื่ออ่านง่ายบนมือถือ
- Dashboard ไม่ควรมีกรอบขนาดใหญ่ซ้อนกันหลายชั้นเหมือน v1.4.0

หมายเหตุ
- v1.4.1 ใช้ fuji.webp ที่มีอยู่เดิมใน repository และอยู่ใน Offline Guide pack แล้ว
- ข้อมูลทริปยังใช้ localStorage key tabi-v1 เดิม ไม่ล้างข้อมูลเก่า
- ฟังก์ชันทั้งหมดจาก v1.4.0 ยังอยู่ครบ
