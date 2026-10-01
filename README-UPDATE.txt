ICHI-JAPAN v1.4.0 — Travel Command Center
1 ตุลาคม 2026

ก่อนอัปเดต
1) เปิดเว็บเดิม > ทริปของฉัน > ส่งออกสำรอง JSON เก็บไว้ก่อน
2) อัปโหลดไฟล์เว็บทั้ง 9 ไฟล์ทับของเดิมใน repository TravelJapan ระดับเดียวกับ index.html
3) Commit แล้วรอ GitHub Pages เผยแพร่
4) เปิดเว็บขณะออนไลน์ > ทริปของฉัน > ตรวจอัปเดต > ติดตั้งเวอร์ชันใหม่
5) ตรวจ footer ว่าเป็น v1.4.0 แล้วกด “เตรียมใช้ออฟไลน์” อีกครั้ง

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

============================================================
สิ่งที่เพิ่มใน v1.4.0
============================================================

1. Dashboard ใหม่ — ICHI Travel Command Center
- ออกแบบใหม่ทั้งหน้า ไม่ใช้ Dashboard แบบกล่อง 4 ใบของ v1.3.0 เป็นหน้าหลักแล้ว
- Hero หลักบอกสถานะทริป เวลา JST จุดถัดไป จำนวนจุด และความพร้อมของเส้นทาง
- Trip Health Score 0–100 สรุปความพร้อมทั้งทริป
- แถบสรุป การจอง / Ticket Wallet / เส้นทาง / Hotel / เวลาเสี่ยงชน
- Timeline วันนี้แบบอ่านเร็ว
- Smart Alerts ดึงปัญหาที่ควรจัดการขึ้นมาอัตโนมัติ
- ร้านอาหารใกล้ย่านในแผนวันนี้
- Budget Pulse
- Fuji Visibility อยู่บน Dashboard โดยตรง
- Mobile ปรับเป็น Card layout ใช้นิ้วเดียวได้ง่ายกว่าเดิม

2. Live Trip Mode
- ปุ่ม “Live Trip” จาก Dashboard
- แสดงเวลา JST ปัจจุบัน
- หา “จุดถัดไป” จากวันและเวลาที่บันทึกไว้
- แสดงอีกกี่นาทีถึงเวลาตามแผน
- ถ้าเส้นทางออฟไลน์มีข้อความเวลา เช่น 35 นาที ระบบช่วยคำนวณว่าเหลือเวลาประมาณเท่าไรควรเริ่มออก
- ปุ่ม Google Maps ไปจุดถัดไป
- เปิด Ticket Wallet / กลับโรงแรม / จดรายจ่ายจากหน้าเดียว
- แสดง Route Note ที่บันทึกไว้ออฟไลน์
- เตือนถ้าวันนั้นมี Time Conflict
- แสดง Timeline และร้านอาหารใกล้แผน

หมายเหตุ: “ควรออกในอีก…” เป็นตัวช่วยจากเวลาที่ผู้ใช้บันทึก ไม่ใช่เวลารถไฟสด

3. Ticket Wallet
- รวมตั๋ว/ใบจองที่แนบกับแผนไว้หน้าเดียว
- เรียงตามวันที่และเวลาเข้าชม
- รูปตั๋วแสดง Thumbnail
- PDF แสดงเป็น Ticket Card
- เปิดไฟล์หรือแก้ Event ได้จาก Wallet
- แยกรายการ “จองแล้วแต่ยังไม่มีตั๋วแนบ” ให้ตรวจง่าย
- ไฟล์ยังเก็บใน IndexedDB ของอุปกรณ์นี้ และรวมใน Export Backup เดิม

4. Trip Health Check
ระบบตรวจจากข้อมูลในเครื่องและให้ Score 0–100 โดยดู:
- รายการที่ยัง “ต้องจอง”
- รายการที่ข้อมูลร้าน/สถานที่แนะนำให้เช็กการจอง
- คืนโรงแรมที่ยังขาด
- Time Conflict
- วิธีเดินทางออฟไลน์ที่ยังขาด
- ข้อมูล Discover ที่เก่า
- วันที่ยังไม่มีแผน
- Backup ล่าสุด
- การทดสอบ Offline

ปุ่ม “จัดการ” ใน Health Check จะพาไปจุดที่เกี่ยวข้องทันที
คะแนนเป็น Checklist ของข้อมูลที่บันทึก ไม่ใช่การรับประกันจากผู้ให้บริการภายนอก

5. Time Conflict Detector
- ตรวจลำดับเวลาที่วิ่งย้อน เช่น 13:00 แล้วรายการถัดไป 12:00
- ตรวจรายการเริ่มเวลาเดียวกัน
- ใช้ durationMinutes จากฐาน Discover เพื่อตรวจว่ารายการทับกันหรือไม่
- แจ้ง Tight Buffer เมื่อเหลือเวลาต่ำกว่า 20 นาที
- รายการ Custom ที่ไม่มี duration จะไม่เดาระยะเวลาเอง ลด False Alarm
- เปิดตรวจได้จาก Dashboard, Live Trip และหน้าแผน

6. Smart Day Planner
- ช่วยจัดรายการ “ไม่มีเวลา” ให้ย่านใกล้กัน
- รายการที่มีเวลาเป็น Anchor และไม่ถูกย้ายโดยระบบ
- ใช้ตำแหน่งระดับย่าน (ไม่ใช่ GPS สด) เพื่อช่วยลดการวิ่งย้อนเมือง
- แสดง Before / Suggested ก่อนกดยืนยัน
- ถ้าวันเดียวมีหลายเมือง จะขึ้นเตือนให้ตรวจการเดินทางข้ามพื้นที่
- เมื่อนำลำดับใหม่มาใช้ ระบบล้าง Route-to-next เดิม เพราะปลายทางเปลี่ยนแล้ว

7. Hotel Hub
ข้อมูลที่พักเพิ่มจากเดิม:
- ชื่อ / ที่อยู่ / โทรศัพท์
- Check-in / Check-out
- สถานีใกล้สุด
- Exit
- ฝากกระเป๋า
- อาหารเช้า
- Coin Laundry
- Onsen / ห้องอาบน้ำ
- หมายเหตุสำคัญ

Hotel Hub แสดง:
- ที่พักคืนนี้
- ปุ่มกลับโรงแรม Google Maps
- โทรโรงแรม
- จำนวนคืนที่ครอบคลุม
- คืนที่ยังขาด
- รายการโรงแรมทั้งหมด

8. Fuji Visibility
- ดึงพยากรณ์ Kawaguchiko แบบออนไลน์โดยไม่ต้อง API key
- ใช้ Cloud cover ต่ำ/กลาง, precipitation probability, precipitation และ visibility
- คำนวณ Visibility Score 0–100 เป็น “ตัวช่วยเลือกช่วงเวลา”
- แนะนำช่วงเวลา 06:00–15:00 ใน forecast 3 วัน
- แสดงเมฆต่ำและระยะ Visibility
- Cache snapshot ล่าสุดในเครื่อง เพื่อยังเห็นข้อมูลล่าสุดเดิมตอน Offline
- Refresh ได้เองจาก Dashboard
- มีลิงก์เว็บท่องเที่ยว Fujikawaguchiko ทางการ

สำคัญ: คะแนน Fuji Visibility ไม่ใช่ Live Camera และไม่รับประกันว่าจะเห็นยอดฟูจิ เป็น heuristic จาก weather forecast เท่านั้น
Weather API: Open-Meteo
Tourism reference: Fujikawaguchiko Town Tourism Information Site

9. Data model compatibility
- localStorage ยังใช้ key: tabi-v1
- ข้อมูลทริป v1.3.0 และรุ่นเก่ายังเปิดได้
- Event เดิมไม่ต้อง migration
- Hotel field ใหม่เป็น Optional
- durationMinutes ถูก expose เพิ่มใน Discover helper เพื่อใช้ Conflict Detector
- Service Worker: ichi-1.4.0
- Core cache query: ?v=140

============================================================
สิ่งที่ควรทดสอบหลัง Deploy
============================================================
1) เปิด Dashboard ทั้ง Desktop และ Mobile
2) กด Live Trip
3) แนบตั๋ว 1 ภาพ + 1 PDF แล้วเปิด Ticket Wallet
4) สร้าง Event สองรายการให้เวลาชนกัน เพื่อลอง Conflict Detector
5) เปิด Smart Day Planner และทดลอง Apply
6) เพิ่มโรงแรม แล้วเปิด Hotel Hub
7) ต่อ Internet แล้วดู Fuji Visibility
8) ปิด Internet และดูว่า Snapshot Fuji ล่าสุดยังอ่านได้
9) Export Backup JSON แล้วตรวจว่าไฟล์ตั๋วยังอยู่
10) กดเตรียมใช้ออฟไลน์ใหม่หลังอัปเวอร์ชัน

By ichitan
