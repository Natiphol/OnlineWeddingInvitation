// Discover Japan local catalog. No network requests or personal trip data.
// durationMinutes/nearby/routes are editorial estimates; admission excludes food, shopping and transport.
export const discoverCities = [
  {
    "id": "tokyo",
    "name": "Tokyo",
    "nameTH": "โตเกียว",
    "emoji": "🇯🇵"
  },
  {
    "id": "osaka",
    "name": "Osaka",
    "nameTH": "โอซาก้า",
    "emoji": "🇯🇵"
  },
  {
    "id": "kyoto",
    "name": "Kyoto",
    "nameTH": "เกียวโต",
    "emoji": "🇯🇵"
  },
  {
    "id": "fuji",
    "name": "Fuji",
    "nameTH": "ฟูจิ",
    "emoji": "🗻"
  },
  {
    "id": "nara",
    "name": "Nara",
    "nameTH": "นารา",
    "emoji": "🇯🇵"
  },
  {
    "id": "yokohama",
    "name": "Yokohama",
    "nameTH": "โยโกฮาม่า",
    "emoji": "🇯🇵"
  }
];
export const discoverCategories = [
  {
    "id": "first-trip",
    "emoji": "⭐",
    "label": "ครั้งแรกควรไป"
  },
  {
    "id": "photo",
    "emoji": "📸",
    "label": "ถ่ายรูป"
  },
  {
    "id": "shopping",
    "emoji": "🛍",
    "label": "ช้อปปิ้ง"
  },
  {
    "id": "food",
    "emoji": "🍜",
    "label": "ของกิน"
  },
  {
    "id": "culture",
    "emoji": "⛩",
    "label": "วัด / วัฒนธรรม"
  },
  {
    "id": "theme-park",
    "emoji": "🎢",
    "label": "Theme Park"
  },
  {
    "id": "night",
    "emoji": "🌙",
    "label": "เที่ยวกลางคืน"
  },
  {
    "id": "nature",
    "emoji": "🌳",
    "label": "ธรรมชาติ"
  },
  {
    "id": "budget",
    "emoji": "💸",
    "label": "ฟรี / ประหยัด"
  },
  {
    "id": "rain",
    "emoji": "🌧",
    "label": "วันฝนตก"
  },
  {
    "id": "family",
    "emoji": "👨‍👩‍👧‍👦",
    "label": "ครอบครัว"
  },
  {
    "id": "couple",
    "emoji": "❤️",
    "label": "คู่รัก"
  },
  {
    "id": "walk",
    "emoji": "🚶",
    "label": "เดินเล่น"
  }
];
export const discoverAreas = {
  "shibuya": {
    "name": "Shibuya / Harajuku",
    "nameTH": "ชิบูย่า ฮาราจูกุ",
    "art": "city"
  },
  "shinjuku": {
    "name": "Shinjuku",
    "nameTH": "ชินจูกุ",
    "art": "city"
  },
  "asakusa": {
    "name": "Asakusa",
    "nameTH": "อาซากุสะ",
    "art": "temple"
  },
  "ueno": {
    "name": "Ueno",
    "nameTH": "อุเอโนะ",
    "art": "park"
  },
  "skytree": {
    "name": "Tokyo Skytree",
    "nameTH": "สกายทรี",
    "art": "tower"
  },
  "odaiba": {
    "name": "Odaiba",
    "nameTH": "โอไดบะ",
    "art": "bay"
  },
  "toyosu": {
    "name": "Toyosu",
    "nameTH": "โทโยสุ",
    "art": "bay"
  },
  "central": {
    "name": "Tokyo Station / Ginza",
    "nameTH": "สถานีโตเกียว กินซ่า",
    "art": "city"
  },
  "akihabara": {
    "name": "Akihabara",
    "nameTH": "อากิฮาบาระ",
    "art": "city"
  },
  "maihama": {
    "name": "Maihama · Chiba",
    "nameTH": "ไมฮามะ ชิบะ",
    "art": "park"
  },
  "tower": {
    "name": "Tokyo Tower",
    "nameTH": "โตเกียวทาวเวอร์",
    "art": "tower"
  }
};
export const discoverPlaces = [
  {
    "id": "shibuya-crossing",
    "city": "tokyo",
    "area": "shibuya",
    "name": "Shibuya Crossing",
    "nameTH": "ห้าแยกชิบูย่า",
    "categories": [
      "first-trip",
      "photo",
      "night",
      "walk",
      "budget"
    ],
    "station": "Shibuya · JR / Tokyo Metro",
    "durationMinutes": 30,
    "duration": "30 นาที",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "เย็น–กลางคืน",
    "indoor": false,
    "description": "แวะสัมผัสจังหวะเมืองและถ่ายรูปแยกคนข้ามจากทางเท้า",
    "tip": "ไม่หยุดถ่ายรูปกลางทางข้าม รอสัญญาณไฟและหลบทางคนเดิน",
    "nearby": [
      {
        "id": "hachiko",
        "mode": "walk",
        "minutes": 5,
        "label": "เดินประมาณ 5 นาที"
      },
      {
        "id": "shibuya-sky",
        "mode": "walk",
        "minutes": 10,
        "label": "เดินประมาณ 10 นาที"
      },
      {
        "id": "center-gai",
        "mode": "walk",
        "minutes": 5,
        "label": "เดินประมาณ 5 นาที"
      }
    ],
    "mapQuery": "Shibuya Crossing Tokyo Japan",
    "keywords": [
      "ห้าแยกชิบูย่า",
      "ชิบูย่า ฮาราจูกุ",
      "วิว",
      "ที่ถ่ายรูป",
      "ฟรี"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/western-tokyo/shibuya/index.html",
    "checkedAt": "2026-09-30",
    "art": "city"
  },
  {
    "id": "hachiko",
    "city": "tokyo",
    "area": "shibuya",
    "name": "Hachiko Statue",
    "nameTH": "รูปปั้นฮาจิโกะ",
    "categories": [
      "first-trip",
      "photo",
      "walk",
      "budget"
    ],
    "station": "Shibuya · ฝั่ง Hachiko",
    "durationMinutes": 20,
    "duration": "20 นาที",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "เช้า หรือก่อนนัดพบ",
    "indoor": false,
    "description": "จุดนัดพบหน้าสถานี แวะถ่ายรูปก่อนเดินเล่นชิบูย่า",
    "tip": "ช่วงเย็นคนแน่น เผื่อคิวถ่ายรูปและอย่าขวางทางเดิน",
    "nearby": [
      {
        "id": "shibuya-crossing",
        "mode": "walk",
        "minutes": 5,
        "label": "เดินประมาณ 5 นาที"
      }
    ],
    "mapQuery": "Hachiko Statue Tokyo Japan",
    "keywords": [
      "รูปปั้นฮาจิโกะ",
      "ชิบูย่า ฮาราจูกุ",
      "วิว",
      "ที่ถ่ายรูป",
      "ฟรี"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/western-tokyo/shibuya/index.html",
    "checkedAt": "2026-09-30",
    "art": "city"
  },
  {
    "id": "shibuya-sky",
    "city": "tokyo",
    "area": "shibuya",
    "name": "Shibuya Sky",
    "nameTH": "ชิบูย่าสกาย",
    "categories": [
      "first-trip",
      "photo",
      "night",
      "couple"
    ],
    "station": "Shibuya · Shibuya Scramble Square",
    "durationMinutes": 120,
    "duration": "2 ชั่วโมง",
    "admissionJPY": null,
    "budget": "paid",
    "costNote": "มีค่าเข้า · ตรวจราคาตามวัน",
    "recommendedTime": "เย็น–กลางคืน",
    "indoor": false,
    "description": "ชมวิวโตเกียวจากมุมสูง เหมาะกับภาพเมืองและแสงยามเย็น",
    "tip": "จองรอบล่วงหน้า ดาดฟ้าอาจปิดเมื่ออากาศไม่เหมาะสม",
    "nearby": [
      {
        "id": "shibuya-crossing",
        "mode": "walk",
        "minutes": 10,
        "label": "เดินประมาณ 10 นาที"
      },
      {
        "id": "miyashita-park",
        "mode": "walk",
        "minutes": 15,
        "label": "เดินประมาณ 15 นาที"
      }
    ],
    "mapQuery": "Shibuya Sky Tokyo Japan",
    "keywords": [
      "ชิบูย่าสกาย",
      "ชิบูย่า ฮาราจูกุ",
      "วิว",
      "ที่ถ่ายรูป"
    ],
    "sourceURL": "https://www.shibuya-scramble-square.com/sky/",
    "checkedAt": "2026-09-30",
    "art": "city"
  },
  {
    "id": "center-gai",
    "city": "tokyo",
    "area": "shibuya",
    "name": "Shibuya Center-gai",
    "nameTH": "เซ็นเตอร์ไก",
    "categories": [
      "shopping",
      "food",
      "night",
      "walk",
      "budget"
    ],
    "station": "Shibuya · JR / Tokyo Metro",
    "durationMinutes": 60,
    "duration": "1 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "บ่าย–ค่ำ",
    "indoor": false,
    "description": "ซอยร้านค้าและร้านอาหารสำหรับเดินสำรวจกลางชิบูย่า",
    "tip": "ค่าอาหารและช้อปปิ้งแยกจากค่าเข้าพื้นที่",
    "nearby": [
      {
        "id": "shibuya-crossing",
        "mode": "walk",
        "minutes": 5,
        "label": "เดินประมาณ 5 นาที"
      },
      {
        "id": "miyashita-park",
        "mode": "walk",
        "minutes": 10,
        "label": "เดินประมาณ 10 นาที"
      }
    ],
    "mapQuery": "Shibuya Center-gai Tokyo Japan",
    "keywords": [
      "เซ็นเตอร์ไก",
      "ชิบูย่า ฮาราจูกุ",
      "ฟรี",
      "ช้อป",
      "ชอป"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/western-tokyo/shibuya/index.html",
    "checkedAt": "2026-09-30",
    "art": "city"
  },
  {
    "id": "miyashita-park",
    "city": "tokyo",
    "area": "shibuya",
    "name": "Miyashita Park",
    "nameTH": "มิยาชิตะพาร์ก",
    "categories": [
      "shopping",
      "photo",
      "food",
      "walk",
      "couple",
      "budget"
    ],
    "station": "Shibuya · JR / Tokyo Metro",
    "durationMinutes": 90,
    "duration": "1.5 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "บ่าย–เย็น",
    "indoor": false,
    "description": "รวมโซนร้านค้าและสวนบนอาคาร แวะพักระหว่างเดินเที่ยว",
    "tip": "มีทั้งในและนอกอาคาร สวนกับร้านค้าอาจเปิดคนละเวลา",
    "nearby": [
      {
        "id": "center-gai",
        "mode": "walk",
        "minutes": 10,
        "label": "เดินประมาณ 10 นาที"
      },
      {
        "id": "shibuya-sky",
        "mode": "walk",
        "minutes": 15,
        "label": "เดินประมาณ 15 นาที"
      },
      {
        "id": "takeshita-street",
        "mode": "walk",
        "minutes": 20,
        "label": "เดินประมาณ 20 นาที"
      }
    ],
    "mapQuery": "Miyashita Park Tokyo Japan",
    "keywords": [
      "มิยาชิตะพาร์ก",
      "ชิบูย่า ฮาราจูกุ",
      "วิว",
      "ที่ถ่ายรูป",
      "ฟรี",
      "ช้อป",
      "ชอป"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/western-tokyo/shibuya/index.html",
    "checkedAt": "2026-09-30",
    "art": "city"
  },
  {
    "id": "meiji-jingu",
    "city": "tokyo",
    "area": "shibuya",
    "name": "Meiji Jingu",
    "nameTH": "ศาลเจ้าเมจิ",
    "categories": [
      "first-trip",
      "culture",
      "nature",
      "walk",
      "budget"
    ],
    "station": "Harajuku / Meiji-jingumae",
    "durationMinutes": 90,
    "duration": "1.5 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "เช้า–บ่าย",
    "indoor": false,
    "description": "เดินผ่านแนวต้นไม้ไปสักการะศาลเจ้าเมจิ",
    "tip": "เคารพป้ายห้ามถ่ายภาพ พื้นที่สวนหรือพิพิธภัณฑ์บางส่วนมีค่าเข้าแยก",
    "nearby": [
      {
        "id": "takeshita-street",
        "mode": "walk",
        "minutes": 20,
        "label": "เดินประมาณ 20 นาที"
      },
      {
        "id": "yoyogi-park",
        "mode": "walk",
        "minutes": 20,
        "label": "เดินประมาณ 20 นาที"
      }
    ],
    "mapQuery": "Meiji Jingu Tokyo Japan",
    "keywords": [
      "ศาลเจ้าเมจิ",
      "ชิบูย่า ฮาราจูกุ",
      "ฟรี"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/western-tokyo/harajuku/index.html",
    "checkedAt": "2026-09-30",
    "art": "city"
  },
  {
    "id": "takeshita-street",
    "city": "tokyo",
    "area": "shibuya",
    "name": "Takeshita Street",
    "nameTH": "ถนนทาเคชิตะ",
    "categories": [
      "shopping",
      "food",
      "photo",
      "walk",
      "budget"
    ],
    "station": "Harajuku · JR Yamanote",
    "durationMinutes": 90,
    "duration": "1.5 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "สาย–บ่าย",
    "indoor": false,
    "description": "ถนนแฟชั่น ขนม และของจุกจิกในฮาราจูกุ",
    "tip": "วันหยุดคนหนาแน่น เลือกช่วงเช้าสายหากอยากเดินสบาย",
    "nearby": [
      {
        "id": "meiji-jingu",
        "mode": "walk",
        "minutes": 20,
        "label": "เดินประมาณ 20 นาที"
      },
      {
        "id": "omotesando",
        "mode": "walk",
        "minutes": 15,
        "label": "เดินประมาณ 15 นาที"
      },
      {
        "id": "miyashita-park",
        "mode": "walk",
        "minutes": 20,
        "label": "เดินประมาณ 20 นาที"
      }
    ],
    "mapQuery": "Takeshita Street Tokyo Japan",
    "keywords": [
      "ถนนทาเคชิตะ",
      "ชิบูย่า ฮาราจูกุ",
      "วิว",
      "ที่ถ่ายรูป",
      "ฟรี",
      "ช้อป",
      "ชอป"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/western-tokyo/harajuku/index.html",
    "checkedAt": "2026-09-30",
    "art": "city"
  },
  {
    "id": "omotesando",
    "city": "tokyo",
    "area": "shibuya",
    "name": "Omotesando",
    "nameTH": "โอโมเตะซันโด",
    "categories": [
      "shopping",
      "photo",
      "walk",
      "couple",
      "budget"
    ],
    "station": "Omote-sando / Meiji-jingumae",
    "durationMinutes": 90,
    "duration": "1.5 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "สาย–เย็น",
    "indoor": false,
    "description": "เดินดูสถาปัตยกรรมและหน้าร้านตามถนนร่มไม้",
    "tip": "ร้านค้าเปิดต่างเวลากัน เตรียมงบคาเฟ่แยก",
    "nearby": [
      {
        "id": "takeshita-street",
        "mode": "walk",
        "minutes": 15,
        "label": "เดินประมาณ 15 นาที"
      }
    ],
    "mapQuery": "Omotesando Tokyo Japan",
    "keywords": [
      "โอโมเตะซันโด",
      "ชิบูย่า ฮาราจูกุ",
      "วิว",
      "ที่ถ่ายรูป",
      "ฟรี",
      "ช้อป",
      "ชอป"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/western-tokyo/harajuku/index.html",
    "checkedAt": "2026-09-30",
    "art": "city"
  },
  {
    "id": "yoyogi-park",
    "city": "tokyo",
    "area": "shibuya",
    "name": "Yoyogi Park",
    "nameTH": "สวนโยโยงิ",
    "categories": [
      "nature",
      "walk",
      "photo",
      "family",
      "budget"
    ],
    "station": "Harajuku / Yoyogi-koen",
    "durationMinutes": 90,
    "duration": "1.5 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "เช้า–บ่าย",
    "indoor": false,
    "description": "พักจังหวะการเที่ยวด้วยการเดินเล่นในสวนกว้าง",
    "tip": "ทำตามกฎสวน เก็บขยะและหลีกเลี่ยงส่งเสียงรบกวน",
    "nearby": [
      {
        "id": "meiji-jingu",
        "mode": "walk",
        "minutes": 20,
        "label": "เดินประมาณ 20 นาที"
      }
    ],
    "mapQuery": "Yoyogi Park Tokyo Japan",
    "keywords": [
      "สวนโยโยงิ",
      "ชิบูย่า ฮาราจูกุ",
      "วิว",
      "ที่ถ่ายรูป",
      "ฟรี"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/western-tokyo/harajuku/index.html",
    "checkedAt": "2026-09-30",
    "art": "city"
  },
  {
    "id": "tokyo-metropolitan",
    "city": "tokyo",
    "area": "shinjuku",
    "name": "Tokyo Metropolitan Government Building",
    "nameTH": "จุดชมวิวศาลาว่าการโตเกียว",
    "categories": [
      "first-trip",
      "photo",
      "rain",
      "budget"
    ],
    "station": "Tochomae · Toei Oedo",
    "durationMinutes": 90,
    "duration": "1.5 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "กลางวัน หรือเย็นตามเวลาเปิด",
    "indoor": true,
    "description": "ทางเลือกชมวิวเมืองจากจุดชมวิวของศาลาว่าการ",
    "tip": "ตรวจวันเปิดและจุดชมวิวที่ให้บริการ เผื่อเวลาตรวจสัมภาระ",
    "nearby": [
      {
        "id": "omoide-yokocho",
        "mode": "walk",
        "minutes": 20,
        "label": "เดินประมาณ 20 นาที"
      }
    ],
    "mapQuery": "Tokyo Metropolitan Government Building Tokyo Japan",
    "keywords": [
      "จุดชมวิวศาลาว่าการโตเกียว",
      "ชินจูกุ",
      "วิว",
      "ที่ถ่ายรูป",
      "ฟรี"
    ],
    "sourceURL": "https://www.yokoso.metro.tokyo.lg.jp/en/tenbou/index.html",
    "checkedAt": "2026-09-30",
    "art": "city"
  },
  {
    "id": "shinjuku-gyoen",
    "city": "tokyo",
    "area": "shinjuku",
    "name": "Shinjuku Gyoen",
    "nameTH": "สวนชินจูกุเกียวเอ็น",
    "categories": [
      "nature",
      "photo",
      "walk",
      "couple",
      "family",
      "budget"
    ],
    "station": "Shinjuku-gyoemmae / Shinjuku-sanchome",
    "durationMinutes": 120,
    "duration": "2 ชั่วโมง",
    "admissionJPY": 500,
    "budget": "paid",
    "costNote": "ผู้ใหญ่ ¥500 · ตรวจราคาก่อนเดินทาง",
    "recommendedTime": "เช้า–บ่าย",
    "indoor": false,
    "description": "สวนสำหรับเดินพักและถ่ายรูปทิวทัศน์ตามฤดูกาล",
    "tip": "โดยทั่วไปปิดวันจันทร์และมีข้อยกเว้นตามฤดูกาล ตรวจวันเปิดก่อนเดินทาง",
    "nearby": [
      {
        "id": "golden-gai",
        "mode": "walk",
        "minutes": 25,
        "label": "เดินประมาณ 25 นาที"
      }
    ],
    "mapQuery": "Shinjuku Gyoen Tokyo Japan",
    "keywords": [
      "สวนชินจูกุเกียวเอ็น",
      "ชินจูกุ",
      "วิว",
      "ที่ถ่ายรูป"
    ],
    "sourceURL": "https://policies.env.go.jp/national-garden/shinjukugyoen/guide/information/",
    "checkedAt": "2026-09-30",
    "art": "city"
  },
  {
    "id": "kabukicho",
    "city": "tokyo",
    "area": "shinjuku",
    "name": "Kabukicho",
    "nameTH": "คาบูกิโจ",
    "categories": [
      "photo",
      "night",
      "walk",
      "budget"
    ],
    "station": "Seibu-Shinjuku / Shinjuku",
    "durationMinutes": 60,
    "duration": "1 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "หัวค่ำ",
    "indoor": false,
    "description": "เดินชมป้ายไฟในย่านบันเทิงฝั่งตะวันออกของชินจูกุ",
    "tip": "ไม่ตามคนชักชวนเข้าร้าน ถามราคาและค่าใช้จ่ายก่อนนั่ง",
    "nearby": [
      {
        "id": "omoide-yokocho",
        "mode": "walk",
        "minutes": 10,
        "label": "เดินประมาณ 10 นาที"
      },
      {
        "id": "godzilla-head",
        "mode": "walk",
        "minutes": 5,
        "label": "เดินประมาณ 5 นาที"
      }
    ],
    "mapQuery": "Kabukicho Tokyo Japan",
    "keywords": [
      "คาบูกิโจ",
      "ชินจูกุ",
      "วิว",
      "ที่ถ่ายรูป",
      "ฟรี"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/western-tokyo/shinjuku/index.html",
    "checkedAt": "2026-09-30",
    "art": "city"
  },
  {
    "id": "godzilla-head",
    "city": "tokyo",
    "area": "shinjuku",
    "name": "Godzilla Head",
    "nameTH": "หัวก็อดซิลล่า",
    "categories": [
      "photo",
      "night",
      "walk",
      "budget"
    ],
    "station": "Seibu-Shinjuku / Shinjuku",
    "durationMinutes": 20,
    "duration": "20 นาที",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "เย็น–หัวค่ำ",
    "indoor": false,
    "description": "มองหาหัวก็อดซิลล่าจากถนนในคาบูกิโจ",
    "tip": "รายการนี้หมายถึงชมจากถนน ไม่รวมการเข้าระเบียงของโรงแรม",
    "nearby": [
      {
        "id": "kabukicho",
        "mode": "walk",
        "minutes": 5,
        "label": "เดินประมาณ 5 นาที"
      },
      {
        "id": "golden-gai",
        "mode": "walk",
        "minutes": 10,
        "label": "เดินประมาณ 10 นาที"
      }
    ],
    "mapQuery": "Godzilla Head Tokyo Japan",
    "keywords": [
      "หัวก็อดซิลล่า",
      "ชินจูกุ",
      "วิว",
      "ที่ถ่ายรูป",
      "ฟรี"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/western-tokyo/shinjuku/index.html",
    "checkedAt": "2026-09-30",
    "art": "city"
  },
  {
    "id": "omoide-yokocho",
    "city": "tokyo",
    "area": "shinjuku",
    "name": "Omoide Yokocho",
    "nameTH": "โอโมอิเดะโยโกโจ",
    "categories": [
      "food",
      "night",
      "photo",
      "walk"
    ],
    "station": "Shinjuku · ฝั่งตะวันตก",
    "durationMinutes": 60,
    "duration": "1 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "เย็น–ค่ำ",
    "indoor": false,
    "description": "ตรอกเล็กที่มีร้านอาหารเรียงตัว เหมาะกับมื้อเย็น",
    "tip": "อาหารมีค่าใช้จ่าย ถามค่าโต๊ะก่อนสั่ง และขออนุญาตก่อนถ่ายในร้าน",
    "nearby": [
      {
        "id": "tokyo-metropolitan",
        "mode": "walk",
        "minutes": 20,
        "label": "เดินประมาณ 20 นาที"
      },
      {
        "id": "kabukicho",
        "mode": "walk",
        "minutes": 10,
        "label": "เดินประมาณ 10 นาที"
      }
    ],
    "mapQuery": "Omoide Yokocho Tokyo Japan",
    "keywords": [
      "โอโมอิเดะโยโกโจ",
      "ชินจูกุ",
      "วิว",
      "ที่ถ่ายรูป",
      "ฟรี"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/western-tokyo/shinjuku/index.html",
    "checkedAt": "2026-09-30",
    "art": "city"
  },
  {
    "id": "golden-gai",
    "city": "tokyo",
    "area": "shinjuku",
    "name": "Golden Gai",
    "nameTH": "โกลเด้นไก",
    "categories": [
      "night",
      "walk"
    ],
    "station": "Shinjuku-sanchome / Shinjuku",
    "durationMinutes": 60,
    "duration": "1 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "ค่ำ",
    "indoor": false,
    "description": "ย่านบาร์เล็ก ๆ สำหรับคนอยากสัมผัสบรรยากาศกลางคืน",
    "tip": "บาร์อาจมี cover charge และกฎถ่ายภาพ อายุไม่ถึง 20 ปีห้ามดื่มแอลกอฮอล์",
    "nearby": [
      {
        "id": "godzilla-head",
        "mode": "walk",
        "minutes": 10,
        "label": "เดินประมาณ 10 นาที"
      },
      {
        "id": "shinjuku-gyoen",
        "mode": "walk",
        "minutes": 25,
        "label": "เดินประมาณ 25 นาที"
      }
    ],
    "mapQuery": "Golden Gai Tokyo Japan",
    "keywords": [
      "โกลเด้นไก",
      "ชินจูกุ",
      "ฟรี"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/western-tokyo/shinjuku/index.html",
    "checkedAt": "2026-09-30",
    "art": "city"
  },
  {
    "id": "sensoji",
    "city": "tokyo",
    "area": "asakusa",
    "name": "Senso-ji",
    "nameTH": "วัดเซ็นโซจิ วัดอาซากุสะ",
    "categories": [
      "first-trip",
      "culture",
      "photo",
      "walk",
      "budget"
    ],
    "station": "Asakusa · Ginza / Asakusa Line",
    "durationMinutes": 60,
    "duration": "1 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "เช้า–บ่าย",
    "indoor": false,
    "description": "ไหว้พระและเดินชมบรรยากาศวัดเก่าแก่ของโตเกียว",
    "tip": "แยกเวลาลานวัดกับอาคารหลัก ทำตามป้ายและไม่ขวางผู้มาสักการะ",
    "nearby": [
      {
        "id": "nakamise",
        "mode": "walk",
        "minutes": 5,
        "label": "เดินประมาณ 5 นาที"
      },
      {
        "id": "sumida-park",
        "mode": "walk",
        "minutes": 15,
        "label": "เดินประมาณ 15 นาที"
      }
    ],
    "mapQuery": "Senso-ji Tokyo Japan",
    "keywords": [
      "วัดเซ็นโซจิ วัดอาซากุสะ",
      "อาซากุสะ",
      "วิว",
      "ที่ถ่ายรูป",
      "ฟรี"
    ],
    "sourceURL": "https://www.senso-ji.jp/english/",
    "checkedAt": "2026-09-30",
    "art": "temple"
  },
  {
    "id": "kaminarimon",
    "city": "tokyo",
    "area": "asakusa",
    "name": "Kaminarimon",
    "nameTH": "ประตูคามินาริมง โคมแดง",
    "categories": [
      "first-trip",
      "culture",
      "photo",
      "budget"
    ],
    "station": "Asakusa · Ginza / Asakusa Line",
    "durationMinutes": 20,
    "duration": "20 นาที",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "เช้า",
    "indoor": false,
    "description": "ประตูโคมแดงที่เป็นจุดเริ่มต้นเดินเที่ยวอาซากุสะ",
    "tip": "ถ่ายรูปจากด้านข้างเพื่อลดการกีดขวางทางเข้า",
    "nearby": [
      {
        "id": "nakamise",
        "mode": "walk",
        "minutes": 5,
        "label": "เดินประมาณ 5 นาที"
      },
      {
        "id": "sumida-park",
        "mode": "walk",
        "minutes": 10,
        "label": "เดินประมาณ 10 นาที"
      }
    ],
    "mapQuery": "Kaminarimon Tokyo Japan",
    "keywords": [
      "ประตูคามินาริมง โคมแดง",
      "อาซากุสะ",
      "วิว",
      "ที่ถ่ายรูป",
      "ฟรี"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/eastern-tokyo/asakusa/index.html",
    "checkedAt": "2026-09-30",
    "art": "temple"
  },
  {
    "id": "nakamise",
    "city": "tokyo",
    "area": "asakusa",
    "name": "Nakamise Shopping Street",
    "nameTH": "ถนนนากามิเสะ",
    "categories": [
      "shopping",
      "food",
      "culture",
      "walk",
      "budget"
    ],
    "station": "Asakusa · Ginza / Asakusa Line",
    "durationMinutes": 45,
    "duration": "45 นาที",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "สาย–บ่าย",
    "indoor": false,
    "description": "เลือกของฝากและขนมตามทางสู่วัดเซ็นโซจิ",
    "tip": "ร้านเปิดต่างเวลากัน รับประทานในจุดที่ร้านจัดไว้",
    "nearby": [
      {
        "id": "sensoji",
        "mode": "walk",
        "minutes": 5,
        "label": "เดินประมาณ 5 นาที"
      },
      {
        "id": "kaminarimon",
        "mode": "walk",
        "minutes": 5,
        "label": "เดินประมาณ 5 นาที"
      }
    ],
    "mapQuery": "Nakamise Shopping Street Tokyo Japan",
    "keywords": [
      "ถนนนากามิเสะ",
      "อาซากุสะ",
      "ฟรี",
      "ช้อป",
      "ชอป"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/eastern-tokyo/asakusa/index.html",
    "checkedAt": "2026-09-30",
    "art": "temple"
  },
  {
    "id": "sumida-park",
    "city": "tokyo",
    "area": "asakusa",
    "name": "Sumida Park",
    "nameTH": "สวนสุมิดะ",
    "categories": [
      "nature",
      "photo",
      "walk",
      "couple",
      "budget"
    ],
    "station": "Asakusa · ฝั่งแม่น้ำ Sumida",
    "durationMinutes": 60,
    "duration": "1 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "เช้า–เย็น",
    "indoor": false,
    "description": "เดินริมแม่น้ำและหามุมมองโตเกียวสกายทรีจากระยะไกล",
    "tip": "ลมริมแม่น้ำอาจแรง เตรียมเสื้อคลุมในฤดูหนาว",
    "nearby": [
      {
        "id": "sensoji",
        "mode": "walk",
        "minutes": 15,
        "label": "เดินประมาณ 15 นาที"
      },
      {
        "id": "kaminarimon",
        "mode": "walk",
        "minutes": 10,
        "label": "เดินประมาณ 10 นาที"
      },
      {
        "id": "tokyo-skytree",
        "mode": "walk",
        "minutes": 30,
        "label": "เดินประมาณ 30 นาที"
      }
    ],
    "mapQuery": "Sumida Park Tokyo Japan",
    "keywords": [
      "สวนสุมิดะ",
      "อาซากุสะ",
      "วิว",
      "ที่ถ่ายรูป",
      "ฟรี"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/eastern-tokyo/asakusa/index.html",
    "checkedAt": "2026-09-30",
    "art": "temple"
  },
  {
    "id": "ueno-park",
    "city": "tokyo",
    "area": "ueno",
    "name": "Ueno Park",
    "nameTH": "สวนอุเอโนะ",
    "categories": [
      "nature",
      "culture",
      "walk",
      "family",
      "budget"
    ],
    "station": "Ueno · JR / Tokyo Metro",
    "durationMinutes": 90,
    "duration": "1.5 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "เช้า–บ่าย",
    "indoor": false,
    "description": "เดินสวนและเลือกแวะพิพิธภัณฑ์ในละแวกเดียวกัน",
    "tip": "เดินพื้นที่สวนไม่เสียค่าเข้า สวนสัตว์และพิพิธภัณฑ์คิดแยก",
    "nearby": [
      {
        "id": "ameyoko",
        "mode": "walk",
        "minutes": 15,
        "label": "เดินประมาณ 15 นาที"
      },
      {
        "id": "tokyo-national-museum",
        "mode": "walk",
        "minutes": 15,
        "label": "เดินประมาณ 15 นาที"
      }
    ],
    "mapQuery": "Ueno Park Tokyo Japan",
    "keywords": [
      "สวนอุเอโนะ",
      "อุเอโนะ",
      "ฟรี"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/northern-tokyo/ueno/index.html",
    "checkedAt": "2026-09-30",
    "art": "park"
  },
  {
    "id": "ameyoko",
    "city": "tokyo",
    "area": "ueno",
    "name": "Ameyoko",
    "nameTH": "ตลาดอาเมโยโกะ",
    "categories": [
      "shopping",
      "food",
      "walk",
      "budget"
    ],
    "station": "Ueno / Okachimachi",
    "durationMinutes": 90,
    "duration": "1.5 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "สาย–เย็น",
    "indoor": false,
    "description": "ตลาดริมแนวรถไฟสำหรับของกินและของฝาก",
    "tip": "เทียบราคาและตรวจน้ำหนักกระเป๋าก่อนซื้อของจำนวนมาก",
    "nearby": [
      {
        "id": "ueno-park",
        "mode": "walk",
        "minutes": 15,
        "label": "เดินประมาณ 15 นาที"
      },
      {
        "id": "akihabara",
        "mode": "walk",
        "minutes": 25,
        "label": "เดินประมาณ 25 นาที"
      }
    ],
    "mapQuery": "Ameyoko Tokyo Japan",
    "keywords": [
      "ตลาดอาเมโยโกะ",
      "อุเอโนะ",
      "ฟรี",
      "ช้อป",
      "ชอป"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/northern-tokyo/ueno/index.html",
    "checkedAt": "2026-09-30",
    "art": "park"
  },
  {
    "id": "tokyo-national-museum",
    "city": "tokyo",
    "area": "ueno",
    "name": "Tokyo National Museum",
    "nameTH": "พิพิธภัณฑสถานแห่งชาติโตเกียว",
    "categories": [
      "culture",
      "rain",
      "family"
    ],
    "station": "Ueno · ฝั่งสวน",
    "durationMinutes": 180,
    "duration": "3 ชั่วโมง",
    "admissionJPY": null,
    "budget": "paid",
    "costNote": "มีค่าเข้า · ตรวจราคาตามวัน",
    "recommendedTime": "สาย–บ่าย",
    "indoor": true,
    "description": "ดูศิลปะและวัตถุทางวัฒนธรรมญี่ปุ่นในย่านอุเอโนะ",
    "tip": "นิทรรศการพิเศษอาจใช้ตั๋วแยก ตรวจวันหยุดและราคาปัจจุบัน",
    "nearby": [
      {
        "id": "ueno-park",
        "mode": "walk",
        "minutes": 15,
        "label": "เดินประมาณ 15 นาที"
      }
    ],
    "mapQuery": "Tokyo National Museum Tokyo Japan",
    "keywords": [
      "พิพิธภัณฑสถานแห่งชาติโตเกียว",
      "อุเอโนะ"
    ],
    "sourceURL": "https://www.tnm.jp/?lang=en",
    "checkedAt": "2026-09-30",
    "art": "park"
  },
  {
    "id": "tokyo-skytree",
    "city": "tokyo",
    "area": "skytree",
    "name": "Tokyo Skytree",
    "nameTH": "โตเกียวสกายทรี",
    "categories": [
      "first-trip",
      "photo",
      "night",
      "family",
      "couple"
    ],
    "station": "Oshiage / Tokyo Skytree",
    "durationMinutes": 120,
    "duration": "2 ชั่วโมง",
    "admissionJPY": null,
    "budget": "paid",
    "costNote": "มีค่าเข้า · ตรวจราคาตามวัน",
    "recommendedTime": "เย็น–กลางคืน",
    "indoor": true,
    "description": "จุดชมวิวสูงเหนือเมือง เชื่อมกับโซนช้อปปิ้งด้านล่าง",
    "tip": "ตรวจประเภทตั๋วและพยากรณ์อากาศก่อนจอง หมอกหรือฝนอาจบังวิว",
    "nearby": [
      {
        "id": "sumida-park",
        "mode": "walk",
        "minutes": 30,
        "label": "เดินประมาณ 30 นาที"
      },
      {
        "id": "tokyo-solamachi",
        "mode": "walk",
        "minutes": 10,
        "label": "เดินประมาณ 10 นาที"
      }
    ],
    "mapQuery": "Tokyo Skytree Tokyo Japan",
    "keywords": [
      "โตเกียวสกายทรี",
      "สกายทรี",
      "วิว",
      "ที่ถ่ายรูป"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/eastern-tokyo/skytree-and-around/index.html",
    "checkedAt": "2026-09-30",
    "art": "tower"
  },
  {
    "id": "tokyo-solamachi",
    "city": "tokyo",
    "area": "skytree",
    "name": "Tokyo Solamachi",
    "nameTH": "โตเกียวโซลามาจิ",
    "categories": [
      "shopping",
      "food",
      "rain",
      "family",
      "budget"
    ],
    "station": "Oshiage / Tokyo Skytree",
    "durationMinutes": 120,
    "duration": "2 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "สาย–เย็น",
    "indoor": true,
    "description": "ศูนย์การค้าใต้สกายทรี ใช้เป็นแผนหลบฝนและเลือกของฝาก",
    "tip": "ร้านค้าและร้านอาหารมีค่าใช้จ่ายตามจริง",
    "nearby": [
      {
        "id": "tokyo-skytree",
        "mode": "walk",
        "minutes": 10,
        "label": "เดินประมาณ 10 นาที"
      },
      {
        "id": "sumida-aquarium",
        "mode": "walk",
        "minutes": 10,
        "label": "เดินประมาณ 10 นาที"
      }
    ],
    "mapQuery": "Tokyo Solamachi Tokyo Japan",
    "keywords": [
      "โตเกียวโซลามาจิ",
      "สกายทรี",
      "ฟรี",
      "ช้อป",
      "ชอป"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/eastern-tokyo/skytree-and-around/index.html",
    "checkedAt": "2026-09-30",
    "art": "tower"
  },
  {
    "id": "sumida-aquarium",
    "city": "tokyo",
    "area": "skytree",
    "name": "Sumida Aquarium",
    "nameTH": "พิพิธภัณฑ์สัตว์น้ำสุมิดะ",
    "categories": [
      "rain",
      "family",
      "couple",
      "photo"
    ],
    "station": "Oshiage / Tokyo Skytree",
    "durationMinutes": 120,
    "duration": "2 ชั่วโมง",
    "admissionJPY": null,
    "budget": "paid",
    "costNote": "มีค่าเข้า · ตรวจราคาตามวัน",
    "recommendedTime": "กลางวัน",
    "indoor": true,
    "description": "แวะชมสัตว์น้ำในอาคารของ Tokyo Skytree Town",
    "tip": "ตรวจราคาตามวันและรอบเข้าชมก่อนซื้อ",
    "nearby": [
      {
        "id": "tokyo-solamachi",
        "mode": "walk",
        "minutes": 10,
        "label": "เดินประมาณ 10 นาที"
      }
    ],
    "mapQuery": "Sumida Aquarium Tokyo Japan",
    "keywords": [
      "พิพิธภัณฑ์สัตว์น้ำสุมิดะ",
      "สกายทรี",
      "วิว",
      "ที่ถ่ายรูป"
    ],
    "sourceURL": "https://www.sumida-aquarium.com/en/",
    "checkedAt": "2026-09-30",
    "art": "tower"
  },
  {
    "id": "teamlab-planets",
    "city": "tokyo",
    "area": "toyosu",
    "name": "teamLab Planets",
    "nameTH": "ทีมแล็บแพลเน็ตส์",
    "categories": [
      "photo",
      "rain",
      "couple",
      "family"
    ],
    "station": "Shin-toyosu · Yurikamome",
    "durationMinutes": 180,
    "duration": "3 ชั่วโมง",
    "admissionJPY": null,
    "budget": "paid",
    "costNote": "มีค่าเข้า · ตรวจราคาตามวัน",
    "recommendedTime": "ตามรอบที่จอง",
    "indoor": true,
    "description": "งานศิลปะที่เดินเข้าไปเป็นส่วนหนึ่งของแสงและพื้นที่",
    "tip": "บางพื้นที่มีน้ำและต้องถอดรองเท้า ตรวจข้อจำกัดการเข้าชมและจองล่วงหน้า",
    "nearby": [
      {
        "id": "toyosu-market",
        "mode": "walk",
        "minutes": 20,
        "label": "เดินประมาณ 20 นาที"
      },
      {
        "id": "lalaport-toyosu",
        "mode": "walk",
        "minutes": 20,
        "label": "เดินประมาณ 20 นาที"
      }
    ],
    "mapQuery": "teamLab Planets Tokyo Japan",
    "keywords": [
      "ทีมแล็บแพลเน็ตส์",
      "โทโยสุ",
      "วิว",
      "ที่ถ่ายรูป"
    ],
    "sourceURL": "https://www.teamlab.art/e/planets/",
    "checkedAt": "2026-09-30",
    "art": "bay"
  },
  {
    "id": "toyosu-market",
    "city": "tokyo",
    "area": "toyosu",
    "name": "Toyosu Market",
    "nameTH": "ตลาดปลาโทโยสุ",
    "categories": [
      "food",
      "culture",
      "rain"
    ],
    "station": "Shijo-mae · Yurikamome",
    "durationMinutes": 120,
    "duration": "2 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "เช้า",
    "indoor": true,
    "description": "เยี่ยมชมพื้นที่สำหรับผู้เข้าชมและหาอาหารเช้าใกล้ตลาด",
    "tip": "การประมูลบางส่วนต้องจอง ตรวจปฏิทินวันเปิด ค่าอาหารไม่รวม",
    "nearby": [
      {
        "id": "teamlab-planets",
        "mode": "walk",
        "minutes": 20,
        "label": "เดินประมาณ 20 นาที"
      }
    ],
    "mapQuery": "Toyosu Market Tokyo Japan",
    "keywords": [
      "ตลาดปลาโทโยสุ",
      "โทโยสุ",
      "ฟรี"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/eastern-tokyo/toyosu/index.html",
    "checkedAt": "2026-09-30",
    "art": "bay"
  },
  {
    "id": "lalaport-toyosu",
    "city": "tokyo",
    "area": "toyosu",
    "name": "LaLaport Toyosu",
    "nameTH": "ลาลาพอร์ตโทโยสุ",
    "categories": [
      "shopping",
      "food",
      "rain",
      "family",
      "budget"
    ],
    "station": "Toyosu · Yurakucho / Yurikamome",
    "durationMinutes": 120,
    "duration": "2 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "สาย–เย็น",
    "indoor": true,
    "description": "รวมร้านค้าและอาหาร เหมาะกับพักในอาคารเมื่อฝนตก",
    "tip": "ริมน้ำเป็นพื้นที่กลางแจ้ง แยกเวลาเดินเล่นตามสภาพอากาศ",
    "nearby": [
      {
        "id": "teamlab-planets",
        "mode": "walk",
        "minutes": 20,
        "label": "เดินประมาณ 20 นาที"
      }
    ],
    "mapQuery": "LaLaport Toyosu Tokyo Japan",
    "keywords": [
      "ลาลาพอร์ตโทโยสุ",
      "โทโยสุ",
      "ฟรี",
      "ช้อป",
      "ชอป"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/eastern-tokyo/toyosu/index.html",
    "checkedAt": "2026-09-30",
    "art": "bay"
  },
  {
    "id": "odaiba-seaside",
    "city": "tokyo",
    "area": "odaiba",
    "name": "Odaiba Seaside Park",
    "nameTH": "สวนริมทะเลโอไดบะ",
    "categories": [
      "nature",
      "photo",
      "night",
      "walk",
      "couple",
      "budget"
    ],
    "station": "Odaiba-kaihinkoen · Yurikamome",
    "durationMinutes": 60,
    "duration": "1 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "เย็น–หัวค่ำ",
    "indoor": false,
    "description": "เดินเล่นริมอ่าวพร้อมมุมมองสะพานเรนโบว์",
    "tip": "เช็กอากาศและลม ไม่ลงน้ำในเขตที่ห้ามว่ายน้ำ",
    "nearby": [
      {
        "id": "rainbow-view",
        "mode": "walk",
        "minutes": 10,
        "label": "เดินประมาณ 10 นาที"
      },
      {
        "id": "divercity",
        "mode": "walk",
        "minutes": 15,
        "label": "เดินประมาณ 15 นาที"
      }
    ],
    "mapQuery": "Odaiba Seaside Park Tokyo Japan",
    "keywords": [
      "สวนริมทะเลโอไดบะ",
      "โอไดบะ",
      "วิว",
      "ที่ถ่ายรูป",
      "ฟรี"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/southern-tokyo/odaiba/index.html",
    "checkedAt": "2026-09-30",
    "art": "bay"
  },
  {
    "id": "divercity",
    "city": "tokyo",
    "area": "odaiba",
    "name": "DiverCity Tokyo Plaza",
    "nameTH": "ไดเวอร์ซิตี้ กันดั้ม",
    "categories": [
      "shopping",
      "food",
      "rain",
      "family",
      "budget"
    ],
    "station": "Tokyo Teleport / Daiba",
    "durationMinutes": 120,
    "duration": "2 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "สาย–เย็น",
    "indoor": true,
    "description": "เดินช้อปและกินในอาคาร แล้วค่อยแวะจุดกันดั้มด้านนอก",
    "tip": "พื้นที่กันดั้มอยู่กลางแจ้ง กิจกรรมพิเศษอาจเปลี่ยนเวลา",
    "nearby": [
      {
        "id": "odaiba-seaside",
        "mode": "walk",
        "minutes": 15,
        "label": "เดินประมาณ 15 นาที"
      },
      {
        "id": "miraikan",
        "mode": "walk",
        "minutes": 20,
        "label": "เดินประมาณ 20 นาที"
      }
    ],
    "mapQuery": "DiverCity Tokyo Plaza Tokyo Japan",
    "keywords": [
      "ไดเวอร์ซิตี้ กันดั้ม",
      "โอไดบะ",
      "ฟรี",
      "ช้อป",
      "ชอป"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/southern-tokyo/odaiba/index.html",
    "checkedAt": "2026-09-30",
    "art": "bay"
  },
  {
    "id": "rainbow-view",
    "city": "tokyo",
    "area": "odaiba",
    "name": "Rainbow Bridge Viewpoint",
    "nameTH": "จุดชมสะพานเรนโบว์จากโอไดบะ",
    "categories": [
      "photo",
      "night",
      "couple",
      "walk",
      "budget"
    ],
    "station": "Odaiba-kaihinkoen · Yurikamome",
    "durationMinutes": 30,
    "duration": "30 นาที",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "เย็น–กลางคืน",
    "indoor": false,
    "description": "มุมชมสะพานจากริมฝั่งโอไดบะ เหมาะกับถ่ายภาพแสงเมือง",
    "tip": "เป็นจุดชมจากฝั่ง ไม่ใช่เส้นทางเดินข้ามสะพาน",
    "nearby": [
      {
        "id": "odaiba-seaside",
        "mode": "walk",
        "minutes": 10,
        "label": "เดินประมาณ 10 นาที"
      }
    ],
    "mapQuery": "Rainbow Bridge Viewpoint Tokyo Japan",
    "keywords": [
      "จุดชมสะพานเรนโบว์จากโอไดบะ",
      "โอไดบะ",
      "วิว",
      "ที่ถ่ายรูป",
      "ฟรี"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/southern-tokyo/odaiba/index.html",
    "checkedAt": "2026-09-30",
    "art": "bay"
  },
  {
    "id": "miraikan",
    "city": "tokyo",
    "area": "odaiba",
    "name": "Miraikan",
    "nameTH": "พิพิธภัณฑ์วิทยาศาสตร์มิไรคัง",
    "categories": [
      "rain",
      "family",
      "culture"
    ],
    "station": "Tokyo International Cruise Terminal · Yurikamome",
    "durationMinutes": 180,
    "duration": "3 ชั่วโมง",
    "admissionJPY": null,
    "budget": "paid",
    "costNote": "มีค่าเข้า · ตรวจราคาตามวัน",
    "recommendedTime": "สาย–บ่าย",
    "indoor": true,
    "description": "สำรวจวิทยาศาสตร์และเทคโนโลยีผ่านนิทรรศการ",
    "tip": "เผื่อเวลาให้นิทรรศการ และตรวจตั๋วส่วนพิเศษกับวันหยุด",
    "nearby": [
      {
        "id": "divercity",
        "mode": "walk",
        "minutes": 20,
        "label": "เดินประมาณ 20 นาที"
      }
    ],
    "mapQuery": "Miraikan Tokyo Japan",
    "keywords": [
      "พิพิธภัณฑ์วิทยาศาสตร์มิไรคัง",
      "โอไดบะ"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/southern-tokyo/odaiba/index.html",
    "checkedAt": "2026-09-30",
    "art": "bay"
  },
  {
    "id": "tokyo-station",
    "city": "tokyo",
    "area": "central",
    "name": "Tokyo Station Marunouchi",
    "nameTH": "สถานีโตเกียวฝั่งมารุโนะอุจิ",
    "categories": [
      "first-trip",
      "photo",
      "night",
      "walk",
      "budget"
    ],
    "station": "Tokyo · Marunouchi side",
    "durationMinutes": 45,
    "duration": "45 นาที",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "เย็น–หัวค่ำ",
    "indoor": false,
    "description": "ชมอาคารอิฐแดงของสถานีจากลานฝั่งมารุโนะอุจิ",
    "tip": "ลานอยู่นอกประตูกั้นตั๋ว ไม่ต้องซื้อตั๋วรถไฟเพื่อถ่ายด้านนอก",
    "nearby": [
      {
        "id": "marunouchi",
        "mode": "walk",
        "minutes": 10,
        "label": "เดินประมาณ 10 นาที"
      },
      {
        "id": "tokyo-character-street",
        "mode": "walk",
        "minutes": 15,
        "label": "เดินประมาณ 15 นาที"
      }
    ],
    "mapQuery": "Tokyo Station Marunouchi Tokyo Japan",
    "keywords": [
      "สถานีโตเกียวฝั่งมารุโนะอุจิ",
      "สถานีโตเกียว กินซ่า",
      "วิว",
      "ที่ถ่ายรูป",
      "ฟรี"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/central-tokyo/tokyo-station-and-marunouchi/index.html",
    "checkedAt": "2026-09-30",
    "art": "city"
  },
  {
    "id": "marunouchi",
    "city": "tokyo",
    "area": "central",
    "name": "Marunouchi Naka-dori",
    "nameTH": "มารุโนะอุจิ นากะโดริ",
    "categories": [
      "shopping",
      "photo",
      "walk",
      "couple",
      "budget"
    ],
    "station": "Tokyo / Nijubashimae",
    "durationMinutes": 90,
    "duration": "1.5 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "บ่าย–เย็น",
    "indoor": false,
    "description": "เดินชมถนน ร้านค้า และอาคารกลางย่านมารุโนะอุจิ",
    "tip": "ไฟประดับเป็นกิจกรรมตามฤดูกาล ไม่ได้มีทุกวัน",
    "nearby": [
      {
        "id": "tokyo-station",
        "mode": "walk",
        "minutes": 10,
        "label": "เดินประมาณ 10 นาที"
      },
      {
        "id": "imperial-palace",
        "mode": "walk",
        "minutes": 20,
        "label": "เดินประมาณ 20 นาที"
      },
      {
        "id": "ginza",
        "mode": "walk",
        "minutes": 20,
        "label": "เดินประมาณ 20 นาที"
      }
    ],
    "mapQuery": "Marunouchi Naka-dori Tokyo Japan",
    "keywords": [
      "มารุโนะอุจิ นากะโดริ",
      "สถานีโตเกียว กินซ่า",
      "วิว",
      "ที่ถ่ายรูป",
      "ฟรี",
      "ช้อป",
      "ชอป"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/central-tokyo/tokyo-station-and-marunouchi/index.html",
    "checkedAt": "2026-09-30",
    "art": "city"
  },
  {
    "id": "imperial-palace",
    "city": "tokyo",
    "area": "central",
    "name": "Imperial Palace Outer Gardens",
    "nameTH": "ลานด้านนอกพระราชวังอิมพีเรียล",
    "categories": [
      "culture",
      "photo",
      "nature",
      "walk",
      "budget"
    ],
    "station": "Nijubashimae / Tokyo",
    "durationMinutes": 90,
    "duration": "1.5 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "เช้า–บ่าย",
    "indoor": false,
    "description": "เดินชมลานและมุมถ่ายรูปด้านนอกพระราชวัง",
    "tip": "ไม่รวมเข้าภายในพระราชวัง พื้นที่อาจมีข้อจำกัดในวันพิธี",
    "nearby": [
      {
        "id": "marunouchi",
        "mode": "walk",
        "minutes": 20,
        "label": "เดินประมาณ 20 นาที"
      }
    ],
    "mapQuery": "Imperial Palace Outer Gardens Tokyo Japan",
    "keywords": [
      "ลานด้านนอกพระราชวังอิมพีเรียล",
      "สถานีโตเกียว กินซ่า",
      "วิว",
      "ที่ถ่ายรูป",
      "ฟรี"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/central-tokyo/tokyo-station-and-marunouchi/index.html",
    "checkedAt": "2026-09-30",
    "art": "city"
  },
  {
    "id": "ginza",
    "city": "tokyo",
    "area": "central",
    "name": "Ginza Chuo-dori",
    "nameTH": "กินซ่า จูโอโดริ",
    "categories": [
      "shopping",
      "photo",
      "food",
      "walk",
      "budget"
    ],
    "station": "Ginza · Tokyo Metro",
    "durationMinutes": 120,
    "duration": "2 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "บ่าย–เย็น",
    "indoor": false,
    "description": "เดินดูหน้าร้าน ห้าง และสถาปัตยกรรมย่านกินซ่า",
    "tip": "พื้นที่ถนนคนเดินมีเฉพาะช่วงที่จัด อย่าคาดว่าปิดถนนทุกวัน",
    "nearby": [
      {
        "id": "marunouchi",
        "mode": "walk",
        "minutes": 20,
        "label": "เดินประมาณ 20 นาที"
      },
      {
        "id": "ginza-six",
        "mode": "walk",
        "minutes": 10,
        "label": "เดินประมาณ 10 นาที"
      }
    ],
    "mapQuery": "Ginza Chuo-dori Tokyo Japan",
    "keywords": [
      "กินซ่า จูโอโดริ",
      "สถานีโตเกียว กินซ่า",
      "วิว",
      "ที่ถ่ายรูป",
      "ฟรี",
      "ช้อป",
      "ชอป"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/central-tokyo/ginza/index.html",
    "checkedAt": "2026-09-30",
    "art": "city"
  },
  {
    "id": "tokyo-character-street",
    "city": "tokyo",
    "area": "central",
    "name": "Tokyo Character Street",
    "nameTH": "โตเกียวคาแรกเตอร์สตรีท",
    "categories": [
      "shopping",
      "rain",
      "family",
      "budget"
    ],
    "station": "Tokyo · Yaesu underground",
    "durationMinutes": 90,
    "duration": "1.5 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "สาย–เย็น",
    "indoor": true,
    "description": "เลือกของคาแรกเตอร์ในโซนร้านค้าใต้สถานีโตเกียว",
    "tip": "มองหาฝั่ง Yaesu และป้าย First Avenue อยู่นอกเขตตั๋วรถไฟ",
    "nearby": [
      {
        "id": "tokyo-station",
        "mode": "walk",
        "minutes": 15,
        "label": "เดินประมาณ 15 นาที"
      }
    ],
    "mapQuery": "Tokyo Character Street Tokyo Japan",
    "keywords": [
      "โตเกียวคาแรกเตอร์สตรีท",
      "สถานีโตเกียว กินซ่า",
      "ฟรี",
      "ช้อป",
      "ชอป"
    ],
    "sourceURL": "https://www.tokyoeki-1bangai.co.jp/en/",
    "checkedAt": "2026-09-30",
    "art": "city"
  },
  {
    "id": "ginza-six",
    "city": "tokyo",
    "area": "central",
    "name": "GINZA SIX",
    "nameTH": "กินซ่าซิกซ์",
    "categories": [
      "shopping",
      "rain",
      "food",
      "budget"
    ],
    "station": "Ginza · Tokyo Metro",
    "durationMinutes": 90,
    "duration": "1.5 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "สาย–เย็น",
    "indoor": true,
    "description": "ศูนย์การค้าสำหรับเดินดูร้านและแวะพักในอาคาร",
    "tip": "สวนดาดฟ้าแยกจากส่วนในอาคาร ตรวจเวลาเปิดก่อนขึ้น",
    "nearby": [
      {
        "id": "ginza",
        "mode": "walk",
        "minutes": 10,
        "label": "เดินประมาณ 10 นาที"
      }
    ],
    "mapQuery": "GINZA SIX Tokyo Japan",
    "keywords": [
      "กินซ่าซิกซ์",
      "สถานีโตเกียว กินซ่า",
      "ฟรี",
      "ช้อป",
      "ชอป"
    ],
    "sourceURL": "https://ginza6.tokyo/",
    "checkedAt": "2026-09-30",
    "art": "city"
  },
  {
    "id": "akihabara",
    "city": "tokyo",
    "area": "akihabara",
    "name": "Akihabara Electric Town",
    "nameTH": "อากิฮาบาระ อิเล็กทริกทาวน์",
    "categories": [
      "first-trip",
      "shopping",
      "photo",
      "walk",
      "budget"
    ],
    "station": "Akihabara · Electric Town exit",
    "durationMinutes": 180,
    "duration": "3 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "สาย–เย็น",
    "indoor": false,
    "description": "สำรวจร้านอุปกรณ์ เกม และสินค้างานอดิเรกรอบสถานี",
    "tip": "ตรวจเงื่อนไขสินค้า มือสอง ภาษา และแรงดันไฟก่อนซื้อ",
    "nearby": [
      {
        "id": "ameyoko",
        "mode": "walk",
        "minutes": 25,
        "label": "เดินประมาณ 25 นาที"
      }
    ],
    "mapQuery": "Akihabara Electric Town Tokyo Japan",
    "keywords": [
      "อากิฮาบาระ อิเล็กทริกทาวน์",
      "อากิฮาบาระ",
      "วิว",
      "ที่ถ่ายรูป",
      "ฟรี",
      "ช้อป",
      "ชอป"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/central-tokyo/akihabara/index.html",
    "checkedAt": "2026-09-30",
    "art": "city"
  },
  {
    "id": "disneyland",
    "city": "tokyo",
    "area": "maihama",
    "name": "Tokyo Disneyland",
    "nameTH": "โตเกียวดิสนีย์แลนด์",
    "categories": [
      "first-trip",
      "theme-park",
      "family",
      "couple",
      "photo"
    ],
    "station": "Maihama · JR Keiyo / Musashino",
    "durationMinutes": 540,
    "duration": "9 ชั่วโมง",
    "admissionJPY": null,
    "budget": "paid",
    "costNote": "มีค่าเข้า · ตรวจราคาตามวัน",
    "recommendedTime": "เต็มวันตามเวลาเปิด",
    "indoor": false,
    "description": "สวนสนุกที่ควรแยกวันไว้โดยเฉพาะ อยู่จังหวัดชิบะ",
    "tip": "ซื้อตั๋วระบุวันล่วงหน้า ไม่รวมในเส้นทางเดินเที่ยวใจกลางโตเกียว",
    "nearby": [
      {
        "id": "disneysea",
        "mode": "train",
        "minutes": 30,
        "label": "Resort Line + เดิน ประมาณ 30 นาที · ต้องมีตั๋วสวนสนุกอีกแห่ง"
      }
    ],
    "mapQuery": "Tokyo Disneyland Japan",
    "keywords": [
      "โตเกียวดิสนีย์แลนด์",
      "ไมฮามะ ชิบะ",
      "วิว",
      "ที่ถ่ายรูป",
      "ดิสนีย์",
      "disneyland"
    ],
    "sourceURL": "https://www.tokyodisneyresort.jp/en/tdr/access/railway",
    "checkedAt": "2026-09-30",
    "art": "park"
  },
  {
    "id": "disneysea",
    "city": "tokyo",
    "area": "maihama",
    "name": "Tokyo DisneySea",
    "nameTH": "โตเกียวดิสนีย์ซี",
    "categories": [
      "theme-park",
      "family",
      "couple",
      "photo"
    ],
    "station": "Maihama → Disney Resort Line → Tokyo DisneySea",
    "durationMinutes": 540,
    "duration": "9 ชั่วโมง",
    "admissionJPY": null,
    "budget": "paid",
    "costNote": "มีค่าเข้า · ตรวจราคาตามวัน",
    "recommendedTime": "เต็มวันตามเวลาเปิด",
    "indoor": false,
    "description": "สวนสนุกธีมทะเลใน Tokyo Disney Resort จังหวัดชิบะ",
    "tip": "เผื่อเวลาจากสถานี Maihama และตรวจแอปทางการเรื่องคิวกับตั๋ว",
    "nearby": [
      {
        "id": "disneyland",
        "mode": "train",
        "minutes": 30,
        "label": "Resort Line + เดิน ประมาณ 30 นาที · ต้องมีตั๋วสวนสนุกอีกแห่ง"
      }
    ],
    "mapQuery": "Tokyo DisneySea Japan",
    "keywords": [
      "โตเกียวดิสนีย์ซี",
      "ไมฮามะ ชิบะ",
      "วิว",
      "ที่ถ่ายรูป"
    ],
    "sourceURL": "https://www.tokyodisneyresort.jp/en/tdr/access/railway",
    "checkedAt": "2026-09-30",
    "art": "park"
  },
  {
    "id": "tokyo-tower",
    "city": "tokyo",
    "area": "tower",
    "name": "Tokyo Tower",
    "nameTH": "โตเกียวทาวเวอร์",
    "categories": [
      "first-trip",
      "photo",
      "night",
      "couple"
    ],
    "station": "Akabanebashi / Onarimon",
    "durationMinutes": 120,
    "duration": "2 ชั่วโมง",
    "admissionJPY": null,
    "budget": "paid",
    "costNote": "มีค่าเข้า · ตรวจราคาตามวัน",
    "recommendedTime": "เย็น–กลางคืน",
    "indoor": true,
    "description": "ขึ้นชมวิวจากหอคอยสีแดงขาว หรือถ่ายรูปด้านนอก",
    "tip": "รายการค่าเข้าเป็นส่วนจุดชมวิว ถ้าถ่ายด้านนอกให้เลือกวัดโซโจจิแทน",
    "nearby": [
      {
        "id": "zojoji",
        "mode": "walk",
        "minutes": 15,
        "label": "เดินประมาณ 15 นาที"
      }
    ],
    "mapQuery": "Tokyo Tower Tokyo Japan",
    "keywords": [
      "โตเกียวทาวเวอร์",
      "โตเกียวทาวเวอร์",
      "วิว",
      "ที่ถ่ายรูป"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/southern-tokyo/tokyo-tower-and-around/index.html",
    "checkedAt": "2026-09-30",
    "art": "tower"
  },
  {
    "id": "zojoji",
    "city": "tokyo",
    "area": "tower",
    "name": "Zojoji Temple",
    "nameTH": "วัดโซโจจิ",
    "categories": [
      "culture",
      "photo",
      "walk",
      "budget"
    ],
    "station": "Onarimon / Shibakoen",
    "durationMinutes": 60,
    "duration": "1 ชั่วโมง",
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "เช้า–บ่าย",
    "indoor": false,
    "description": "เดินชมลานวัดโดยมีโตเกียวทาวเวอร์เป็นฉากหลัง",
    "tip": "พิพิธภัณฑ์และพื้นที่พิเศษอาจมีค่าเข้าเพิ่มเติม",
    "nearby": [
      {
        "id": "tokyo-tower",
        "mode": "walk",
        "minutes": 15,
        "label": "เดินประมาณ 15 นาที"
      }
    ],
    "mapQuery": "Zojoji Temple Tokyo Japan",
    "keywords": [
      "วัดโซโจจิ",
      "โตเกียวทาวเวอร์",
      "วิว",
      "ที่ถ่ายรูป",
      "ฟรี"
    ],
    "sourceURL": "https://www.gotokyo.org/en/destinations/southern-tokyo/tokyo-tower-and-around/index.html",
    "checkedAt": "2026-09-30",
    "art": "tower"
  }
];
export const discoverRoutes = [
  {
    "id": "asakusa-half",
    "city": "tokyo",
    "name": "Asakusa ครึ่งวัน",
    "description": "โคมแดง วัดเก่า และพักริมแม่น้ำ จบที่มุมมองสกายทรีจากสวน",
    "stops": [
      "kaminarimon",
      "nakamise",
      "sensoji",
      "sumida-park"
    ],
    "durationMinutes": 300,
    "travelMinutes": 35,
    "art": "temple"
  },
  {
    "id": "shibuya-short",
    "city": "tokyo",
    "name": "Shibuya เดินเล่น 2–3 ชั่วโมง",
    "description": "เก็บจุดนัดพบ ห้าแยก และแวะพักบนสวนกลางเมือง",
    "stops": [
      "hachiko",
      "shibuya-crossing",
      "miyashita-park"
    ],
    "durationMinutes": 180,
    "travelMinutes": 25,
    "art": "city"
  },
  {
    "id": "harajuku-day",
    "city": "tokyo",
    "name": "Shibuya + Harajuku 1 วัน",
    "description": "เริ่มจากศาลเจ้า เดินย่านแฟชั่น แล้วจบด้วยวิวจาก Shibuya Sky",
    "stops": [
      "meiji-jingu",
      "takeshita-street",
      "omotesando",
      "shibuya-crossing",
      "shibuya-sky"
    ],
    "durationMinutes": 600,
    "travelMinutes": 90,
    "art": "tower"
  },
  {
    "id": "ueno-half",
    "city": "tokyo",
    "name": "Ueno เดินสวนและตลาด",
    "description": "เดินช้า ๆ ในสวนก่อนเลือกของกินและของฝากที่ Ameyoko",
    "stops": [
      "ueno-park",
      "ameyoko"
    ],
    "durationMinutes": 240,
    "travelMinutes": 20,
    "art": "park"
  },
  {
    "id": "shinjuku-evening",
    "city": "tokyo",
    "name": "Shinjuku แสงไฟยามค่ำ",
    "description": "เดินตรอกอาหาร ต่อด้วยย่านป้ายไฟและมุมก็อดซิลล่า",
    "stops": [
      "omoide-yokocho",
      "kabukicho",
      "godzilla-head"
    ],
    "durationMinutes": 180,
    "travelMinutes": 20,
    "art": "city"
  },
  {
    "id": "odaiba-half",
    "city": "tokyo",
    "name": "Odaiba ลมทะเลและช้อปปิ้ง",
    "description": "พักริมอ่าว แวะ DiverCity แล้วเลือกมุมชมสะพานจากฝั่ง",
    "stops": [
      "odaiba-seaside",
      "divercity",
      "rainbow-view"
    ],
    "durationMinutes": 300,
    "travelMinutes": 40,
    "art": "bay"
  },
  {
    "id": "rain-solamachi",
    "city": "tokyo",
    "name": "หลบฝนที่ Skytree Town",
    "description": "เดินห้างและดูสัตว์น้ำในอาคารเดียวกัน ค่า Aquarium ต้องตรวจตามวัน",
    "stops": [
      "tokyo-solamachi",
      "sumida-aquarium"
    ],
    "durationMinutes": 300,
    "travelMinutes": 15,
    "art": "tower"
  },
  {
    "id": "marunouchi-half",
    "city": "tokyo",
    "name": "Tokyo Station ถึงลานพระราชวัง",
    "description": "อาคารอิฐแดง ถนนกลางเมือง และลานด้านนอกพระราชวัง",
    "stops": [
      "tokyo-station",
      "marunouchi",
      "imperial-palace"
    ],
    "durationMinutes": 300,
    "travelMinutes": 40,
    "art": "city"
  }
];
