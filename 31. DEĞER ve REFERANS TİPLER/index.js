/* 

! DEĞER ve REFERANS TİPLER

https://duygutemur.medium.com/javascript-primitif-ve-referans-tipleri-primitives-vs-reference-types-3b043f2845d0

? DEĞER TİPİ - İLKEL (PRİMİTİVE) VERİ TÜRLERİ 
-String
-Number
-Boolean
-Undefined
-Null
-Symbol


? REFERANS TİPİ - İLKEL OLMAYAN (REFERENCE) VERİ TÜRLERİ
-Object
-Array
-Function


*/


let dizi = [1,2,3,4] //Reference
let obje = {
    isim: "nida",
    password: "123456"  //Reference
}

let isim = "nida"
console.log(typeof isim); // deger



//! Aralarındaki fark nedir? 

let a = 5;
let b = a; 
console.log("a: ",a)
console.log("b: ",b)


b = 10;
console.log(b);




/*

Biz bir değişken tanımladığımızda ram belleğin 2 alanı var.

* 1. Stack: Değer tipindeki değişkenler stack bölümünde tutulur.
* 2. Heep: Referans tipindeki değişkenler heep bölümünde tutulur. 

*/


let dizi1 = [1,2,3];
let dizi2 = dizi1;

if(dizi1==dizi2) {
    console.log("dizi 1 ve dizi 2 birbirine eşittir.");
} else {
    console.log("dizi 1 ve dizi 2 birbirine eşit değildir.")
}



console.log(dizi1);
console.log(dizi2);
// * Birbirine eşittir çıktısını alırız. 


let dizi3= [1,2,3];
let dizi4= [1,2,3];

if(dizi3==dizi4) {
    console.log("dizi 1 ve dizi 2 birbirine eşittir.");
} else {
    console.log("dizi 1 ve dizi 2 birbirine eşit değildir.")
}

// * Birbirine eşit değildir çıktısını alırız. 
//? Neden esit değil çıktısı alırız? 
// Ram bellekte tutulan adres bilgilerinin farklı olmasından dolayı esit degillerdir. Yani değer tipli değil, referans tipli çalışırlar. 



// ! REFERANS TİPLERDE NASIL CIKTI ALIRIZ?

let dizi5 = [1,2,3];
let dizi6 = dizi5;

dizi6.push(12);

console.log(dizi5);
console.log(dizi6); // Yani burda dizi5 de yaptığımız değişiklik dizi6 yı da etkiledi. 


