/*
! DİZİLER (ARRAYS) METOTLARI 

https://www.w3schools.com/js/js_array_methods.asp

EN SIK KULLANILAN METOTLAR ÖRNEKLERİ; 

*/


//PUSH METHODU -- dizinin sonuna eleman ekler. 

let sehirler = ["Antalya", "İzmir", "Muğla", "Bodrum", "Eskişehir"];
console.log(sehirler.length);
sehirler.push("Mersin");
console.log(sehirler);



// UNSHİFT METHODU -- Dizinin başına eleman ekler. 

sehirler.unshift("Sehirler :");
console.log(sehirler);


// POP METHODU -- Dizinin son elemanını kaldırır. Silinen elemanı döner.


let silinenSehir = sehirler.pop()
console.log(sehirler);
console.log(sehirler.length);
console.log(silinenSehir);



// SHIFT METHODU -- Dizinin başından eleman siler. 

const silinenEleman = sehirler.shift();
console.log(sehirler);
console.log(silinenEleman)


// SPLİCE METHODU -- Hem eleman eklemek hem de silmek için kullanılır. 

console.log(sehirler);
sehirler.splice(4,0, "Bursa"); //başlangıç index : 4 , silinecek değer : 0. 
console.log(sehirler);


sehirler.splice(1,2); //Birinci indexten başla 2 elemanı sil. 
console.log(sehirler)


// TO STRİNG METHODU -- ARRAY'İ STRİNGE ÇEVİRMEK İÇİN KULLANILIR. 

let stringSehirler = sehirler.toString();
console.log(stringSehirler);
console.log(typeof stringSehirler);


// JOIN METHODU -- Diziyi stringe çevirir. toString ile arasındaki fark ise, join'de araya araya eleman ekleyebiliriz.

let stringSehirler2 = sehirler.join(" - ");
console.log(stringSehirler);


// CONCAT METHODU -- Dizileri birleştirmek için kullanılır. 

let programlar = ["html", "css", "javascript", "react", "c+", "c++"];
let bilgisayar = ["mouse", "klavye"]

let birlesmisDizi = programlar.concat(bilgisayar);
console.log(birlesmisDizi);


// SLİCE (DİLİMLEMEK) -- Diziyi istediğimiz yerden kesip, yeni bir dizi oluşturabiliriz. 

let ayriDizi = programlar.slice(2, 4); //2'den başla 4'e KADAR al. 
console.log(ayriDizi);


// LENGTH ÖZELLİĞİ 

console.log(programlar.length);


// REVERSE METHODU -- Diziyi ters çevirebiliriz. 
// * Mevcut dizinin orijinal halini bozar. Yeni dizi oluşturmaz. Bu gibi durumlarda spead (...) operatörü ile yedekleyebiliriz. 

const tersProgramlar = [...programlar].reverse();
console.log(tersProgramlar);
console.log(programlar);



// SPLİT (BÖLMEK) -- Array'e çevirebiliriz. 

let isimler = "ali, veli, ayse"; 

isimler.split();
console.log(isimler);


//İNDEXOF METHODU -- Elemanın index numarasını verir.

let index = isimler.indexOf("ali"); //*string değer verilmeli. Eğer değer yoksa -1 döner. 
console.log(index);


/*
! indexof işleyişi

? indexOf metodu, aranan string'in dizideki başlangıç indeksini döner. Ancak, isimler değişkeni bir string olduğu için indexOf metodu aranan değerin toplam karakter sayısına göre konumunu verir. Örneğin, "ali, veli, ayse" stringinde:

* "ali" → 0-2
* ", " → 3-4
* "veli" → 5-9
* ", " → 10-11
* "ayse" → 12-15

Bu nedenle, "ayse" kelimesinin başlangıç indeksi 11'dir. Eğer stringi bir diziye dönüştürmek istiyorsan, split metodunu kullanabilirsin:
*/ 



// INCLUDES (İÇERMEK) METHODU -- true ya da false sonuç döner.

let elemanVarMı = isimler.includes("nida");
console.log(elemanVarMı);



