ICHI-JAPAN v1.5.6 HOTFIX 1
===========================
วันที่: 1 ตุลาคม 2026

อาการ
- หลังอัป v1.5.6 หน้าเว็บเหลือเกือบว่าง เห็นเพียง footer “By ichitan / บันทึกในอุปกรณ์นี้”

สาเหตุจริง
- app.js ของ v1.5.6 ประกาศฟังก์ชัน routeEdit ซ้ำสองครั้งใน ES module
- เบราว์เซอร์จึงหยุด compile app.js ก่อน render UI
- ข้อมูลทริปใน localStorage/IndexedDB ไม่ได้หาย เป็นปัญหาที่ตัว JavaScript โหลดไม่ขึ้น

สิ่งที่แก้
1) เปลี่ยน Transportation editor ใหม่เป็น routeEdit156 แล้วค่อยแทน legacy editor หลังประกาศเสร็จ
2) เปลี่ยน asset query เป็น v=1561 เพื่อไม่ชนไฟล์เสียเดิม
3) เปลี่ยน Service Worker cache เป็น ichi-1.5.6-hotfix1
4) เพิ่ม recover.html สำหรับกรณี Service Worker v1.5.6 เก่ายังค้างและยังเสิร์ฟ index/app.js เสีย
5) Transportation 1.5.6 เดิมยังอยู่ครบ: Route Pack, station, line, transfer, platform, exit, duration, fare, offline note, Dashboard coverage และ Live Trip route card

วิธีอัปเดต
- อัปโหลดไฟล์ใน ZIP ทับไฟล์เดิมใน GitHub Pages
- เพิ่ม recover.html เข้า repository ด้วย

สำคัญ: ถ้าหลังอัปแล้วยังเห็นหน้าว่าง
เปิด:
  https://natiphol.github.io/TravelJapan/recover.html
เพียงครั้งเดียว
หน้า Recovery จะ unregister Service Worker และล้างเฉพาะ cache ที่ขึ้นต้นด้วย ichi- แล้วกลับเข้า ICHI-JAPAN ใหม่อัตโนมัติ

recover.html ไม่ลบ localStorage หรือ IndexedDB จึงไม่ตั้งใจลบทริป/บัญชี/เอกสารที่เก็บในเครื่อง
อย่างไรก็ตามควรมี Export Backup เป็นประจำตามเดิม

เวอร์ชันในแอปยังเป็น 1.5.6 เพราะนี่คือ hotfix ของ release เดิม ไม่ใช่ฟีเจอร์ release ใหม่
