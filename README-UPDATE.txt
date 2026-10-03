ICHI-JAPAN v1.5.7 · Build 1570
Ticket & Booking 2.0 + Immigration Coach
อัปเดต 2 ตุลาคม 2026

ฐานของรุ่นนี้
- พัฒนาต่อจาก v1.5.6 Build 1563 ที่ freeze แล้ว
- ไม่เปลี่ยน localStorage key: tabi-v1
- ข้อมูลทริปเดิม, Transportation, Booking status, Hotel, Money และไฟล์ใน IndexedDB ยังใช้ต่อได้
- ฟิลด์ใหม่เป็น optional เพื่อไม่บังคับข้อมูลเก่า

ของใหม่: IMMIGRATION COACH
- คลังฝึก 52 หัวข้อ แยก ตม. / ศุลกากร / ประโยคช่วยสื่อสาร
- Practice Mode 8 วินาที: ตม., ศุลกากร หรือสุ่มผสม
- English + คำอ่านไทย + ความหมาย/คำแนะนำ
- Quick Answer Card สร้างจากข้อมูลทริปจริง เช่น
  จุดประสงค์, จำนวนวัน, ที่พักคืนแรก, วันออกจากญี่ปุ่น, อาชีพ,
  ผู้ร่วมทริป, เที่ยวบินเข้า/กลับ
- Immigration Profile สำหรับกรอกข้อมูลที่ไม่ได้อยู่ในแผน เช่น
  อาชีพ, เที่ยวบิน, ประเทศที่จะกลับ/เดินทางต่อ, วิธีออกค่าใช้จ่าย,
  เงินสดโดยประมาณ, ผู้ติดต่อในญี่ปุ่น, Visit Japan Web
- แยกหลักฐานออกจากข้อมูลทั่วไป:
  ต้องติ๊กเองว่าเปิดใบจองโรงแรมได้ / เปิดตั๋วกลับได้ จึงจะสร้างคำตอบ
  “Here is my hotel reservation / return ticket” ให้อัตโนมัติ
- ถ้าข้อมูลไม่พอ ระบบขึ้น “ยังไม่ได้กรอก” ไม่เดาคำตอบแทน
- Customs จะไม่ตัดสินแทนว่าของใดต้องสำแดง ต้องตรวจของจริงและข้อมูลทางการ
- มี Arrival Flow แยก Immigration → Baggage Claim → Customs
- ถ้าทริปใช้ NRT จะมี note เรื่อง Joint Kiosk ตามข้อมูลทางการล่าสุด
- ข้อมูลคำตอบและ profile เก็บใน browser นี้ ไม่ส่งขึ้น server

ของใหม่: TICKET & BOOKING 2.0
- รายละเอียด Booking เพิ่ม:
  ประเภท, ผู้ให้บริการ/Platform, Booking No., จำนวนคน,
  ราคาเยน, การชำระ, เวลาเผื่อไปถึงก่อน, Cancellation deadline,
  Booking URL และหมายเหตุ
- Booking Hub แสดง Focus Day, ต้องจอง, จองแล้ว และ deadline ที่บันทึกไว้
- Ticket Wallet 2.0 แยกตั๋ววันใช้งาน/ตั๋วทั้งหมด และเตือนรายการจองแล้วแต่ยังไม่มีไฟล์
- คัดลอก Booking No. ได้ พร้อม fallback สำหรับ browser ที่ Clipboard API ไม่พร้อม
- Live Trip แสดง Booking สำคัญของ Next Stop
- arrival buffer ของ Booking ถูกนำไปช่วยคำนวณ “ควรออกเมื่อไร”
- Smart Action Queue เตือน Cancellation deadline ใกล้ถึง และเปิดรายการนั้นได้ตรงตัว

หลักความปลอดภัยของข้อมูล ตม.
- คำถามฝึกเป็นแบบจำลองเพื่อเตรียมตัว ไม่ใช่รายการคำถามตายตัวของเจ้าหน้าที่
- ให้ตอบตามจริงและให้ตรงกับพาสปอร์ต/ตั๋ว/ใบจอง/แผนเดินทาง
- ระบบไม่เดาสถานะวีซ่า, ประวัติ ตม., การทำงานในญี่ปุ่น,
  ของต้องสำแดง หรือข้อมูลส่วนตัวที่ยังไม่ได้กรอก
- Visit Japan Web และขั้นตอนสนามบินอาจเปลี่ยน ให้ดูเว็บไซต์ทางการก่อนเดินทาง

แหล่งข้อมูลทางการที่ใช้ตรวจทาน ณ 2 ต.ค. 2026
- Immigration Services Agency of Japan — Foreign national landing procedures
  https://www.moj.go.jp/isa/immigration/procedures/zyouriku_00001.html
- Visit Japan Web — Official guide
  https://services.digital.go.jp/visit-japan-web/guide/
- Visit Japan Web
  https://www.vjw.digital.go.jp/
- Japan Customs — Joint Kiosk
  https://www.customs.go.jp/kaigairyoko/pilot_kiosk.html
- Japan Customs — Electronic declaration / Visit Japan Web
  https://www.customs.go.jp/kaigairyoko/egate/egate_leaflet_e.pdf

วิธีอัปเดต GitHub Pages
1. แนะนำให้เปิดเว็บเดิม > ทริปของฉัน > ส่งออกสำรอง ก่อนอัปเดต
2. แตก ZIP แล้วอัปโหลดไฟล์เว็บ 11 ไฟล์ที่ root ของ repository TravelJapan
   ให้ index.html, app.js, sw.js ฯลฯ อยู่ระดับเดิม ห้ามสร้างโฟลเดอร์ v1.5.7 ซ้อน
3. Commit แล้วรอ GitHub Pages deploy
4. เปิดเว็บขณะออนไลน์ ปิดแท็บเก่าแล้วเปิดใหม่
5. ตรวจ footer ให้ขึ้น v1.5.7 · b1570
6. เข้า ทริปของฉัน > ตรวจอัปเดต และกดเตรียมใช้ออฟไลน์ใหม่
7. ทดลองเปิดโหมดเครื่องบิน แล้วเปิด Dashboard / Plan / Transportation /
   Immigration Coach เพื่อยืนยันว่า core data พร้อม

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
- recover.html
- README-UPDATE.txt

Regression checklist ที่ตรวจในชุด build นี้
- JavaScript syntax: app.js / travel-data.js / discover.js / places-data.js
- Build references: 1570 ตรงกันใน index/app/discover/service worker
- Immigration question keys: 52 หัวข้อ ไม่ซ้ำกัน
- ไม่มีการเปลี่ยน localStorage key
- Route/Transportation จาก 1.5.6 ยังคงโครงสร้างเดิม
- ค่า Booking ใหม่เป็น optional และ event เดิมยัง render ได้
- Hotel proof / return-ticket proof ต้องยืนยันเองก่อนสร้างประโยคแสดงหลักฐาน

หมายเหตุ
- Google Maps, Official Booking URL และเว็บไซต์ทางการต้องใช้อินเทอร์เน็ต
- ข้อมูล Immigration Coach และคำตอบจากทริปอ่านได้ออฟไลน์หลัง core app พร้อม
- Ticket/PDF/ภาพที่แนบเก็บในอุปกรณ์นี้ ควร Export Backup ก่อนเดินทาง
- แอปไม่ได้ยืนยันสถานะการจอง, ราคา, cancellation policy หรือผลการตรวจคนเข้าเมืองแบบสด
