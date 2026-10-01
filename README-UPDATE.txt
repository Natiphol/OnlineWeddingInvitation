ICHI-JAPAN v1.0.9 — Mobile polish + itinerary upgrade
1 ตุลาคม 2026

ก่อนอัปเดต
1) เปิดเว็บเดิม > ทริปของฉัน > ส่งออกสำรอง JSON เก็บไว้ก่อน
2) อัปโหลดไฟล์ทั้ง 9 ไฟล์ด้านล่างทับไฟล์เดิมใน repository TravelJapan ระดับเดียวกับ index.html
3) Commit แล้วรอ GitHub Pages เผยแพร่
4) เปิดเว็บขณะออนไลน์ > ทริปของฉัน > ตรวจอัปเดต > ติดตั้งเวอร์ชันใหม่
5) ตรวจ footer ว่าเป็น v1.0.9 แล้วกด “เตรียมใช้ออฟไลน์” อีกครั้ง

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

สิ่งที่แก้ตามรอบนี้
1. Mobile header / ตำแหน่งที่วงแดง
- จัด ICHI, SOS และ Online ให้อยู่แนวเดียวกันและเล็กลงบนมือถือ
- แก้ bottom navigation เป็น 7 ช่องจริง ไม่ให้ขนาด/ตำแหน่งไหล
- เปลี่ยนปุ่ม “วันนี้” เป็น “แดชบอร์ด” และวางไว้ตรงกลาง (ช่องที่ 4 จาก 7)
- กล่อง JR · Kyoto · Disney · Fuji เดิมที่ยาวและดัน layout เปลี่ยนเป็น Quick Rail Guide แบบ compact

2. ภาพสถานที่ + ขยายภาพ
- การ์ด Discover รองรับภาพจริงของพื้นที่/สถานที่ และกด “ดูภาพใหญ่” ได้
- เพิ่มภาพตัวอย่างจาก Wikimedia Commons พร้อมลิงก์แหล่งภาพ
- ถ้าออฟไลน์หรือรูปโหลดไม่สำเร็จ จะกลับไปแสดงกราฟิกเดิมแทน
- ภาพภายนอกต้องใช้อินเทอร์เน็ต แต่ข้อมูลสถานที่ยังอ่านออฟไลน์ได้

3. Disney แยกชัดเจน
- เพิ่ม Destination chip “Disney Resort”
- Tokyo Disneyland
- Tokyo DisneySea
- DisneySea ใช้ภาพเฉพาะของตัวเอง ไม่ปนกับ Disneyland

4. เพิ่ม Fuji
- Lake Kawaguchiko
- Oishi Park
- Chureito Pagoda / Arakurayama Sengen Park
- Oshino Hakkai
- Mt. Fuji Panoramic Ropeway
- Fuji-Q Highland
- เพิ่ม Route Fuji Classic และ Fuji Family

5. เพิ่ม Osaka
- Dotonbori
- Shinsaibashi-suji
- Kuromon Ichiba Market
- Osaka Castle
- Umeda Sky Building
- Universal Studios Japan
- Shinsekai
- Tsutenkaku
- Namba Yasaka Shrine
- Sumiyoshi Taisha
- Abeno Harukas 300
- เพิ่ม Route Namba/Dotonbori, Osaka Classic และ Tennoji/Shinsekai

รวม Discover ตอนนี้ 60 แห่ง
- Tokyo 41
- Disney Resort 2
- Osaka 11
- Fuji 6

6. “จากจุดนี้ไปจุดถัดไป” ในแผนเที่ยว
- ทุกจุดในวันเดียวกันมีปุ่ม Google Maps ไปจุดถัดไป
- ใส่ origin + destination จากชื่อสถานที่ให้โดยอัตโนมัติ
- ค่าเริ่มต้น Google Maps เป็น Public Transit
- เพิ่ม “บันทึกวิธีเดินทาง” สำหรับเขียน JR / Metro / ทางออก / วิธีเดิน แล้วอ่านออฟไลน์ได้
- ถ้าสลับลำดับ ระบบล้างข้อความ leg เก่าที่อาจไม่ตรงกับจุดใหม่ ป้องกันอ่านผิด

7. สถานะการจอง + ตั๋ว
สถานะในแผน:
อยากไป → ใส่แผนแล้ว → ต้องจอง → จองแล้ว
- ตั้งเวลาเข้าชมตามตั๋วแยกจากเวลาในแผนได้
- แนบภาพหรือ PDF ตั๋ว/ใบจอง สูงสุด 8 MB ต่อไฟล์
- ไฟล์ถูกเก็บใน IndexedDB ของเครื่องเดียวกับเอกสารเดิม จึงเปิดจากเครื่องนี้ได้โดยไม่ต้องอัปโหลดขึ้น server
- ไฟล์ตั๋วจะรวมอยู่ใน Export backup เดิม

8. จัดลำดับบนมือถือโดยไม่ลาก
แต่ละรายการมี:
- ↑ เลื่อนขึ้น
- ↓ เลื่อนลง
- ย้ายวัน
- ไปแล้ว ✓ / ยังไม่ไป
- แก้ไข
ลำดับถูกบันทึกแยกจากเวลา จึงจัด itinerary แบบที่ต้องการได้แม้เวลาไม่เรียงกัน

ความเข้ากันได้
- ยังใช้ localStorage key tabi-v1 เดิม ไม่ล้างทริปเก่า
- event เก่าที่ไม่มี bookingStatus/order จะเปิดได้ตามเดิม และใช้ค่าเริ่มต้น “ใส่แผนแล้ว”
- Wishlist / Places เดิมยังอยู่
- Service Worker เปลี่ยน cache เป็น ichi-1.0.9 และ core files ใช้ ?v=109

หมายเหตุ
- Google Maps, ภาพ Wikimedia และเว็บไซต์ภายนอกต้องต่ออินเทอร์เน็ต
- ข้อความวิธีเดินทางที่ผู้ใช้บันทึกเอง, itinerary, สถานะการจอง และตั๋วที่แนบไว้ในเครื่อง ใช้งานออฟไลน์ได้
- เวลาเดินทาง/เวลาเที่ยวใน Discover เป็นค่าช่วยวางแผน ไม่ใช่ข้อมูลรถหรือ GPS สด
