/*

! SCOPE *
Türkçede KAPSAM anlamına gelmektedir. 
? 1. Global Scope
*-- En geniş, hiçbir sınırı olmayan, her yerden erişilebilen scope kavramıdır. 

var a = 5; 
? 2. Function Scope
*-- Fonksiyonun içerisinde tanımlanan değere fonksiyon içerisinde erişebiliriz. 

? 3. Block Scope
*-- Bir değişkeni fonksiyon dışındaki {} parantezleri içerisinde tanımlarsak; block scope olur.

*/ 



/*

! DEĞİŞKEN TANIMLAMA 
 


? VAR
*-- var ile bir değişken tanımlanırsa bu function scope olur.
*-- Function Scope olduğu için ram bellekte çok yer kaplar. 


function degiskenler() {
   var a = "2024"
console.log(a);
}
degiskenler();


? LET 
* -- block scope özelliğine sahiptir.


? CONST 
* -- block scope özelliğine sahiptir.
const --- constant --- sabit : değişmez anlamına gelir.

*/
