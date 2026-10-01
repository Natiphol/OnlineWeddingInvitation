import {discoverCities,discoverCategories,discoverAreas,discoverPlaces,discoverFoods,discoverRoutes} from './places-data.js?v=130';

const tourismById=new Map(discoverPlaces.map(p=>[p.id,p]));
const foodById=new Map(discoverFoods.map(p=>[p.id,p]));
const entryById=new Map([...discoverPlaces,...discoverFoods].map(p=>[p.id,p]));
const entryKindById=new Map([...discoverPlaces.map(p=>[p.id,'place']),...discoverFoods.map(p=>[p.id,'food'])]);
const categoryById=new Map(discoverCategories.map(c=>[c.id,c]));
const normalize=s=>String(s??'').normalize('NFKC').toLocaleLowerCase().trim();
const cityName=id=>discoverCities.find(c=>c.id===id)?.name||id;
const areaName=p=>discoverAreas[p.area]?.name||p.area;
const mapURL=p=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(p.mapQuery||p.name);
const hours=n=>n<60?`${n} นาที`:`${Number((n/60).toFixed(1))} ชั่วโมง`;
const quicks=[['first-trip','⭐ ครั้งแรก'],['sun','☀️ อากาศดี'],['rain','🌧 วันฝนตก'],['night','🌙 กลางคืน'],['free','💸 งบน้อย'],['photo','📸 ถ่ายรูป'],['shopping','🛍 อยากช้อป'],['food','🍜 อยากกิน'],['short','⏱ เวลาน้อย']];
const foodTabs=[['all','ทั้งหมด'],['famous','🔥 ร้านดัง'],['local','🏮 Local hidden gem'],['cafe','☕ คาเฟ่']];
const PHOTO_CACHE_KEY='ichi-photo-cache-v2';
let photoCache={};
try{photoCache=JSON.parse(localStorage.getItem(PHOTO_CACHE_KEY)||'{}')||{}}catch{}

const quickMatch=(item,q,mode='places')=>!q||q==='sun'&&!item.indoor||q==='rain'&&item.indoor&&item.categories.includes('rain')||q==='free'&&(mode==='places'?item.admissionJPY===0:item.categories.includes('budget'))||q==='short'&&(item.durationMinutes||0)<=60||!['sun','rain','free','short'].includes(q)&&item.categories.includes(q);
const searchableText=item=>normalize([item.name,item.nameTH,areaName(item),cityName(item.city),item.station,item.description,item.mustTry,item.recommendedTime,item.duration,item.hoursNote,item.reservationLabel,item.reservationNote,...(item.keywords||[]),...(item.categories||[]).map(c=>categoryById.get(c)?.label||c)].join(' '));
const numericPlaceFee=p=>p.admissionJPY??p.priceApproxMaxJPY??p.priceApproxMinJPY??null;

export function filterDiscoverPlaces(filters,savedIds=[]){
 const terms=normalize(filters.query).split(/\s+/).filter(Boolean);
 return discoverPlaces.filter(p=>p.city===filters.city&&(!filters.area||p.area===filters.area)&&(!filters.wishlist||savedIds.includes(p.id))&&(filters.categories||[]).every(c=>p.categories.includes(c))&&quickMatch(p,filters.quick,'places')&&terms.every(s=>(s!=='ฟรี'||p.admissionJPY===0)&&searchableText(p).includes(s)));
}
function routeFacts(r){
 const ps=r.stops.map(id=>tourismById.get(id)).filter(Boolean),fees=ps.map(numericPlaceFee);
 return {places:ps,categories:[...new Set(ps.flatMap(p=>p.categories||[]))],admissionJPY:fees.some(f=>f==null)?null:fees.reduce((a,b)=>a+b,0),indoor:ps.every(p=>p.indoor)};
}
export function recommendDiscover({city,minutes,budget,interests=[]}){
 const within=(m,fee,categories)=>m<=minutes&&(budget===Infinity||fee!==null&&fee<=budget)&&interests.every(c=>categories.includes(c));
 const options=[...discoverRoutes.filter(r=>r.city===city).map(r=>{const f=routeFacts(r);return {kind:'route',id:r.id,minutes:r.durationMinutes,fee:f.admissionJPY,categories:f.categories}}),...discoverPlaces.filter(p=>p.city===city).map(p=>({kind:'place',id:p.id,minutes:p.durationMinutes,fee:numericPlaceFee(p),categories:p.categories}))];
 return options.filter(x=>within(x.minutes,x.fee,x.categories)).sort((a,b)=>(b.kind==='route')-(a.kind==='route')||b.minutes-a.minutes).slice(0,6);
}

export function createDiscover(h){
 const {esc}=h;
 let filters={mode:'places',city:'tokyo',query:'',categories:[],quick:'',area:'',wishlist:false,foodTab:'all'},limit=9;
 let chooser={city:'tokyo',minutes:180,budget:3000,interests:[]};
 const button=(text,action,id='',cls='',extra='')=>`<button type="button" class="btn ${cls}" data-discover="${action}" data-id="${esc(id)}" ${extra}>${text}</button>`;
 const external=(text,url,cls='')=>url?`<a class="btn ${cls}" data-discover-online href="${esc(url)}" target="_blank" rel="noopener noreferrer">${text}</a>`:'';
 const saved=()=>new Set((h.trip().places||[]).filter(p=>p.discoverId&&p.star).map(p=>p.discoverId));
 const rate=()=>{const r=Number(h.trip()?.rate);return Number.isFinite(r)&&r>0?r:0.23};
 const formatYen=n=>`¥${Math.round(n).toLocaleString()}`;
 const formatTHB=n=>`฿${Math.round(n*rate()).toLocaleString()}`;
 const approxTHB=(min,max)=>min!=null&&max!=null&&min!==max?`${formatTHB(min)}–${formatTHB(max)}`:formatTHB(min??max??0);
 const noteRate=()=>`* ราคาคร่าว ๆ ต่อคน ใช้เรทในทริปปัจจุบัน ฿${rate().toFixed(2)} ต่อ ¥1`;
 const itemsForMode=mode=>mode==='food'?discoverFoods:discoverPlaces;
 const currentItems=()=>itemsForMode(filters.mode);
 const foodMode=()=>filters.mode==='food';
 const entryType=id=>entryKindById.get(id)||'place';
 const currentCategoryIds=()=>foodMode()?['food','ramen','sushi','okonomiyaki','seafood','local-specialty','cafe','dessert','budget','rain','family','couple','walk','night']:['first-trip','photo','shopping','food','culture','theme-park','night','nature','budget','rain','family','couple','walk'];
 const visibleSavedCount=()=>currentItems().filter(x=>saved().has(x.id)).length;
 const chips=item=>item.categories.slice(0,4).map(id=>`<span>${esc(categoryById.get(id)?.label||id)}</span>`).join('');
 const fullDate=d=>new Intl.DateTimeFormat('th-TH',{day:'numeric',month:'long',year:'numeric'}).format(new Date(d+'T12:00:00'));
 const checkedDate=d=>{if(!d)return 'ยังไม่ระบุ';try{return new Intl.DateTimeFormat('th-TH',{day:'numeric',month:'short',year:'numeric'}).format(new Date(d+'T12:00:00'))}catch{return d}};

 function priceText(item,long=false){
  if(entryType(item.id)==='food'){
   const min=item.budgetJPYMin??item.budgetJPYMax,max=item.budgetJPYMax??item.budgetJPYMin;
   if(min==null&&max==null)return 'งบขึ้นกับเมนู';
   const yen=min!==max?`${formatYen(min)}–${formatYen(max)}`:formatYen(min);
   return `ประมาณ ${yen}${long?` · ${approxTHB(min,max)}* / คน`:` · ≈ ${approxTHB(min,max)}*`}`;
  }
  if(item.admissionJPY===0)return 'ฟรี';
  if(item.admissionJPY!=null)return `ประมาณ ${formatYen(item.admissionJPY)} · ≈ ${formatTHB(item.admissionJPY)}*`;
  if(item.priceApproxMinJPY!=null||item.priceApproxMaxJPY!=null){const min=item.priceApproxMinJPY??item.priceApproxMaxJPY,max=item.priceApproxMaxJPY??item.priceApproxMinJPY;return `ประมาณ ${min!==max?`${formatYen(min)}–${formatYen(max)}`:formatYen(min)} · ≈ ${approxTHB(min,max)}*`}
  return 'มีค่าเข้า* ตรวจราคาตามวัน';
 }
 function routePriceText(r){const f=routeFacts(r);return f.admissionJPY==null?'มีจุดเสียค่าเข้า* ตรวจราคาก่อนจอง':`ค่าเข้ารวมประมาณ ${formatYen(f.admissionJPY)} · ≈ ${formatTHB(f.admissionJPY)}*`}
 function freshness(item){
  if(!item.checkedAt)return {cls:'stale',label:'ยังไม่ระบุวันที่ตรวจ'};
  const days=Math.floor((Date.now()-new Date(item.checkedAt+'T12:00:00').getTime())/86400000);
  if(days>45)return {cls:'stale',label:`ข้อมูลเกิน ${days} วัน · ควรเช็กใหม่`};
  if(days>21)return {cls:'watch',label:`ตรวจ ${checkedDate(item.checkedAt)} · ควรเช็กซ้ำใกล้วันไป`};
  return {cls:'fresh',label:`ตรวจล่าสุด ${checkedDate(item.checkedAt)}`};
 }
 function statusBadge(item){
  if(entryType(item.id)!=='food')return '';
  const fresh=freshness(item),open=item.operationalStatus==='open';
  return `<div class="dc-statusline"><span class="dc-status ${open?'open':'verify'}">${esc(item.statusText|| (open?'✅ พบว่ายังเปิด':'⚠️ ต้องเช็ก'))}</span><span class="dc-freshness ${fresh.cls}">${esc(fresh.label)}</span></div>`;
 }
 function favoriteButton(item){const on=saved().has(item.id);return button(on?'♥ อยากไปแล้ว':'♡ อยากไป','wish',item.id,'dc-wish',`aria-pressed="${on}" aria-label="${on?'นำออกจาก':'เพิ่มใน'}รายการอยากไป ${esc(item.name)}"`)}
 function networkText(){return navigator.onLine?'ข้อมูลหลักอ่านได้ออฟไลน์หลังแคชแอป · รูป/Maps/เว็บภายนอกต้องใช้อินเทอร์เน็ตครั้งแรก':'ตอนนี้ออฟไลน์ · รูปที่เคยเปิดแล้วอาจยังแสดงจาก cache ได้';}

 function savePhotoCache(){try{localStorage.setItem(PHOTO_CACHE_KEY,JSON.stringify(photoCache))}catch{}}
 async function fetchJSON(url){const r=await fetch(url,{cache:'force-cache'});if(!r.ok)throw Error('photo lookup failed');return r.json()}
 async function resolvePhoto(item){
  if(item.image)return {url:item.image,source:item.imageSource||item.sourceURL||'',credit:item.imageCredit||'',exact:true};
  if(photoCache[item.id]?.url)return photoCache[item.id];
  const query=item.photoQuery||item.mapQuery||`${item.name} ${cityName(item.city)} Japan`;
  try{
   const wiki='https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrnamespace=0&gsrlimit=4&prop=pageimages%7Cinfo&piprop=thumbnail%7Coriginal&pithumbsize=1200&inprop=url&format=json&origin=*&gsrsearch='+encodeURIComponent(query);
   const data=await fetchJSON(wiki),pages=Object.values(data.query?.pages||{}).sort((a,b)=>(a.index||99)-(b.index||99));
   const p=pages.find(x=>x.thumbnail?.source||x.original?.source);
   if(p){const hit={url:p.original?.source||p.thumbnail.source,source:p.canonicalurl||p.fullurl||'',credit:'Wikipedia / Wikimedia Commons',exact:true};photoCache[item.id]=hit;savePhotoCache();return hit}
  }catch{}
  try{
   const commons='https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrlimit=8&prop=imageinfo&iiprop=url%7Cmime%7Cextmetadata&iiurlwidth=1200&format=json&origin=*&gsrsearch='+encodeURIComponent(query);
   const data=await fetchJSON(commons),pages=Object.values(data.query?.pages||{}).sort((a,b)=>(a.index||99)-(b.index||99));
   for(const p of pages){const ii=p.imageinfo?.[0];if(!ii||!String(ii.mime||'').startsWith('image/')||ii.mime==='image/svg+xml')continue;const hit={url:ii.thumburl||ii.url,source:ii.descriptionurl||'',credit:'Wikimedia Commons',exact:true};photoCache[item.id]=hit;savePhotoCache();return hit}
  }catch{}
  // Final safety fallback: a different relevant photo search term rather than repeating one area image.
  const fallbackQuery=entryType(item.id)==='food'?`${item.mustTry||item.categories?.[1]||'Japanese food'} ${cityName(item.city)} Japan`:`${areaName(item)} ${cityName(item.city)} Japan landmark`;
  try{
   const commons='https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrlimit=10&prop=imageinfo&iiprop=url%7Cmime&iiurlwidth=1200&format=json&origin=*&gsrsearch='+encodeURIComponent(fallbackQuery);
   const data=await fetchJSON(commons),pages=Object.values(data.query?.pages||{});
   for(const p of pages){const ii=p.imageinfo?.[0];if(!ii||!String(ii.mime||'').startsWith('image/')||ii.mime==='image/svg+xml')continue;const hit={url:ii.thumburl||ii.url,source:ii.descriptionurl||'',credit:'Wikimedia Commons · ภาพประกอบย่าน/เมนู',exact:false};photoCache[item.id]=hit;savePhotoCache();return hit}
  }catch{}
  return null;
 }
 function photoShell(item){
  const fixed=item.image;
  return `<div class="dc-photo-wrap"><div class="dc-art dc-art-${esc(item.art||discoverAreas[item.area]?.art||'city')}" aria-hidden="true"><span class="dc-art-circle"></span><span class="dc-art-lines"></span><span class="dc-art-label">${esc(item.name)}</span></div><button type="button" class="dc-photo ${fixed?'ready':''}" data-discover="photo" data-id="${esc(item.id)}" data-photo-id="${esc(item.id)}" aria-label="ขยายภาพ ${esc(item.name)}"><img ${fixed?`src="${esc(fixed)}"`:''} alt="ภาพ ${esc(item.name)}" loading="lazy" referrerpolicy="no-referrer" ${fixed?'':'hidden'}><span>${fixed?'ดูภาพใหญ่ ↗':'กำลังหารูป…'}</span></button></div>`;
 }
 async function hydratePhotos(root=document){
  const nodes=[...root.querySelectorAll?.('.dc-photo[data-photo-id]')||[]];
  await Promise.all(nodes.map(async b=>{
   if(b.classList.contains('ready')||b.dataset.loading==='1')return;
   const item=entryById.get(b.dataset.photoId);if(!item)return;b.dataset.loading='1';
   const ph=await resolvePhoto(item);delete b.dataset.loading;
   if(!ph)return b.classList.add('failed');
   const img=b.querySelector('img'),label=b.querySelector('span');img.src=ph.url;img.hidden=false;img.dataset.photoSource=ph.source||'';img.dataset.photoCredit=ph.credit||'';b.classList.add('ready');if(label)label.textContent=ph.exact?'ดูภาพใหญ่ ↗':'ดูภาพประกอบ ↗';
  }));
 }
 async function photoModal(id){
  const item=entryById.get(id);if(!item)return;
  const ph=await resolvePhoto(item);if(!ph){h.toast('หารูปออนไลน์ไม่สำเร็จในตอนนี้');return}
  h.modal(`ภาพ · ${esc(item.name)}`,`<div class="discover dc-photo-modal"><img src="${esc(ph.url)}" alt="ภาพ ${esc(item.name)}" referrerpolicy="no-referrer"><p><b>${esc(item.name)}</b><br><span class="muted">${esc(item.nameTH||'')} · ${esc(areaName(item))}</span></p>${!ph.exact?'<p class="notice warn">ภาพนี้เป็นภาพประกอบย่าน/เมนู ไม่ใช่ภาพหน้าร้านหรือจุดนั้นโดยตรง</p>':''}${ph.credit?`<p class="note">ภาพ: ${esc(ph.credit)}</p>`:''}${ph.source?external('ดูแหล่งภาพ ↗',ph.source,'full'):''}</div>`);
 }

 function card(item){
  const isFood=entryType(item.id)==='food';
  const foodExtra=isFood?`<div><dt>📅 จองไหม</dt><dd>${esc(item.reservationLabel||'เช็กกับร้าน')}</dd></div><div><dt>🕐 เวลา</dt><dd>${esc(item.hoursNote||item.recommendedTime||'-')}</dd></div>`:`<div><dt>⏱ เผื่อเวลา</dt><dd>${esc(item.duration||hours(item.durationMinutes||0))}</dd></div><div><dt>🕐 เหมาะไป</dt><dd>${esc(item.recommendedTime||'-')}</dd></div>`;
  return `<article class="dc-card" data-place="${item.id}">${photoShell(item)}<div class="dc-card-body"><div class="dc-kicker">${esc(areaName(item))} ${item.indoor?'· ในอาคาร':''}</div><h3>${button(esc(item.name),'detail',item.id,'dc-title')}</h3><p class="dc-th">${esc(item.nameTH||'')}</p>${statusBadge(item)}<div class="dc-tags">${chips(item)}</div><p class="dc-description">${esc(item.description)}</p><dl class="dc-facts"><div><dt>🚉 สถานี</dt><dd>${esc(item.station||'-')}</dd></div><div><dt>💴 ${isFood?'งบคร่าวๆ':'ค่าเข้า'}</dt><dd>${esc(priceText(item))}</dd></div>${foodExtra}${isFood?`<div><dt>🍽 เมนูเด่น</dt><dd>${esc(item.mustTry||'-')}</dd></div>`:''}</dl><div class="dc-card-actions">${external('🗺 Maps ↗',mapURL(item))}${isFood?external('🌐 ร้าน ↗',item.officialURL||item.sourceURL):favoriteButton(item)}${isFood&&item.bookingURL?external('📅 จอง ↗',item.bookingURL):''}${isFood?favoriteButton(item):''}${button('＋ เพิ่มลงทริป','add',item.id,'primary')}${button(isFood?'ดูรายละเอียดร้านทั้งหมด →':'รายละเอียด · ไปต่อไหนดี →','detail',item.id,'dc-details')}</div></div></article>`;
 }
 function routeCard(r){const f=routeFacts(r);return `<article class="dc-route"><span class="dc-kicker">${r.stops.length} จุด · ประมาณ ${hours(r.durationMinutes)}</span><h3>${esc(r.name)}</h3><p>${esc(r.description)}</p><div class="dc-route-stops">${r.stops.map((id,i)=>`${i?'<span aria-hidden="true">→</span>':''}${button(esc(tourismById.get(id)?.name||id),'detail',id,'dc-stop')}`).join('')}</div><p class="note">${esc(routePriceText(r))} · ไม่รวมอาหาร / เดินทาง / ช้อป</p>${button('＋ เพิ่มทั้ง Route ลงทริป','addroute',r.id,'primary full')}</article>`}

 function filteredItems(localFilters=filters){
  const terms=normalize(localFilters.query).split(/\s+/).filter(Boolean),list=itemsForMode(localFilters.mode);
  return list.filter(item=>item.city===localFilters.city&&(!localFilters.area||item.area===localFilters.area)&&(!localFilters.wishlist||saved().has(item.id))&&(!foodMode()||localFilters.foodTab==='all'||item.foodTab===localFilters.foodTab)&&(localFilters.categories||[]).every(c=>item.categories.includes(c))&&quickMatch(item,localFilters.quick,localFilters.mode)&&terms.every(s=>(s!=='ฟรี'||(entryType(item.id)==='place'&&item.admissionJPY===0))&&searchableText(item).includes(s)));
 }
 function results(){
  const list=filteredItems(),exists=currentItems().some(p=>p.city===filters.city);
  if(!exists)return `<div class="dc-empty"><span>🧳</span><h2>${esc(cityName(filters.city))} กำลังเตรียมข้อมูล</h2><p>${foodMode()?'ร้านอาหารรอบนี้ลงข้อมูล Tokyo, Osaka และ Fuji ก่อน':'ตอนนี้มี Tokyo, Disney Resort, Osaka และ Fuji แล้ว'}</p>${button(`ดู${foodMode()?'ร้านอาหาร':'สถานที่'}ใน Tokyo`,'city','tokyo','primary')}</div>`;
  if(!list.length)return `<div class="dc-empty"><span>🔎</span><h2>ยังไม่เจอ${foodMode()?'ร้าน':'สถานที่'}ที่ตรงใจ</h2><p>ลองลดตัวกรอง เปลี่ยนโซน หรือเปลี่ยนคำค้น</p>${button('ล้างตัวกรองทั้งหมด','reset','','primary')}</div>`;
  const shown=list.slice(0,limit),groups=[...new Set(shown.map(p=>p.area))];
  return `<p class="dc-result-count" role="status">${filters.wishlist?'อยากไปในทริปนี้':foodMode()?'ร้านอาหารแนะนำ':'สถานที่แนะนำ'} · ${list.length} แห่ง</p><p class="dc-offline">${esc(noteRate())}${foodMode()?'<br>🏮 Local hidden gem = การคัดเชิงแนะนำของชุดข้อมูล ไม่ใช่อันดับทางการ':''}</p>${groups.map(a=>`<section class="dc-zone"><h2>${esc(discoverAreas[a]?.name||a)}</h2><div class="dc-grid">${shown.filter(p=>p.area===a).map(card).join('')}</div></section>`).join('')}${list.length>limit?button(`ดูเพิ่มอีก ${Math.min(9,list.length-limit)} แห่ง`,'more','','full dc-more'):''}`;
 }
 function routesView(){if(foodMode()||filters.wishlist)return '';const routes=discoverRoutes.filter(r=>r.city===filters.city);return routes.length?`<section class="dc-routes-section" id="discover-routes" tabindex="-1"><h2>Route แนะนำ</h2><p class="dc-result-count">วางลำดับมาให้แล้ว ใช้เป็นไอเดียทริปได้ทันที</p><div class="dc-route-grid">${routes.map(routeCard).join('')}</div></section>`:''}
 function foodSubtabs(){return foodMode()&&!filters.wishlist?`<div class="dc-food-tabs" aria-label="ประเภทร้านอาหาร">${foodTabs.map(([id,label])=>button(label,'foodtab',id,'dc-food-tab '+(filters.foodTab===id?'selected':''),`aria-pressed="${filters.foodTab===id}"`)).join('')}</div>`:''}
 function view(){
  const areas=[...new Set(currentItems().filter(p=>p.city===filters.city).map(p=>p.area))],selectedCats=new Set(filters.categories),searchPlaceholder=foodMode()?'ค้นหาร้าน ย่าน หรือเมนู เช่น ramen, sushi, cafe':'ค้นหาสถานที่ ย่าน หรือ วิว / วัด / ช้อป';
  const html=`<div class="discover"><section class="dc-hero"><div><p class="dc-eyebrow">DISCOVER JAPAN</p><h1>${foodMode()?'วันนี้กินอะไรดี?':'วันนี้ไปไหนดี?'}</h1><p>${foodMode()?'ร้านดัง ร้าน local คาเฟ่ พร้อมสถานะจองและวันที่ตรวจข้อมูล':'เลือกที่ที่ชอบ แล้วเติมลงวันของคุณ'}</p></div><div class="dc-hero-help"><svg class="dc-compass" viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="33" fill="none" stroke="currentColor" stroke-width="1"/><path d="m51 24-7 21-16 11 8-21Z" fill="currentColor"/><circle cx="40" cy="40" r="3" fill="#eef2e9"/></svg>${!foodMode()?button('🎲 ไม่รู้จะไปไหน','chooser','','primary'):button('🍽 เลือกร้านแล้วเพิ่มลงวัน','noop','','primary', 'disabled')}<small>${foodMode()?'เช็กจอง · เวลา · สถานะก่อนออกเดินทาง':'เลือกเวลา · งบ · สิ่งที่ชอบ'}</small></div></section><section class="dc-controls"><label class="dc-search"><span aria-hidden="true">⌕</span><input id="discover-search" type="search" autocomplete="off" placeholder="${esc(searchPlaceholder)}" aria-label="ค้นหา" value="${esc(filters.query)}"></label><div class="dc-view-tabs">${button('สถานที่','mode','places','dc-view-tab '+(!foodMode()&&!filters.wishlist?'selected':''),`aria-pressed="${!foodMode()&&!filters.wishlist}"`)}${button('ร้านอาหาร','mode','food','dc-view-tab '+(foodMode()&&!filters.wishlist?'selected':''),`aria-pressed="${foodMode()&&!filters.wishlist}"`)}${button(`♡ อยากไป <span data-dc-count>${visibleSavedCount()}</span>`,'wishlist','','dc-view-tab '+(filters.wishlist?'selected':''),`aria-pressed="${filters.wishlist}"`)}</div>${foodSubtabs()}<div class="dc-scroll dc-cities">${discoverCities.map(c=>button(esc(c.name),'city',c.id,'dc-chip '+(filters.city===c.id?'selected':''),`aria-pressed="${filters.city===c.id}"`)).join('')}</div><div class="dc-scroll dc-quicks">${quicks.map(([k,label])=>button(label,'quick',k,'dc-chip '+(filters.quick===k?'selected':''),`aria-pressed="${filters.quick===k}"`)).join('')}</div><div class="dc-filter-bottom"><details class="dc-category-details" ${(filters.categories.length||filters.area)?'open':''}><summary>ตัวกรองเพิ่มเติม <span>${filters.categories.length?`· ${filters.categories.length} หมวด`:''}</span></summary><label class="dc-area"><span>โซน</span><select id="discover-area"><option value="">ทุกโซน</option>${areas.map(a=>`<option value="${a}" ${filters.area===a?'selected':''}>${esc(discoverAreas[a]?.name||a)}</option>`).join('')}</select></label><p class="dc-filter-label">หมวดที่อยากได้</p><div class="dc-category-grid">${currentCategoryIds().map(id=>{const c=categoryById.get(id);if(!c)return '';return button(`${c.emoji} ${esc(c.label)}`,'category',id,'dc-chip '+(selectedCats.has(id)?'selected':''),`aria-pressed="${selectedCats.has(id)}"`)}).join('')}</div></details>${button('ล้างตัวกรอง','reset','','dc-clear')}</div></section><p class="dc-offline" data-dc-network>${esc(networkText())}</p><div id="discover-results">${results()}</div><div id="discover-routes-wrap">${routesView()}</div><p class="note dc-source-note">ข้อมูลราคา/เวลา/การจองอาจเปลี่ยนได้ ร้านอาหารจึงแสดง “วันที่ตรวจล่าสุด” และลิงก์ official/source เพื่อเช็กซ้ำก่อนเดินทาง</p></div>`;
  setTimeout(()=>hydratePhotos(document),0);return html;
 }
 function paintResults(){const r=document.querySelector('#discover-results');if(r)r.innerHTML=results();const rr=document.querySelector('#discover-routes-wrap');if(rr)rr.innerHTML=routesView();document.querySelectorAll('[data-dc-count]').forEach(x=>x.textContent=visibleSavedCount());document.querySelectorAll('[data-dc-network]').forEach(x=>x.textContent=networkText());setTimeout(()=>hydratePhotos(document),0)}

 function detail(id){
  const item=entryById.get(id);if(!item)return;const isFood=entryType(id)==='food',fresh=freshness(item),nearby=(item.nearby||[]).filter(n=>tourismById.has(n.id));
  const status=isFood?`<section class="dc-safety ${item.operationalStatus==='open'?'ok':'warn'}"><div><b>${esc(item.statusText||'สถานะร้าน')}</b><span class="dc-freshness ${fresh.cls}">${esc(fresh.label)}</span></div><p>${esc(item.statusNote||'')}</p>${item.warningNote?`<p><b>ระวัง:</b> ${esc(item.warningNote)}</p>`:''}</section>`:'';
  const foodDetails=isFood?`<section class="dc-detail-section"><h3>📅 การจอง</h3><p><b>${esc(item.reservationLabel||'เช็กกับร้าน')}</b><br>${esc(item.reservationNote||'')}</p>${item.queueNote?`<p class="note"><b>คิว:</b> ${esc(item.queueNote)}</p>`:''}${item.bookingURL?external('จองโต๊ะ / ดู availability ↗',item.bookingURL,'full'):''}</section><section class="dc-detail-section"><h3>🕐 เวลา / วันหยุด</h3><p><b>เวลา:</b> ${esc(item.hoursNote||'เช็กเว็บไซต์ร้าน')}<br><b>วันหยุด:</b> ${esc(item.closedDaysNote||'เช็กเว็บไซต์ร้าน')}</p>${item.paymentNote?`<p class="note"><b>ชำระเงิน:</b> ${esc(item.paymentNote)}</p>`:''}</section><section class="dc-detail-section"><h3>🍽 กินอะไร</h3><p><b>เมนูเด่น:</b> ${esc(item.mustTry||'-')}<br><b>งบ:</b> ${esc(priceText(item,true))}${item.budgetNote?`<br><span class="muted">${esc(item.budgetNote)}</span>`:''}</p></section>`:'';
  h.modal(item.name,`<div class="discover dc-detail">${photoShell(item)}<div class="dc-kicker">${esc(cityName(item.city))} · ${esc(areaName(item))}${item.indoor?' · ในอาคาร':''}</div><h3>${esc(item.name)}</h3><p class="dc-th">${esc(item.nameTH||'')}</p>${status}<div class="dc-tags">${chips(item)}</div><p>${esc(item.description)}</p><dl class="dc-facts"><div><dt>🚉 สถานี</dt><dd>${esc(item.station||'-')}</dd></div><div><dt>💴 ${isFood?'งบคร่าวๆ':'ค่าเข้า'}</dt><dd>${esc(priceText(item,true))}</dd></div>${!isFood?`<div><dt>⏱ เผื่อเวลา</dt><dd>${esc(item.duration||hours(item.durationMinutes||0))}</dd></div><div><dt>🕐 เหมาะไป</dt><dd>${esc(item.recommendedTime||'-')}</dd></div>`:''}</dl>${item.tip?`<p class="notice"><b>ทิป:</b> ${esc(item.tip)}</p>`:''}${foodDetails}<div class="dc-modal-actions">${favoriteButton(item)}${button('＋ เพิ่มลงทริป','add',item.id,'primary')}${external('🗺 Google Maps ↗',mapURL(item))}${isFood?external('🌐 เว็บไซต์ร้าน ↗',item.officialURL||item.sourceURL):''}${isFood&&item.sourceURL&&item.sourceURL!==(item.officialURL||'')?external(`🔎 แหล่งตรวจข้อมูล ↗`,item.sourceURL):''}</div>${nearby.length?`<h3>จากจุดนี้ไปจุดถัดไป</h3><div class="dc-nearby">${nearby.map(n=>button(`<span>${esc(tourismById.get(n.id).name)}</span><small>${esc(n.label)}</small> →`,'detail',n.id,'dc-nearby-row')).join('')}</div>`:''}<p class="note">${esc(noteRate())}<br>${isFood?`แหล่งข้อมูล: ${esc(item.sourceName||'ร้าน/แหล่งที่แนบไว้')} · `:''}${item.checkedAt?`ตรวจ ${esc(checkedDate(item.checkedAt))}`:''}</p></div>`);
  setTimeout(()=>hydratePhotos(document.querySelector('#modal')),0);
 }

 function toggleWish(id){const item=entryById.get(id);if(!item)return;const desired=!saved().has(id);let added=false;h.commit((s,t)=>{t.places=t.places||[];let x=t.places.find(x=>x.discoverId===id)||t.places.find(x=>!x.discoverId&&normalize(x.name)===normalize(item.name));if(x){x.discoverId=id;x.star=desired;added=x.star}else{t.places.push({id:h.uid(),name:item.name,city:cityName(item.city),note:`${item.description}\n${item.station||''}\n${priceText(item,true)}`,star:true,visited:false,discoverId:id});added=true}});paintResults();h.toast(added?'เก็บในอยากไปของทริปนี้แล้ว':'นำออกจากอยากไปแล้ว')}
 function openAdd(id,isRoute=false){const target=isRoute?discoverRoutes.find(r=>r.id===id):entryById.get(id);if(!target)return;const t=h.trip(),ds=h.dates(t);if(t.setupComplete===false||!ds.length){h.modal('สร้างทริปก่อนเพิ่มแผน',`<p>เก็บรายการที่ชอบไว้ก่อนได้ แล้วตั้งชื่อทริปกับวันเดินทางของคุณ</p>${button('ตั้งค่าทริป','setup','','primary')}`);return}const list=isRoute?target.stops.map(id=>tourismById.get(id)).filter(Boolean):[target];h.modal(`ต้องการเพิ่ม ${esc(target.name)} วันไหน?`,`<form id="discover-add-form" class="discover" data-trip="${esc(t.id)}" data-target="${esc(id)}" data-route="${isRoute}"><p class="formerror" role="alert" hidden></p><p>ทริป <b>${esc(t.name)}</b>${isRoute?` · ${list.length} จุด ตามลำดับ Route`:''}</p><label class="field">เลือกวันที่<select name="date" required>${ds.map(d=>`<option value="${d}" ${d===h.today()?'selected':''}>${esc(fullDate(d))}</option>`).join('')}</select></label><label class="field">เวลา<input type="time" name="time"></label><ol class="dc-add-list">${list.map(p=>`<li>${esc(p.name)}</li>`).join('')}</ol><p class="note">ร้านอาหาร/สถานที่ยังต้องจองจริงกับผู้ให้บริการเอง ปุ่มนี้เพิ่มลงแผนเท่านั้น</p><div class="dialogactions">${button('ยกเลิก','cancel')}<button type="submit" class="btn primary">ยืนยันเพิ่ม${isRoute?'ทั้ง Route':'ลงแผน'}</button></div></form>`)}
 function addToTrip(form){const t=h.trip();if(t.id!==form.dataset.trip)throw Error('ทริปเปลี่ยนแล้ว กรุณาเลือกวันใหม่');const data=new FormData(form),date=data.get('date'),time=data.get('time');if(!h.dates(t).includes(date))throw Error('เลือกวันภายในทริปนี้');const route=form.dataset.route==='true'?discoverRoutes.find(r=>r.id===form.dataset.target):null;const items=route?route.stops.map(id=>tourismById.get(id)).filter(Boolean):[entryById.get(form.dataset.target)].filter(Boolean);if(!items.length)throw Error('ไม่พบรายการ');let clock=time?Number(time.slice(0,2))*60+Number(time.slice(3)):null;if(time&&!/^([01]\d|2[0-3]):[0-5]\d$/.test(time))throw Error('ตรวจเวลาอีกครั้ง');const duration=route?route.durationMinutes:(items[0].durationMinutes||60);if(clock!==null&&clock+duration>1440)throw Error('เวลาอาจข้ามวัน');const padding=route?(route.durationMinutes-items.reduce((n,p)=>n+(p.durationMinutes||0),0))/Math.max(1,items.length-1):0;const events=items.map(item=>{const isFood=entryType(item.id)==='food',event={id:h.uid(),date,time:clock===null?'':`${String(Math.floor(clock/60)).padStart(2,'0')}:${String(Math.floor(clock%60)).padStart(2,'0')}`,title:item.name,note:`${item.nameTH||''}\nสถานี: ${item.station||'-'}\n${isFood?'งบคร่าวๆ':'ค่าเข้า'}: ${priceText(item,true)}\n${isFood?`จอง: ${item.reservationLabel||'เช็กกับร้าน'}\nตรวจล่าสุด: ${checkedDate(item.checkedAt)}\n`:''}${item.tip||''}`,done:false,bookingStatus:isFood&&['ควรจอง','แนะนำจอง','แนะนำจองมาก'].some(x=>(item.reservationLabel||'').includes(x))?'need':'planned',entryTime:'',discoverId:item.id,...(route?{discoverRoute:route.id}:{})};if(clock!==null)clock+=Math.max(0,(item.durationMinutes||60)+Math.max(0,padding));return event});let count=0;h.commit((s,trip)=>{for(const e of events){if(trip.events.some(x=>x.date===date&&(x.discoverId===e.discoverId||normalize(x.title)===normalize(e.title))))continue;trip.events.push(e);count++}});h.close();h.render();h.toast(count?`✅ เพิ่ม ${route?count+' จุด':items[0].name} ลงวันที่ ${fullDate(date)} แล้ว`:'มีรายการนี้ในวันที่เลือกแล้ว')}
 function chooserModal(){chooser.city=filters.city;h.modal('🎲 ไม่รู้จะไปไหน',`<form id="discover-chooser-form" class="discover"><label class="field">เมือง<select name="city">${discoverCities.map(c=>`<option value="${c.id}" ${chooser.city===c.id?'selected':''}>${c.name}</option>`).join('')}</select></label><label class="field">เวลาที่มี<select name="minutes">${[[60,'1 ชั่วโมง'],[180,'2–3 ชั่วโมง'],[300,'ครึ่งวัน'],[600,'1 วัน']].map(([v,n])=>`<option value="${v}">${n}</option>`).join('')}</select></label><label class="field">งบค่าเข้าต่อคน<select name="budget">${[[0,'ฟรี'],[1000,'ไม่เกิน ¥1,000'],[3000,'ไม่เกิน ¥3,000'],['any','ไม่จำกัด']].map(([v,n])=>`<option value="${v}">${n}</option>`).join('')}</select></label><fieldset class="dc-interests"><legend>อยากทำอะไร</legend>${discoverCategories.filter(c=>['photo','shopping','food','culture','night','nature','theme-park'].includes(c.id)).map(c=>`<label><input type="checkbox" name="interest" value="${c.id}"> ${c.emoji} ${esc(c.label)}</label>`).join('')}</fieldset><div class="dialogactions">${button('ยกเลิก','cancel')}<button type="submit" class="btn primary">หาให้ฉัน →</button></div></form>`)}
 function showSuggestions(){const found=recommendDiscover(chooser);h.modal('ที่เที่ยวที่เข้ากับคุณ',`<div class="discover">${found.length?found.map(x=>x.kind==='route'?routeCard(discoverRoutes.find(r=>r.id===x.id)):card(tourismById.get(x.id))).join(''):'<div class="dc-empty"><h3>ยังไม่มีตัวเลือกตรงทุกเงื่อนไข</h3></div>'}${button('ปรับเงื่อนไข','chooser','','full')}</div>`);setTimeout(()=>hydratePhotos(document.querySelector('#modal')),0)}

 document.addEventListener('click',e=>{
  const online=e.target.closest('[data-discover-online]');if(online&&!navigator.onLine){e.preventDefault();h.toast('ต้องเชื่อมต่ออินเทอร์เน็ตเพื่อเปิด Maps / เว็บไซต์ / ระบบจอง');return}
  const b=e.target.closest('[data-discover]');if(!b)return;e.preventDefault();e.stopImmediatePropagation();const action=b.dataset.discover,id=b.dataset.id;
  try{switch(action){
   case'mode':filters.mode=id==='food'?'food':'places';filters.wishlist=false;filters.categories=[];filters.quick='';filters.area='';filters.query='';filters.foodTab='all';limit=9;h.render();break;
   case'foodtab':filters.foodTab=id;limit=9;paintResults();document.querySelectorAll('.dc-food-tab').forEach(x=>x.classList.toggle('selected',x.dataset.id===id));break;
   case'city':if(!discoverCities.some(c=>c.id===id))return;filters.city=id;filters.area='';limit=9;h.render();break;
   case'category':filters.categories=filters.categories.includes(id)?filters.categories.filter(c=>c!==id):[...filters.categories,id];limit=9;h.render();break;
   case'quick':filters.quick=filters.quick===id?'':id;limit=9;h.render();break;
   case'wishlist':filters.wishlist=!filters.wishlist;limit=9;h.render();break;
   case'reset':filters={...filters,query:'',categories:[],quick:'',area:'',wishlist:false,foodTab:'all'};limit=9;h.render();break;
   case'more':limit+=9;paintResults();break;
   case'detail':detail(id);break;
   case'photo':photoModal(id);break;
   case'wish':toggleWish(id);break;
   case'add':openAdd(id);break;
   case'addroute':openAdd(id,true);break;
   case'routes':document.querySelector('#discover-routes')?.scrollIntoView({behavior:'smooth',block:'start'});break;
   case'chooser':chooserModal();break;
   case'cancel':h.close();break;
   case'setup':h.close();h.settings();break;
   case'noop':break;
  }}catch(err){h.toast(err.message||'ทำรายการไม่สำเร็จ')}
 },true);
 document.addEventListener('input',e=>{if(e.target.id==='discover-search'){filters.query=e.target.value;limit=9;paintResults()}});
 document.addEventListener('change',e=>{if(e.target.id==='discover-area'){filters.area=e.target.value;limit=9;paintResults()}});
 document.addEventListener('submit',e=>{const f=e.target;if(!['discover-add-form','discover-chooser-form'].includes(f.id))return;e.preventDefault();e.stopImmediatePropagation();try{if(f.id==='discover-add-form')addToTrip(f);else{const d=new FormData(f);chooser={city:d.get('city'),minutes:Number(d.get('minutes')),budget:d.get('budget')==='any'?Infinity:Number(d.get('budget')),interests:d.getAll('interest')};showSuggestions()}}catch(err){h.toast(err.message||'บันทึกไม่สำเร็จ')}},true);
 for(const event of ['online','offline'])window.addEventListener(event,()=>{document.querySelectorAll('[data-dc-network]').forEach(x=>x.textContent=networkText());if(navigator.onLine)hydratePhotos(document)});

 function entrySummary(id){
  const item=entryById.get(id);if(!item)return null;const f=freshness(item);
  return {id:item.id,kind:entryType(item.id),name:item.name,nameTH:item.nameTH||'',city:item.city,cityName:cityName(item.city),area:item.area,areaName:areaName(item),categories:[...(item.categories||[])],station:item.station||'',checkedAt:item.checkedAt||'',freshness:f,label:f.label,price:priceText(item,true),reservationLabel:item.reservationLabel||'',reservationNote:item.reservationNote||'',bookingURL:item.bookingURL||'',officialURL:item.officialURL||item.sourceURL||'',mapURL:mapURL(item),operationalStatus:item.operationalStatus||'',statusText:item.statusText||'',warningNote:item.warningNote||'',mustTry:item.mustTry||'',recommendedTime:item.recommendedTime||'',description:item.description||''};
 }
 function suggestFoodsForEvents(events=[],limit=6){
  const planned=events.map(e=>tourismById.get(e.discoverId)).filter(Boolean),areas=new Map(),cities=new Map(),used=new Set(events.map(e=>e.discoverId).filter(Boolean));
  planned.forEach((p,i)=>{areas.set(p.area,(areas.get(p.area)||0)+Math.max(1,10-i));cities.set(p.city,(cities.get(p.city)||0)+1)});
  const preferredCity=[...cities.entries()].sort((a,b)=>b[1]-a[1])[0]?.[0]||h.trip()?.city||'tokyo';
  return discoverFoods.filter(f=>!used.has(f.id)).map(f=>{let score=0;if(areas.has(f.area))score+=100+areas.get(f.area);if(f.city===preferredCity)score+=25;if(f.foodTab==='local')score+=6;if(f.foodTab==='famous')score+=4;if(f.operationalStatus==='open')score+=3;const age=f.checkedAt?Math.max(0,Math.floor((Date.now()-new Date(f.checkedAt+'T12:00:00').getTime())/86400000)):999;score-=Math.min(age,90)/30;return {item:f,score}}).filter(x=>x.score>0||!planned.length&&x.item.city===preferredCity).sort((a,b)=>b.score-a.score||String(a.item.name).localeCompare(String(b.item.name))).slice(0,limit).map(x=>entrySummary(x.item.id));
 }
 function freshnessForIds(ids=[]){
  const rows=[...new Set(ids)].map(entrySummary).filter(Boolean);
  return {rows,fresh:rows.filter(x=>x.freshness.cls==='fresh').length,watch:rows.filter(x=>x.freshness.cls==='watch').length,stale:rows.filter(x=>x.freshness.cls==='stale').length,total:rows.length};
 }
 function catalogStats(){return {places:discoverPlaces.length,foods:discoverFoods.length,routes:discoverRoutes.length,cities:discoverCities.length};}
 return {view,entrySummary,suggestFoodsForEvents,freshnessForIds,catalogStats};
}
