ICHI-JAPAN v1.5.0 — Smart Trip Companion
1 ตุลาคม 2026

ฐานที่ใช้พัฒนา
- ทำต่อจาก v1.4.1 โดยตรง
- ไม่ใช้แนวทาง/ไฟล์ของ v1.4.2
- localStorage ยังใช้ key เดิม: tabi-v1
- ข้อมูลทริปเดิมไม่ถูกล้าง

แนวคิดของ v1.5
เปลี่ยน Dashboard จาก “Command Center ที่มีตัวเลข/กรอบเยอะ” ให้เป็น Smart Trip Companion ที่ตอบ 3 คำถามก่อน:
1) ตอนนี้/วันแรก จุดถัดไปคืออะไร
2) มีเรื่องไหนต้องจัดการก่อน
3) ของสำคัญพร้อมหรือยัง: Booking / Ticket / Hotel / Route / Data

สิ่งที่เปลี่ยนหลัก

1. Dashboard ใหม่แบบ Action-first
- Hero Fuji ยังเป็นภาพหลัก แต่ลดข้อมูลที่กองบนภาพ
- เหลือ Next Stop / First Day / Trip Summary + ปุ่มหลัก “เปิดแผนวันนี้”
- Live Trip หรือ Smart Planner เป็น Action รอง ไม่แย่ง CTA หลัก
- เปลี่ยนคำว่า ICHI TRAVEL COMMAND CENTER เป็น ICHI · SMART TRIP COMPANION

2. Trip Readiness แบบอ่านได้ใน 1 วินาที
- คะแนน 0–100 ยังอยู่ แต่ไม่ใช่พระเอกของหน้า
- แสดงเป็น “มี X เรื่องสำคัญ / เหลือ X เรื่องควรตรวจ / พร้อมใช้งาน”
- มี progress เส้นเล็กแทน Health Card ขนาดใหญ่

3. Smart Action Queue
- ดึงปัญหาจาก Trip Health แล้วเรียง Danger → Warning → Info
- แสดงสูงสุด 3 เรื่องบน Dashboard
- แต่ละเรื่องกดไปจัดการได้ทันที เช่น Booking, Hotel, Route, Data Freshness, Time Conflict
- ถ้าไม่มีเรื่องสำคัญจะแสดงสถานะพร้อมแทน

4. Journey Status Deck
รวมสถานะ 5 อย่างไว้ในกรอบเดียว เพื่อลด Card Syndrome:
- การจอง
- Ticket Wallet
- Hotel
- Route วันนี้
- Data Freshness
บนมือถือเป็นแถวเลื่อนแนวนอน

5. Today Flow ใหม่
- Timeline เบากว่าเดิม ไม่ใช้กรอบย่อยทุกบรรทัด
- เห็น เวลา → จุด → ย่าน → สถานะจอง/ตั๋ว
- ยังเปิดแก้รายการเดิมได้
- Smart Planner และดูแผนทั้งหมดอยู่ในหัว section

6. Trip Health v1.5
- เปลี่ยน Modal ให้เน้น “ต้องทำอะไร” มากกว่าวงคะแนน
- แยกจำนวนเรื่องสำคัญ / ควรตรวจ / เพิ่มเติม
- ใช้ Action Queue รูปแบบเดียวกับ Dashboard

7. Smart Day Planner v1.5
- ยังคงกฎสำคัญ: ไม่ย้ายรายการที่ล็อกเวลา
- เพิ่มเปรียบเทียบ “แผนตอนนี้” กับ “ลำดับที่แนะนำ”
- เพิ่มระยะข้ามย่านโดยประมาณ ก่อน/หลังจัด
- บอกชัดว่าการจัดย่านไม่แก้ Time Conflict อัตโนมัติ
- ระยะที่แสดงเป็นการประมาณจากศูนย์กลางย่าน ไม่ใช่ระยะรถไฟ/ถนนจริง

8. Live Trip Mode v1.5
ลดข้อมูลเหลือของที่ใช้ระหว่างเดินทางจริง:
- เวลา JST
- Next Stop
- เหลือเวลาเท่าไร
- ควรออกเมื่อไร (ถ้ามี Route ที่บันทึกเวลาไว้)
- Google Maps
- Ticket
- กลับโรงแรม
- สถานะ Route / Ticket / Hotel
- แจ้ง Time Conflict ถ้ามี
- ร้านใกล้แผน 2 ร้าน

9. Fuji Visibility แบบ Contextual
- Full Fuji Visibility จะโผล่บน Dashboard เมื่อมีรายการ Fuji/Kawaguchiko ในแผนภายในช่วง ±2 วันจากวันที่โฟกัส
- ถ้าไม่มี Fuji ใกล้วันนั้น Dashboard จะไม่ยัด Fuji Forecast ให้รกหน้า
- ระบบ Forecast เดิมจาก v1.4.1 ยังอยู่

10. Restaurant / Hotel / Budget
- ร้านอาหารยังจับย่านจากแผนวันนี้เหมือนเดิม แต่ UI เบาลง
- Hotel Tonight ยังคง Google Maps กลับโรงแรม
- Budget Pulse ยังคงเทียบใช้จริงกับงบ

ไฟล์ที่ต้องอัปโหลดทับของเดิม (9 ไฟล์)
- index.html
- app.js
- style.css
- travel-data.js
- sw.js
- version.json
- discover.js
- discover.css
- places-data.js

วิธีทดสอบที่แนะนำ
1) จาก v1.4.1 ให้ Export JSON สำรองก่อน
2) อัปโหลด 9 ไฟล์นี้ทับใน GitHub repository
3) Commit แล้วรอ GitHub Pages อัปเดต
4) เปิดเว็บแบบออนไลน์
5) ไป ทริปของฉัน > ตรวจอัปเดต
6) ยืนยัน footer เป็น v1.5.0
7) ทดสอบ Dashboard บนมือถือก่อน
8) ลองเปิด Live Trip / Trip Health / Smart Planner / Ticket Wallet / Hotel Hub
9) เตรียม Offline ใหม่หลังยืนยันว่า UI ผ่าน

สิ่งที่ตั้งใจ “ไม่เปลี่ยน” ในรอบนี้
- Bottom navigation ของ v1.4.1
- โครงสร้างข้อมูล tabi-v1
- Discover และฐานร้าน/สถานที่เดิม
- Ticket file storage เดิม
- Hotel data เดิม
- ระบบ Expense / Travel guide / Phrasebook เดิม

หมายเหตุ
v1.5.0 รอบนี้ตั้งใจเป็นการทดลอง UX ใหม่จาก v1.4.1 แบบควบคุม scope ถ้าหน้า Dashboard ผ่าน ค่อยต่อยอดรายละเอียดภายใน section ในรอบถัดไป โดยไม่เปลี่ยนโครงทั้งเว็บพร้อมกันอีก
