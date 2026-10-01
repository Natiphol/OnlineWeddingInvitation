ICHI-JAPAN v1.5.4 — Smart Logic
Released: 2026-10-01

ฐาน: v1.5.3 UX Stability & Visual Polish
รอบนี้ไม่ redesign ใหญ่ แต่เพิ่ม logic ให้ Dashboard / Planner / Live Trip ฉลาดขึ้น และเก็บปัญหา mobile footer spacing

สิ่งที่เปลี่ยน
1) Smart Dashboard / What needs you
- ตรวจ Booking ที่ยังต้องจอง
- ตรวจรายการที่จองแล้วแต่ยังไม่มีตั๋ว/หลักฐานแนบ (สำหรับสถานที่ ไม่เตือนร้านอาหารแบบเหมารวม)
- ตรวจคืนโรงแรมที่ยังขาด
- ตรวจ Route ที่ยังไม่มีโน้ตออฟไลน์
- ตรวจ Time Conflict + Travel-time risk
- ตรวจ Data freshness, Backup และ Offline test
- เรียงคำแนะนำตามความเร่งด่วนและวันใช้งาน

2) Time Conflict แม่นขึ้น
- ใช้เวลาในแผน + เวลาเข้า (entry time) ถ้ามี
- ใช้ durationMinutes จาก Discover เมื่อมีข้อมูล
- ใช้เวลาที่พิมพ์ไว้ใน Route ก่อน
- ถ้า Route ไม่มีเวลา แต่สองจุดมีข้อมูลย่าน ระบบอาจใช้เวลาเดินทางระดับย่านเป็น “ค่าประมาณเพื่อเตือน”
- เพิ่ม buffer 10 นาทีเมื่อมีเวลาการเดินทาง
- ค่าประมาณไม่ใช่ตารางรถไฟ/Google Maps สด

3) Smart Day Planner
- ยังเป็น recommendation only
- ไม่มีการแก้ลำดับเอง
- ต้องกด “ใช้ลำดับแนะนำ” ก่อนทุกครั้ง
- รายการที่ล็อกเวลาจะไม่ถูกย้ายตาม logic เดิม

4) Live Trip
- ใช้เวลาเข้า/เวลานัดช่วยหา Next Stop
- บอกว่าควรเริ่มออกอีกประมาณกี่นาทีเมื่อมีข้อมูลพอ
- ถ้าเวลาเริ่มตึง จะขึ้น “ใกล้เวลาออกแล้ว / ควรออกตอนนี้”
- แสดง Route / Ticket / Hotel status ต่อจุด

5) เวลาไทย + ญี่ปุ่น
- Dashboard Hero แสดง TH และ JP แบบ minimal
- Live Trip แสดงเวลาสองประเทศ
- อัปเดตบนหน้าทุกประมาณ 30 วินาที
- ไทยและญี่ปุ่นต่างกัน +2 ชั่วโมง

6) Mobile footer / ช่องว่างท้ายหน้า
- ตัด padding-bottom ซ้ำจาก main
- footer เป็นส่วนที่ reserve พื้นที่ให้ bottom nav เพียงจุดเดียว
- ปรับ footer ให้เป็น 3 บรรทัด compact: version / local data / online status
- แก้ช่องว่างใหญ่ก่อน footer ในหน้า Trip / Money และหน้าอื่นที่ใช้ layout เดียวกัน

ความเข้ากันได้
- ใช้ localStorage tabi-v1 เดิม
- ไม่ reset ทริป
- ไม่ลบตั๋ว / เอกสาร / ที่พัก / บัญชี
- Service worker cache: ichi-1.5.4

อัปเดต
1. Export Backup ก่อน
2. อัปโหลดไฟล์เว็บใน ZIP ทับไฟล์เดิมบน GitHub Pages
3. Commit
4. เปิดเว็บขณะออนไลน์และ Refresh
5. ถ้ายังเห็น UI รุ่นเก่า ให้ปิดแท็บแล้วเปิดใหม่
6. เข้า Trip > Offline & Backup > เตรียมใช้ออฟไลน์ใหม่
