/* Obyektdagi hosil qilish */

// 1-usul
let name = 'Islomjon';
let home = 'Ferghana';

let information = {
    name: name,
    home: home,
}

console.log(information)


// 2-usul

let information2 = {
    name: 'Islomjon',
    home: 'Ferghana',
}

console.log(information2);


/* Obyektdagi qiymatlarni o'zgartirish */

// 1-usul 


information2.name = 'Nodir';
information2.home = 'Andijon';


console.log(information2);


// 2-usul 


information2['name'] = 'Sobir';
information2['home'] = 'Namangan';

console.log(information2);
