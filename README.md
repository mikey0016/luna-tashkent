# UZWATCH Toshkent — Internet-do'kon ⌚
Instagram: https://www.instagram.com/uzwatch_toshkent/

## Ishga tushirish
1. Shu papkani oching: `uzwatch-client-1`
2. `index.html` ni 2 marta bosing — brauzerda ochiladi (server shart emas)
   Yoki VS Code / PyCharm da Live Server bilan oching.
3. Buyurtmalar Telegramga keladi: `@uzwatch_toshkent` ni o'zgartiring `app.js` da:
```js
const TELEGRAM_USERNAME = "uzwatch_toshkent";
```

## Funksiyalar
- Katalog + kategoriya (erkaklar/ayollar/smart/hamyon/aksessuar)
- Qidiruv, narx filtri, saralash
- Savatcha (localStorage da saqlanadi), miqdor +/-, promokod `UZWATCH20` (-20%)
- Sevimlilar ♡, mahsulot modal oynasi
- Checkout: ism + telefon + manzil → Telegramga tayyor matn yuboriladi
- Tezkor buyurtma formasi, mobil versiya, sovg'a qutisi, kafolat bloklari

## Sozlash
- Telefon raqamni `index.html` da almashtiring: +998 97 338 55 55
- Mahsulot qo'shish: `app.js` → PRODUCTS massiviga yangi obyekt qo'shing
- Rasmlar hozir Unsplash dan — o'zingizni Instagram rasmlaringizga almashtirishingiz mumkin

## Keyingi qadam (xohlasangiz qilaman)
- Flask/Django backend + admin panel
- Click/Payme to'lov ulash
- Domen + hostingga chiqarish (uzwatch.uz)
