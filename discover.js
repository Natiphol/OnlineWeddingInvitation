import {discoverCities,discoverCategories,discoverAreas,discoverPlaces,discoverFoods,discoverRoutes} from './places-data.js?v=110';

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
const numericPlaceFee=p=>p.admissionJPY??p.priceApproxMaxJPY??p.priceApproxMinJPY??null;
const average=(a,b)=>Math.round(((a??b??0)+(b??a??0))/2);

function quickMatch(item,q,mode='places'){
 if(!q)return true;
 if(q==='sun')return !item.indoor;
 if(q==='rain')return !!item.indoor&&item.categories.includes('rain');
 if(q==='free')return mode==='places'?item.admissionJPY===0:item.categories.includes('budget');
 if(q==='short')return (item.durationMinutes||0)<=60;
 return item.categories.includes(q);
}
function searchableText(item){
 return normalize([
  item.name,item.nameTH,areaName(item),cityName(item.city),item.station,item.description,item.mustTry,item.recommendedTime,item.duration,
  ...(item.keywords||[]),...(item.categories||[]).map(c=>categoryById.get(c)?.label||c)
 ].join(' '));
}
export function filterDiscoverPlaces(filters,savedIds=[]){
 const terms=normalize(filters.query).split(/\s+/).filter(Boolean);
 return discoverPlaces.filter(p=>p.city===filters.city&&(!filters.area||p.area===filters.area)&&(!filters.wishlist||savedIds.includes(p.id))&&(filters.categories||[]).every(c=>p.categories.includes(c))&&quickMatch(p,filters.quick,'places')&&terms.every(s=>(s!=='ฟรี'||p.admissionJPY===0)&&searchableText(p).includes(s)));
}
function routeFacts(r){
 const ps=r.stops.map(id=>tourismById.get(id)).filter(Boolean);
 const fees=ps.map(numericPlaceFee);
 return {places:ps,categories:[...new Set(ps.flatMap(p=>p.categories||[]))],admissionJPY:fees.some(f=>f==null)?null:fees.reduce((sum,f)=>sum+f,0),indoor:ps.every(p=>p.indoor)};
}
export function recommendDiscover({city,minutes,budget,interests=[]}){
 const within=(m,fee,categories)=>m<=minutes&&(budget===Infinity||fee!==null&&fee<=budget)&&interests.every(c=>categories.includes(c));
 const options=[
  ...discoverRoutes.filter(r=>r.city===city).map(r=>{const f=routeFacts(r);return {kind:'route',id:r.id,minutes:r.durationMinutes,fee:f.admissionJPY,categories:f.categories};}),
  ...discoverPlaces.filter(p=>p.city===city).map(p=>({kind:'place',id:p.id,minutes:p.durationMinutes,fee:numericPlaceFee(p),categories:p.categories}))
 ];
 return options.filter(x=>within(x.minutes,x.fee,x.categories)).sort((a,b)=>(b.kind==='route')-(a.kind==='route')||b.minutes-a.minutes).slice(0,6);
}

export function createDiscover(h){
 const {esc}=h;
 let filters={mode:'places',city:'tokyo',query:'',categories:[],quick:'',area:'',wishlist:false},limit=9;
 let chooser={city:'tokyo',minutes:180,budget:3000,interests:[]};
 const button=(text,action,id='',cls='',extra='')=>`<button type="button" class="btn ${cls}" data-discover="${action}" data-id="${esc(id)}" ${extra}>${text}</button>`;
 const external=(text,url,cls='')=>`<a class="btn ${cls}" data-discover-online href="${esc(url)}" target="_blank" rel="noopener noreferrer">${text}</a>`;
 const saved=()=>new Set((h.trip().places||[]).filter(p=>p.discoverId&&p.star).map(p=>p.discoverId));
 const rate=()=>{const r=Number(h.trip()?.rate);return Number.isFinite(r)&&r>0?r:0.23};
 const itemsForMode=mode=>mode==='food'?discoverFoods:discoverPlaces;
 const currentItems=()=>itemsForMode(filters.mode);
 const foodMode=()=>filters.mode==='food';
 const entryType=id=>entryKindById.get(id)||'place';
 const currentCategoryIds=()=>foodMode()?['food','ramen','sushi','okonomiyaki','seafood','local-specialty','cafe','dessert','budget','rain','family','couple','walk','night']:['first-trip','photo','shopping','food','culture','theme-park','night','nature','budget','rain','family','couple','walk'];
 const formatYen=n=>`¥${Math.round(n).toLocaleString()}`;
 const formatTHB=n=>`฿${Math.round(n*rate()).toLocaleString()}`;
 const approxTHB=(min,max)=>min!=null&&max!=null&&min!==max?`${formatTHB(min)}–${formatTHB(max)}`:formatTHB(min??max??0);
 function priceText(item,long=false){
  if(entryType(item.id)==='food'){
   const min=item.budgetJPYMin??item.budgetJPYMax, max=item.budgetJPYMax??item.budgetJPYMin;
   if(min==null&&max==null)return 'งบขึ้นกับเมนู';
   const yen=min!=null&&max!=null&&min!==max?`${formatYen(min)}–${formatYen(max)}`:formatYen(min??max);
   const tail=long?` · ประมาณ ${approxTHB(min,max)}* / คน`:` · ≈ ${approxTHB(min,max)}*`;
   return `ประมาณ ${yen}${tail}`;
  }
  if(item.admissionJPY===0)return 'ฟรี';
  if(item.admissionJPY!=null)return `ประมาณ ${formatYen(item.admissionJPY)} · ≈ ${formatTHB(item.admissionJPY)}*`;
  if(item.priceApproxMinJPY!=null||item.priceApproxMaxJPY!=null){
   const min=item.priceApproxMinJPY??item.priceApproxMaxJPY,max=item.priceApproxMaxJPY??item.priceApproxMinJPY;
   const yen=min!==max?`${formatYen(min)}–${formatYen(max)}`:formatYen(min);
   return `ประมาณ ${yen} · ≈ ${approxTHB(min,max)}*`;
  }
  return 'มีค่าเข้า* ตรวจราคาตามวัน';
 }
 function routePriceText(r){const f=routeFacts(r);return f.admissionJPY==null?'มีจุดเสียค่าเข้า* ตรวจราคาก่อนจอง':`ค่าเข้ารวมประมาณ ${formatYen(f.admissionJPY)} · ≈ ${formatTHB(f.admissionJPY)}*`}
 const chips=item=>item.categories.slice(0,4).map(id=>`<span>${esc(categoryById.get(id)?.label||id)}</span>`).join('');
 const modeLabel=()=>foodMode()?'ร้านอาหาร':'สถานที่';
 const listLabel=()=>foodMode()?'ร้านอาหารแนะนำ':'สถานที่แนะนำ';
 const visibleSavedCount=()=>currentItems().filter(x=>saved().has(x.id)).length;
 const noteRate=()=>`* ราคาคร่าว ๆ ต่อคน ใช้เรทในทริปปัจจุบัน ฿${rate().toFixed(2)} ต่อ ¥1`; 
 function filteredItems(localFilters=filters){
  const terms=normalize(localFilters.query).split(/\s+/).filter(Boolean);
  return itemsForMode(localFilters.mode).filter(item=>item.city===localFilters.city&&(!localFilters.area||item.area===localFilters.area)&&(!localFilters.wishlist||saved().has(item.id))&&(localFilters.categories||[]).every(c=>item.categories.includes(c))&&quickMatch(item,localFilters.quick,localFilters.mode)&&terms.every(s=>(s!=='ฟรี'||(entryType(item.id)==='place'&&item.admissionJPY===0))&&searchableText(item).includes(s)));
 }
 function photoFor(item){return item.image?{image:item.image,source:item.imageSource||'',credit:item.imageCredit||'',label:item.name}:null;}
 function art(item){
  const ph=photoFor(item),fallback=`<div class="dc-art dc-art-${esc(item.art||discoverAreas[item.area]?.art||'city')}" aria-hidden="true"><span class="dc-art-circle"></span><span class="dc-art-lines"></span><span class="dc-art-label">${esc(areaName(item)||'JAPAN')}</span></div>`;
  return ph?`<div class="dc-photo-wrap">${fallback}<button type="button" class="dc-photo" data-discover="photo" data-id="${esc(item.id)}" aria-label="ขยายภาพ ${esc(ph.label)}"><img src="${esc(ph.image)}" alt="ภาพ ${esc(ph.label)}" loading="lazy" referrerpolicy="no-referrer"><span>ดูภาพใหญ่ ↗</span></button></div>`:fallback;
 }
 function favoriteButton(item){const on=saved().has(item.id);return button(on?'♥ อยากไปแล้ว':'♡ อยากไป','wish',item.id,'dc-wish',`aria-pressed="${on}" aria-label="${on?'นำออกจาก':'เพิ่มใน'}รายการอยากไป ${esc(item.name)}"`)}
 function card(item){
  const isFood=entryType(item.id)==='food';
  const priceLabel=isFood?'💴 งบคร่าวๆ':'💴 ค่าเข้า';
  const thirdLabel=isFood?'🍽 เมนูเด่น':'⏱ เผื่อเวลา';
  const thirdValue=isFood?(item.mustTry||'เช็กเมนูหน้าร้าน'):(item.duration||hours(item.durationMinutes||0));
  return `<article class="dc-card" data-place="${item.id}">${art(item)}<div class="dc-card-body"><div class="dc-kicker">${esc(areaName(item))} ${item.indoor?'· ในอาคาร':''}</div><h3>${button(esc(item.name),'detail',item.id,'dc-title')}</h3><p class="dc-th">${esc(item.nameTH||'')}</p><div class="dc-tags">${chips(item)}</div><p class="dc-description">${esc(item.description)}</p><dl class="dc-facts"><div><dt>🚉 สถานี</dt><dd>${esc(item.station||'-')}</dd></div><div><dt>${priceLabel}</dt><dd>${esc(priceText(item))}</dd></div><div><dt>${thirdLabel}</dt><dd>${esc(thirdValue)}</dd></div><div><dt>🕐 เหมาะไป</dt><dd>${esc(item.recommendedTime||'-')}</dd></div></dl><div class="dc-card-actions">${external('🗺 แผนที่ ↗',mapURL(item))}${favoriteButton(item)}${button('＋ เพิ่มลงทริป','add',item.id,'primary')}${button(isFood?'รายละเอียดร้าน →':'รายละเอียด · ไปต่อไหนดี →','detail',item.id,'dc-details')}</div></div></article>`;
 }
 function routeCard(r){
  const f=routeFacts(r);
  return `<article class="dc-route"><span class="dc-kicker">${r.stops.length} จุด · ประมาณ ${hours(r.durationMinutes)}</span><h3>${esc(r.name)}</h3><p>${esc(r.description)}</p><div class="dc-route-stops">${r.stops.map((id,i)=>`${i?'<span aria-hidden="true">→</span>':''}${button(esc(tourismById.get(id)?.name||id),'detail',id,'dc-stop')}`).join('')}</div><p class="note">${esc(routePriceText(r))} · ไม่รวมอาหาร / เดินทาง / ช้อป</p>${button('＋ เพิ่มทั้ง Route ลงทริป','addroute',r.id,'primary full')}</article>`;
 }
 function networkText(){return navigator.onLine?'ข้อมูลหลักอ่านได้ออฟไลน์หลังแคชแอปแล้ว · รูป แผนที่ และเว็บภายนอกต้องใช้อินเทอร์เน็ต':'ตอนนี้ออฟไลน์ · อ่านข้อมูลที่บันทึกไว้ได้ แต่เปิดรูป / แผนที่ / เว็บภายนอกไม่ได้';}
 function photoModal(id){
  const item=entryById.get(id),ph=item&&photoFor(item);if(!item||!ph)return;
  h.modal(`ภาพ · ${esc(ph.label)}`,`<div class="discover dc-photo-modal"><img src="${esc(ph.image)}" alt="ภาพ ${esc(ph.label)}" referrerpolicy="no-referrer"><p><b>${esc(item.name)}</b><br><span class="muted">${esc(item.nameTH||'')} · ${esc(areaName(item))}</span></p>${ph.credit?`<p class="note">ภาพ: ${esc(ph.credit)}</p>`:''}${ph.source?external('ดูแหล่งภาพ ↗',ph.source,'full'):''}<p class="note">ภาพตัวอย่างต้องใช้อินเทอร์เน็ต ส่วนข้อมูลที่บันทึกไว้ยังอ่านออฟไลน์ได้</p></div>`);
 }
 function detail(id){
  const item=entryById.get(id);if(!item)return;
  const isFood=entryType(id)==='food';
  const sourceText=isFood?'ข้อมูลร้าน / เว็บไซต์ต้นทาง ↗':'ข้อมูลสถานที่ / เว็บไซต์ต้นทาง ↗';
  const nearby=(item.nearby||[]).filter(n=>tourismById.has(n.id));
  h.modal(item.name,`<div class="discover dc-detail">${art(item)}<div class="dc-kicker">${esc(cityName(item.city))} · ${esc(areaName(item))}${item.indoor?' · ในอาคาร':''}</div><h3>${esc(item.name)}</h3><p class="dc-th">${esc(item.nameTH||'')}</p><div class="dc-tags">${chips(item)}</div><p>${esc(item.description)}</p><dl class="dc-facts"><div><dt>🚉 สถานี</dt><dd>${esc(item.station||'-')}</dd></div><div><dt>${isFood?'💴 งบคร่าวๆ':'💴 ค่าเข้า'}</dt><dd>${esc(priceText(item,true))}</dd></div><div><dt>${isFood?'🍽 เมนูเด่น':'⏱ เผื่อเวลา'}</dt><dd>${esc(isFood?(item.mustTry||'เช็กเมนูหน้าร้าน'):(item.duration||hours(item.durationMinutes||0)))}</dd></div><div><dt>🕐 เหมาะไป</dt><dd>${esc(item.recommendedTime||'-')}</dd></div></dl>${item.tip?`<p class="notice"><b>ทิป:</b> ${esc(item.tip)}</p>`:''}<div class="dc-modal-actions">${favoriteButton(item)}${button('＋ เพิ่มลงทริป','add',item.id,'primary')}${external('🗺 เปิด Google Maps ↗',mapURL(item))}</div>${nearby.length?`<h3>จากจุดนี้ไปจุดถัดไป</h3><p class="note">เวลาเดินทางเป็นประมาณการ ไม่รวมเวลารอและเวลาเที่ยวในจุดถัดไป</p><div class="dc-nearby">${nearby.map(n=>button(`<span>${esc(tourismById.get(n.id).name)}</span><small>${esc(n.label)}</small> →`,'detail',n.id,'dc-nearby-row')).join('')}</div>`:''}<p class="note" data-dc-network>${networkText()}</p>${item.sourceURL?external(sourceText,item.sourceURL,'full'):''}<p class="note">${esc(noteRate())}${item.checkedAt?`<br>อัปเดตข้อมูลประกอบ: ${esc(item.checkedAt)}`:''}</p></div>`);
 }
 function results(){
  const list=filteredItems();
  const exists=currentItems().some(p=>p.city===filters.city);
  if(!exists)return `<div class="dc-empty"><span>🧳</span><h2>${esc(cityName(filters.city))} กำลังเตรียมข้อมูล</h2><p>${foodMode()?'ตอนนี้มีร้านอาหารใน Tokyo, Osaka และ Fuji ก่อน':'ตอนนี้มี Tokyo, Disney Resort, Osaka และ Fuji แล้ว เมืองอื่นกำลังเพิ่มข้อมูล'}</p>${button(`ดู${foodMode()?'ร้านอาหาร':'สถานที่'}ใน Tokyo`,'city','tokyo','primary')}</div>`;
  if(!list.length)return `<div class="dc-empty"><span>🔎</span><h2>${filters.wishlist?'ยังไม่มีรายการที่ตรงกับตัวกรอง':`ยังไม่เจอ${foodMode()?'ร้าน':'ที่'}ที่ตรงใจ`}</h2><p>${filters.wishlist?'กด ♡ ที่การ์ดเพื่อเก็บไว้ในทริปนี้':'ลองลดหมวดที่เลือก เปลี่ยนโซน หรือเปลี่ยนคำค้น'}</p>${button('ล้างตัวกรองทั้งหมด','reset','','primary')}</div>`;
  const shown=list.slice(0,limit),groups=[...new Set(shown.map(p=>p.area))];
  return `<p class="dc-result-count" role="status">${filters.wishlist?'อยากไปในทริปนี้':listLabel()} · ${list.length} แห่ง${filters.categories.length?` · ตรง ${filters.categories.length} หมวด`:''}</p><p class="dc-offline">${esc(noteRate())}</p>${groups.map(a=>`<section class="dc-zone"><h2>${esc(discoverAreas[a]?.name||a)}</h2><div class="dc-grid">${shown.filter(p=>p.area===a).map(card).join('')}</div></section>`).join('')}${list.length>limit?button(`ดูเพิ่มอีก ${Math.min(9,list.length-limit)} แห่ง`,'more','','full dc-more'):''}`;
 }
 function routesView(){
  if(foodMode()||filters.wishlist)return '';
  const routes=discoverRoutes.filter(r=>r.city===filters.city);
  if(!routes.length)return '';
  return `<section class="dc-routes-section" id="discover-routes" tabindex="-1"><h2>Route แนะนำ</h2><p class="dc-result-count">วางลำดับมาให้แล้ว ใช้เป็นไอเดียทริปได้ทันที</p><div class="dc-route-grid">${routes.map(routeCard).join('')}</div></section>`;
 }
 function paintResults(){
  const root=document.querySelector('#discover-results'); if(root)root.innerHTML=results();
  const routeRoot=document.querySelector('#discover-routes-wrap'); if(routeRoot)routeRoot.innerHTML=routesView();
  document.querySelectorAll('[data-dc-count]').forEach(x=>x.textContent=visibleSavedCount());
  document.querySelectorAll('[data-dc-network]').forEach(x=>x.textContent=networkText());
 }
 function view(){
  const areas=[...new Set(currentItems().filter(p=>p.city===filters.city).map(p=>p.area))];
  const selectedCats=new Set(filters.categories);
  const searchPlaceholder=foodMode()?'ค้นหาร้าน ย่าน หรือเมนู เช่น ramen, sushi, cafe':'ค้นหาสถานที่ ย่าน หรือ วิว / วัด / ช้อป';
  return `<div class="discover"><section class="dc-hero"><div><p class="dc-eyebrow">DISCOVER JAPAN</p><h1>${foodMode()?'วันนี้กินอะไรดี?':'วันนี้ไปไหนดี?'}</h1><p>${foodMode()?'รวมร้านแนะนำพื้นถิ่นและร้านดัง เพิ่มเข้าทริปได้เหมือนสถานที่เที่ยว':'เลือกที่ที่ชอบ แล้วเติมลงวันของคุณ'}</p></div><div class="dc-hero-help"><svg class="dc-compass" viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="33" fill="none" stroke="currentColor" stroke-width="1"/><path d="m51 24-7 21-16 11 8-21Z" fill="currentColor"/><circle cx="40" cy="40" r="3" fill="#eef2e9"/></svg>${!foodMode()?button('🎲 ไม่รู้จะไปไหน','chooser','','primary'):button('🗺 เปิด Route ที่วางไว้','routes','','primary')}<small>${foodMode()?'เลือกร้านแล้วเพิ่มเข้าวันได้เลย':'เลือกเวลา · งบ · สิ่งที่ชอบ'}</small></div></section><section class="dc-controls" aria-label="ค้นหาและกรอง${modeLabel()}"><label class="dc-search"><span aria-hidden="true">⌕</span><input id="discover-search" type="search" autocomplete="off" placeholder="${esc(searchPlaceholder)}" aria-label="ค้นหา${modeLabel()}" value="${esc(filters.query)}"></label><div class="dc-view-tabs" aria-label="สลับมุมมอง">${button('สถานที่','mode','places','dc-view-tab '+(!foodMode()&&!filters.wishlist?'selected':''),`aria-pressed="${!foodMode()&&!filters.wishlist}"`)}${button('ร้านอาหาร','mode','food','dc-view-tab '+(foodMode()&&!filters.wishlist?'selected':''),`aria-pressed="${foodMode()&&!filters.wishlist}"`)}${button(`♡ อยากไป <span data-dc-count>${visibleSavedCount()}</span>`,'wishlist','','dc-view-tab '+(filters.wishlist?'selected':''),`aria-pressed="${filters.wishlist}"`)} </div><div class="dc-scroll dc-cities" aria-label="เลือกเมือง">${discoverCities.map(c=>button(`${esc(c.name)}`,'city',c.id,'dc-chip '+(filters.city===c.id?'selected':''),`aria-pressed="${filters.city===c.id}"`)).join('')}</div><div class="dc-scroll dc-quicks" aria-label="เลือกตามสถานการณ์">${quicks.map(([k,label])=>button(label,'quick',k,'dc-chip '+(filters.quick===k?'selected':''),`aria-pressed="${filters.quick===k}"`)).join('')}</div><div class="dc-filter-bottom"><details class="dc-category-details" ${(filters.categories.length||filters.area)?'open':''}><summary>ตัวกรองเพิ่มเติม <span>${filters.categories.length?`· ${filters.categories.length} หมวด`:''}</span></summary><label class="dc-area"><span>โซน</span><select id="discover-area"><option value="">ทุกโซน</option>${areas.map(a=>`<option value="${a}" ${filters.area===a?'selected':''}>${esc(discoverAreas[a]?.name||a)}</option>`).join('')}</select></label><p class="dc-filter-label">หมวดที่อยากได้<span>${foodMode()?'เลือกร้านแนวที่อยากกิน':'เลือกได้หลายหมวด'}</span></p><div class="dc-category-grid">${currentCategoryIds().map(id=>{const c=categoryById.get(id);if(!c)return '';const on=selectedCats.has(id);return button(`${esc(c.emoji)} ${esc(c.label)}`,'category',id,'dc-chip '+(on?'selected':''),`aria-pressed="${on}"`)}).join('')}</div></details>${button('ล้างตัวกรอง','reset','','dc-clear')}</div><p class="dc-offline">${esc(networkText())}</p><div id="discover-results">${results()}</div><div id="discover-routes-wrap">${routesView()}</div></section></div>`;
 }
 function toggleWish(id){
  const item=entryById.get(id);if(!item)return;const desired=!saved().has(id);let added=false;
  h.commit((s,t)=>{t.places=t.places||[];let x=t.places.find(x=>x.discoverId===id)||t.places.find(x=>!x.discoverId&&normalize(x.name)===normalize(item.name));if(x){x.discoverId=id;x.star=desired;added=x.star}else{t.places.push({id:h.uid(),name:item.name,city:cityName(item.city),note:`${item.description}\n${item.station||''}\n${priceText(item,true)}`,star:true,visited:false,discoverId:id});added=true}});
  paintResults();
  document.querySelectorAll(`[data-discover="wish"][data-id="${id}"]`).forEach(b=>b.outerHTML=favoriteButton(item));
  h.toast(added?'เก็บในอยากไปของทริปนี้แล้ว':'นำออกจากอยากไปแล้ว · บันทึกในแผนเดิมยังอยู่');
 }
 function fullDate(d){return new Intl.DateTimeFormat('th-TH',{day:'numeric',month:'long',year:'numeric'}).format(new Date(d+'T12:00:00'));}
 function openAdd(id,isRoute=false){
  const target=isRoute?discoverRoutes.find(r=>r.id===id):entryById.get(id);if(!target)return;
  const t=h.trip(),ds=h.dates(t);
  if(t.setupComplete===false||!ds.length){h.modal('สร้างทริปก่อนเพิ่มแผน',`<p>เก็บรายการที่ชอบไว้ก่อนได้ แล้วตั้งชื่อทริปกับวันเดินทางของคุณ</p>${button('ตั้งค่าทริป','setup','','primary')}`);return;}
  const list=isRoute?target.stops.map(id=>tourismById.get(id)).filter(Boolean):[target];
  h.modal(`ต้องการเพิ่ม ${esc(target.name)} วันไหน?`,`<form id="discover-add-form" class="discover" data-trip="${esc(t.id)}" data-target="${esc(id)}" data-route="${isRoute}"><p class="formerror" role="alert" hidden></p><p>ทริป <b>${esc(t.name)}</b>${isRoute?` · ${list.length} จุด ตามลำดับ Route`:''}</p><label class="field">เลือกวันที่<select name="date" required>${ds.map(d=>`<option value="${d}" ${d===h.today()?'selected':''}>${esc(fullDate(d))}</option>`).join('')}</select></label><label class="field">${isRoute?'เวลาเริ่ม (เว้นว่างเพื่อจัดเวลาเอง)':'เวลา (เว้นว่างได้)'}<input type="time" name="time"></label><ol class="dc-add-list">${list.map(p=>`<li>${esc(p.name)}</li>`).join('')}</ol><p class="note">${isRoute?'ถ้าใส่เวลา ระบบจะเรียงตามลำดับ Route ให้':'เพิ่มลงแผนเดิม แล้วค่อยแก้เวลาและหมายเหตุภายหลังได้'} · รายการเดิมที่มีชื่อเดียวกันในวันเดียวกันจะไม่เพิ่มซ้ำ</p><div class="dialogactions">${button('ยกเลิก','cancel')}<button type="submit" class="btn primary">ยืนยันเพิ่ม${isRoute?'ทั้ง Route':'ลงแผน'}</button></div></form>`);
 }
 function addToTrip(form){
  const t=h.trip();if(t.id!==form.dataset.trip)throw Error('ทริปเปลี่ยนแล้ว กรุณาเลือกวันใหม่');
  const data=new FormData(form),date=data.get('date'),time=data.get('time');
  if(!h.dates(t).includes(date))throw Error('เลือกวันภายในทริปนี้');
  const route=form.dataset.route==='true'?discoverRoutes.find(r=>r.id===form.dataset.target):null;
  const items=route?route.stops.map(id=>tourismById.get(id)).filter(Boolean):[entryById.get(form.dataset.target)].filter(Boolean);
  if(!items.length)throw Error('ไม่พบรายการ');
  let clock=time?Number(time.slice(0,2))*60+Number(time.slice(3)):null;
  if(time&&!/^([01]\d|2[0-3]):[0-5]\d$/.test(time))throw Error('ตรวจเวลาอีกครั้ง');
  const duration=route?route.durationMinutes:(items[0].durationMinutes||60);if(clock!==null&&clock+duration>1440)throw Error('เวลาอาจข้ามวัน กรุณาเลือกเวลาเริ่มให้เร็วขึ้นหรือเว้นว่าง');
  const padding=route?(route.durationMinutes-items.reduce((n,p)=>n+(p.durationMinutes||0),0))/Math.max(1,items.length-1):0;
  const events=items.map(item=>{const event={id:h.uid(),date,time:clock===null?'':`${String(Math.floor(clock/60)).padStart(2,'0')}:${String(Math.floor(clock%60)).padStart(2,'0')}`,title:item.name,note:`${item.nameTH||''}\nสถานี: ${item.station||'-'}\n${entryType(item.id)==='food'?'งบคร่าวๆ':'ค่าเข้า'}: ${priceText(item,true)}\n${entryType(item.id)==='food'?'เผื่อเวลา / เมนูเด่น':'เผื่อเวลา'}: ${entryType(item.id)==='food'?(item.mustTry||item.duration||'ดูหน้าร้าน'):item.duration||hours(item.durationMinutes||0)}\n${item.tip||''}${route?`\nRoute: ${route.name} · เวลาเป็นประมาณการ`:''}`,done:false,bookingStatus:'planned',entryTime:'',discoverId:item.id,...(route?{discoverRoute:route.id}:{})};if(clock!==null)clock+=Math.max(0,(item.durationMinutes||60)+Math.max(0,padding));return event});
  let count=0;h.commit((s,trip)=>{for(const e of events){if(trip.events.some(x=>x.date===date&&(x.discoverId===e.discoverId||normalize(x.title)===normalize(e.title))))continue;trip.events.push(e);count++;}});
  h.close();h.render();h.toast(count?`✅ เพิ่ม ${route?count+' จุด':items[0].name} ลงวันที่ ${fullDate(date)} แล้ว`:'มีรายการนี้ในวันที่เลือกแล้ว ไม่เพิ่มซ้ำ');
 }
 function chooserModal(){chooser.city=filters.city;h.modal('🎲 ไม่รู้จะไปไหน',`<form id="discover-chooser-form" class="discover"><p class="note">เลือกเงื่อนไข แล้วดูสถานที่หรือ Route ที่เข้ากัน</p><label class="field">เมือง<select name="city">${discoverCities.map(c=>`<option value="${c.id}" ${chooser.city===c.id?'selected':''}>${c.name}</option>`).join('')}</select></label><label class="field">เวลาที่มี<select name="minutes">${[[60,'1 ชั่วโมง'],[180,'2–3 ชั่วโมง'],[300,'ครึ่งวัน · 5 ชั่วโมง'],[600,'1 วัน · 10 ชั่วโมง']].map(([v,n])=>`<option value="${v}" ${chooser.minutes===v?'selected':''}>${n}</option>`).join('')}</select></label><label class="field">งบค่าเข้าต่อคน<select name="budget">${[[0,'ฟรี'],[1000,'ไม่เกิน ¥1,000'],[3000,'ไม่เกิน ¥3,000'],['any','ไม่จำกัด']].map(([v,n])=>`<option value="${v}" ${(chooser.budget===Infinity?'any':chooser.budget)===v?'selected':''}>${n}</option>`).join('')}</select></label><fieldset class="dc-interests"><legend>อยากทำอะไร · เลือกได้หลายอย่าง</legend>${discoverCategories.filter(c=>['photo','shopping','food','culture','night','nature','theme-park'].includes(c.id)).map(c=>`<label><input type="checkbox" name="interest" value="${c.id}" ${chooser.interests.includes(c.id)?'checked':''}> ${c.emoji} ${esc(c.label)}</label>`).join('')}</fieldset><p class="note">งบนี้คิดเฉพาะค่าเข้า ไม่รวมกิน ช้อป และรถ · เมื่อจำกัดงบ จะไม่รวมสถานที่ที่ยังระบุราคาแน่นอนไม่ได้</p><div class="dialogactions">${button('ยกเลิก','cancel')}<button type="submit" class="btn primary">หาที่เที่ยวให้ฉัน →</button></div></form>`);}
 function showSuggestions(){const found=recommendDiscover(chooser);h.modal('ที่เที่ยวที่เข้ากับคุณ',`<div class="discover"><p class="note">มีเวลา ${hours(chooser.minutes)} · งบค่าเข้า ${chooser.budget===Infinity?'ไม่จำกัด':'¥'+chooser.budget.toLocaleString()} ต่อคน${chooser.interests.length?' · '+chooser.interests.map(id=>esc(categoryById.get(id)?.label)).join(' + '):''}</p><p class="note">คัดจากข้อมูลในเครื่อง · เวลาโดยประมาณ ไม่รวมเดินทางจากจุดที่คุณอยู่ และไม่ยืนยันว่าเปิดในขณะนี้</p>${found.length?found.map(x=>x.kind==='route'?routeCard(discoverRoutes.find(r=>r.id===x.id)):card(tourismById.get(x.id))).join(''):`<div class="dc-empty"><h3>ยังไม่มีตัวเลือกตรงทุกเงื่อนไข</h3><p>ลองเพิ่มเวลา ปรับงบ หรือลดสิ่งที่อยากทำ${discoverPlaces.some(p=>p.city===chooser.city)?'':' · เมืองนี้กำลังเตรียมข้อมูล'}</p></div>`}${button('ปรับเงื่อนไข','chooser','','full')}</div>`)}
 document.addEventListener('click',e=>{
  const online=e.target.closest('[data-discover-online]');if(online&&!navigator.onLine){e.preventDefault();h.toast('ต้องเชื่อมต่ออินเทอร์เน็ตเพื่อเปิดแผนที่ รูป หรือเว็บภายนอก');return;}
  const b=e.target.closest('[data-discover]');if(!b)return;e.preventDefault();e.stopImmediatePropagation();const action=b.dataset.discover,id=b.dataset.id;
  try{switch(action){
   case'mode':filters.mode=id==='food'?'food':'places';filters.wishlist=false;filters.categories=[];filters.quick='';filters.area='';filters.query='';limit=9;h.render();break;
   case'routes':document.querySelector('#discover-routes')?.scrollIntoView({behavior:'smooth',block:'start'});document.querySelector('#discover-routes')?.focus({preventScroll:true});break;
   case'city':if(!discoverCities.some(c=>c.id===id))return;filters.city=id;filters.area='';limit=9;h.render();break;
   case'category':filters.categories=filters.categories.includes(id)?filters.categories.filter(c=>c!==id):[...filters.categories,id];limit=9;h.render();break;
   case'quick':filters.quick=filters.quick===id?'':id;limit=9;h.render();break;
   case'wishlist':filters.wishlist=!filters.wishlist;limit=9;h.render();break;
   case'reset':filters={...filters,query:'',categories:[],quick:'',area:'',wishlist:false};limit=9;h.render();break;
   case'more':limit+=9;paintResults();break;
   case'detail':detail(id);break;
   case'photo':photoModal(id);break;
   case'wish':toggleWish(id);break;
   case'add':openAdd(id);break;
   case'addroute':openAdd(id,true);break;
   case'chooser':chooserModal();break;
   case'cancel':h.close();break;
   case'setup':h.close();h.settings();break;
  }}catch(err){h.toast(err.message||'ทำรายการไม่สำเร็จ');}
 },true);
 document.addEventListener('input',e=>{if(e.target.id==='discover-search'){filters.query=e.target.value;limit=9;paintResults();}});
 document.addEventListener('change',e=>{if(e.target.id==='discover-area'){filters.area=e.target.value;limit=9;paintResults();}});
 document.addEventListener('submit',e=>{const f=e.target;if(!['discover-add-form','discover-chooser-form'].includes(f.getAttribute('id')))return;e.preventDefault();e.stopImmediatePropagation();try{if(f.getAttribute('id')==='discover-add-form')addToTrip(f);else{const d=new FormData(f);chooser={city:d.get('city'),minutes:Number(d.get('minutes')),budget:d.get('budget')==='any'?Infinity:Number(d.get('budget')),interests:d.getAll('interest')};showSuggestions();}}catch(err){h.toast(err.message||'บันทึกไม่สำเร็จ');}},true);
 for(const event of ['online','offline'])window.addEventListener(event,paintResults);
 document.addEventListener('error',e=>{const img=e.target;if(img instanceof HTMLImageElement&&img.closest('.dc-photo'))img.closest('.dc-photo').hidden=true;},true);
 return {view};
}
