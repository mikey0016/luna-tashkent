// LUNA Toshkent — ayollar shop logic 💖
const TELEGRAM_USERNAME = "uzwatch_toshkent";
const INSTAGRAM_URL = "https://www.instagram.com/uzwatch_toshkent/";

const PRODUCTS = [
 {id:1, name:"Rose Gold ayollar soati — Daniel Style", cat:"soat", price:479000, old:650000, rating:"4.9 (312)", badge:"TOP SOTUV 💖", isNew:false, pop:100, img:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&q=80&auto=format&fit=crop", desc:"Nozik rose-gold ayollar soati. Sovg'aga ideal — quti bepul.", specs:["Qalinligi: 6mm","Allergiya qilmaydi","Kafolat: 12 oy","Sovg'a qutisi 🎁"]},
 {id:2, name:"Minimal White ayollar soati", cat:"soat", price:349000, old:459000, rating:"4.8 (204)", badge:"-24%", isNew:false, pop:92, img:"https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80&auto=format&fit=crop", desc:"Oq siferblatli, kundalik va ofis uchun elegant soat.", specs:["Yaponiya mexanizmi","Charm tasma","Kafolat: 12 oy"]},
 {id:3, name:"Kristalli Sevgi uzugi 💍", cat:"uzuk", price:149000, old:229000, rating:"4.9 (421)", badge:"XIT", isNew:true, pop:99, img:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80&auto=format&fit=crop", desc:"Toshli, yaltiroq uzuk. Qoraymaydi, o'lchamlari bor.", specs:["18K oltin suvi","O'lcham: 16-19","Sovg'a qutisi"]},
 {id:4, name:"Tilla Nikoh uzugi — Love", cat:"uzuk", price:189000, old:259000, rating:"4.8 (156)", badge:"SOVG'A UCHUN", isNew:false, pop:88, img:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80&auto=format&fit=crop", desc:"Sevgilingizga, dugonangizga eng chiroyli sovg'a.", specs:["Zirkon tosh","Qoraymaydi","Otkritka bepul"]},
 {id:5, name:"Marvarid ziraklar 🤍", cat:"zirak", price:99000, old:149000, rating:"4.9 (380)", badge:"ARZON TOP", isNew:false, pop:97, img:"https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80&auto=format&fit=crop", desc:"Marvaridli, allergiya qilmaydigan ziraklar. Har kuni taqishga zo'r.", specs:["Tibbiy po'lat","Allergiya 0%","Sovg'a qopcha"]},
 {id:6, name:"Kapalakcha oltin ziraklar", cat:"zirak", price:129000, old:179000, rating:"4.7 (210)", badge:"YANGI ✨", isNew:true, pop:90, img:"https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80&auto=format&fit=crop", desc:"Trenddagi kapalak shaklidagi ziraklar. Qizlar sevimlisi.", specs:["18K suvi","Yengil, quloqni og'ritmaydi"]},
 {id:7, name:"Marvarid marjon — Princess", cat:"marjon", price:179000, old:249000, rating:"4.8 (233)", badge:"TREND", isNew:false, pop:91, img:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80&auto=format&fit=crop", desc:"Bo'yinga marvarid marjon. Ko'ylak va hijob bilan ham chiroyli.", specs:["Uzunlik: 40+5 sm","Qoraymaydi","Quti bepul"]},
 {id:8, name:"Ismli zanjir marjon (harf bilan)", cat:"marjon", price:159000, old:219000, rating:"4.9 (187)", badge:"HARFLI 💌", isNew:true, pop:94, img:"https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80&auto=format&fit=crop", desc:"O'z ismingiz harfi bilan marjon. Buyurtmada harfni yozing.", specs:["A-Z harflar","Oltin / kumush rang","Sovg'a qutisi"]},
 {id:9, name:"Pandora uslubidagi bilaguzuk", cat:"bilaguzuk", price:139000, old:199000, rating:"4.7 (298)", badge:"SET BO'LADI", isNew:false, pop:86, img:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80&auto=format&fit=crop", desc:"Sharmli bilaguzuk — yurakcha, kapalak charmlari bilan.", specs:["Sozlanuvchan","Charm qo'shib bo'ladi"]},
 {id:10, name:"Tennis bilaguzuk — kristalli", cat:"bilaguzuk", price:169000, old:239000, rating:"4.8 (145)", badge:"YALTIROQ ✨", isNew:false, pop:84, img:"https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80&auto=format&fit=crop", desc:"To'y, bazm va kundalikka yarashadigan tennis bilaguzuk.", specs:["Zirkon toshlar","Qoraymaydi"]},
 {id:11, name:"Mini charm sumka — Pink", cat:"sumka", price:329000, old:449000, rating:"4.8 (178)", badge:"XIT 👜", isNew:true, pop:89, img:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80&auto=format&fit=crop", desc:"Qizlar uchun mini yelkama sumka. Telefon, pomada sig'adi.", specs:["Eko-charm","Yelka kamar","3 rang: pink/bej/qora"]},
 {id:12, name:"Velvet kechki sumka", cat:"sumka", price:289000, old:379000, rating:"4.7 (120)", badge:"KECHKI", isNew:false, pop:80, img:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80&auto=format&fit=crop", desc:"To'y-bazm uchun zanjirli kechki sumka.", specs:["Zanjir kamar","Velvet mato"]},
 {id:13, name:"Sovg'a set: zirak + marjon + uzuk 🎁", cat:"sovga", price:299000, old:450000, rating:"5.0 (256)", badge:"SOVG'A SET", isNew:true, pop:98, img:"https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&q=80&auto=format&fit=crop", desc:"Tayyor sovg'a: zirak + marjon + uzuk bitta qutida + otkritka.", specs:["3 in 1 set","Atirgul quti bepul","Otkritka yozib beramiz"]},
 {id:14, name:"Tug'ilgan kun seti: soat + bilaguzuk", cat:"sovga", price:549000, old:750000, rating:"5.0 (98)", badge:"PREMIUM SET", isNew:true, pop:87, img:"https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&q=80&auto=format&fit=crop", desc:"Ayollar soati + bilaguzuk katta sovg'a qutisida.", specs:["Soat + bilaguzuk","Katta quti + lenta"]},
 {id:15, name:"Smart Lady Watch — pushti", cat:"soat", price:399000, old:599000, rating:"4.6 (310)", badge:"SMART ⌚", isNew:true, pop:85, img:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80&auto=format&fit=crop", desc:"Qizlar uchun smart soat: qadam, puls, qo'ng'iroq. Pushti rang.", specs:["1.8 ekran","Bluetooth qo'ng'iroq","7 kun batareya"]},
 {id:16, name:"Soch aksessuar seti — 12 dona", cat:"sovga", price:79000, old:129000, rating:"4.6 (400)", badge:"ARZON 🎀", isNew:false, pop:82, img:"https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80&auto=format&fit=crop", desc:"Zakolka, rezinka, krabik — 12 dona to'plam. Qizaloqlar uchun ham bo'ladi.", specs:["12 dona","Marvarid + atlas"]},
];

let cart = JSON.parse(localStorage.getItem('luna_cart')||'[]');
let favs = JSON.parse(localStorage.getItem('luna_fav')||'[]');
let activeCat = 'all', promoApplied = false;

const $ = id => document.getElementById(id);
const fmt = n => n.toLocaleString('uz-UZ') + " so'm";

function toast(msg){ const t=$('toast'); t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),2200); }
function catName(c){ return {soat:'Soat',uzuk:'Uzuk',zirak:'Zirak',marjon:'Marjon',bilaguzuk:'Bilaguzuk',sumka:'Sumka',sovga:"Sovg'a set"}[c]||c; }

function render(){
  let list = PRODUCTS.filter(p => activeCat==='all' || p.cat===activeCat);
  const q = $('searchInput').value.trim().toLowerCase();
  if(q) list = list.filter(p=>p.name.toLowerCase().includes(q));
  const pr = $('priceSelect').value;
  if(pr!=='all'){ const [a,b]=pr.split('-').map(Number); list=list.filter(p=>p.price>=a*1000 && p.price<=b*1000); }
  const s = $('sortSelect').value;
  if(s==='cheap') list=[...list].sort((a,b)=>a.price-b.price);
  if(s==='exp') list=[...list].sort((a,b)=>b.price-a.price);
  if(s==='new') list=[...list].sort((a,b)=>(b.isNew?1:0)-(a.isNew?1:0));
  if(s==='pop') list=[...list].sort((a,b)=>b.pop-a.pop);
  $('countLabel').textContent = `(${list.length} ta)`;
  $('productGrid').innerHTML = list.map(p=>`
   <div class="card">
    <div class="card-img" onclick="openModal(${p.id})">
      <img loading="lazy" src="${p.img}" alt="${p.name}">
      ${p.old>p.price?`<span class="tag">-${Math.round((1-p.price/p.old)*100)}%</span>`:''}
      <button class="fav ${favs.includes(p.id)?'on':''}" onclick="event.stopPropagation();toggleFav(${p.id})">♥</button>
    </div>
    <div class="card-body">
      <span class="catlabel">${catName(p.cat)}</span>
      <h3 onclick="openModal(${p.id})">${p.name}</h3>
      <div class="rate">★★★★★ <span>${p.rating}</span></div>
      <div class="price"><s>${fmt(p.old)}</s><b>${fmt(p.price)}</b></div>
      <div class="card-btns">
        <button class="btn btn-pink" onclick="addCart(${p.id})">🛍 Savat</button>
        <button class="btn btn-ghost" onclick="openModal(${p.id})">Ko'rish</button>
      </div>
    </div>
   </div>`).join('') || `<div class="empty">Hech narsa topilmadi 😕<br>Qidiruvni o'zgartirib ko'ring</div>`;
  renderCart();
}

window.addCart = id => {
  const it = cart.find(i=>i.id===id);
  if(it) it.qty++; else cart.push({id,qty:1});
  save(); toast('Savatchaga qo‘shildi 💖'); openCart();
};
window.toggleFav = id => {
  if(favs.includes(id)){ favs=favs.filter(f=>f!==id); } else { favs.push(id); toast('Sevimlilarga qo‘shildi ♡'); }
  localStorage.setItem('luna_fav',JSON.stringify(favs)); render();
};
function save(){ localStorage.setItem('luna_cart',JSON.stringify(cart)); renderCart(); }
function cartSum(){ return cart.reduce((s,i)=>{ const p=PRODUCTS.find(x=>x.id===i.id); return s+p.price*i.qty; },0); }

function renderCart(){
  const n = cart.reduce((s,i)=>s+i.qty,0);
  $('cartCount').textContent=n; $('drawerCount').textContent=n?`(${n})`:'';
  $('favCount').textContent=favs.length;
  const box=$('cartItems');
  if(!cart.length){ box.innerHTML=`<div class="empty">Savatcha bo'sh 🛍<br><br><a href="#katalog" class="btn btn-pink" onclick="closeCartFn()">Xaridni boshlash 💖</a></div>`; }
  else box.innerHTML=cart.map(i=>{ const p=PRODUCTS.find(x=>x.id===i.id); return `
    <div class="cart-item"><img src="${p.img}"><div class="ci-info"><b>${p.name}</b><div class="muted small">${fmt(p.price)}</div>
    <div class="qty"><button onclick="chQty(${p.id},-1)">−</button><span>${i.qty}</span><button onclick="chQty(${p.id},1)">+</button>
    <a href="#" style="margin-left:auto;color:#f43f5e" onclick="event.preventDefault();rmItem(${p.id})">o'chirish</a></div></div></div>`;}).join('');
  let sum=cartSum(), disc=0;
  if(promoApplied){ disc=Math.round(sum*0.2); }
  $('cartTotal').textContent=fmt(sum-disc);
  $('discountLabel').textContent = promoApplied?`Chegirma LUNA20: −${fmt(disc)} ✅`:'';
}
window.chQty=(id,d)=>{ const it=cart.find(i=>i.id===id); it.qty+=d; if(it.qty<=0) cart=cart.filter(i=>i.id!==id); save(); };
window.rmItem=id=>{ cart=cart.filter(i=>i.id!==id); save(); };

function openCart(){ $('cartDrawer').classList.add('open'); $('overlay').classList.add('show'); }
function closeCartFn(){ $('cartDrawer').classList.remove('open'); $('overlay').classList.remove('show'); }
window.closeCartFn=closeCartFn;
$('cartBtn').onclick=openCart; $('closeCart').onclick=closeCartFn; $('overlay').onclick=()=>{closeCartFn(); closeModal();};

$('applyPromo').onclick=()=>{ const v=$('promoInput').value.trim().toUpperCase(); if(v==='LUNA20'||v==='UZWATCH20'){ promoApplied=true; toast('Promokod qo‘llandi −20% 🎉'); } else toast('Promokod noto‘g‘ri ❌'); renderCart(); };
$('copyPromo').onclick=()=>{ navigator.clipboard?.writeText('LUNA20'); if($('promoInput')) $('promoInput').value='LUNA20'; toast('Promokod nusxalandi ✅'); };
$('clearCart').onclick=()=>{ cart=[]; promoApplied=false; save(); };

let modalId=null;
window.openModal=id=>{ const p=PRODUCTS.find(x=>x.id===id); modalId=id;
  $('mImg').src=p.img; $('mName').textContent=p.name; $('mDesc').textContent=p.desc;
  $('mBadge').textContent=p.badge; $('mRating').textContent=p.rating;
  $('mOld').textContent=fmt(p.old); $('mPrice').textContent=fmt(p.price);
  $('mSpecs').innerHTML=p.specs.map(s=>`<li>${s}</li>`).join('');
  $('mOrder').href=`https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent('Salom! Shu mahsulot haqida: '+p.name+' ('+fmt(p.price)+') 💖')}`;
  $('pModal').classList.add('show');
};
function closeModal(){ $('pModal').classList.remove('show'); }
$('closeModal').onclick=closeModal;
$('mAdd').onclick=()=>{ if(modalId) addCart(modalId); closeModal(); };

document.querySelectorAll('.cat').forEach(b=>b.onclick=()=>{ document.querySelectorAll('.cat').forEach(x=>x.classList.remove('active')); b.classList.add('active'); activeCat=b.dataset.cat; render(); });
$('sortSelect').onchange=render; $('priceSelect').onchange=render; $('searchInput').oninput=render;
$('burger').onclick=()=>{ const m=$('mobileNav'); m.style.display=m.style.display==='flex'?'none':'flex'; };
document.querySelectorAll('#mobileNav a').forEach(a=>a.onclick=()=>$('mobileNav').style.display='none');

function sendToTelegram(name,phone,extra){
  const items = cart.map(i=>{ const p=PRODUCTS.find(x=>x.id===i.id); return `• ${p.name} x${i.qty} — ${fmt(p.price*i.qty)}`; }).join('\n') || 'Tezkor buyurtma (katalogdan tanlanmagan)';
  const sum = cart.length? `\nJami: ${$('cartTotal').textContent}` : '';
  const msg = `💖 YANGI BUYURTMA — LUNA\n👤 Ism: ${name}\n📞 Tel: ${phone}\n${extra?`📍 ${extra}\n`:''}${items}${sum}\n\nManba: sayt (instagram: @uzwatch_toshkent)`;
  window.open(`https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(msg)}`,'_blank');
  toast('Buyurtma Telegramga yuborildi ✈️');
}
$('checkoutBtn').onclick=()=>{
  const n=$('cName').value.trim(), ph=$('cPhone').value.trim(), ad=$('cAddr').value.trim();
  if(!cart.length) return toast('Savatcha bo‘sh ❌');
  if(n.length<2) return toast('Ismingizni yozing ❌');
  if(ph.length<9) return toast('Telefon raqamni to‘liq yozing ❌');
  sendToTelegram(n,ph,ad+' | To‘lov: naqd/Click');
};
$('quickOrder').onsubmit=e=>{ e.preventDefault(); const n=$('qName').value.trim(), ph=$('qPhone').value.trim(); if(n.length<2||ph.length<9) return toast('Ma’lumotni to‘liq kiriting ❌'); sendToTelegram(n,ph,'Tezkor forma | To‘lov: '+$('qPay').value); };
$('favBtn').onclick=()=>{ if(!favs.length) return toast('Sevimlilar bo‘sh ♡'); activeCat='all'; $('searchInput').value=''; document.querySelectorAll('.cat').forEach(x=>x.classList.toggle('active',x.dataset.cat==='all'));
  const list=PRODUCTS.filter(p=>favs.includes(p.id)); $('countLabel').textContent=`(sevimli: ${list.length})`;
  $('productGrid').innerHTML=list.map(p=>`<div class="card"><div class="card-img" onclick="openModal(${p.id})"><img src="${p.img}"><button class="fav on" onclick="event.stopPropagation();toggleFav(${p.id})">♥</button></div><div class="card-body"><h3>${p.name}</h3><div class="price"><b>${fmt(p.price)}</b></div><div class="card-btns"><button class="btn btn-pink" onclick="addCart(${p.id})">🛍 Savat</button></div></div></div>`).join('');
  document.getElementById('katalog').scrollIntoView({behavior:'smooth'});
};

render();
