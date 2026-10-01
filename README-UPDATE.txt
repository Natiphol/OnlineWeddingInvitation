ICHI-JAPAN v1.5.5 — Data Quality
Released: 1 Oct 2026

ฐานเวอร์ชัน: v1.5.4 Smart Logic
รอบนี้เน้นคุณภาพข้อมูล Discover/ร้านอาหาร โดยไม่รื้อ Dashboard หรือ Smart Logic เดิม

สิ่งที่เปลี่ยน
1) Data Quality แสดงกับทั้ง “สถานที่” และ “ร้านอาหาร”
- ตรวจล่าสุด + ระดับแหล่งข้อมูล (Official / Tabelog / Google Maps / ข้อมูลพื้นฐาน)
- สถานะ Open / ต้องตรวจซ้ำ / Temporary closed / Permanent closed
- เวลาเปิด / วันหยุด / Last order หรือ Last entry
- Walk-in / ควรจอง / ต้องจอง / ปุ่มจองเมื่อมี URL
- ราคา JPY + THB โดยประมาณ และวันที่ตรวจราคาเมื่อมีข้อมูล
- ถ้าข้อมูลเกิน 21 วันจะเริ่มเตือน; เกิน 45 วันถือว่าเก่าและให้เช็กซ้ำ
- ถ้าฐานข้อมูลไม่มีข้อมูลที่ยืนยัน จะขึ้น “ยังไม่ยืนยัน” แทนการเดา

2) แหล่งข้อมูลในหน้ารายละเอียดแยกชัด
- Official
- Google Maps
- Tabelog (เมื่อมี exact URL ที่ตรวจไว้)
- แหล่งประกอบอื่น (เมื่อมีและไม่ซ้ำ)

3) Disney Resort รวมเข้า Tokyo
- Tokyo Disneyland และ Tokyo DisneySea อยู่ใน Tokyo > Tokyo Disney Resort / Maihama
- ร้านอาหาร Disney ใหม่ก็อยู่ใน Tokyo/Maihama เช่นกัน
- ไม่มีแท็บเมือง Disney แยกแล้ว

4) ตัดเมืองที่ยังไม่มีข้อมูลออกจากตัวเลือก
ตอนนี้แสดงเฉพาะ:
- Tokyo
- Osaka
- Fuji
Kyoto / Nara / Yokohama ถูกซ่อนจนกว่าจะมีชุดข้อมูลจริง

5) ร้านอาหารเพิ่มจาก 31 -> 45 ร้าน
- Tokyo 23 ร้าน
- Osaka 13 ร้าน
- Fuji/Kawaguchiko 9 ร้าน
เพิ่มแท็บย่อย “🥩 บุฟเฟ่ต์” รวม 8 ตัวเลือก
ตัวอย่างชุดใหม่: Disney buffet, Rokkasen, TsuruTonTan, Kura Sushi, Kushikatsu Daruma Dotonbori, LiLo Coffee Kissa, Table36, Folk Kitchen, CISCO Coffee, Choice Kitchen และ Fuji Lake Hotel buffet

6) สถานที่รวม 60 จุด / Route 13 ชุดยังอยู่ครบ
สถานที่สำคัญที่ตรวจ official เพิ่มในรอบนี้ เช่น Meiji Jingu, Shinjuku Gyoen, Tokyo Metropolitan Government Observatory, Senso-ji, Tokyo National Museum, Tokyo Solamachi, Sumida Aquarium, LaLaport Toyosu, DiverCity, Tokyo Character Street, GINZA SIX, Zojoji, Tsutenkaku, Sumiyoshi Taisha, Chureito Pagoda รวมถึงรายการหลักที่มีข้อมูล official อยู่แล้ว

7) Data Quality พบสถานะสำคัญที่ควรรู้
- Miraikan: official ระบุปิดปรับปรุงทั้งอาคาร 1 Oct 2026 – 22 Apr 2027 จึงถูกแสดงเป็น “ปิดชั่วคราว” ไม่ใช่เปิดตามเวลาปกติ

โครงสร้างข้อมูลหลังอัปเดต
- เมืองที่แสดง: 3
- สถานที่: 60
- ร้านอาหาร: 45
- Route: 13
- ร้านบุฟเฟ่ต์: 8
- สถานที่ที่มี official verification ในฐานข้อมูลรอบนี้: 28
- ร้านอาหารที่มี official verification: 42

ข้อควรเข้าใจ
- เวลาเปิด ราคา วันหยุด Last order และระบบจองเปลี่ยนได้โดยผู้ให้บริการ
- “ตรวจล่าสุด” หมายถึงวันที่ฐานข้อมูลชุดนี้ถูกตรวจ ไม่ใช่ระบบตรวจสดทุกวินาที
- Google Maps เป็นปุ่มเพื่อเปิดตำแหน่ง/ตรวจข้อมูลเพิ่ม ไม่ได้หมายความว่าค่าทุกช่องในฐานข้อมูลมาจาก Google Maps
- บางสถานที่สาธารณะไม่มีเวลาเปิดแบบร้านค้า หากยังไม่มีแหล่งยืนยัน ระบบจะไม่สร้างเวลาเอง
- ค่า THB ใช้เรท JPY/THB ที่ตั้งอยู่ในทริป

อัปเดต GitHub Pages
1. สำรองทริปด้วย Export JSON ก่อน
2. อัปโหลดไฟล์เว็บใน ZIP ทับไฟล์เดิม
3. Commit / Push
4. เปิดเว็บออนไลน์ใหม่และ Refresh
5. เข้า ทริป > Offline & Backup > เตรียมใช้ออฟไลน์อีกครั้ง

ข้อมูลทริปเดิมยังใช้ localStorage key `tabi-v1` เหมือนเดิม
By ichitan
