//! LOCAL STORAGE KULLANIMI

// SESSION STROGA KULLANIMINDA BAHSETTİĞİMİZ GİBİ; 
// * KULLANIMLARI, KODLARI, METOTLARI AYNI. TEK FARKLARI KAYIT SEKİLLERİDİR. 



// * Değer Ekleme; 

localStorage.setItem("marka", "apple");
localStorage.setItem("model","iPhone 14 Pro");
localStorage.setItem("fiyat", "120.000TL")


// * Değer Almak;

let value = localStorage.getItem("marka");
console.log(value);

// * Değer Silmek;

localStorage.removeItem("fiyat");


// * Tümünü Temizle;


localStorage.clear();
let keyValue = ["apple", "iPhone 14 Pro", "120.000TL"];

localStorage.setItem("keyValue", JSON.stringify(keyValue));

let values2 = JSON.parse(localStorage.getItem("keyValue"));
console.log(values2)

// DEĞERİ ATARKEN : JSON.stringify

// DEĞERİ ALIRKEN : JSON.parse


values2.forEach(function(value) {
    console.log(value);
    
});