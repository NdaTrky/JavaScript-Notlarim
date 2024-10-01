/* 
!STRİNG SINIFI METOTLARI 

https://www.w3schools.com/js/js_string_methods.asp
*/

let kurs = "Modern Web Geliştirme Kursu"

// CHAR AT() METHODU: Vermiş olduğumuz index numarasına göre değer döner.

let karakter = kurs.charAt(5);
console.log(karakter);

// CONCAT() METHODU: Dizilerde de kullandığımız bir ifadedir. İki tane string ifadeyi birleştirir. 

let tarih = " 2024 ";

let sonuc = kurs.concat(tarih);
console.log(sonuc);

// İNDEXOF() METHODU: Vermiş olduğumuz karakterin index numarasını verir.

let index = kurs.indexOf("n");
console.log(index)


// TOUPPERCASE() METHODU: Kelimelerin hepsini büyük harfe çevirir. (Orijinalini bozmaz.)

let buyukHarf = kurs.toUpperCase();
console.log(buyukHarf);


// TOLOWERCASE() METHODU: Kelimelerin hepsini küçük harfe çevirir. 

let kucukHarf = kurs.toLowerCase();
console.log(kucukHarf);

// TRİM() METHODU: Space karakterini temizler.

console.log(kurs.trim());

//SLİCE() METHODU: Örneğin sadece web kelimesini çekmek istiyoruz. Bu durumlarda slice kullanarak dilimlenebilir. 

console.log(kurs.slice(6,19));


// REPLACE() METHODU: Değiştirmek istediğimiz kısmı değiştirir. (Modern kelimesini Güncel ile değiştirdik.)

console.log(kurs.replace("Modern", "Güncel"))


// SPLİT() METHODU: Stringi Dizi yapar. 

console.log(kurs.split(","));


// STARTSWİTH() METHODU: Boolean değer döner. Başlangıç değeri verdiğim değer ise true döner, değilse false döner. 

console.log(kurs.startsWith("M"))


//ENDSWİTH() METHODU: Boolean değer döner. Son değeri verdiğim değer ise true döner, değilse false döner. 

console.log(kurs.endsWith("kursu"));

