
// TARAYICLARIMIZDA 2 ADET STORAGE ALANI VAR.
// * 1. LOCALSTORAGE
// * 2. SESSION STORAGE


//! DEVTOOLS -- APPLICATION -- LOCAL AND SESSION STROGE. 


// ? STORAGE - DEPOLAMA ANLAMINA GELMEKTEDİR. 


// ! ARALARINDAKİ FARK NEDİR?

// * SESSION STORAGE : Bir değer verdiğimizde, tarayıcıyı kapattığımız zaman bu değer silinir. 

// * LOCAL STORAGE : Bir değer girdiğimizde, tarayıcıyı ya da bilgisayarı kapatsak dahi silinmez. 

// - Bunun dışında aralarında herhangi bir fark bulunmaz. 



//! Session Storage Kullanımı 

console.log(window);

sessionStorage.setItem("isim", "Nida");
sessionStorage.setItem("soyisim","türkay");


sessionStorage.removeItem("soyisim");

sessionStorage.getItem("isim"); // Burda bir key ile değeri aldık. 
// Değeri aldıktan sonra, projemizdeki ihtiyaç doğrultusunda;
// * Bunu veri tabanına kaydedebiliriz, mail atabiliriz, rest apı gonderebiliriz, ön yüz üzerinde göstermek gibi alternatiflerle kullanabiliriz.


let value = sessionStorage.getItem("soyisim");
if(value===null){
    console.log("Değer bulunamadı");
} else {
    console.log(value);
}

// Sessıon Storage'da bütün değerleri silmek istersek;

sessionStorage.clear();


//! Eklemis oldugumuz bütün değerler;
//! Session Storage ve Local Storage'da STRİNG olarak kaydedilir. 

// * Biz hangi türde deger eklersek ekleyelim, storage bunu string olarak algılar. 


let names = ["nida", "burak","semih","merve","nazlı"];

sessionStorage.setItem("names", JSON.stringify(names));

// ? STRINGIFY : array olarak yazdırmamızı sağlar.



let value1 = JSON.parse(sessionStorage.getItem("names"));
value1.forEach(function(name){
  console.log(name);  
});



// Eğer JSON.Parse kullanmasaydık; string olarak alırdı. Üzerinde dönme işlemi yapamazdık. 

