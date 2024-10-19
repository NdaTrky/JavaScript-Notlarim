/*  
! Spread Operatörü

Spread operatörü (...) JavaScript'te bir diziyi veya nesneyi açmak ve elemanlarını veya özelliklerini başka bir yapı içerisine eklemek için kullanılır. Üç ana kullanım alanı vardır:


*/

// * Dizileri birleştirme veya kopyalama:

const dizi1 = [1, 2, 3];
const dizi2 = [4, 5, 6];
const birlesikDizi = [...dizi1, ...dizi2]; // [1, 2, 3, 4, 5, 6]

const diziKopya = [...dizi1]; // [1, 2, 3]



// * Nesneleri birleştirme veya kopyalama:

const nesne1 = { ad: "Nida", yas: 25 };
const nesne2 = { sehir: "Ankara", ulke: "Türkiye" };
const birlesikNesne = { ...nesne1, ...nesne2 };

// Sonuç: { ad: "Nida", yas: 25, sehir: "Ankara", ulke: "Türkiye" }

const nesneKopya = { ...nesne1 };




//* Fonksiyonlara argüman olarak dizi elemanlarını geçirme:

const sayilar = [1, 2, 3];
const toplam = (a, b, c) => a + b + c;
console.log(toplam(...sayilar)); // 6
