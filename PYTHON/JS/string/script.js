

/* 
let o'zgaruvchilarni hosil qilish uchun ishlatiladi...
Let kalit so'zi ES6 (2015) da kiritilgan.

Let bilan belgilangan o'zgaruvchilarni qayta e'lon qilib bo'lmaydi.

Let bilan aniqlangan o'zgaruvchilar foydalanishdan oldin e'lon qilinishi kerak.

Let bilan aniqlangan o'zgaruvchilar Block Scopega ega.
*/

// String

let name = "Islomjon";
let name2 = "Islomjon\n turgunov";
let a = 7;
let b = 10;
console.log(`Islomjonning yoshi ${a + b}.`);




let x = 3.14;    // O'nli kasrli son
let y = 3;       // Oddiy son


let c = 123e5;    // 12300000
let v = 123e-5;   // 0.00123


console.log(`${x+y}, ${c+v}`)



// NaN - raqam emas


let d = 100 / "Apple";

console.log(`${d}`) // Natija NaN deb elon qilinadi...

// Qiymat raqam emasligini bilish uchun JavaScriptning isNaN() funksiyasidan foydalaniladi...

let q = 100 / "Apple";

isNaN(q);

console.log(`${q}`) 