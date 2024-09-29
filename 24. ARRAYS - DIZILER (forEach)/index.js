/* 

! DİZİLER (ARRAYS) 

* let diziIsmi = ["Kisi1", "Kisi2", "Kisi3"];

* let diziIsmi2 = [1, true, "kisi4", null, "?", 5.12];

*/

//! DİZİ (ARRAY ) OLUŞTURMA 

let sayilar = [0,1,2,3,4,5,6,7,8,9,10];
let degerler = [0,1,2,3,6,5,7,"nida", 8, 22, "javascript"];

//* peki bu array nesnemizde istediğimiz değeri almak için ne kullanılırız?
// ---- index değerlerini. -- index 0'dan başlar.

console.log(sayilar[6]);

//değer değiştirmek için; 

degerler[degerler.length-2]="nida"
degerler[10]= "react";
console.log(degerler);


let isimler = ["nida", "semih", "burak", "merve", "rumeysa"]

console.log(isimler[2]);

/* 
!forEach Döngüsü Nedir, Nasıl Kullanılır?
*/

let dizi = ["isim1", "isim2"];
let dizi1 = new Array("isim3", "isim4");

// Yukarıdaki iki array oluşturma yöntemi de geçerlidir. Ancak ikinci kullanım daha maliyetli denilebilir. 

// ? ARRAY (DİZİLER) OBJECT VERİ TİPİNDEDİR. 


// ? FOREACH DÖNGÜSÜ ARRAYLERDE KULLANILIR. PEKİ NASIL KULLANILIR?

let isimlerr = ["isim1", "isim2", "isim3", "isim4", "isim5", "isim6"];

isimlerr.forEach(function(isim){
console.log(isim);
})

// * ForEach -- döngü çeşididir. Array'de bulunan bütün elemanları döner. 
// ? Diziler üzerinde bulunan elemanları dönmek istersek forEach döngüsünü kullanmak daha mantıklıdır. 


// * Aynı işlemi for ve while döngüleriyle de yapabiliriz.

for(let i = 0; i < isimlerr.length; i++) {
    console.log(isimlerr[i])
}


let sayac = 0;
while(sayac<isimlerr.length) {
    console.log(isimlerr[sayac])
    sayac++; // sayacı arttırmazsak sayaç her zaman 0 kalır ve sonsuz döngüye girer. 
}