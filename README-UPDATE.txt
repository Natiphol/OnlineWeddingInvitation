ICHI-JAPAN v1.5.8 · Build 1580 — Airport & Arrival Companion
3 October 2026

อัปเดตจาก v1.5.7 Build 1570 โดยไม่เปลี่ยน localStorage key (tabi-v1) และไม่รื้อ Transportation / Ticket / Booking / Immigration เดิม

สิ่งใหม่
- Airport & Arrival Companion ในหน้า เดินทาง > วันบิน
- Travel Day Timeline: ออกจากบ้าน → สนามบิน → Check-in → Gate → บิน → ตม. → รับกระเป๋า → ศุลกากร → Internet → เข้าเมือง → โรงแรม
- Pre-flight Checklist อ่านสถานะจริงจาก Trip / Immigration / Route / Offline
- Flight Card: Airline, Flight No., Booking No., Airport/Terminal, Date/Time, Seat, Baggage, Boarding Pass/PDF (แนบไฟล์ได้), Note
- Landing Pack: ที่พักคืนแรก, ตั๋วขากลับ, Visit Japan Web, First Route
- First Route Ready ใช้ Transportation A→B เดิม ไม่สร้างระบบ Route ซ้ำ
- Offline Arrival Pack เชื่อม Ticket Wallet / Immigration / Trip docs / Route Pack
- Dashboard แสดง Airport & Arrival card เมื่อเหลือไม่เกิน 14 วันก่อนทริป
- Smart Action Queue เตือน Arrival Pack และ First Route เมื่อใกล้วันเดินทาง
- Immigration Conversation Mode: ชุดพื้นฐาน / เอกสาร & Booking / ศุลกากรแบบถามต่อเนื่อง
- Conversation Mode ใช้ auto answer จากข้อมูลทริปจริง ถ้าข้อมูลขาดจะขึ้นว่ายังไม่มีคำตอบส่วนตัว ไม่แต่งข้อมูลให้เอง

ข้อจำกัดที่ตั้งใจไว้
- Flight Card เป็นข้อมูลที่ผู้ใช้บันทึก ไม่ใช่ Flight Status/Delay/Gate สด
- Google Maps และเว็บสายการบิน/สนามบินต้องใช้อินเทอร์เน็ต
- ขั้นตอนสนามบินอาจต่างตามสนามบิน/เที่ยวบิน ให้ทำตามป้ายและเจ้าหน้าที่จริง
- Immigration Coach เป็นเครื่องมือฝึกภาษา ไม่รับรองผลการเข้าเมือง
- Visit Japan Web และ Customs ต้องกรอก/ตอบตามข้อมูลจริง

แหล่งทางการอ้างอิง
- Visit Japan Web Guide: https://services.digital.go.jp/visit-japan-web/guide/
- Digital Agency: https://www.digital.go.jp/en/policies/visit_japan_web
- Narita International Arrival: https://www.narita-airport.jp/en/airportguide/inter-arr/

วิธีอัปเดต
1) Export Backup จากเวอร์ชันเดิมก่อน
2) แตก ZIP แล้วอัปโหลดไฟล์ทั้ง 11 ไฟล์ทับที่ root ของ GitHub Pages repository
3) รอ deploy แล้วเปิดเว็บออนไลน์ใหม่
4) ตรวจ footer ให้เป็น v1.5.8 · b1580
5) ไป ทริป > เตรียมใช้ออฟไลน์ ใหม่อีกครั้ง
6) ทดสอบ เดินทาง > วันบิน และ เดินทาง > เตรียม ตม.
