/*
! BEDEN KİTLE ENDEKSİ UYGULAMASI

*beden kitle endeksi ideal kiloda olup olmadığını bulmayı sğalayan bir uygulamadır. 

? Kişinin kilo bilgisi, boy uzunluğunun karesine bölünür böylece beden kitle endeksi bulunur. 

* 18.5 kg altı = ideal kilonun altında
* 18.5 kg - 24.9 kg arası = ideal kilo.
* 25kg - 29.9 kg arası = ideal kilonun üstünde
* 30kg - 39.9 kg arası = obez
* 40kg üstünde = morbid obez


Burda 5 ihtimal oldığu için;
ideal kilo - ideal kilo üstünde - ideal kilonun çok üstünde - ideal kilonun çok üstünde (morbid obez)
* kullanmamız gereken koşul yapısı; 
! if else if ve else yapısı olmalıdır. 

*/ 

let kilo = Number(prompt("Kilonuzu giriniz")); 

let boy = Number(prompt("Boyunuzu metre cinsinden giriniz : "));

let sonuc = kilo/(boy*boy);

if(sonuc<18.5) {
    console.log("İdeal Kilonun Altında (Zayıf)" + sonuc.toFixed(2))
} else if(sonuc >= 18.5 && sonuc <= 24.9) {
    console.log("İdeal Kilodasınız!" + sonuc.toFixed(2))
} else if (sonuc >= 25 && sonuc<= 29.9 ) {
    console.log("İdeal Kilonun Üstünde" + sonuc.toFixed(2))
} else if(sonuc >= 30 && sonuc <= 39.9) {
    console.log("Obez, riskli kilo!" + sonuc.toFixed(2));
} else if(sonuc>= 40) {
    console.log("İdeal Kilonun çok üstünde, morbid obez." + sonuc.toFixed(2))
}


