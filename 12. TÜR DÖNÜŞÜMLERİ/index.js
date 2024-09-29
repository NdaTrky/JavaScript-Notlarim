/*
TÜRK DÖNÜŞÜMLERİ 

! NEDEN İHTİYACIMIZ VAR?

* -- PRİMİTİF VERİ TİPLERİ (String - Number - Boolean - Undefined - Null.)
* -- GELİŞMİŞ VERİ TİPLERİ (Object - Function)

Bir veri türünden başka bir veri tipine dönüştürme işlemlerine tür dönüşümü deriz. 
*/

let a = 5; //number
let b = "10" //string 

console.log(a+b); 

// Biri number ve biri string olduğu için istediğimiz toplama istemini gerçekleştiremeyiz. 


//? Number sınıfı constructor (yapıcı) kullanarak çevirme; 

let c = Number(b);
console.log(typeof c);

console.log(a+c);

//* Başka bir değişken ile uğraşmak istemezsek aynı işlemi b değişkeninde de yapabiliriz. 

parseInt() //! window objesi içerisinde tanımlanmış bir fonksiyondur.

console.log(window);


//? ParseInt kullanarak çevirme;

let d = 10;
let e = parseInt("5"); //number'a çevirir. (noktadan sonrasını atar.)
console.log(a+b);
let f = parseFloat("5"); //noktadan sonrasını atmaz.


//! NUMBER TİPİNDEN STRİNGE DÖNÜŞTÜRMEK İÇİN 


//? Sting sınıfı constructor (yapıcı) kullanarak çevirme; 
let v = String(5); // ya da let v = (5).toString
let p = "10";


