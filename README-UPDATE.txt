ICHI-JAPAN v1.0.8 — Discover Japan / ที่ควรไป
ชุดอัปเดตเว็บไซต์เดิมบน GitHub Pages · 1 ตุลาคม 2026

วิธีอัปเดต (ไม่ต้องลงโปรแกรมเพิ่ม)
1. เปิดแอปเดิม > ทริปของฉัน > ส่งออกสำรอง เก็บ JSON ไว้ก่อน
2. แตก ZIP นี้ แล้วเปิด repository TravelJapan ใน GitHub
3. Add file > Upload files เลือกไฟล์เว็บทั้ง 9 ไฟล์ด้านล่างพร้อมกัน
   วางระดับเดียวกับ index.html เดิม ไม่สร้างโฟลเดอร์ v108 หรือโฟลเดอร์ซ้อน
4. Commit changes แล้วรอ GitHub Pages เผยแพร่
5. เปิดเว็บไซต์ขณะออนไลน์ ไปทริปของฉัน > ตรวจอัปเดต > ติดตั้งเวอร์ชันใหม่
   ถ้ายังเห็นรุ่นเก่า ให้ปิดทุกแท็บของเว็บและแอปที่ติดตั้ง แล้วเปิดใหม่ขณะออนไลน์
   ตรวจว่าเป็น v1.0.8 โดยไม่ล้างข้อมูลเว็บไซต์
6. กดเตรียมใช้ออฟไลน์ รอครบทุกหมวด แล้วทดลองปิดเน็ตและเปิดเว็บใหม่

ไฟล์ที่ต้องอัปโหลดทั้ง 9 ไฟล์:
index.html
app.js
style.css
travel-data.js
sw.js
version.json
discover.js       (ไฟล์ใหม่)
discover.css      (ไฟล์ใหม่)
places-data.js    (ไฟล์ใหม่)

เก็บ manifest.webmanifest, audio/, maps/, fonts/, รูป และไอคอนเดิมทั้งหมด
ไม่ต้องอัปโหลด ZIP ทั้งก้อนลง GitHub และไม่ต้องลบข้อมูลบัญชีหรือข้อมูลทริป
ชุดนี้ยังไม่ได้เผยแพร่ไป GitHub ให้โดยอัตโนมัติ

เพิ่มอะไรบ้าง
- เมนู “ที่ควรไป” แทรกหลัง “ตอนนี้” โดยคงเมนูเดิมทุกหน้าและลำดับเดิม
- 43 สถานที่ใน Tokyo และ Disney Resort จังหวัด Chiba แบ่งเป็น 11 โซน
- ตัวเลือก 6 เมือง โครงสร้างรองรับเพิ่มข้อมูลภายหลัง
  Osaka / Kyoto / Fuji / Nara / Yokohama ยังไม่มีชุดสถานที่ จึงแสดงข้อความรอข้อมูลอย่างชัดเจน
- ค้นชื่อไทย/อังกฤษ ย่าน หมวด และ keyword เช่น วิว ฟรี ช้อป
- เลือกหลายหมวดแบบ AND: แสดงสถานที่ที่ตรงทุกหมวด
- ตัวกรองสถานการณ์: ครั้งแรก อากาศดี ฝนตก กลางคืน งบน้อย ถ่ายรูป ช้อป กิน เวลาน้อย
- “ตัวกรองเพิ่มเติม” รวมโซนและหมวด เพื่อให้หน้ามือถือไม่แน่น
- การ์ดมีสถานี เวลาเที่ยว ค่าเข้า ช่วงเวลาแนะนำ และปุ่มแผนที่ / อยากไป / เพิ่มลงทริป
- รายละเอียดมีคำแนะนำ เว็บไซต์ทางการ และ “ไปต่อไหนดี?” พร้อมเวลาเดินประมาณการ
- Wishlist ใช้ Places เดิมของทริปนั้น บันทึกผ่าน Local Storage เดิม tabi-v1
  กดนำออก = เอาดาวออก ไม่ลบชื่อ/โน้ต/สถานะไปแล้วที่เคยบันทึก
  Wishlist แยกตามทริป และรวมอยู่ใน JSON สำรองเดิม
- เพิ่มสถานที่ลง events เดิมโดยเลือกวันที่ของทริป และใส่เวลาได้
  หากยังไม่ได้ตั้งค่าทริปจะแนะนำให้ตั้งค่าก่อน ไม่แอบเพิ่มวันที่ตัวอย่าง
- 8 Route เพิ่มทุกจุดพร้อมกันได้ ข้ามสถานที่ที่มีแล้วในวันเดียวกัน
  ใส่เวลาเริ่มเพื่อให้จัดเวลาคร่าว ๆ หรือเว้นว่างเพื่อจัดเอง
  ไม่ซื้อตั๋ว ไม่บันทึกรายจ่าย และไม่สร้างระบบ Itinerary ซ้ำ
- “ไม่รู้จะไปไหน” เลือกเมือง เวลา งบค่าเข้า และความสนใจหลายอย่าง
  ต้องตรงทั้งเวลา งบ และทุกความสนใจ จึงแสดงผล ไม่แอบผ่อนเงื่อนไข
- ปรับการ์ด ช่องว่าง หัวหน้า และปุ่มหลักตามธีม/ฟอนต์เดิม
  แก้แผนเที่ยวบนจอเล็กไม่ให้ข้อความยาวดันปุ่มแก้ไขจนกดไม่ได้
- อัปเดต PWA เป็น v1.0.8; Discover ทั้ง JS/CSS/data อยู่ใน core cache

เข้าใจข้อมูลก่อนใช้จริง
- เวลาเที่ยวและเวลาเดินระหว่างสถานที่เป็นประมาณการเพื่อจัดแผน ไม่ใช่ GPS สด
- “ตอนกลางคืน” และ “วันฝนตก” เป็นตัวเลือกของผู้ใช้ ไม่ตรวจเวลาเปิดหรืออากาศสด
- “ฟรี” หมายถึงไม่มีค่าเข้าพื้นที่หลัก ไม่รวมอาหาร รถ ช้อป และโซนเสียเงินเพิ่มเติม
- งบในตัวช่วยเป็นค่าเข้าผู้ใหญ่ต่อคน ไม่ใช่งบรวมทุกอย่าง
- ค่าเข้าที่แปรผันตามวันใช้ admissionJPY: null
  เมื่อเลือกงบจำกัด ระบบไม่นำสถานที่เหล่านี้มาอ้างว่าอยู่ในงบ
- ราคาและเวลาเปิดอาจเปลี่ยน ตรวจเว็บไซต์ทางการในรายละเอียดก่อนออกเดินทาง
- อ่าน ค้นหา Wishlist และเพิ่มแผนได้ออฟไลน์หลังเตรียมแอป
  Google Maps และเว็บไซต์ทางการเป็นลิงก์ภายนอก ต้องต่ออินเทอร์เน็ต
- ยังไม่มี GPS, สถานะเปิดสด, ระบบจอง หรือซิงก์หลายอุปกรณ์
- ชุดข้อมูลเป็นคำแนะนำกลาง ไม่ใช่แผนเดินทางที่ใส่ไว้ให้เจ้าของเว็บ

ผลทดสอบ
- Chromium: จอ 320 / 390 / 768 / 1440 px ไม่มีหน้า Discover ล้นแนวนอน
- ไม่มี page error หรือ console error ใน flow ที่ทดสอบ
- ค้นหาไทย/อังกฤษ ตัวกรอง AND และฝนตก, city ว่าง, Wishlist เปิดใหม่แล้วยังอยู่
- เพิ่มลงแผน, เพิ่ม Route, กันซ้ำ, ป้องกันเวลา Route ข้ามวัน, แก้ไขด้วยแบบฟอร์มเดิม
- ปุ่มรายละเอียดสถานที่ในแผนยังอยู่หลังแก้ไขรายการ
- หลายทริปแยก Wishlist, นำเข้าไฟล์เก่า, สำรองข้อมูลใหม่
- เมื่อ Local Storage เต็ม ไม่เปลี่ยนสถานะเป็นบันทึกสำเร็จ
- บัญชีเดิม: 4 คนหารเฉพาะ 3 คน, เศษสตางค์, THB/JPY, แก้ไข คืนเงิน ชำระหนี้ รายงาน
- หน้าเดิมและ SOS, Places เดิม, cache LIVE ผ่านการทดสอบ regression
- Service Worker จริง: ปิดเครือข่ายแล้วโหลดหน้าใหม่ ค้นหาและเพิ่มแผนได้
- อัปเกรด 1.0.7 -> 1.0.8 บน path ย่อยแบบ GitHub Pages: เก็บทริป/โน้ต/Wishlist เดิม
- เตรียม core 7/7, guide 8/8, maps 8/8, เสียงญี่ปุ่น 134/134, อังกฤษ 134/134
- ยังไม่ได้ทดสอบบน iPhone/Android เครื่องจริง และยังไม่ได้ตรวจรุ่นใหม่บนเว็บสาธารณะหลัง Deploy
  ควรตรวจอีกครั้งหลังผู้ดูแลอัปโหลดไฟล์ครบ

สำหรับเพิ่มข้อมูลภายหลัง
places-data.js เป็น ES module ไม่ใช้ framework/API key
- discoverCities: id/name/nameTH/emoji
- discoverAreas: key ของโซน -> name/nameTH/art
- discoverCategories: id/emoji/label
- discoverPlaces: id คงที่, city, area, name, nameTH, categories[], station,
  durationMinutes, duration, admissionJPY (0/ตัวเลข/null), budget, costNote,
  recommendedTime, indoor, description, tip, nearby[], mapQuery, keywords[],
  sourceURL, checkedAt, art
- nearby: {id ของสถานที่ที่มีจริง, mode, minutes, label}
- discoverRoutes: id, city, name, description, stops[] ตามลำดับ,
  durationMinutes (รวมเวลาเที่ยวและเดิน), travelMinutes, art
- art เป็นกราฟิก CSS น้ำหนักเบา ไม่ใช่ภาพถ่ายสถานที่จริง
- เพิ่มเมือง/สถานที่/Route โดยแก้ข้อมูล ไม่ต้องเขียน logic เฉพาะเมืองใน discover.js
- ไม่เปลี่ยน id เดิมที่อาจอยู่ใน Wishlist/แผนของผู้ใช้
- หากแก้ไฟล์ข้อมูลภายหลัง ให้เพิ่มเวอร์ชัน query imports, core cache, sw และ version.json ให้ตรงกัน

แหล่งข้อมูลประกอบ (แสดงลิงก์ในแต่ละสถานที่ด้วย)
GO TOKYO: https://www.gotokyo.org/en/
Shibuya: https://www.gotokyo.org/en/destinations/western-tokyo/shibuya/index.html
Harajuku: https://www.gotokyo.org/en/destinations/western-tokyo/harajuku/index.html
Shinjuku: https://www.gotokyo.org/en/destinations/western-tokyo/shinjuku/index.html
Asakusa: https://www.gotokyo.org/en/destinations/eastern-tokyo/asakusa/
Ueno: https://www.gotokyo.org/en/destinations/northern-tokyo/ueno/index.html
Skytree: https://www.gotokyo.org/en/destinations/eastern-tokyo/skytree-and-around/index.html
Odaiba: https://www.gotokyo.org/en/destinations/southern-tokyo/odaiba/index.html
Toyosu: https://www.gotokyo.org/en/destinations/eastern-tokyo/toyosu/index.html
Tokyo Station: https://www.gotokyo.org/en/destinations/central-tokyo/tokyo-station-and-marunouchi/index.html
Senso-ji: https://www.senso-ji.jp/english/
Shinjuku Gyoen: https://policies.env.go.jp/national-garden/shinjukugyoen/guide/information/
Disney Resort: https://www.tokyodisneyresort.jp/en/tdr/access/railway
teamLab Planets: https://www.teamlab.art/e/planets/

By ichitan
