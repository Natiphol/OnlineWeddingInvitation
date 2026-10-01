// Discover Japan local catalog. No network requests or personal trip data.
// durationMinutes/nearby/routes are editorial estimates; prices are approximate and must be rechecked.
export const discoverCities = [
  {
    "id": "tokyo",
    "name": "Tokyo",
    "nameTH": "โตเกียว",
    "emoji": "🇯🇵"
  },
  {
    "id": "disney",
    "name": "Disney Resort",
    "nameTH": "ดิสนีย์รีสอร์ต",
    "emoji": "🎠"
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
  },
  {
    "id": "ramen",
    "emoji": "🍜",
    "label": "ราเมง"
  },
  {
    "id": "sushi",
    "emoji": "🍣",
    "label": "ซูชิ"
  },
  {
    "id": "cafe",
    "emoji": "☕",
    "label": "คาเฟ่"
  },
  {
    "id": "dessert",
    "emoji": "🍰",
    "label": "ของหวาน"
  },
  {
    "id": "okonomiyaki",
    "emoji": "🥞",
    "label": "โอโคโนมิยากิ"
  },
  {
    "id": "local-specialty",
    "emoji": "🏮",
    "label": "ของขึ้นชื่อ"
  },
  {
    "id": "seafood",
    "emoji": "🦐",
    "label": "ซีฟู้ด"
  },
  {
    "id": "famous",
    "emoji": "🔥",
    "label": "ร้านดัง"
  },
  {
    "id": "local",
    "emoji": "🏮",
    "label": "Local hidden gem"
  }
];
export const discoverAreas = {
  "shibuya": {
    "name": "Shibuya / Harajuku",
    "nameTH": "ชิบูย่า ฮาราจูกุ",
    "art": "city",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/1%20shibuya%20crossing%202012.jpg?width=1200",
    "imageSource": "https://commons.wikimedia.org/wiki/File:1%20shibuya%20crossing%202012.jpg",
    "imageCredit": "Wikimedia Commons · chensiyuan"
  },
  "shinjuku": {
    "name": "Shinjuku",
    "nameTH": "ชินจูกุ",
    "art": "city",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Sunset%20in%20Shinjuku%202.jpg?width=1200",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Sunset%20in%20Shinjuku%202.jpg",
    "imageCredit": "Wikimedia Commons · Ville Miettinen"
  },
  "asakusa": {
    "name": "Asakusa",
    "nameTH": "อาซากุสะ",
    "art": "temple",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Asakusa%20Senso-ji%202021-12%20ac%20(2).jpg?width=1200",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Asakusa%20Senso-ji%202021-12%20ac%20(2).jpg",
    "imageCredit": "Wikimedia Commons"
  },
  "ueno": {
    "name": "Ueno",
    "nameTH": "อุเอโนะ",
    "art": "park",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Tree%20in%20front%20of%20Ueno%20Park%202.JPG?width=1200",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Tree%20in%20front%20of%20Ueno%20Park%202.JPG",
    "imageCredit": "Wikimedia Commons"
  },
  "skytree": {
    "name": "Tokyo Skytree",
    "nameTH": "สกายทรี",
    "art": "tower",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Tokyo%20Sky%20Tree%202012.JPG?width=1200",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Tokyo%20Sky%20Tree%202012.JPG",
    "imageCredit": "Wikimedia Commons"
  },
  "odaiba": {
    "name": "Odaiba",
    "nameTH": "โอไดบะ",
    "art": "bay",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Rainbow%20Bridge%20%40%20Odaiba%20(11641580103).jpg?width=1200",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Rainbow%20Bridge%20%40%20Odaiba%20(11641580103).jpg",
    "imageCredit": "Wikimedia Commons"
  },
  "toyosu": {
    "name": "Toyosu",
    "nameTH": "โทโยสุ",
    "art": "bay",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Rainbow%20Bridge%20%40%20Odaiba%20(11641580103).jpg?width=1200",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Rainbow%20Bridge%20%40%20Odaiba%20(11641580103).jpg",
    "imageCredit": "Wikimedia Commons"
  },
  "central": {
    "name": "Tokyo Station / Ginza",
    "nameTH": "สถานีโตเกียว กินซ่า",
    "art": "city",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Tokyo%20Station%20Marunouchi%20Building%20P5228787.jpg?width=1200",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Tokyo%20Station%20Marunouchi%20Building%20P5228787.jpg",
    "imageCredit": "Wikimedia Commons"
  },
  "akihabara": {
    "name": "Akihabara",
    "nameTH": "อากิฮาบาระ",
    "art": "city",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Akihabara%202006-02-23%20a.jpg?width=1200",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Akihabara%202006-02-23%20a.jpg",
    "imageCredit": "Wikimedia Commons"
  },
  "maihama": {
    "name": "Maihama · Chiba",
    "nameTH": "ไมฮามะ ชิบะ",
    "art": "park",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Cinderella%20Castle%202015.JPG?width=1200",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Cinderella%20Castle%202015.JPG",
    "imageCredit": "Wikimedia Commons · Matt Chang"
  },
  "tower": {
    "name": "Tokyo Tower",
    "nameTH": "โตเกียวทาวเวอร์",
    "art": "tower",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Tokyo%20Tower%20during%20daytime.jpg?width=1200",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Tokyo%20Tower%20during%20daytime.jpg",
    "imageCredit": "Wikimedia Commons"
  },
  "fuji-kawaguchiko": {
    "name": "Kawaguchiko",
    "nameTH": "ทะเลสาบคาวากุจิโกะ",
    "art": "park",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Mt.%20Fuji%20view%20from%20Lake%20Kawaguchi.jpg?width=1200",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Mt.%20Fuji%20view%20from%20Lake%20Kawaguchi.jpg",
    "imageCredit": "Wikimedia Commons · Volfgang"
  },
  "fuji-arakurayama": {
    "name": "Arakurayama / Fujiyoshida",
    "nameTH": "อาราคุระยามะ ฟูจิโยชิดะ",
    "art": "temple",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Chureito%20Pagoda%20and%20Mount%20Fuji.jpg?width=1200",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Chureito%20Pagoda%20and%20Mount%20Fuji.jpg",
    "imageCredit": "Wikimedia Commons · Manishprabhune"
  },
  "fuji-oshino": {
    "name": "Oshino",
    "nameTH": "โอชิโนะ",
    "art": "park",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Oshino-Hakkai-Nakaike.jpg?width=1200",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Oshino-Hakkai-Nakaike.jpg",
    "imageCredit": "Wikimedia Commons"
  },
  "fujiq": {
    "name": "Fuji-Q / Highland",
    "nameTH": "ฟูจิคิว ไฮแลนด์",
    "art": "city",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/FujiQ%20Highland%20MainGate.JPG?width=1200",
    "imageSource": "https://commons.wikimedia.org/wiki/File:FujiQ%20Highland%20MainGate.JPG",
    "imageCredit": "Wikimedia Commons"
  },
  "osaka-minami": {
    "name": "Namba / Dotonbori",
    "nameTH": "นัมบะ โดทงโบริ",
    "art": "city",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Dotonbori%2C%20Osaka%2C%20at%20night%2C%20November%202016.jpg?width=1200",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Dotonbori%2C%20Osaka%2C%20at%20night%2C%20November%202016.jpg",
    "imageCredit": "Wikimedia Commons"
  },
  "osaka-castle": {
    "name": "Osaka Castle",
    "nameTH": "ปราสาทโอซาก้า",
    "art": "temple",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Osaka%20jo%20Castle.jpg?width=1200",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Osaka%20jo%20Castle.jpg",
    "imageCredit": "Wikimedia Commons · Martinp1"
  },
  "osaka-umeda": {
    "name": "Umeda",
    "nameTH": "อุเมดะ",
    "art": "tower",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/2018%20Umeda%20Sky%20Building.jpg?width=1200",
    "imageSource": "https://commons.wikimedia.org/wiki/File:2018%20Umeda%20Sky%20Building.jpg",
    "imageCredit": "Wikimedia Commons"
  },
  "osaka-bay": {
    "name": "Osaka Bay / USJ",
    "nameTH": "อ่าวโอซาก้า ยูนิเวอร์แซล",
    "art": "bay",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/USJ%205years.JPG?width=1200",
    "imageSource": "https://commons.wikimedia.org/wiki/File:USJ%205years.JPG",
    "imageCredit": "Wikimedia Commons"
  },
  "osaka-tennoji": {
    "name": "Tennoji / Shinsekai",
    "nameTH": "เท็นโนจิ ชินเซไก",
    "art": "tower",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Dotonbori%2C%20Osaka%2C%20at%20night%2C%20November%202016.jpg?width=1200",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Dotonbori%2C%20Osaka%2C%20at%20night%2C%20November%202016.jpg",
    "imageCredit": "Wikimedia Commons"
  },
  "kiyosumi": {
    "name": "Kiyosumi Shirakawa",
    "nameTH": "คิโยสุมิ ชิราคาวะ",
    "art": "city"
  },
  "nakameguro": {
    "name": "Nakameguro",
    "nameTH": "นากาเมกุโระ",
    "art": "city"
  },
  "tsukishima": {
    "name": "Tsukishima",
    "nameTH": "สึกิชิมะ",
    "art": "bay"
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
    "art": "city",
    "photoQuery": "Shibuya Crossing Tokyo Japan Japan"
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
    "art": "city",
    "photoQuery": "Hachiko Statue Tokyo Japan Japan"
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
    "art": "city",
    "priceApproxMinJPY": 2200,
    "priceApproxMaxJPY": 2500,
    "photoQuery": "Shibuya Sky Tokyo Japan Japan"
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
    "art": "city",
    "photoQuery": "Shibuya Center-gai Tokyo Japan Japan"
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
    "art": "city",
    "photoQuery": "Miyashita Park Tokyo Japan Japan"
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
    "art": "city",
    "photoQuery": "Meiji Jingu Tokyo Japan Japan"
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
    "art": "city",
    "photoQuery": "Takeshita Street Tokyo Japan Japan"
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
    "art": "city",
    "photoQuery": "Omotesando Tokyo Japan Japan"
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
    "art": "city",
    "photoQuery": "Yoyogi Park Tokyo Japan Japan"
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
    "art": "city",
    "photoQuery": "Tokyo Metropolitan Government Building Tokyo Japan Japan"
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
    "art": "city",
    "photoQuery": "Shinjuku Gyoen Tokyo Japan Japan"
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
    "art": "city",
    "photoQuery": "Kabukicho Tokyo Japan Japan"
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
    "art": "city",
    "photoQuery": "Godzilla Head Tokyo Japan Japan"
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
    "art": "city",
    "photoQuery": "Omoide Yokocho Tokyo Japan Japan"
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
    "art": "city",
    "photoQuery": "Golden Gai Tokyo Japan Japan"
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
    "art": "temple",
    "photoQuery": "Senso-ji Tokyo Japan Japan"
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
    "art": "temple",
    "photoQuery": "Kaminarimon Tokyo Japan Japan"
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
    "art": "temple",
    "photoQuery": "Nakamise Shopping Street Tokyo Japan Japan"
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
    "art": "temple",
    "photoQuery": "Sumida Park Tokyo Japan Japan"
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
    "art": "park",
    "photoQuery": "Ueno Park Tokyo Japan Japan"
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
    "art": "park",
    "photoQuery": "Ameyoko Tokyo Japan Japan"
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
    "art": "park",
    "photoQuery": "Tokyo National Museum Tokyo Japan Japan"
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
    "art": "tower",
    "priceApproxMinJPY": 2100,
    "priceApproxMaxJPY": 3100,
    "photoQuery": "Tokyo Skytree Tokyo Japan Japan"
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
    "art": "tower",
    "photoQuery": "Tokyo Solamachi Tokyo Japan Japan"
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
    "art": "tower",
    "priceApproxMinJPY": 2300,
    "priceApproxMaxJPY": 2500,
    "photoQuery": "Sumida Aquarium Tokyo Japan Japan"
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
    "art": "bay",
    "priceApproxMinJPY": 3800,
    "priceApproxMaxJPY": 4200,
    "photoQuery": "teamLab Planets Tokyo Japan Japan"
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
    "art": "bay",
    "photoQuery": "Toyosu Market Tokyo Japan Japan"
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
    "art": "bay",
    "photoQuery": "LaLaport Toyosu Tokyo Japan Japan"
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
    "art": "bay",
    "photoQuery": "Odaiba Seaside Park Tokyo Japan Japan"
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
    "art": "bay",
    "photoQuery": "DiverCity Tokyo Plaza Tokyo Japan Japan"
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
    "art": "bay",
    "photoQuery": "Rainbow Bridge Viewpoint Tokyo Japan Japan"
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
    "art": "bay",
    "photoQuery": "Miraikan Tokyo Japan Japan"
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
    "art": "city",
    "photoQuery": "Tokyo Station Marunouchi Tokyo Japan Japan"
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
    "art": "city",
    "photoQuery": "Marunouchi Naka-dori Tokyo Japan Japan"
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
    "art": "city",
    "photoQuery": "Imperial Palace Outer Gardens Tokyo Japan Japan"
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
    "art": "city",
    "photoQuery": "Ginza Chuo-dori Tokyo Japan Japan"
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
    "art": "city",
    "photoQuery": "Tokyo Character Street Tokyo Japan Japan"
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
    "art": "city",
    "photoQuery": "GINZA SIX Tokyo Japan Japan"
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
    "art": "city",
    "photoQuery": "Akihabara Electric Town Tokyo Japan Japan"
  },
  {
    "id": "disneyland",
    "city": "disney",
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
    "art": "park",
    "photoQuery": "Tokyo Disneyland Japan Japan"
  },
  {
    "id": "disneysea",
    "city": "disney",
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
    "art": "park",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Tokyo%20DisneySea%20Mysterious%20Island%20View%20201306.jpg?width=1200",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Tokyo%20DisneySea%20Mysterious%20Island%20View%20201306.jpg",
    "imageCredit": "Wikimedia Commons · Wing1990hk",
    "photoQuery": "Tokyo DisneySea Japan Japan"
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
    "art": "tower",
    "photoQuery": "Tokyo Tower Tokyo Japan Japan"
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
    "art": "tower",
    "photoQuery": "Zojoji Temple Tokyo Japan Japan"
  },
  {
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "เช้า–บ่าย",
    "indoor": false,
    "nearby": [
      {
        "id": "oishi-park",
        "mode": "bus",
        "minutes": 25,
        "label": "รถบัส + เดินประมาณ 25 นาที"
      },
      {
        "id": "mt-fuji-ropeway",
        "mode": "walk",
        "minutes": 20,
        "label": "เดิน/รถบัสสั้น ๆ ประมาณ 20 นาที"
      }
    ],
    "keywords": [
      "คาวากุจิโกะ",
      "ทะเลสาบ",
      "ฟูจิ",
      "วิว",
      "ถ่ายรูป",
      "ฟรี"
    ],
    "checkedAt": "2026-10-01",
    "art": "park",
    "id": "lake-kawaguchiko",
    "city": "fuji",
    "area": "fuji-kawaguchiko",
    "name": "Lake Kawaguchiko",
    "nameTH": "ทะเลสาบคาวากุจิโกะ",
    "categories": [
      "first-trip",
      "photo",
      "nature",
      "couple",
      "walk",
      "budget"
    ],
    "station": "Kawaguchiko · Fujikyu Railway / local bus",
    "durationMinutes": 120,
    "duration": "2 ชั่วโมง",
    "description": "เดินเล่นริมทะเลสาบ ชมวิวฟูจิ และเลือกจุดถ่ายภาพตามสภาพอากาศ",
    "tip": "วิวฟูจิขึ้นกับเมฆและทัศนวิสัย เผื่อแผนสำรองในวันที่ฟ้าปิด",
    "mapQuery": "Lake Kawaguchiko Yamanashi Japan",
    "sourceURL": "https://www.japan.travel/en/spot/1308/",
    "photoQuery": "Lake Kawaguchiko Yamanashi Japan Japan"
  },
  {
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "เช้า–บ่าย",
    "indoor": false,
    "nearby": [
      {
        "id": "lake-kawaguchiko",
        "mode": "bus",
        "minutes": 25,
        "label": "รถบัส + เดินประมาณ 25 นาที"
      }
    ],
    "keywords": [
      "โออิชิพาร์ค",
      "ฟูจิ",
      "ดอกไม้",
      "วิว",
      "ฟรี"
    ],
    "checkedAt": "2026-10-01",
    "art": "park",
    "id": "oishi-park",
    "city": "fuji",
    "area": "fuji-kawaguchiko",
    "name": "Oishi Park",
    "nameTH": "สวนโออิชิ",
    "categories": [
      "photo",
      "nature",
      "couple",
      "walk",
      "budget"
    ],
    "station": "Oishi Park · local sightseeing bus",
    "durationMinutes": 75,
    "duration": "1–1.5 ชั่วโมง",
    "description": "สวนริมทะเลสาบฝั่งเหนือที่มองฟูจิข้ามน้ำ เหมาะกับเดินเล่นและถ่ายรูป",
    "tip": "ดอกไม้เปลี่ยนตามฤดู และวิวฟูจิอาจถูกเมฆบัง",
    "mapQuery": "Oishi Park Fujikawaguchiko Japan",
    "sourceURL": "https://www.japan.travel/en/spot/1329/",
    "photoQuery": "Oishi Park Fujikawaguchiko Japan Japan"
  },
  {
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "เช้า",
    "indoor": false,
    "nearby": [
      {
        "id": "lake-kawaguchiko",
        "mode": "train",
        "minutes": 35,
        "label": "รถไฟ + เดินประมาณ 35 นาที"
      }
    ],
    "keywords": [
      "ชูเรโตะ",
      "เจดีย์",
      "อาราคุระยามะ",
      "ฟูจิ",
      "วิว",
      "ฟรี"
    ],
    "checkedAt": "2026-10-01",
    "art": "park",
    "id": "chureito-pagoda",
    "city": "fuji",
    "area": "fuji-arakurayama",
    "name": "Chureito Pagoda · Arakurayama Sengen Park",
    "nameTH": "เจดีย์ชูเรโตะ · สวนอาราคุระยามะเซ็นเก็น",
    "categories": [
      "first-trip",
      "photo",
      "nature",
      "culture",
      "walk",
      "budget"
    ],
    "station": "Shimoyoshida · Fujikyu Railway",
    "durationMinutes": 150,
    "duration": "2–2.5 ชั่วโมง",
    "description": "จุดชมวิวเจดีย์ห้าชั้นกับภูเขาไฟฟูจิ ต้องเดินขึ้นบันไดและทางลาด",
    "tip": "มีการเดินขึ้นเนินค่อนข้างมาก เตรียมน้ำและรองเท้าที่เดินสบาย",
    "mapQuery": "Chureito Pagoda Arakurayama Sengen Park Japan",
    "sourceURL": "https://www.japan.travel/en/spot/1298/",
    "photoQuery": "Chureito Pagoda Arakurayama Sengen Park Japan Japan"
  },
  {
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "เช้า–บ่าย",
    "indoor": false,
    "nearby": [
      {
        "id": "fujiq-highland",
        "mode": "bus",
        "minutes": 30,
        "label": "รถบัสประมาณ 30 นาที"
      }
    ],
    "keywords": [
      "โอชิโนะฮักไก",
      "บ่อน้ำ",
      "ฟูจิ",
      "หมู่บ้าน",
      "ถ่ายรูป"
    ],
    "checkedAt": "2026-10-01",
    "art": "park",
    "id": "oshino-hakkai",
    "city": "fuji",
    "area": "fuji-oshino",
    "name": "Oshino Hakkai",
    "nameTH": "โอชิโนะฮักไก",
    "categories": [
      "first-trip",
      "photo",
      "nature",
      "culture",
      "family",
      "walk"
    ],
    "station": "Oshino Hakkai · local bus from Mt. Fuji / Kawaguchiko area",
    "durationMinutes": 120,
    "duration": "2 ชั่วโมง",
    "description": "หมู่บ่อน้ำใสและบ้านแบบญี่ปุ่นดั้งเดิม พร้อมฉากภูเขาไฟฟูจิในวันที่ฟ้าเปิด",
    "tip": "พื้นที่หลักเดินชมได้ แต่พิพิธภัณฑ์หรือพื้นที่เอกชนบางส่วนอาจมีค่าเข้า",
    "mapQuery": "Oshino Hakkai Yamanashi Japan",
    "sourceURL": "https://www.japan.travel/en/spot/1297/",
    "photoQuery": "Oshino Hakkai Yamanashi Japan Japan"
  },
  {
    "admissionJPY": null,
    "budget": "paid",
    "costNote": "มีค่าโดยสาร · ตรวจราคาตามวัน",
    "recommendedTime": "เช้า–บ่าย",
    "indoor": false,
    "nearby": [
      {
        "id": "lake-kawaguchiko",
        "mode": "walk",
        "minutes": 20,
        "label": "เดินประมาณ 20 นาที"
      }
    ],
    "keywords": [
      "กระเช้า",
      "ropeway",
      "ฟูจิ",
      "วิว"
    ],
    "checkedAt": "2026-10-01",
    "art": "park",
    "id": "mt-fuji-ropeway",
    "city": "fuji",
    "area": "fuji-kawaguchiko",
    "name": "Mt. Fuji Panoramic Ropeway",
    "nameTH": "กระเช้าชมวิวฟูจิพาโนรามิก",
    "categories": [
      "first-trip",
      "photo",
      "nature",
      "couple",
      "family"
    ],
    "station": "Kawaguchiko · walk / local bus",
    "durationMinutes": 90,
    "duration": "1–1.5 ชั่วโมง",
    "description": "ขึ้นกระเช้าจากริมคาวากุจิโกะไปจุดชมวิวเหนือทะเลสาบ",
    "tip": "อาจหยุดเดินรถจากลมหรือสภาพอากาศ ควรตรวจประกาศก่อนเดินทาง",
    "mapQuery": "Mt Fuji Panoramic Ropeway Japan",
    "sourceURL": "https://www.mtfujiropeway.jp/en/",
    "photoQuery": "Mt Fuji Panoramic Ropeway Japan Japan"
  },
  {
    "admissionJPY": null,
    "budget": "paid",
    "costNote": "ค่าเครื่องเล่น/พาสเปลี่ยนตามวัน · ตรวจก่อนจอง",
    "recommendedTime": "เต็มวัน",
    "indoor": false,
    "nearby": [
      {
        "id": "lake-kawaguchiko",
        "mode": "train",
        "minutes": 20,
        "label": "รถไฟ + เดินประมาณ 20 นาที"
      },
      {
        "id": "oshino-hakkai",
        "mode": "bus",
        "minutes": 30,
        "label": "รถบัสประมาณ 30 นาที"
      }
    ],
    "keywords": [
      "ฟูจิคิว",
      "สวนสนุก",
      "รถไฟเหาะ",
      "theme park"
    ],
    "checkedAt": "2026-10-01",
    "art": "park",
    "id": "fujiq-highland",
    "city": "fuji",
    "area": "fujiq",
    "name": "Fuji-Q Highland",
    "nameTH": "ฟูจิคิวไฮแลนด์",
    "categories": [
      "theme-park",
      "family",
      "couple",
      "photo"
    ],
    "station": "Fujikyu-Highland · Fujikyu Railway",
    "durationMinutes": 480,
    "duration": "6–8 ชั่วโมง",
    "description": "สวนสนุกใกล้ภูเขาไฟฟูจิ มีรถไฟเหาะและเครื่องเล่นหลายระดับ",
    "tip": "เครื่องเล่นยอดนิยมมีเงื่อนไขส่วนสูงและอาจปิดจากสภาพอากาศ",
    "mapQuery": "Fuji-Q Highland Japan",
    "sourceURL": "https://www.fujiq.jp/en/",
    "priceApproxMinJPY": 1800,
    "priceApproxMaxJPY": 6800,
    "photoQuery": "Fuji-Q Highland Japan Japan"
  },
  {
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "เย็น–กลางคืน",
    "indoor": false,
    "nearby": [
      {
        "id": "shinsaibashi",
        "mode": "walk",
        "minutes": 10,
        "label": "เดินประมาณ 10 นาที"
      },
      {
        "id": "kuromon-market",
        "mode": "walk",
        "minutes": 15,
        "label": "เดินประมาณ 15 นาที"
      }
    ],
    "keywords": [
      "โดทงโบริ",
      "กูลิโกะ",
      "นัมบะ",
      "ของกิน",
      "กลางคืน",
      "ฟรี"
    ],
    "checkedAt": "2026-10-01",
    "art": "park",
    "id": "dotonbori",
    "city": "osaka",
    "area": "osaka-minami",
    "name": "Dotonbori",
    "nameTH": "โดทงโบริ",
    "categories": [
      "first-trip",
      "photo",
      "food",
      "night",
      "shopping",
      "walk",
      "budget"
    ],
    "station": "Namba / Osaka-Namba / Nippombashi",
    "durationMinutes": 150,
    "duration": "2–3 ชั่วโมง",
    "description": "ย่านป้ายไฟริมคลอง จุดถ่ายรูปยอดนิยมและศูนย์รวมของกินโอซาก้า",
    "tip": "ช่วงค่ำคนหนาแน่นมาก ระวังของมีค่าและเผื่อเวลารอร้านดัง",
    "mapQuery": "Dotonbori Osaka Japan",
    "sourceURL": "https://osaka-info.jp/en/spot/dotonbori/",
    "photoQuery": "Dotonbori Osaka Japan Japan"
  },
  {
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "บ่าย–ค่ำ",
    "indoor": true,
    "nearby": [
      {
        "id": "dotonbori",
        "mode": "walk",
        "minutes": 10,
        "label": "เดินประมาณ 10 นาที"
      }
    ],
    "keywords": [
      "ชินไซบาชิ",
      "ช้อปปิ้ง",
      "นัมบะ",
      "ฝนตก",
      "ฟรี"
    ],
    "checkedAt": "2026-10-01",
    "art": "park",
    "id": "shinsaibashi",
    "city": "osaka",
    "area": "osaka-minami",
    "name": "Shinsaibashi-suji",
    "nameTH": "ชินไซบาชิซูจิ",
    "categories": [
      "shopping",
      "food",
      "walk",
      "budget",
      "rain"
    ],
    "station": "Shinsaibashi · Osaka Metro",
    "durationMinutes": 120,
    "duration": "2 ชั่วโมง",
    "description": "ถนนช้อปปิ้งมีหลังคายาวต่อเนื่อง เดินเชื่อมกับย่านนัมบะและโดทงโบริได้ง่าย",
    "tip": "ถ้าฝนตกยังเดินได้สะดวกหลายช่วง แต่ร้านแต่ละแห่งมีเวลาเปิดต่างกัน",
    "mapQuery": "Shinsaibashi-suji Osaka Japan",
    "sourceURL": "https://osaka-info.jp/en/spot/shinsaibashi/",
    "photoQuery": "Shinsaibashi-suji Osaka Japan Japan"
  },
  {
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "สาย–บ่าย",
    "indoor": true,
    "nearby": [
      {
        "id": "dotonbori",
        "mode": "walk",
        "minutes": 15,
        "label": "เดินประมาณ 15 นาที"
      }
    ],
    "keywords": [
      "คุโรมง",
      "ตลาด",
      "อาหาร",
      "ซีฟู้ด"
    ],
    "checkedAt": "2026-10-01",
    "art": "park",
    "id": "kuromon-market",
    "city": "osaka",
    "area": "osaka-minami",
    "name": "Kuromon Ichiba Market",
    "nameTH": "ตลาดคุโรมงอิจิบะ",
    "categories": [
      "food",
      "shopping",
      "walk",
      "rain"
    ],
    "station": "Nippombashi · Osaka Metro / Kintetsu",
    "durationMinutes": 90,
    "duration": "1–1.5 ชั่วโมง",
    "description": "ตลาดอาหารและวัตถุดิบ มีร้านซีฟู้ด ผลไม้ และของกินพร้อมทาน",
    "tip": "ราคาแตกต่างกันมาก ควรดูป้ายราคาก่อนสั่งและหลีกเลี่ยงยืนขวางทาง",
    "mapQuery": "Kuromon Ichiba Market Osaka Japan",
    "sourceURL": "https://kuromon.com/en/",
    "photoQuery": "Kuromon Ichiba Market Osaka Japan Japan"
  },
  {
    "admissionJPY": null,
    "budget": "paid",
    "costNote": "สวนรอบนอกฟรี · พิพิธภัณฑ์ในหอคอยมีค่าเข้า",
    "recommendedTime": "เช้า–บ่าย",
    "indoor": false,
    "nearby": [
      {
        "id": "umeda-sky",
        "mode": "train",
        "minutes": 35,
        "label": "รถไฟ + เดินประมาณ 35 นาที"
      }
    ],
    "keywords": [
      "ปราสาทโอซาก้า",
      "osaka castle",
      "ซากุระ",
      "ประวัติศาสตร์"
    ],
    "checkedAt": "2026-10-01",
    "art": "park",
    "id": "osaka-castle",
    "city": "osaka",
    "area": "osaka-castle",
    "name": "Osaka Castle",
    "nameTH": "ปราสาทโอซาก้า",
    "categories": [
      "first-trip",
      "photo",
      "culture",
      "family",
      "walk"
    ],
    "station": "Morinomiya / Osakajokoen / Tanimachi 4-chome",
    "durationMinutes": 180,
    "duration": "2–3 ชั่วโมง",
    "description": "แลนด์มาร์กประวัติศาสตร์ของโอซาก้า มีสวนขนาดใหญ่และพิพิธภัณฑ์ภายในหอคอย",
    "tip": "ระยะเดินในสวนค่อนข้างมาก เลือกสถานีเข้าให้ตรงด้านที่ต้องการ",
    "mapQuery": "Osaka Castle Japan",
    "sourceURL": "https://www.osakacastle.net/english/",
    "photoQuery": "Osaka Castle Japan Japan"
  },
  {
    "admissionJPY": null,
    "budget": "paid",
    "costNote": "จุดชมวิวมีค่าเข้า · ตรวจราคาตามวัน",
    "recommendedTime": "เย็น–กลางคืน",
    "indoor": true,
    "nearby": [
      {
        "id": "osaka-castle",
        "mode": "train",
        "minutes": 35,
        "label": "รถไฟ + เดินประมาณ 35 นาที"
      }
    ],
    "keywords": [
      "อุเมดะ",
      "จุดชมวิว",
      "กลางคืน",
      "ตึก"
    ],
    "checkedAt": "2026-10-01",
    "art": "park",
    "id": "umeda-sky",
    "city": "osaka",
    "area": "osaka-umeda",
    "name": "Umeda Sky Building",
    "nameTH": "อุเมดะสกายบิลดิ้ง",
    "categories": [
      "first-trip",
      "photo",
      "night",
      "couple"
    ],
    "station": "Osaka / Umeda",
    "durationMinutes": 120,
    "duration": "1.5–2 ชั่วโมง",
    "description": "อาคารคู่เชื่อมกันด้านบน มีจุดชมวิวเมืองจากโซน Floating Garden Observatory",
    "tip": "ช่วงพระอาทิตย์ตกคนเยอะ ควรเผื่อเวลาจาก Osaka Station",
    "mapQuery": "Umeda Sky Building Osaka Japan",
    "sourceURL": "https://www.skybldg.co.jp/en/",
    "photoQuery": "Umeda Sky Building Osaka Japan Japan"
  },
  {
    "admissionJPY": null,
    "budget": "paid",
    "costNote": "ตั๋วและ Express Pass เปลี่ยนตามวัน · ต้องตรวจวันเข้าชม",
    "recommendedTime": "เต็มวันตามเวลาเปิด",
    "indoor": false,
    "nearby": [
      {
        "id": "dotonbori",
        "mode": "train",
        "minutes": 40,
        "label": "รถไฟ + เดินประมาณ 40 นาที"
      }
    ],
    "keywords": [
      "USJ",
      "ยูนิเวอร์แซล",
      "สวนสนุก",
      "มาริโอ",
      "theme park"
    ],
    "checkedAt": "2026-10-01",
    "art": "park",
    "id": "usj",
    "city": "osaka",
    "area": "osaka-bay",
    "name": "Universal Studios Japan",
    "nameTH": "ยูนิเวอร์แซล สตูดิโอ เจแปน",
    "categories": [
      "first-trip",
      "theme-park",
      "family",
      "couple",
      "photo"
    ],
    "station": "Universal City · JR Yumesaki Line",
    "durationMinutes": 600,
    "duration": "เต็มวัน 8–10 ชั่วโมง",
    "description": "สวนสนุกใหญ่ของโอซาก้า รวมโซนภาพยนตร์และเครื่องเล่นยอดนิยมหลายธีม",
    "tip": "ตั๋วเข้าชมและสิทธิ์เข้าโซนยอดนิยมอาจมีเงื่อนไขตามวัน ตรวจแอปทางการก่อน",
    "mapQuery": "Universal Studios Japan Osaka",
    "sourceURL": "https://www.usj.co.jp/web/en/us",
    "photoQuery": "Universal Studios Japan Osaka Japan"
  },
  {
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "บ่าย–ค่ำ",
    "indoor": false,
    "nearby": [
      {
        "id": "tsutenkaku",
        "mode": "walk",
        "minutes": 5,
        "label": "เดินประมาณ 5 นาที"
      }
    ],
    "keywords": [
      "ชินเซไก",
      "คุชิคัตสึ",
      "เรโทร",
      "ฟรี"
    ],
    "checkedAt": "2026-10-01",
    "art": "park",
    "id": "shinsekai",
    "city": "osaka",
    "area": "osaka-tennoji",
    "name": "Shinsekai",
    "nameTH": "ชินเซไก",
    "categories": [
      "first-trip",
      "photo",
      "food",
      "night",
      "walk",
      "budget"
    ],
    "station": "Dobutsuen-mae / Ebisucho / Shin-Imamiya",
    "durationMinutes": 120,
    "duration": "2 ชั่วโมง",
    "description": "ย่านบรรยากาศเรโทรรอบหอคอย Tsutenkaku มีร้านคุชิคัตสึและป้ายไฟสีสันจัด",
    "tip": "แยกเวลาเดินย่านออกจากเวลาขึ้น Tsutenkaku เพราะจุดชมวิวมีค่าเข้าและคิว",
    "mapQuery": "Shinsekai Osaka Japan",
    "sourceURL": "https://osaka-info.jp/en/spot/shinsekai/",
    "photoQuery": "Shinsekai Osaka Japan Japan"
  },
  {
    "admissionJPY": null,
    "budget": "paid",
    "costNote": "จุดชมวิวมีค่าเข้า · ตรวจราคาตามวัน",
    "recommendedTime": "บ่าย–ค่ำ",
    "indoor": true,
    "nearby": [
      {
        "id": "shinsekai",
        "mode": "walk",
        "minutes": 5,
        "label": "เดินประมาณ 5 นาที"
      }
    ],
    "keywords": [
      "สึเทนคาคุ",
      "หอคอย",
      "ชินเซไก",
      "วิว"
    ],
    "checkedAt": "2026-10-01",
    "art": "park",
    "id": "tsutenkaku",
    "city": "osaka",
    "area": "osaka-tennoji",
    "name": "Tsutenkaku Tower",
    "nameTH": "หอคอยสึเทนคาคุ",
    "categories": [
      "photo",
      "night",
      "family"
    ],
    "station": "Ebisucho / Dobutsuen-mae",
    "durationMinutes": 90,
    "duration": "1–1.5 ชั่วโมง",
    "description": "หอคอยสัญลักษณ์ของย่านชินเซไก มองเห็นเมืองจากจุดชมวิว",
    "tip": "บางกิจกรรมมีค่าบริการแยกจากตั๋วจุดชมวิว",
    "mapQuery": "Tsutenkaku Osaka Japan",
    "sourceURL": "https://www.tsutenkaku.co.jp/",
    "photoQuery": "Tsutenkaku Osaka Japan Japan"
  },
  {
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "เช้า–บ่าย",
    "indoor": false,
    "nearby": [
      {
        "id": "dotonbori",
        "mode": "walk",
        "minutes": 20,
        "label": "เดินประมาณ 20 นาที"
      }
    ],
    "keywords": [
      "นัมบะยาซากะ",
      "ศาลเจ้า",
      "หัวสิงโต",
      "ฟรี"
    ],
    "checkedAt": "2026-10-01",
    "art": "park",
    "id": "namba-yasaka",
    "city": "osaka",
    "area": "osaka-minami",
    "name": "Namba Yasaka Shrine",
    "nameTH": "ศาลเจ้านัมบะยาซากะ",
    "categories": [
      "photo",
      "culture",
      "walk",
      "budget"
    ],
    "station": "Namba / Daikokucho",
    "durationMinutes": 45,
    "duration": "45 นาที",
    "description": "ศาลเจ้าที่โดดเด่นด้วยเวทีรูปหัวสิงโตขนาดใหญ่ อยู่ไม่ไกลจากนัมบะ",
    "tip": "เป็นสถานที่ประกอบศาสนกิจ ควรรักษาความสงบและหลีกเลี่ยงรบกวนผู้มาสักการะ",
    "mapQuery": "Namba Yasaka Shrine Osaka Japan",
    "sourceURL": "https://nambayasaka.jp/",
    "photoQuery": "Namba Yasaka Shrine Osaka Japan Japan"
  },
  {
    "admissionJPY": 0,
    "budget": "free",
    "costNote": "ไม่มีค่าเข้าพื้นที่หลัก",
    "recommendedTime": "เช้า–บ่าย",
    "indoor": false,
    "nearby": [],
    "keywords": [
      "สุมิโยชิ",
      "ศาลเจ้า",
      "สะพานแดง",
      "ฟรี"
    ],
    "checkedAt": "2026-10-01",
    "art": "park",
    "id": "sumiyoshi-taisha",
    "city": "osaka",
    "area": "osaka-tennoji",
    "name": "Sumiyoshi Taisha",
    "nameTH": "ศาลเจ้าสุมิโยชิไทฉะ",
    "categories": [
      "culture",
      "photo",
      "walk",
      "budget"
    ],
    "station": "Sumiyoshi Taisha · Nankai",
    "durationMinutes": 90,
    "duration": "1–1.5 ชั่วโมง",
    "description": "ศาลเจ้าชินโตสำคัญของโอซาก้า บรรยากาศสงบและมีสะพานโค้งเด่น",
    "tip": "ตรวจมารยาทศาลเจ้าก่อนเข้า และช่วงเทศกาลอาจมีคนหนาแน่น",
    "mapQuery": "Sumiyoshi Taisha Osaka Japan",
    "sourceURL": "https://www.sumiyoshitaisha.net/",
    "photoQuery": "Sumiyoshi Taisha Osaka Japan Japan"
  },
  {
    "admissionJPY": null,
    "budget": "paid",
    "costNote": "จุดชมวิวมีค่าเข้า · ตรวจราคาตามวัน",
    "recommendedTime": "เย็น–กลางคืน",
    "indoor": true,
    "nearby": [
      {
        "id": "shinsekai",
        "mode": "walk",
        "minutes": 20,
        "label": "เดิน/รถไฟสั้น ๆ ประมาณ 20 นาที"
      }
    ],
    "keywords": [
      "อาเบโนะฮารุกัส",
      "เท็นโนจิ",
      "จุดชมวิว",
      "ฝนตก"
    ],
    "checkedAt": "2026-10-01",
    "art": "park",
    "id": "abeno-harukas",
    "city": "osaka",
    "area": "osaka-tennoji",
    "name": "Abeno Harukas 300",
    "nameTH": "อาเบโนะฮารุกัส 300",
    "categories": [
      "photo",
      "night",
      "couple",
      "rain"
    ],
    "station": "Tennoji / Osaka-Abenobashi",
    "durationMinutes": 120,
    "duration": "1.5–2 ชั่วโมง",
    "description": "จุดชมวิวบนอาคารสูงติดสถานี Tennoji มองเมืองโอซาก้าได้รอบด้าน",
    "tip": "ถ้าต้องการชมพระอาทิตย์ตกควรเผื่อเวลาขึ้นอาคารและคิวลิฟต์",
    "mapQuery": "Abeno Harukas 300 Osaka Japan",
    "sourceURL": "https://www.abenoharukas-300.jp/en/",
    "photoQuery": "Abeno Harukas 300 Osaka Japan Japan"
  }
];
export const discoverFoods = [
  {
    "id": "tokyo-ichiran-shibuya",
    "city": "tokyo",
    "area": "shibuya",
    "name": "Ichiran Shibuya",
    "nameTH": "อิจิรัน ชิบูย่า",
    "categories": [
      "food",
      "ramen",
      "first-trip",
      "rain",
      "night"
    ],
    "station": "Shibuya · เดินประมาณ 5–8 นาที",
    "durationMinutes": 60,
    "duration": "45–60 นาที",
    "budgetJPYMin": 1200,
    "budgetJPYMax": 1800,
    "budgetNote": "ราเมง 1 ชาม + เพิ่มท็อปปิงเล็กน้อย",
    "recommendedTime": "มื้อดึกหรือหลังเดินเล่น",
    "indoor": true,
    "description": "ราเมงทงคตสึสไตล์ฮากาตะ ร้านดังที่หลายคนอยากลองสักครั้ง",
    "mustTry": "Natural Tonkotsu Ramen",
    "tip": "ช่วงเย็นอาจรอนาน ใช้ตู้สั่งและเลือกระดับความเข้มของซุปได้",
    "mapQuery": "Ichiran Shibuya Tokyo",
    "keywords": [
      "ราเมง",
      "ichiran",
      "ชิบูย่า",
      "ทงคตสึ"
    ],
    "sourceURL": "https://ichiran.com/shop/tokyo/shibuya/",
    "checkedAt": "2026-10-01",
    "art": "city",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "statusNote": "ข้อมูลเวลา/วันหยุดอาจเปลี่ยน แนะนำกดเว็บไซต์ร้านหรือ Google Maps ก่อนออกเดินทาง",
    "foodTab": "famous",
    "photoQuery": "ICHIRAN Shibuya ramen Tokyo",
    "hoursNote": "เปิดตามประกาศของสาขา Shibuya; เว็บไซต์ร้านแจ้งว่าเวลาอาจเปลี่ยนตามกำลังคน",
    "closedDaysNote": "ไม่มีวันหยุดประจำที่ระบุในหน้าสาขา",
    "reservationLabel": "Walk-in เป็นหลัก",
    "reservationNote": "บริการ Priority Seating ของ ICHIRAN มีเฉพาะบางสาขา; สาขา Shibuya ทั่วไปควรเผื่อคิว",
    "officialURL": "https://ichiran.com/shop/tokyo/shibuya/",
    "sourceName": "ICHIRAN official",
    "queueNote": "ช่วงค่ำและหลังเที่ยว Shibuya มีโอกาสรอคิว",
    "paymentNote": "ชำระตามระบบของสาขา; ตรวจหน้าร้านอีกครั้ง",
    "warningNote": "ชื่อสาขา Shibuya และ Shibuya Spain-zaka คนละสาขา อย่าจองผิด"
  },
  {
    "id": "tokyo-ginza-kagari",
    "city": "tokyo",
    "area": "central",
    "name": "Ginza Kagari",
    "nameTH": "กินซ่า คางาริ",
    "categories": [
      "food",
      "ramen",
      "couple",
      "rain"
    ],
    "station": "Ginza / Yurakucho",
    "durationMinutes": 60,
    "duration": "45–60 นาที",
    "budgetJPYMin": 1500,
    "budgetJPYMax": 2500,
    "budgetNote": "ขึ้นกับเมนูไก่ขาวและท็อปปิง",
    "recommendedTime": "กลางวัน–เย็น",
    "indoor": true,
    "description": "ราเมงซุปไก่ขาวเนียนละเอียด สายราเมงมักลิสต์ไว้",
    "mustTry": "Chicken Paitan Soba",
    "tip": "ร้านดัง แนะนำไปช่วงก่อนหรือหลังพีคไทม์",
    "mapQuery": "Ginza Kagari Tokyo",
    "keywords": [
      "กินซ่า",
      "ราเมง",
      "ไก่",
      "kagari"
    ],
    "sourceURL": "https://www.kagario.tokyo/",
    "checkedAt": "2026-10-01",
    "art": "city",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "statusNote": "ข้อมูลเวลา/วันหยุดอาจเปลี่ยน แนะนำกดเว็บไซต์ร้านหรือ Google Maps ก่อนออกเดินทาง",
    "foodTab": "famous",
    "photoQuery": "Ginza Kagari ramen Tokyo",
    "hoursNote": "เวลาเปิดขึ้นกับสาขา/วัน ควรเช็กหน้า official ก่อนเดินทาง",
    "closedDaysNote": "อาจมีวันหยุดตามประกาศร้าน",
    "reservationLabel": "Walk-in เป็นหลัก",
    "reservationNote": "ร้านราเมงแนวคิว ไม่มีข้อมูลจองโต๊ะทั่วไปที่ชัดเจน",
    "officialURL": "https://www.kagario.tokyo/",
    "sourceName": "Ginza Kagari official",
    "queueNote": "มื้อกลางวันและเย็นอาจต้องรอ",
    "warningNote": "ข้อมูลภาษาอังกฤษบนเว็บมีจำกัด ให้กด Google Maps ตรวจเวลาในวันจริง"
  },
  {
    "id": "tokyo-uogashi-nihonichi",
    "city": "tokyo",
    "area": "central",
    "name": "Uogashi Nihon-Ichi",
    "nameTH": "อุโอะกาชิ นิปปงอิจิ",
    "categories": [
      "food",
      "sushi",
      "budget",
      "rain",
      "walk"
    ],
    "station": "Tokyo / Shimbashi / หลายสาขา",
    "durationMinutes": 45,
    "duration": "30–45 นาที",
    "budgetJPYMin": 1200,
    "budgetJPYMax": 2500,
    "budgetNote": "ซูชิยืนกิน ราคาย่อมเยา",
    "recommendedTime": "กลางวัน–เย็น",
    "indoor": true,
    "description": "ซูชิแบบยืนกิน กินเร็ว ราคาดี เหมาะกับคนอยากลองซูชิโดยไม่หนักงบ",
    "mustTry": "Assorted Nigiri Set",
    "tip": "สาขาในย่านออฟฟิศช่วงเที่ยงคนแน่น",
    "mapQuery": "Uogashi Nihon-Ichi Tokyo",
    "keywords": [
      "ซูชิ",
      "standing sushi",
      "โตเกียวสเตชัน"
    ],
    "sourceURL": "https://www.sushi-nh.com/",
    "checkedAt": "2026-10-01",
    "art": "city",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "statusNote": "ข้อมูลเวลา/วันหยุดอาจเปลี่ยน แนะนำกดเว็บไซต์ร้านหรือ Google Maps ก่อนออกเดินทาง",
    "foodTab": "local",
    "photoQuery": "Uogashi Nihon-Ichi standing sushi Tokyo",
    "hoursNote": "หลายสาขา เวลาแตกต่างกัน",
    "closedDaysNote": "ขึ้นกับสาขา",
    "reservationLabel": "ไม่จำเป็น",
    "reservationNote": "รูปแบบยืนกิน/หมุนเร็ว เหมาะ walk-in",
    "officialURL": "https://www.sushi-nh.com/",
    "sourceName": "Uogashi Nihon-Ichi official",
    "queueNote": "สาขาใกล้ออฟฟิศช่วงเที่ยงอาจแน่น",
    "warningNote": "เลือกสาขาใน Maps ให้ตรงก่อนเดินทาง"
  },
  {
    "id": "tokyo-asakusa-imahan",
    "city": "tokyo",
    "area": "asakusa",
    "name": "Asakusa Imahan",
    "nameTH": "อาซากุสะ อิมะฮัง",
    "categories": [
      "food",
      "local-specialty",
      "couple",
      "family",
      "rain"
    ],
    "station": "Asakusa · เดินประมาณ 5–8 นาที",
    "durationMinutes": 90,
    "duration": "1–1.5 ชั่วโมง",
    "budgetJPYMin": 5000,
    "budgetJPYMax": 10000,
    "budgetNote": "มื้อสุกี้ยากี้ / ชาบู ต่อคน",
    "recommendedTime": "กลางวัน–เย็น",
    "indoor": true,
    "description": "ร้านสุกี้ยากี้เก่าแก่ชื่อดังในอาซากุสะ เหมาะกับมื้อพิเศษ",
    "mustTry": "Sukiyaki Set",
    "tip": "ถ้าอยากกินสบาย ๆ แนะนำจองล่วงหน้า",
    "mapQuery": "Asakusa Imahan",
    "keywords": [
      "สุกี้ยากี้",
      "อาซากุสะ",
      "wagyu"
    ],
    "sourceURL": "https://www.asakusaimahan.co.jp/en/contact",
    "checkedAt": "2026-10-01",
    "art": "temple",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "statusNote": "ข้อมูลเวลา/วันหยุดอาจเปลี่ยน แนะนำกดเว็บไซต์ร้านหรือ Google Maps ก่อนออกเดินทาง",
    "foodTab": "famous",
    "photoQuery": "Asakusa Imahan Kokusai Street restaurant sukiyaki",
    "hoursNote": "ร้าน Kokusai Street Head Restaurant เปิดตามตารางของร้าน; ห้องส่วนตัวมีเงื่อนไขเวลา",
    "closedDaysNote": "มีประกาศปิดชั่วคราวเป็นบางช่วง ตรวจ News ก่อน",
    "reservationLabel": "แนะนำจองสำหรับมื้อพิเศษ",
    "reservationNote": "จองทางโทรศัพท์เท่านั้น; ไม่รับจองออนไลน์ และ lunch menu ไม่รับจอง",
    "bookingURL": "https://www.asakusaimahan.co.jp/en/contact",
    "officialURL": "https://www.asakusaimahan.co.jp/en/",
    "sourceName": "Asakusa Imahan official",
    "queueNote": "มื้อกลางวันเป็น first-come, first-served",
    "paymentNote": "มีค่า table charge บางประเภทการจอง",
    "warningNote": "ห้อง private room มี minimum course order ต่อคน"
  },
  {
    "id": "tokyo-suzukien",
    "city": "tokyo",
    "area": "asakusa",
    "name": "Suzukien Asakusa",
    "nameTH": "ซุซุกิเอ็น อาซากุสะ",
    "categories": [
      "food",
      "dessert",
      "cafe",
      "budget",
      "walk"
    ],
    "station": "Asakusa",
    "durationMinutes": 30,
    "duration": "20–30 นาที",
    "budgetJPYMin": 450,
    "budgetJPYMax": 900,
    "budgetNote": "ไอศกรีมมัทฉะ / ชาเขียว",
    "recommendedTime": "บ่าย",
    "indoor": true,
    "description": "ร้านมัทฉะเจลาโต้ยอดนิยม แวะง่ายระหว่างเดินอาซากุสะ",
    "mustTry": "Matcha Gelato Level 5–7",
    "tip": "คิวช่วงบ่ายเสาร์อาทิตย์อาจยาว",
    "mapQuery": "Suzukien Asakusa",
    "keywords": [
      "ของหวาน",
      "มัทฉะ",
      "gelato",
      "asakusa"
    ],
    "sourceURL": "https://www.tocha.co.jp/",
    "checkedAt": "2026-10-01",
    "art": "temple",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "statusNote": "ข้อมูลเวลา/วันหยุดอาจเปลี่ยน แนะนำกดเว็บไซต์ร้านหรือ Google Maps ก่อนออกเดินทาง",
    "foodTab": "cafe",
    "photoQuery": "Suzukien Asakusa matcha gelato",
    "hoursNote": "ตรวจเวลาเปิดจากเว็บไซต์ร้าน/Maps ในวันจริง",
    "closedDaysNote": "อาจเปลี่ยนตามฤดูกาล",
    "reservationLabel": "Walk-in",
    "reservationNote": "ร้านของหวาน ไม่จำเป็นต้องจอง",
    "officialURL": "https://www.tocha.co.jp/",
    "sourceName": "Suzukien / tea company site",
    "queueNote": "บ่ายและวันหยุดอาจมีคิว",
    "warningNote": "ระดับมัทฉะเข้มมีรสขมชัด เหมาะแชร์ชิม"
  },
  {
    "id": "tokyo-tsujihan-nihonbashi",
    "city": "tokyo",
    "area": "central",
    "name": "Tsujihan Nihonbashi",
    "nameTH": "สึจิฮัง นิฮงบาชิ",
    "categories": [
      "food",
      "seafood",
      "first-trip",
      "rain"
    ],
    "station": "Nihombashi / Tokyo",
    "durationMinutes": 60,
    "duration": "45–60 นาที",
    "budgetJPYMin": 1500,
    "budgetJPYMax": 2800,
    "budgetNote": "ข้าวหน้าทะเลชามเด่น",
    "recommendedTime": "กลางวัน",
    "indoor": true,
    "description": "ข้าวหน้าอาหารทะเลแน่น ๆ ร้านฮิตของสายดงบุริ",
    "mustTry": "Zeitaku Don",
    "tip": "มักมีคิวช่วงกลางวัน แต่หมุนโต๊ะค่อนข้างเร็ว",
    "mapQuery": "Tsujihan Nihonbashi",
    "keywords": [
      "kaisen don",
      "อาหารทะเล",
      "nihonbashi"
    ],
    "sourceURL": "https://www.tsujihan-jp.com/blank",
    "checkedAt": "2026-10-01",
    "art": "city",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "statusNote": "ข้อมูลเวลา/วันหยุดอาจเปลี่ยน แนะนำกดเว็บไซต์ร้านหรือ Google Maps ก่อนออกเดินทาง",
    "foodTab": "famous",
    "photoQuery": "Tsujihan Nihonbashi kaisen don",
    "hoursNote": "Nihonbashi Main Store 10:00–22:30 (L.O. 22:00) ตามหน้า official ที่ตรวจล่าสุด",
    "closedDaysNote": "ไม่แน่นอน ยกเว้นช่วงปีใหม่; ร้านเตือนว่าอาจเปลี่ยน",
    "reservationLabel": "Walk-in เป็นหลัก",
    "reservationNote": "หน้า official ไม่ระบุระบบจองสำหรับสาขาหลัก",
    "officialURL": "https://www.tsujihan-jp.com/",
    "sourceName": "Tsujihan official",
    "queueNote": "คิวยาวได้ช่วงเที่ยง",
    "warningNote": "เวลา/วันหยุดอาจเปลี่ยน ให้ตรวจหน้าร้านก่อน"
  },
  {
    "id": "osaka-ajinoya",
    "city": "osaka",
    "area": "osaka-minami",
    "name": "Ajinoya Honten",
    "nameTH": "อาจิโนยะ ฮอนเท็น",
    "categories": [
      "food",
      "okonomiyaki",
      "first-trip",
      "rain",
      "family"
    ],
    "station": "Namba",
    "durationMinutes": 75,
    "duration": "1–1.25 ชั่วโมง",
    "budgetJPYMin": 1200,
    "budgetJPYMax": 2500,
    "budgetNote": "โอโคโนมิยากิ / ยากิโซบะ ต่อคน",
    "recommendedTime": "กลางวัน–เย็น",
    "indoor": true,
    "description": "ร้านโอโคโนมิยากิยอดนิยมแถวโดทงโบริ คนไทยและคนญี่ปุ่นรู้จักกันเยอะ",
    "mustTry": "Mixed Okonomiyaki",
    "tip": "คิวยาวได้ โดยเฉพาะช่วงค่ำ",
    "mapQuery": "Ajinoya Honten Osaka",
    "keywords": [
      "okonomiyaki",
      "นัมบะ",
      "โดทงโบริ"
    ],
    "sourceURL": "https://ajinoya-okonomiyaki.com/",
    "checkedAt": "2026-10-01",
    "art": "city",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "statusNote": "ข้อมูลเวลา/วันหยุดอาจเปลี่ยน แนะนำกดเว็บไซต์ร้านหรือ Google Maps ก่อนออกเดินทาง",
    "foodTab": "famous",
    "photoQuery": "Ajinoya Honten okonomiyaki Osaka",
    "hoursNote": "อังคาร–อาทิตย์ 11:00–22:00; จันทร์และวันปีใหม่ปิด ตาม official ที่ตรวจ 1 ต.ค. 2026",
    "closedDaysNote": "จันทร์, 1 ม.ค. และอาจมีวันหยุดพิเศษ",
    "reservationLabel": "มี FastPass",
    "reservationNote": "ร้านเตือนว่า AutoReserve ไม่ใช่ช่องทางที่ยอมรับ; ใช้ FastPass จาก official/TableCheck",
    "bookingURL": "https://www.tablecheck.com/shops/ajinoya/reserve",
    "officialURL": "https://ajinoya-okonomiyaki.com/",
    "sourceName": "Ajinoya official",
    "queueNote": "เป็นร้านดัง คิวยาวได้มาก; FastPass ช่วยลดความเสี่ยง",
    "warningNote": "อย่าซื้อสิทธิ์จาก AutoReserve เพราะร้านประกาศว่าไม่รับ"
  },
  {
    "id": "osaka-kiji-umeda",
    "city": "osaka",
    "area": "osaka-umeda",
    "name": "Okonomiyaki Kiji Umeda",
    "nameTH": "โอโคโนมิยากิ คิจิ อุเมดะ",
    "categories": [
      "food",
      "okonomiyaki",
      "local-specialty",
      "rain"
    ],
    "station": "Umeda / Osaka",
    "durationMinutes": 60,
    "duration": "45–60 นาที",
    "budgetJPYMin": 1100,
    "budgetJPYMax": 2200,
    "budgetNote": "โอโคโนมิยากิคลาสสิก",
    "recommendedTime": "กลางวัน–เย็น",
    "indoor": true,
    "description": "ร้านเก่าแก่ในย่านอุเมดะ เหมาะกับคนอยากลองรสโอซาก้าแท้",
    "mustTry": "Pork & Cheese Okonomiyaki",
    "tip": "หาโลเคชันในอาคารให้ดี เพราะอยู่โซนร้านอาหารด้านใน",
    "mapQuery": "Kiji Umeda Osaka",
    "keywords": [
      "อุเมดะ",
      "okonomiyaki",
      "ร้านดัง"
    ],
    "sourceURL": "https://www.goumeda.com/shop/okonomiyaki-kiji/",
    "checkedAt": "2026-10-01",
    "art": "tower",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "statusNote": "ข้อมูลเวลา/วันหยุดอาจเปลี่ยน แนะนำกดเว็บไซต์ร้านหรือ Google Maps ก่อนออกเดินทาง",
    "foodTab": "local",
    "photoQuery": "Okonomiyaki Kiji Umeda Osaka",
    "hoursNote": "ข้อมูลไกด์ล่าสุดระบุประมาณ 11:45–20:30; ปิดวันอาทิตย์",
    "closedDaysNote": "อาทิตย์",
    "reservationLabel": "Walk-in",
    "reservationNote": "ไม่มีระบบจองที่ชัดเจนในข้อมูลล่าสุด; เผื่อคิว",
    "officialURL": "https://www.goumeda.com/shop/okonomiyaki-kiji/",
    "sourceName": "Go Umeda current listing",
    "queueNote": "ร้านเล็กและดัง มีโอกาสรอ",
    "warningNote": "แหล่งข้อมูลเป็น local guide ไม่ใช่เว็บไซต์ร้านโดยตรง จึงควรเช็ก Maps ในวันจริง"
  },
  {
    "id": "osaka-jiyuken-namba",
    "city": "osaka",
    "area": "osaka-minami",
    "name": "Jiyuken Namba",
    "nameTH": "จิยูเค็น นัมบะ",
    "categories": [
      "food",
      "local-specialty",
      "budget",
      "rain"
    ],
    "station": "Namba",
    "durationMinutes": 45,
    "duration": "30–45 นาที",
    "budgetJPYMin": 900,
    "budgetJPYMax": 1600,
    "budgetNote": "ข้าวแกงกะหรี่สไตล์โอซาก้า",
    "recommendedTime": "กลางวัน",
    "indoor": true,
    "description": "ร้านคารีไรซ์เก่าแก่ในย่านนัมบะ เมนูง่าย กินไว",
    "mustTry": "Meibutsu Curry",
    "tip": "ถ้าชอบไข่ดิบสามารถสั่งตามสไตล์ร้านได้",
    "mapQuery": "Jiyuken Namba",
    "keywords": [
      "curry",
      "osaka local",
      "นัมบะ"
    ],
    "sourceURL": "https://www.jiyuken.co.jp/",
    "checkedAt": "2026-10-01",
    "art": "city",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "statusNote": "ข้อมูลเวลา/วันหยุดอาจเปลี่ยน แนะนำกดเว็บไซต์ร้านหรือ Google Maps ก่อนออกเดินทาง",
    "foodTab": "local",
    "photoQuery": "Jiyuken Namba curry Osaka",
    "hoursNote": "ร้าน Namba Main Store ยังมีหน้า official และประกาศปรับราคา 14 ก.ค. 2026",
    "closedDaysNote": "ตรวจหน้า official ก่อนเดินทาง",
    "reservationLabel": "Walk-in",
    "reservationNote": "เหมาะแวะกินเร็ว ไม่มีข้อมูลจองโต๊ะเด่นชัด",
    "officialURL": "https://www.jiyuken.co.jp/",
    "sourceName": "Jiyuken official",
    "queueNote": "ช่วงมื้อกลางวันอาจแน่น",
    "warningNote": "ราคาเพิ่งมีการปรับในปี 2026 จึงควรดูเมนูล่าสุด"
  },
  {
    "id": "osaka-rikuro-namba",
    "city": "osaka",
    "area": "osaka-minami",
    "name": "Rikuro Ojisan Namba",
    "nameTH": "ริคุโระ โอจิซัง นัมบะ",
    "categories": [
      "food",
      "dessert",
      "first-trip",
      "budget",
      "rain"
    ],
    "station": "Namba",
    "durationMinutes": 30,
    "duration": "20–30 นาที",
    "budgetJPYMin": 1000,
    "budgetJPYMax": 1200,
    "budgetNote": "ชีสเค้กทั้งก้อน",
    "recommendedTime": "บ่าย–ค่ำ",
    "indoor": true,
    "description": "ชีสเค้กนุ่ม ๆ ของฝากยอดนิยมของโอซาก้า",
    "mustTry": "Freshly Baked Cheesecake",
    "tip": "เหมาะซื้อกลับมากกว่านั่งกินยาว",
    "mapQuery": "Rikuro Ojisan Namba",
    "keywords": [
      "ชีสเค้ก",
      "ของฝาก",
      "โอซาก้า"
    ],
    "sourceURL": "https://www.rikuro.co.jp/shoplist/134.html",
    "checkedAt": "2026-10-01",
    "art": "city",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "statusNote": "ข้อมูลเวลา/วันหยุดอาจเปลี่ยน แนะนำกดเว็บไซต์ร้านหรือ Google Maps ก่อนออกเดินทาง",
    "foodTab": "cafe",
    "photoQuery": "Rikuro Ojisan Namba cheesecake",
    "hoursNote": "ชั้น 1 09:00–20:00; Cafe ROOM 11:00–17:30 (L.O.16:30) ตาม official",
    "closedDaysNote": "ตรวจประกาศร้านช่วงเทศกาล",
    "reservationLabel": "ไม่รับจอง",
    "reservationNote": "Namba Main Store ระบุว่าไม่รับจองหน้าร้าน/ออนไลน์/โทรศัพท์",
    "officialURL": "https://www.rikuro.co.jp/shoplist/134.html",
    "sourceName": "Rikuro official",
    "queueNote": "สินค้าบางช่วงอาจจำกัดจำนวน",
    "warningNote": "ร้านมีหลายสาขาและบางสาขาปิด/ย้ายในปี 2026 เลือก Namba Main Store ให้ตรง"
  },
  {
    "id": "osaka-harukoma-tenjinbashi",
    "city": "osaka",
    "area": "osaka-umeda",
    "name": "Harukoma Sushi",
    "nameTH": "ฮารุโคมะ ซูชิ",
    "categories": [
      "food",
      "sushi",
      "seafood",
      "rain"
    ],
    "station": "Tenjinbashisuji 6-chome",
    "durationMinutes": 60,
    "duration": "45–60 นาที",
    "budgetJPYMin": 2000,
    "budgetJPYMax": 3500,
    "budgetNote": "ซูชิต่อคนแบบกินอิ่ม",
    "recommendedTime": "กลางวัน–เย็น",
    "indoor": true,
    "description": "ซูชิยอดนิยมราคาคุ้มค่าในโอซาก้า",
    "mustTry": "Otoro / Assorted Sushi",
    "tip": "อาจต้องรับบัตรคิวในช่วงพีค",
    "mapQuery": "Harukoma Sushi Osaka",
    "keywords": [
      "ซูชิ",
      "tenjinbashisuji",
      "โอซาก้า"
    ],
    "sourceURL": "https://tabelog.com/en/osaka/A2701/A270103/27002205/",
    "checkedAt": "2026-10-01",
    "art": "tower",
    "operationalStatus": "verify",
    "statusText": "⚠️ ต้องเช็กก่อนออกเดินทาง",
    "statusNote": "ข้อมูลล่าสุดระบุ Main Store ปิดปรับปรุงถึง 30 ก.ย. 2026 และตั้งใจกลับมา 1 ต.ค. 2026; วันเปิดจริงอาจเลื่อน",
    "foodTab": "local",
    "photoQuery": "Harukoma Sushi Tenjinbashi Osaka",
    "hoursNote": "ปกติ 11:00–21:30 และปิดวันอังคาร; ปิดเมื่อของหมด",
    "closedDaysNote": "อังคาร; อาจมีปิดปรับปรุง/ขายหมด",
    "reservationLabel": "ไม่รับจอง",
    "reservationNote": "คิวหน้างาน",
    "officialURL": "https://tabelog.com/en/osaka/A2701/A270103/27002205/",
    "sourceName": "Tabelog listing checked 2026",
    "queueNote": "ปกติรอ 30–60 นาทีช่วงพีค",
    "warningNote": "วันที่ 1 ต.ค. 2026 เป็นวันคาดเปิดหลังปรับปรุง โปรดเช็ก Instagram/โทรก่อน"
  },
  {
    "id": "fuji-houtou-fudou",
    "city": "fuji",
    "area": "fuji-kawaguchiko",
    "name": "Houtou Fudou",
    "nameTH": "โฮโต ฟุโด",
    "categories": [
      "food",
      "local-specialty",
      "family",
      "rain"
    ],
    "station": "Kawaguchiko / เดินทางต่อรถ",
    "durationMinutes": 60,
    "duration": "45–60 นาที",
    "budgetJPYMin": 1200,
    "budgetJPYMax": 1800,
    "budgetNote": "โฮโต 1 ชาม",
    "recommendedTime": "กลางวัน–เย็น",
    "indoor": true,
    "description": "ร้านโฮโตเส้นหนาน้ำซุปร้อน ของขึ้นชื่อยามานาชิ",
    "mustTry": "Hoto Noodles",
    "tip": "เหมาะมากในวันที่อากาศเย็นหรือฝนตก",
    "mapQuery": "Houtou Fudou Kawaguchiko",
    "keywords": [
      "hoto",
      "คาวากุจิโกะ",
      "ฟูจิ"
    ],
    "sourceURL": "https://www.yamanashi-kankou.jp/kankou/eat/p3_0111.html",
    "checkedAt": "2026-10-01",
    "art": "park",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "statusNote": "ข้อมูลเวลา/วันหยุดอาจเปลี่ยน แนะนำกดเว็บไซต์ร้านหรือ Google Maps ก่อนออกเดินทาง",
    "foodTab": "famous",
    "photoQuery": "Houtou Fudou Kawaguchiko restaurant",
    "hoursNote": "เวลาแตกต่างตามสาขา; ข้อมูลท่องเที่ยวจังหวัดยังระบุร้านในพื้นที่ Kawaguchiko",
    "closedDaysNote": "ขึ้นกับสาขาและฤดูกาล",
    "reservationLabel": "Walk-in เป็นหลัก",
    "reservationNote": "ร้านสไตล์ local chain แนะนำเผื่อคิวช่วงเที่ยง",
    "officialURL": "https://www.houtou-fudou.jp/",
    "sourceName": "Yamanashi official tourism",
    "queueNote": "วันหยุดและฤดูใบไม้เปลี่ยนสีคนเยอะ",
    "warningNote": "ให้เลือกสาขาให้ตรงกับเส้นทาง เพราะมีหลายสาขา"
  },
  {
    "id": "fuji-tempura-idaten",
    "city": "fuji",
    "area": "fuji-kawaguchiko",
    "name": "Fuji Tempura Idaten",
    "nameTH": "ฟูจิ เทมปุระ อิดาเท็น",
    "categories": [
      "food",
      "local-specialty",
      "family",
      "couple"
    ],
    "station": "Kawaguchiko · เดินประมาณ 3–5 นาที",
    "durationMinutes": 60,
    "duration": "45–60 นาที",
    "budgetJPYMin": 1800,
    "budgetJPYMax": 3200,
    "budgetNote": "เทมปุระเซ็ตต่อคน",
    "recommendedTime": "กลางวัน–เย็น",
    "indoor": true,
    "description": "ร้านเทมปุระยอดนิยมใกล้สถานีคาวากุจิโกะ แวะง่าย",
    "mustTry": "Fuji Tempura Set",
    "tip": "ช่วงเย็นคิวมากขึ้นหลังรถบัสทัวร์ลง",
    "mapQuery": "Fuji Tempura Idaten",
    "keywords": [
      "tempura",
      "kawaguchiko",
      "ร้านดัง"
    ],
    "sourceURL": "https://fuji.creative-r.com/en/pages/idaten-kawaguchiko",
    "checkedAt": "2026-10-01",
    "art": "park",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "statusNote": "ข้อมูลเวลา/วันหยุดอาจเปลี่ยน แนะนำกดเว็บไซต์ร้านหรือ Google Maps ก่อนออกเดินทาง",
    "foodTab": "famous",
    "photoQuery": "Fuji Tempura Idaten Kawaguchiko",
    "hoursNote": "10:00–22:00 (L.O.21:30) ตาม official ที่ตรวจล่าสุด",
    "closedDaysNote": "ตรวจ official หากมีประกาศพิเศษ",
    "reservationLabel": "รับจองออนไลน์",
    "reservationNote": "จองผ่าน TableCheck ได้; ไม่จำเป็นทุกวันแต่ช่วยลดความเสี่ยงช่วงพีค",
    "bookingURL": "https://www.tablecheck.com/en/idaten-kawaguchiko/reserve",
    "officialURL": "https://fuji.creative-r.com/en/pages/idaten-kawaguchiko",
    "sourceName": "Fuji Tempura Idaten official",
    "queueNote": "ใกล้สถานีมาก จึงแน่นหลังรถไฟ/รถบัสลง",
    "paymentNote": "รองรับบัตรและ QR หลายแบบตาม official",
    "warningNote": "โปรโมชันรายเดือนมีวันหมดอายุ อย่ายึดราคาคูปองเก่า"
  },
  {
    "id": "fuji-lake-bake",
    "city": "fuji",
    "area": "fuji-kawaguchiko",
    "name": "Lake Bake",
    "nameTH": "เลค เบค",
    "categories": [
      "food",
      "cafe",
      "dessert",
      "couple",
      "walk"
    ],
    "station": "Kawaguchiko / รถหรือแท็กซี่สะดวกกว่า",
    "durationMinutes": 45,
    "duration": "30–45 นาที",
    "budgetJPYMin": 500,
    "budgetJPYMax": 1500,
    "budgetNote": "เบเกอรี่ + เครื่องดื่ม",
    "recommendedTime": "เช้า–บ่าย",
    "indoor": true,
    "description": "คาเฟ่เบเกอรี่บรรยากาศดี เหมาะพักจิบกาแฟมองวิว",
    "mustTry": "Bread & Coffee Set",
    "tip": "ถ้าไปเช้า ตัวเลือกขนมปังจะเยอะกว่า",
    "mapQuery": "Lake Bake Kawaguchiko",
    "keywords": [
      "คาเฟ่",
      "เบเกอรี่",
      "วิวฟูจิ"
    ],
    "sourceURL": "https://lakebake.com/shop.html",
    "checkedAt": "2026-10-01",
    "art": "park",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "statusNote": "ข้อมูลเวลา/วันหยุดอาจเปลี่ยน แนะนำกดเว็บไซต์ร้านหรือ Google Maps ก่อนออกเดินทาง",
    "foodTab": "cafe",
    "photoQuery": "Lake Bake Kawaguchiko cafe Mount Fuji",
    "hoursNote": "หน้า official ระบุ 10:00–16:00/17:00 และเวลาคาเฟ่ปิดก่อนร้าน; ควรเช็กหน้าร้านล่าสุด",
    "closedDaysNote": "พุธ + พฤหัสที่ 2 และ 4 (ยกเว้นบางช่วงเทศกาล)",
    "reservationLabel": "Walk-in",
    "reservationNote": "ไม่มีระบบจองเด่นชัด",
    "officialURL": "https://www.lakebake.com/",
    "sourceName": "Lake Bake official",
    "queueNote": "ของอบบางชนิดอาจหมดถ้าไปบ่าย",
    "warningNote": "เว็บไซต์มีข้อมูลเวลาสองชุดต่างกันเล็กน้อย จึงควรเช็กอีกครั้งก่อนออกเดินทาง"
  },
  {
    "id": "fuji-sanrokuen",
    "city": "fuji",
    "area": "fuji-kawaguchiko",
    "name": "Sanrokuen",
    "nameTH": "ซันโรคุเอ็น",
    "categories": [
      "food",
      "local-specialty",
      "family",
      "couple"
    ],
    "station": "Kawaguchiko / เดินทางต่อรถ",
    "durationMinutes": 90,
    "duration": "1–1.5 ชั่วโมง",
    "budgetJPYMin": 3500,
    "budgetJPYMax": 6000,
    "budgetNote": "โรบาตะยากิ / เซ็ตปิ้งย่าง",
    "recommendedTime": "กลางวัน–เย็น",
    "indoor": true,
    "description": "ร้านโรบาตะยากิในบ้านญี่ปุ่นดั้งเดิม ประสบการณ์ต่างจากร้านทั่วไป",
    "mustTry": "Irori Robatayaki Set",
    "tip": "มื้อค่อนข้างใช้เวลา เหมาะเผื่อเวลาพัก",
    "mapQuery": "Sanrokuen Kawaguchiko",
    "keywords": [
      "robata",
      "traditional",
      "คาวากุจิโกะ"
    ],
    "sourceURL": "https://kawaguchiko-sanrokuen.com/",
    "checkedAt": "2026-10-01",
    "art": "park",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "statusNote": "ข้อมูลเวลา/วันหยุดอาจเปลี่ยน แนะนำกดเว็บไซต์ร้านหรือ Google Maps ก่อนออกเดินทาง",
    "foodTab": "local",
    "photoQuery": "Sanrokuen Kawaguchiko robatayaki",
    "hoursNote": "ข้อมูล official ปัจจุบันยังแสดงร้านและการเดินทาง; เวลาให้เช็กหน้าร้านก่อน",
    "closedDaysNote": "อาจมีวันหยุดตามฤดูกาล",
    "reservationLabel": "แนะนำจอง",
    "reservationNote": "มื้อใช้เวลาและจำนวนโต๊ะมีจำกัด เหมาะโทร/เช็ก official ก่อน",
    "officialURL": "https://kawaguchiko-sanrokuen.com/",
    "sourceName": "Sanrokuen official",
    "queueNote": "เหมาะเผื่อเวลา 1–1.5 ชม.",
    "warningNote": "เสิร์ฟแบบเตาถ่าน/囲炉裏 ใช้เวลามากกว่าร้านจานด่วน"
  },
  {
    "id": "tokyo-fuunji",
    "city": "tokyo",
    "area": "shinjuku",
    "name": "Fuunji Shinjuku",
    "nameTH": "ฟูอุนจิ ชินจูกุ",
    "categories": [
      "food",
      "ramen",
      "famous",
      "rain"
    ],
    "station": "Shinjuku · South Exit เดินประมาณ 5 นาที",
    "durationMinutes": 60,
    "duration": "45–60 นาที",
    "budgetJPYMin": 1000,
    "budgetJPYMax": 1600,
    "budgetNote": "Tsukemen / ramen + topping",
    "recommendedTime": "ก่อนเที่ยงหรือช่วงเปิดรอบเย็น",
    "indoor": true,
    "description": "ร้านสึเคเม็งซุปเข้มข้นชื่อดัง คิวหมุนไวและรสชัด",
    "mustTry": "Special Tsukemen",
    "tip": "ร้านมีเคาน์เตอร์ 15 ที่นั่ง",
    "foodTab": "famous",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "checkedAt": "2026-10-01",
    "statusNote": "official ระบุเปิดทุกวันจนซุปหมด",
    "hoursNote": "11:00–15:00, 17:00–21:00",
    "closedDaysNote": "ไม่มีวันหยุดประจำ",
    "reservationLabel": "ไม่รับจอง",
    "reservationNote": "official ระบุไม่รับ reservation",
    "bookingURL": "",
    "officialURL": "https://fu-unji.com/",
    "sourceURL": "https://fu-unji.com/",
    "sourceName": "Fuunji official",
    "queueNote": "คิวหน้าร้านเป็นปกติ; เลี่ยง 12:00–14:00",
    "paymentNote": "ตรวจหน้าร้าน",
    "warningNote": "อาจปิดก่อนเวลาเมื่อซุปหมด",
    "mapQuery": "Fuunji Shinjuku Tokyo",
    "keywords": [
      "tsukemen",
      "ราเมง",
      "ชินจูกุ"
    ],
    "art": "city",
    "photoQuery": "Fuunji Shinjuku tsukemen"
  },
  {
    "id": "tokyo-maisen-aoyama",
    "city": "tokyo",
    "area": "shibuya",
    "name": "Tonkatsu Maisen Aoyama",
    "nameTH": "ทงคัตสึ ไมเซ็น อาโอยามะ",
    "categories": [
      "food",
      "local-specialty",
      "family",
      "rain"
    ],
    "station": "Omotesando A2 · เดินประมาณ 3 นาที",
    "durationMinutes": 75,
    "duration": "1–1.25 ชั่วโมง",
    "budgetJPYMin": 1800,
    "budgetJPYMax": 3200,
    "budgetNote": "ชุดทงคัตสึ; course สูงกว่านี้",
    "recommendedTime": "กลางวัน–เย็น",
    "indoor": true,
    "description": "ทงคัตสึร้านเก่าแก่ในอาคารโรงอาบน้ำเดิม บรรยากาศเป็นเอกลักษณ์",
    "mustTry": "Kurobuta Tonkatsu Set",
    "tip": "วันหยุดคิวเยอะ",
    "foodTab": "famous",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "checkedAt": "2026-10-01",
    "statusNote": "หน้า official มีเมนู seasonal ก.ย.–ต.ค. 2026",
    "hoursNote": "11:00–22:00 (L.O.21:00)",
    "closedDaysNote": "ไม่มี; อาจมีปิดชั่วคราว",
    "reservationLabel": "รับจองบางรูปแบบ",
    "reservationNote": "เสาร์–อาทิตย์/วันหยุดรับจองเฉพาะ banquet course; course บางรายการต้องจองล่วงหน้า 2 วันก่อน 14:00",
    "bookingURL": "https://mai-sen.com/restaurant/aoyama/",
    "officialURL": "https://mai-sen.com/restaurant/aoyama/",
    "sourceURL": "https://mai-sen.com/restaurant/aoyama/",
    "sourceName": "Maisen official",
    "queueNote": "ถ้าไม่กิน course ให้ walk-in",
    "paymentNote": "ตรวจ official",
    "warningNote": "เงื่อนไขจอง weekend ต่างจากวันธรรมดา",
    "mapQuery": "Tonkatsu Maisen Aoyama",
    "keywords": [
      "tonkatsu",
      "อาโอยามะ",
      "omotesando"
    ],
    "art": "city",
    "photoQuery": "Tonkatsu Maisen Aoyama Tokyo"
  },
  {
    "id": "tokyo-udon-shin",
    "city": "tokyo",
    "area": "shinjuku",
    "name": "Udon Shin",
    "nameTH": "อุด้ง ชิน",
    "categories": [
      "food",
      "local-specialty",
      "rain"
    ],
    "station": "Shinjuku Exit 6 · เดินประมาณ 2 นาที",
    "durationMinutes": 75,
    "duration": "1–1.25 ชั่วโมง",
    "budgetJPYMin": 1000,
    "budgetJPYMax": 2200,
    "budgetNote": "อุด้ง + tempura/topping",
    "recommendedTime": "ก่อนเที่ยงหรือช่วงบ่าย",
    "indoor": true,
    "description": "อุด้งทำสดชามต่อชาม เน้นเส้นเหนียวนุ่มและเสิร์ฟทันที",
    "mustTry": "Fresh-cut Udon + Tempura",
    "tip": "หลังสั่งอาจรอ 10–15 นาทีเพราะทำใหม่ทุกชาม",
    "foodTab": "local",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "checkedAt": "2026-10-01",
    "statusNote": "official ระบุเปิดทุกวันยกเว้นปีใหม่",
    "hoursNote": "11:00–L.O.22:00",
    "closedDaysNote": "ไม่มีวันหยุดประจำ (ยกเว้นปีใหม่)",
    "reservationLabel": "เช็กหน้า Reservation",
    "reservationNote": "เว็บไซต์มีเมนู Reservation; คิว walk-in ยังพบได้บ่อย",
    "officialURL": "https://udonshin.com/",
    "sourceURL": "https://udonshin.com/",
    "sourceName": "Udon Shin official",
    "queueNote": "ร้านดังและทำสดทุกชาม ควรเผื่อคิว",
    "warningNote": "การรอหลังสั่งเป็นส่วนหนึ่งของกระบวนการทำสด",
    "mapQuery": "Udon Shin Shinjuku Tokyo",
    "keywords": [
      "udon",
      "ชินจูกุ",
      "อุด้ง"
    ],
    "art": "city",
    "photoQuery": "Udon Shin Shinjuku"
  },
  {
    "id": "tokyo-rokurinsha",
    "city": "tokyo",
    "area": "central",
    "name": "Rokurinsha Tokyo Station",
    "nameTH": "โรคุรินฉะ โตเกียวสเตชัน",
    "categories": [
      "food",
      "ramen",
      "famous",
      "rain"
    ],
    "station": "Tokyo Station · Yaesu / Tokyo Ramen Street B1",
    "durationMinutes": 60,
    "duration": "45–60 นาที",
    "budgetJPYMin": 1000,
    "budgetJPYMax": 1600,
    "budgetNote": "Tsukemen / ramen",
    "recommendedTime": "เช้าหรือ 14:00–18:00",
    "indoor": true,
    "description": "ร้านสึเคเม็งซุปเข้มข้นใน Tokyo Ramen Street ขึ้นชื่อเรื่องเส้นหนาและคิว",
    "mustTry": "Special Tsukemen",
    "tip": "เวลาเปิดอาจเปลี่ยนตาม facility",
    "foodTab": "famous",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "checkedAt": "2026-10-01",
    "statusNote": "Tokyo Ramen Street official ยังแสดงร้านใน 2026",
    "hoursNote": "Tokyo Station branch ปกติเปิดเช้าถึงดึก; ตรวจหน้า facility ในวันจริง",
    "closedDaysNote": "ตาม Tokyo Station facility",
    "reservationLabel": "ไม่รับจอง",
    "reservationNote": "official Solamachi listing ของแบรนด์ระบุ reservation none; Tokyo Station ใช้คิวหน้างาน",
    "officialURL": "https://rokurinsha.com/",
    "sourceURL": "https://www.tokyoeki-1bangai.co.jp/street/ramen/en/",
    "sourceName": "Tokyo Ramen Street official",
    "queueNote": "เป็นร้านคิวยาว เลี่ยงเที่ยง/เย็น",
    "warningNote": "บางวันมีเปลี่ยนเวลาเพราะ maintenance ของอาคาร",
    "mapQuery": "Rokurinsha Tokyo Station",
    "keywords": [
      "tsukemen",
      "Tokyo Ramen Street",
      "โตเกียวสเตชัน"
    ],
    "art": "city",
    "photoQuery": "Rokurinsha Tokyo Station tsukemen"
  },
  {
    "id": "tokyo-koffee-mameya-kakeru",
    "city": "tokyo",
    "area": "kiyosumi",
    "name": "KOFFEE MAMEYA -Kakeru-",
    "nameTH": "คอฟฟี่ มาเมยะ คาเครุ",
    "categories": [
      "food",
      "cafe",
      "couple",
      "rain"
    ],
    "station": "Kiyosumi-shirakawa / Kiba / Monzen-nakacho",
    "durationMinutes": 105,
    "duration": "1 ชั่วโมง 45 นาที",
    "budgetJPYMin": 3000,
    "budgetJPYMax": 8500,
    "budgetNote": "coffee course / experience แล้วแต่ชุด",
    "recommendedTime": "ตามเวลาจอง",
    "indoor": true,
    "description": "coffee experience แบบเคาน์เตอร์ เน้นชิมกาแฟจริงจังมากกว่าคาเฟ่แวะเร็ว",
    "mustTry": "Coffee Course / Pairing",
    "tip": "ทุกที่นั่งเป็น counter",
    "foodTab": "cafe",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "checkedAt": "2026-10-01",
    "statusNote": "ระบบจอง TableCheck เปิดใช้งานอยู่",
    "hoursNote": "ตาม slot ใน TableCheck",
    "closedDaysNote": "ตรวจ slot ที่เปิดให้จอง",
    "reservationLabel": "ควรจอง",
    "reservationNote": "จองล่วงหน้าได้ถึง 2 เดือน; เวลาโต๊ะ 1:45 ชม.; กลุ่มสูงสุด 4 คน",
    "bookingURL": "https://www.tablecheck.com/en/koffee-mameya-kakeru/reserve/landing",
    "officialURL": "https://www.koffee-mameya.com/",
    "sourceURL": "https://www.tablecheck.com/en/koffee-mameya-kakeru/reserve/landing",
    "sourceName": "TableCheck booking policy",
    "queueNote": "ไม่เหมาะ walk-in แบบหวังได้โต๊ะทันที",
    "paymentNote": "ยกเลิก/เปลี่ยนภายใน 24 ชม.มีค่าธรรมเนียม ¥8,500/คนตาม policy",
    "warningNote": "ค่าปรับยกเลิกสูง อ่าน booking policy ก่อนกดยืนยัน",
    "mapQuery": "KOFFEE MAMEYA Kakeru Tokyo",
    "keywords": [
      "specialty coffee",
      "kiyosumi",
      "คาเฟ่"
    ],
    "art": "city",
    "photoQuery": "KOFFEE MAMEYA Kakeru Tokyo coffee"
  },
  {
    "id": "tokyo-blue-bottle-shibuya",
    "city": "tokyo",
    "area": "shibuya",
    "name": "Blue Bottle Coffee Shibuya",
    "nameTH": "บลูบอทเทิล คอฟฟี่ ชิบูย่า",
    "categories": [
      "food",
      "cafe",
      "walk",
      "rain"
    ],
    "station": "Shibuya · Kitaya Park",
    "durationMinutes": 45,
    "duration": "30–45 นาที",
    "budgetJPYMin": 600,
    "budgetJPYMax": 1600,
    "budgetNote": "กาแฟ + เบเกอรี่",
    "recommendedTime": "เช้า–บ่าย",
    "indoor": true,
    "description": "คาเฟ่สาขา Shibuya ในสวน Kitaya Park เหมาะพักระหว่าง Harajuku–Shibuya",
    "mustTry": "Pour-over / seasonal drink",
    "tip": "มี Wi‑Fi และที่นั่งสองชั้น",
    "foodTab": "cafe",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "checkedAt": "2026-10-01",
    "statusNote": "official cafe page แสดงเวลาและที่อยู่ปัจจุบัน",
    "hoursNote": "08:00–20:00 ทุกวัน",
    "closedDaysNote": "ไม่มีตามหน้า official",
    "reservationLabel": "Walk-in",
    "reservationNote": "คาเฟ่ทั่วไป ไม่ต้องจอง",
    "officialURL": "https://store.bluebottlecoffee.jp/pages/shibuya",
    "sourceURL": "https://store.bluebottlecoffee.jp/pages/shibuya",
    "sourceName": "Blue Bottle official",
    "queueNote": "ช่วงสุดสัปดาห์อาจแน่น",
    "warningNote": "Blue Bottle มีหลายสาขา เลือก Shibuya Cafe ให้ตรง",
    "mapQuery": "Blue Bottle Coffee Shibuya",
    "keywords": [
      "coffee",
      "คาเฟ่",
      "shibuya"
    ],
    "art": "city",
    "photoQuery": "Blue Bottle Coffee Shibuya Cafe"
  },
  {
    "id": "tokyo-glitch-ginza",
    "city": "tokyo",
    "area": "central",
    "name": "GLITCH COFFEE GINZA",
    "nameTH": "กลิทช์ คอฟฟี่ กินซ่า",
    "categories": [
      "food",
      "cafe",
      "couple",
      "rain"
    ],
    "station": "Ginza / Higashi-ginza",
    "durationMinutes": 45,
    "duration": "30–45 นาที",
    "budgetJPYMin": 800,
    "budgetJPYMax": 2500,
    "budgetNote": "single origin specialty coffee",
    "recommendedTime": "เช้า–บ่าย",
    "indoor": true,
    "description": "specialty coffee สาย single-origin ที่เด่นเรื่องเมล็ดหายากและ tasting notes ชัด",
    "mustTry": "Single-origin pour-over",
    "tip": "ราคาแก้วขึ้นกับเมล็ด",
    "foodTab": "cafe",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "checkedAt": "2026-10-01",
    "statusNote": "official store page แสดง “営業中”",
    "hoursNote": "09:00–18:00 ทุกวัน ตาม store page ที่ตรวจล่าสุด",
    "closedDaysNote": "ไม่มีตามหน้า store",
    "reservationLabel": "Walk-in",
    "reservationNote": "ไม่จำเป็นต้องจอง",
    "officialURL": "https://shop.glitchcoffee.com/en/pages/store-ginza",
    "sourceURL": "https://shop.glitchcoffee.com/en/pages/store-ginza",
    "sourceName": "GLITCH official",
    "queueNote": "เสาร์–อาทิตย์อาจมีคิว",
    "warningNote": "ราคาเมล็ด specialty สูงกว่าคาเฟ่ทั่วไป",
    "mapQuery": "GLITCH COFFEE GINZA",
    "keywords": [
      "specialty coffee",
      "ginza",
      "กาแฟ"
    ],
    "art": "city",
    "photoQuery": "GLITCH COFFEE GINZA"
  },
  {
    "id": "tokyo-onibus-nakameguro",
    "city": "tokyo",
    "area": "nakameguro",
    "name": "ONIBUS COFFEE Nakameguro",
    "nameTH": "โอนิบัส คอฟฟี่ นากาเมกุโระ",
    "categories": [
      "food",
      "cafe",
      "local",
      "walk"
    ],
    "station": "Nakameguro Station",
    "durationMinutes": 45,
    "duration": "30–45 นาที",
    "budgetJPYMin": 500,
    "budgetJPYMax": 1500,
    "budgetNote": "กาแฟ + ขนม",
    "recommendedTime": "เช้า–บ่าย",
    "indoor": true,
    "description": "คาเฟ่ specialty ขนาดกะทัดรัดใกล้สถานี นั่งพักก่อนเดินย่าน Nakameguro ได้ดี",
    "mustTry": "Hand drip / espresso",
    "tip": "ร้านไม่ใหญ่มาก",
    "foodTab": "cafe",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "checkedAt": "2026-10-01",
    "statusNote": "official location page ยังแสดงสาขา",
    "hoursNote": "09:00–18:00",
    "closedDaysNote": "วันหยุดไม่แน่นอน",
    "reservationLabel": "Walk-in",
    "reservationNote": "ไม่ต้องจอง",
    "officialURL": "https://onibuscoffee-jp.com/en/pages/locations/nakameguro",
    "sourceURL": "https://onibuscoffee-jp.com/en/pages/locations/nakameguro",
    "sourceName": "ONIBUS official",
    "queueNote": "อาจเต็มเร็วช่วง weekend",
    "warningNote": "พื้นที่นั่งจำกัด",
    "mapQuery": "ONIBUS COFFEE Nakameguro",
    "keywords": [
      "coffee",
      "nakameguro",
      "คาเฟ่"
    ],
    "art": "city",
    "photoQuery": "ONIBUS COFFEE Nakameguro"
  },
  {
    "id": "tokyo-monja-tsukishima",
    "city": "tokyo",
    "area": "tsukishima",
    "name": "Monja Tsukishima",
    "nameTH": "มอนจะ สึกิชิมะ",
    "categories": [
      "food",
      "local-specialty",
      "local",
      "family",
      "rain"
    ],
    "station": "Tsukishima Exit 7/10",
    "durationMinutes": 90,
    "duration": "1–1.5 ชั่วโมง",
    "budgetJPYMin": 2000,
    "budgetJPYMax": 3500,
    "budgetNote": "มอนจะ + เครื่องดื่ม",
    "recommendedTime": "เย็น / weekend เที่ยง",
    "indoor": true,
    "description": "ร้านมอนจะในย่านต้นตำรับ Tsukishima เหมาะลองอาหารโตเกียวแบบ local",
    "mustTry": "Motsu Nira Monja",
    "tip": "โต๊ะเป็น teppan ให้ทำ/กินร้อน ๆ",
    "foodTab": "local",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "checkedAt": "2026-10-01",
    "statusNote": "หน้า Tsukishima Monja Association ยังแสดงข้อมูลและระบบจอง",
    "hoursNote": "วันธรรมดา 17:00–22:00; เสาร์อาทิตย์/วันหยุด 11:30–22:00",
    "closedDaysNote": "จันทร์ + อังคารที่ 1 และ 3",
    "reservationLabel": "รับจองออนไลน์",
    "reservationNote": "มี Web reservation และรับ seat reservation",
    "bookingURL": "https://monja.gr.jp/stores/monja-tsukishima/",
    "officialURL": "https://monja.gr.jp/stores/monja-tsukishima/",
    "sourceURL": "https://monja.gr.jp/stores/monja-tsukishima/",
    "sourceName": "Tsukishima Monja Association official",
    "queueNote": "จองช่วยลดคิวช่วง weekend",
    "paymentNote": "รองรับบัตรหลักตาม listing",
    "warningNote": "วันหยุดรายเดือนละเอียด ควรเช็กปฏิทินก่อน",
    "mapQuery": "Monja Tsukishima Tokyo",
    "keywords": [
      "monjayaki",
      "สึกิชิมะ",
      "local tokyo"
    ],
    "art": "bay",
    "photoQuery": "Tsukishima monjayaki Tokyo restaurant"
  },
  {
    "id": "tokyo-afuri-harajuku",
    "city": "tokyo",
    "area": "shibuya",
    "name": "AFURI Harajuku",
    "nameTH": "อาฟุริ ฮาราจูกุ",
    "categories": [
      "food",
      "ramen",
      "famous",
      "walk",
      "rain"
    ],
    "station": "Harajuku / Meiji-jingumae",
    "durationMinutes": 60,
    "duration": "45–60 นาที",
    "budgetJPYMin": 1200,
    "budgetJPYMax": 2200,
    "budgetNote": "ramen + topping",
    "recommendedTime": "ก่อนพีคเที่ยง/เย็น",
    "indoor": true,
    "description": "ราเมงยูซุที่กลิ่นสดและเบากว่าทงคตสึหนัก ๆ เหมาะพักระหว่าง Harajuku",
    "mustTry": "Yuzu Shio Ramen",
    "tip": "สาขานี้ cashless only ตาม official",
    "foodTab": "famous",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "checkedAt": "2026-10-01",
    "statusNote": "official store list แสดงสาขา Harajuku ปัจจุบัน",
    "hoursNote": "10:00–23:00 หรือจนซุปหมด",
    "closedDaysNote": "เปิดทุกวัน",
    "reservationLabel": "Walk-in",
    "reservationNote": "หน้า official ไม่ได้ระบุ reservation สำหรับ Harajuku เหมือนสาขา Ebisu ที่เพิ่งเปิดรับจอง",
    "officialURL": "https://www.afuri.com/findus/",
    "sourceURL": "https://www.afuri.com/findus/",
    "sourceName": "AFURI official",
    "queueNote": "ช่วงกลางวันคิวได้",
    "paymentNote": "Cashless only",
    "warningNote": "ถ้าต้องการจอง อย่าสับสนกับ Ebisu ซึ่งมี TableCheck ตั้งแต่ ก.ย. 2026",
    "mapQuery": "AFURI Harajuku Tokyo",
    "keywords": [
      "yuzu ramen",
      "harajuku",
      "ราเมง"
    ],
    "art": "city",
    "photoQuery": "AFURI Harajuku ramen"
  },
  {
    "id": "osaka-daruma-shinsekai",
    "city": "osaka",
    "area": "osaka-tennoji",
    "name": "Kushikatsu Daruma Shinsekai",
    "nameTH": "คุชิคัตสึ ดารุมะ ชินเซไก",
    "categories": [
      "food",
      "local-specialty",
      "famous",
      "night"
    ],
    "station": "Dobutsuen-mae / Shin-Imamiya",
    "durationMinutes": 75,
    "duration": "1–1.25 ชั่วโมง",
    "budgetJPYMin": 1800,
    "budgetJPYMax": 3500,
    "budgetNote": "คุชิคัตสึ + เครื่องดื่ม",
    "recommendedTime": "กลางวัน–ค่ำ",
    "indoor": true,
    "description": "ร้านคุชิคัตสึชื่อดังของย่าน Shinsekai ต้นตำรับบรรยากาศโอซาก้า",
    "mustTry": "Assorted Kushikatsu",
    "tip": "สาขา Shinsekai Main Store ไม่รับจอง",
    "foodTab": "famous",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "checkedAt": "2026-10-01",
    "statusNote": "official location page แสดงเวลาและ policy ปัจจุบัน",
    "hoursNote": "วันธรรมดา 11:00–22:30; เสาร์อาทิตย์/วันหยุด 10:30–22:30",
    "closedDaysNote": "เปิดทุกวันตามหน้า official",
    "reservationLabel": "ไม่รับจองสาขานี้",
    "reservationNote": "ถ้าอยากจอง ให้เลือกสาขาอื่นของ Daruma ที่รับ reservation",
    "officialURL": "https://www.kushikatu-daruma.com/location/",
    "sourceURL": "https://www.kushikatu-daruma.com/location/",
    "sourceName": "Kushikatsu Daruma official",
    "queueNote": "คิวช่วงเย็น/วันหยุด",
    "warningNote": "แบรนด์มีหลายสาขาและ policy จองต่างกันมาก",
    "mapQuery": "Kushikatsu Daruma Shinsekai Osaka",
    "keywords": [
      "kushikatsu",
      "shinsekai",
      "daruma"
    ],
    "art": "tower",
    "photoQuery": "Kushikatsu Daruma Shinsekai"
  },
  {
    "id": "osaka-wanaka-namba",
    "city": "osaka",
    "area": "osaka-minami",
    "name": "Takoyaki Wanaka Namba",
    "nameTH": "ทาโกะยากิ วานากะ นัมบะ",
    "categories": [
      "food",
      "local-specialty",
      "famous",
      "budget",
      "walk"
    ],
    "station": "Namba / Sennichimae",
    "durationMinutes": 30,
    "duration": "20–30 นาที",
    "budgetJPYMin": 700,
    "budgetJPYMax": 1500,
    "budgetNote": "ทาโกะยากิ 1–2 ชุด",
    "recommendedTime": "บ่าย–ค่ำ",
    "indoor": false,
    "description": "ทาโกะยากิร้านดังเก่าแก่ย่านนัมบะ เนื้อแป้งนุ่มด้านในและมีรสให้เลือกหลายแบบ",
    "mustTry": "Takoyaki assorted flavors",
    "tip": "เหมาะเป็นของกินเล่นระหว่างเดิน Dotonbori",
    "foodTab": "famous",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "checkedAt": "2026-10-01",
    "statusNote": "official มีประกาศล่าสุด 25 ก.ย. 2026",
    "hoursNote": "เวลาแตกต่างตามสาขา; Namba มีประกาศรายวันใน official",
    "closedDaysNote": "อาจมีวันหยุด/เปิดพิเศษเป็นช่วง",
    "reservationLabel": "Walk-in",
    "reservationNote": "ร้านทาโกะยากิแบบคิวหน้าร้าน",
    "officialURL": "https://takoyaki-wanaka.com/en/",
    "sourceURL": "https://www.takoyaki-wanaka.com/",
    "sourceName": "Wanaka official",
    "queueNote": "วันหยุดและกิจกรรมพิเศษคิวแน่นมาก",
    "warningNote": "official เคยประกาศปิดสาขาบางแห่งในปี 2026 เลือก Namba ให้ตรง",
    "mapQuery": "Takoyaki Wanaka Namba Osaka",
    "keywords": [
      "takoyaki",
      "wanaka",
      "namba"
    ],
    "art": "city",
    "photoQuery": "Takoyaki Wanaka Namba Osaka"
  },
  {
    "id": "osaka-lilo-coffee",
    "city": "osaka",
    "area": "osaka-minami",
    "name": "LiLo Coffee Roasters",
    "nameTH": "ไลโล คอฟฟี่ โรสเตอร์ส",
    "categories": [
      "food",
      "cafe",
      "local",
      "walk"
    ],
    "station": "Shinsaibashi",
    "durationMinutes": 45,
    "duration": "30–45 นาที",
    "budgetJPYMin": 600,
    "budgetJPYMax": 1800,
    "budgetNote": "specialty coffee + beans",
    "recommendedTime": "บ่าย–ค่ำ",
    "indoor": true,
    "description": "ร้าน specialty coffee ของโอซาก้าที่มีคาแรกเตอร์ชัดและเมล็ดหลากหลาย",
    "mustTry": "Hand drip / Osaka Blend",
    "tip": "เดินต่อจาก Shinsaibashi ง่าย",
    "foodTab": "cafe",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "checkedAt": "2026-10-01",
    "statusNote": "official store location page อัปเดตและแสดงเวลา",
    "hoursNote": "ทุกวัน 11:00–23:00",
    "closedDaysNote": "ไม่มีตามหน้า official",
    "reservationLabel": "Walk-in",
    "reservationNote": "ไม่ต้องจอง",
    "officialURL": "https://coffee.liloinveve.com/pages/store-location",
    "sourceURL": "https://coffee.liloinveve.com/pages/store-location",
    "sourceName": "LiLo Coffee official",
    "queueNote": "ร้านเล็ก อาจแน่นช่วงเย็น",
    "warningNote": "LiLo มีหลาย location; ร้าน Roasters คือ 1-10-28 Nishishinsaibashi",
    "mapQuery": "LiLo Coffee Roasters Osaka",
    "keywords": [
      "coffee",
      "shinsaibashi",
      "คาเฟ่"
    ],
    "art": "city",
    "photoQuery": "LiLo Coffee Roasters Osaka"
  },
  {
    "id": "osaka-matsusaka-m-hozenji",
    "city": "osaka",
    "area": "osaka-minami",
    "name": "Matsusakagyu Yakiniku M Houzenji Yokocho",
    "nameTH": "มัตสึซากะกิว ยากินิกุ M โฮเซ็นจิ",
    "categories": [
      "food",
      "local-specialty",
      "famous",
      "couple",
      "night"
    ],
    "station": "Namba / Nipponbashi",
    "durationMinutes": 120,
    "duration": "1.5–2 ชั่วโมง",
    "budgetJPYMin": 6000,
    "budgetJPYMax": 12000,
    "budgetNote": "Matsusaka beef yakiniku course / a la carte",
    "recommendedTime": "มื้อเย็น",
    "indoor": true,
    "description": "ยากินิกุเนื้อ Matsusaka สำหรับมื้อพิเศษในตรอก Hozenji Yokocho",
    "mustTry": "Matsusaka beef assorted cuts",
    "tip": "เหมาะจองล่วงหน้า โดยเฉพาะ weekend",
    "foodTab": "famous",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "checkedAt": "2026-10-01",
    "statusNote": "official store list แนะนำให้จองผ่านเว็บไซต์หรือ social official",
    "hoursNote": "ตรวจเวลาสาขาจาก official booking",
    "closedDaysNote": "ขึ้นกับสาขา",
    "reservationLabel": "แนะนำจองมาก",
    "reservationNote": "official ระบุแนะนำจองออนไลน์; เหมาะกับมื้อค่ำที่ต้องการแน่นอน",
    "bookingURL": "https://matsusaka-projects.com/english/shop",
    "officialURL": "https://matsusaka-projects.com/english/shop",
    "sourceURL": "https://matsusaka-projects.com/english/shop",
    "sourceName": "Yakiniku M official",
    "queueNote": "walk-in เสี่ยงเต็มในช่วงพีค",
    "paymentNote": "ตรวจรายละเอียดใน booking page",
    "warningNote": "สาขาในเครือมีหลายที่ เลือก Houzenji Yokocho ให้ตรง",
    "mapQuery": "Matsusakagyu Yakiniku M Hozenji Yokocho Osaka",
    "keywords": [
      "wagyu",
      "yakiniku",
      "hozenji",
      "matsusaka"
    ],
    "art": "city",
    "photoQuery": "Matsusakagyu Yakiniku M Houzenji Yokocho"
  },
  {
    "id": "fuji-kosaku",
    "city": "fuji",
    "area": "fuji-kawaguchiko",
    "name": "Kosaku Kawaguchiko",
    "nameTH": "โคซากุ คาวากุจิโกะ",
    "categories": [
      "food",
      "local-specialty",
      "local",
      "family",
      "rain"
    ],
    "station": "Kawaguchiko · รถ/แท็กซี่สะดวก",
    "durationMinutes": 75,
    "duration": "1–1.25 ชั่วโมง",
    "budgetJPYMin": 1200,
    "budgetJPYMax": 2200,
    "budgetNote": "Hoto noodle + side",
    "recommendedTime": "กลางวัน–เย็น",
    "indoor": true,
    "description": "ร้าน Hoto จานใหญ่สไตล์ Yamanashi มีที่นั่งเยอะ เหมาะกลุ่มและครอบครัว",
    "mustTry": "Pumpkin Hoto",
    "tip": "ชามใหญ่และร้อนมาก เหมาะอากาศเย็น",
    "foodTab": "local",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "checkedAt": "2026-10-01",
    "statusNote": "official Kawaguchiko page มีประกาศล่าสุด ก.ย. 2026",
    "hoursNote": "11:00–20:00 (L.O.19:30)",
    "closedDaysNote": "ปกติไม่มีวันหยุดประจำ แต่มีประกาศปิดเฉพาะกิจ",
    "reservationLabel": "ไม่รับจอง",
    "reservationNote": "official ระบุไม่รับ reservation ทุกประเภท ให้มาเรียงคิวหน้างาน",
    "officialURL": "https://www.kosaku.co.jp/tenpo-kawagutikoten",
    "sourceURL": "https://www.kosaku.co.jp/tenpo-kawagutikoten",
    "sourceName": "Kosaku official",
    "queueNote": "ลานจอดอาจเต็ม; ร้านขอให้เลื่อนเวลามาหากแน่น",
    "paymentNote": "รับเงินสดและบัตร; official ระบุ QR payment ไม่รับ",
    "warningNote": "มีประกาศปิดเฉพาะวันเป็นระยะ ต้องเช็ก news ก่อน",
    "mapQuery": "Kosaku Kawaguchiko Yamanashi",
    "keywords": [
      "hoto",
      "kawaguchiko",
      "local food"
    ],
    "art": "park",
    "photoQuery": "Kosaku Kawaguchiko hoto"
  },
  {
    "id": "fuji-troisieme-marche",
    "city": "fuji",
    "area": "fuji-kawaguchiko",
    "name": "cafe troisième marché",
    "nameTH": "คาเฟ่ ทรัวซีแยม มาร์เช่",
    "categories": [
      "food",
      "cafe",
      "dessert",
      "local",
      "couple"
    ],
    "station": "Kawaguchiko / รถสะดวกกว่า",
    "durationMinutes": 60,
    "duration": "45–60 นาที",
    "budgetJPYMin": 900,
    "budgetJPYMax": 2200,
    "budgetNote": "กาแฟ + เค้ก / sandwich",
    "recommendedTime": "บ่าย",
    "indoor": true,
    "description": "คาเฟ่ local โทนอบอุ่น มีเค้กทำเอง กาแฟคั่วเอง และร้านของจุกจิก",
    "mustTry": "Handmade seasonal cake + house-roasted coffee",
    "tip": "Friday คาเฟ่ปิด เหลือเฉพาะร้านของ",
    "foodTab": "cafe",
    "operationalStatus": "open",
    "statusText": "✅ ตรวจข้อมูลล่าสุดแล้ว",
    "checkedAt": "2026-10-01",
    "statusNote": "official site มี schedule และแนะนำเช็ก Instagram สำหรับปิดพิเศษ",
    "hoursNote": "11:30–17:00",
    "closedDaysNote": "พุธ–พฤหัส; ศุกร์ cafe ปิด ร้านของเปิด",
    "reservationLabel": "Walk-in",
    "reservationNote": "เค้กวันเกิด/anniversary cake ต้องจอง แต่โต๊ะคาเฟ่ทั่วไปใช้ walk-in",
    "officialURL": "https://www.cafe-marche.com/",
    "sourceURL": "https://www.cafe-marche.com/",
    "sourceName": "troisième marché official",
    "queueNote": "ที่นั่งจำกัดและปิดค่อนข้างเร็ว",
    "warningNote": "มี event/temporary closure ได้ ให้ดู Instagram ในวันที่ไป",
    "mapQuery": "cafe troisieme marche Kawaguchiko",
    "keywords": [
      "cafe",
      "cake",
      "kawaguchiko",
      "hidden gem"
    ],
    "art": "park",
    "photoQuery": "cafe troisieme marche Kawaguchiko"
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
  },
  {
    "id": "fuji-classic-day",
    "city": "fuji",
    "name": "Fuji Classic 1 วัน",
    "description": "เริ่มเช้าจาก Chureito ต่อคาวากุจิโกะและจบที่ Oishi Park ถ้าฟ้าเปิด",
    "stops": [
      "chureito-pagoda",
      "lake-kawaguchiko",
      "oishi-park"
    ],
    "durationMinutes": 540,
    "travelMinutes": 95,
    "art": "park"
  },
  {
    "id": "fuji-family-day",
    "city": "fuji",
    "name": "Fuji ครอบครัว / สวนสนุก",
    "description": "เต็มวันที่ Fuji-Q แล้วเก็บวิวทะเลสาบแบบสั้น ๆ หากยังมีเวลา",
    "stops": [
      "fujiq-highland",
      "lake-kawaguchiko"
    ],
    "durationMinutes": 600,
    "travelMinutes": 30,
    "art": "city"
  },
  {
    "id": "osaka-minami-evening",
    "city": "osaka",
    "name": "Namba + Dotonbori ช่วงเย็น",
    "description": "เริ่มช้อปชินไซบาชิ เดินต่อโดทงโบริ และปิดท้ายของกินยามค่ำ",
    "stops": [
      "shinsaibashi",
      "dotonbori"
    ],
    "durationMinutes": 300,
    "travelMinutes": 20,
    "art": "city"
  },
  {
    "id": "osaka-classic-day",
    "city": "osaka",
    "name": "Osaka Classic 1 วัน",
    "description": "เช้าปราสาทโอซาก้า บ่ายนัมบะ และเย็นโดทงโบริ",
    "stops": [
      "osaka-castle",
      "namba-yasaka",
      "dotonbori"
    ],
    "durationMinutes": 600,
    "travelMinutes": 90,
    "art": "temple"
  },
  {
    "id": "osaka-tennoji-evening",
    "city": "osaka",
    "name": "Tennoji + Shinsekai",
    "description": "ชมวิวจาก Abeno Harukas แล้วเดินย่าน Shinsekai และ Tsutenkaku",
    "stops": [
      "abeno-harukas",
      "shinsekai",
      "tsutenkaku"
    ],
    "durationMinutes": 330,
    "travelMinutes": 35,
    "art": "tower"
  }
];
