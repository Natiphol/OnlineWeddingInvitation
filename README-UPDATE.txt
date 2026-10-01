ICHI-JAPAN v1.2.0 — Universal Photos + Restaurant Deep Guide + Safety Check
1 ตุลาคม 2026

ก่อนอัปเดต
1) เปิดเว็บเดิม > ทริปของฉัน > ส่งออกสำรอง JSON เก็บไว้ก่อน
2) อัปโหลดไฟล์ทั้ง 9 ไฟล์ด้านล่างทับไฟล์เดิมใน repository TravelJapan ระดับเดียวกับ index.html
3) Commit แล้วรอ GitHub Pages เผยแพร่
4) เปิดเว็บขณะออนไลน์ > ทริปของฉัน > ตรวจอัปเดต > ติดตั้งเวอร์ชันใหม่
5) ตรวจ footer ว่าเป็น v1.2.0 แล้วกด “เตรียมใช้ออฟไลน์” อีกครั้ง

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
1) แก้เรื่องรูป: ทุกการ์ดมีระบบหารูปเฉพาะจุด
============================================================
ปัญหาเดิม:
- หลายการ์ดในโซนเดียวกันเอาภาพเดียวกันมาใช้ เช่น Odaiba / Toyosu / Osaka
- ทำให้ดูเหมือนรูปผิดสถานที่และเว็บดูเป็นข้อมูลจำลอง

v1.2.0:
- การ์ดสถานที่ 60 แห่งทุกใบมีพื้นที่รูป
- ถ้ามีรูป exact ที่กำหนดไว้แล้ว ใช้รูปนั้นทันที
- รายการที่ยังไม่มีรูป fixed จะค้นภาพออนไลน์ตามชื่อสถานที่แบบเฉพาะเจาะจง
  1. Wikipedia PageImages
  2. Wikimedia Commons image search
- ไม่ใช้ “ภาพโซนเดียวกันซ้ำทุกการ์ด” เป็นค่าเริ่มต้นอีกแล้ว
- ถ้าหารูป exact ไม่เจอจริง ๆ จึงค่อยใช้ภาพประกอบย่าน/เมนู และในหน้าขยายจะมีคำเตือนชัดเจนว่าไม่ใช่ภาพ exact
- เก็บ URL รูปที่หาเจอไว้ใน Local Storage
- Service Worker เพิ่ม photo cache สำหรับ Wikipedia / Wikimedia เพื่อช่วยให้รูปที่เคยเปิดแล้วมีโอกาสเปิดได้ออฟไลน์
- ปุ่ม “ดูภาพใหญ่” ใช้ได้กับรูปที่โหลดสำเร็จ

หมายเหตุ:
- การหารูปครั้งแรกต้องมีอินเทอร์เน็ต
- Wikimedia/Wikipedia เป็นแหล่งรูปภายนอก อาจมีการเปลี่ยนไฟล์ได้ในอนาคต

============================================================
2) ร้านอาหารขยายเป็น 31 ร้าน: Tokyo / Osaka / Fuji
============================================================
Tokyo 16 ร้าน
- Ichiran Shibuya
- Ginza Kagari
- Uogashi Nihon-Ichi
- Asakusa Imahan
- Suzukien Asakusa
- Tsujihan Nihonbashi
- Fuunji Shinjuku
- Tonkatsu Maisen Aoyama
- Udon Shin
- Rokurinsha Tokyo Station
- KOFFEE MAMEYA -Kakeru-
- Blue Bottle Coffee Shibuya
- GLITCH COFFEE GINZA
- ONIBUS COFFEE Nakameguro
- Monja Tsukishima
- AFURI Harajuku

Osaka 9 ร้าน
- Ajinoya Honten
- Okonomiyaki Kiji Umeda
- Jiyuken Namba
- Rikuro Ojisan Namba
- Harukoma Sushi
- Kushikatsu Daruma Shinsekai
- Takoyaki Wanaka Namba
- LiLo Coffee Roasters
- Matsusakagyu Yakiniku M Houzenji Yokocho

Fuji / Kawaguchiko 6 ร้าน
- Houtou Fudou
- Fuji Tempura Idaten
- Lake Bake
- Sanrokuen
- Kosaku Kawaguchiko
- cafe troisième marché

============================================================
3) แยกแท็บร้านอาหารย่อย
============================================================
หน้า ร้านอาหาร มีแท็บ:
- ทั้งหมด
- 🔥 ร้านดัง
- 🏮 Local hidden gem
- ☕ คาเฟ่

คำว่า Local hidden gem ในเว็บเป็น “การคัดเชิง editorial” ของชุดข้อมูล
ไม่ใช่อันดับรางวัลหรือการรับรองอย่างเป็นทางการ

============================================================
4) รายละเอียดร้านอาหารแน่นขึ้น
============================================================
ในการ์ดและหน้ารายละเอียดร้านมี:
- ชื่อไทย / อังกฤษ
- ย่าน / สถานี
- งบคร่าว ๆ JPY + THB
- เมนูเด่น
- เวลาโดยประมาณ
- เวลาเปิด
- วันหยุด
- จองไหม
- วิธีจอง
- หมายเหตุคิว
- หมายเหตุการชำระเงิน (เมื่อมีข้อมูล)
- ข้อควรระวัง
- วันที่ตรวจข้อมูลล่าสุด
- สถานะ “ตรวจข้อมูลล่าสุดแล้ว” หรือ “ต้องเช็กก่อนออกเดินทาง”
- Google Maps
- เว็บไซต์ร้าน / official source
- ปุ่มจอง ถ้ามี booking URL
- แหล่งตรวจข้อมูล ถ้าแยกจาก official site

============================================================
5) ระบบ Safety / กันพาไปร้านปิด
============================================================
ร้านอาหารทุกแห่งมี checkedAt และ status
- สีเขียว = ตรวจเจอข้อมูลเปิด/ร้านยังมีข้อมูลปัจจุบัน
- สีส้ม = มีเหตุผลต้องเช็กซ้ำ เช่น เพิ่งปิดปรับปรุง

ระบบ Freshness:
- ข้อมูลใหม่: แสดงวันที่ตรวจล่าสุด
- เกิน 21 วัน: เตือนให้เช็กซ้ำใกล้วันไป
- เกิน 45 วัน: เตือนชัดว่าข้อมูลเก่า ควรเช็กใหม่

ตัวอย่างเคสจริงที่ใส่ไว้:
- Harukoma Sushi Osaka:
  แหล่งข้อมูลระบุปิดปรับปรุงถึง 30 ก.ย. 2026 และตั้งใจกลับมา 1 ต.ค. 2026
  จึงไม่ทำเป็น “เปิดแน่นอน” แต่ขึ้น ⚠️ ให้เช็ก Instagram/โทรก่อนออกเดินทาง
- Ajinoya:
  official ระบุเปิดตามปกติ และมี FastPass
  ร้านเตือนชัดว่าไม่รับ AutoReserve
- Rikuro Namba:
  official ระบุ Namba Main Store ไม่รับจอง
- Kosaku Kawaguchiko:
  official ระบุไม่รับ reservation ทุกประเภท ให้ walk-in ตามคิว
- Fuji Tempura Idaten:
  มี TableCheck และข้อมูลเวลาร้านจาก official
- KOFFEE MAMEYA -Kakeru-:
  มี booking policy และค่าปรับยกเลิกภายใน 24 ชั่วโมง

============================================================
6) ลิงก์ร้าน / จอง / Maps
============================================================
แต่ละร้านมีตามข้อมูลที่หาได้:
- 🗺 Google Maps
- 🌐 เว็บไซต์ร้าน
- 📅 ระบบจอง / TableCheck (เฉพาะร้านที่มี)
- 🔎 แหล่งตรวจข้อมูล (ถ้าต่างจากเว็บไซต์ร้าน)

ระบบจะไม่สร้างปุ่มจองปลอมให้ร้านที่ไม่รับจอง
ถ้าร้านเป็น walk-in จะบอกตรง ๆ

============================================================
7) ราคาและค่าเงิน
============================================================
- ราคาสถานที่เที่ยวและร้านอาหารแสดงเป็นค่าประมาณ
- แสดง JPY + THB
- ใช้ exchange rate ของทริปปัจจุบัน
- มี * กำกับว่าราคาเป็นค่าช่วยวางแผน ไม่ใช่ราคาการันตี

============================================================
แหล่งข้อมูลที่ใช้ตรวจรอบ 1 ต.ค. 2026 (ตัวอย่างหลัก)
============================================================
Tokyo:
- ICHIRAN official
- Asakusa Imahan official
- Tsujihan official
- Fuunji official
- Maisen official
- Udon Shin official
- Tokyo Ramen Street official
- KOFFEE MAMEYA / TableCheck
- Blue Bottle Coffee official
- GLITCH COFFEE official
- ONIBUS COFFEE official
- Tsukishima Monja Association
- AFURI official

Osaka:
- Ajinoya official
- Jiyuken official
- Rikuro official
- Kushikatsu Daruma official
- Wanaka official
- LiLo Coffee official
- Matsusakagyu Yakiniku M official
- Tabelog / current local listings สำหรับร้านที่ไม่มี official data ใช้ง่าย

Fuji:
- Kosaku official
- Fuji Tempura Idaten official / TableCheck
- Lake Bake official
- Sanrokuen official
- cafe troisième marché official
- Yamanashi official tourism

สำคัญ:
ข้อมูลร้านอาหารเปลี่ยนได้ แม้ตรวจวันนี้แล้ว
เว็บจึงออกแบบให้ผู้ใช้เห็น “วันที่ตรวจ” + “ลิงก์ต้นทาง” ก่อนตัดสินใจไปจริง
