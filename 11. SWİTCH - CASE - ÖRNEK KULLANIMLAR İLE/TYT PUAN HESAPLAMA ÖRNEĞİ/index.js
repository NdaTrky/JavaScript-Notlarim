//*öncelikle gerekli değişkenlerimizi tanımlayalım. 


//! ÖSYM 100 Puan tanımlar. 
//! Okul puanı TYT puanına eklenir. 

let turkceDogru, turkceYanlis = 0;
let matematikDogru, matematikYanlis = 0;
let sosyalDogru, sosyalYanlis = 0;
let fenDogru, fenYanlis = 0;
let puan = 0;
let okulPuani = 0;


//* PopUp mesajında alt satıra yazması için değişken tanımlayalım. 
const yeniSatir = "\r\n";

//* PopUp'da çıkmasını istediğimiz mesajı tanımlayalım. 

let popupMesaji = "TYT Puan hesaplama uygulamasına hoş geldiniz!" + yeniSatir
+ "1. Puan Hesaplama" +yeniSatir
+ "2. Çıkış Yap"

//* Prompt ile PopUp mesajını Server'a yazdıralım.

let secim = prompt(popupMesaji);

//* Eğer kullanıcının Seçimi Puan Hesaplama ise Gereken Bilgileri Girmesi için Prompt tanımlayalım. 

switch(secim) {
    case "1":
        okulPuani = Number(prompt("Okul başarı puanınızı giriniz."));

        turkceDogru = Number(prompt("Türkçe doğru sayısını giriniz."))
        turkceYanlis = Number(prompt("Türkçe yanlış sayısını giriniz"))

        matematikDogru = Number(prompt("Matematik doğru sayısını giriniz."))
        matematikYanlis = Number(prompt("Matematik yanlış sayısını giriniz"))

        sosyalDogru = Number(prompt("Sosyal doğru sayısını giriniz."))
        sosyalYanlis = Number(prompt("Sosyal yanlış sayısını giriniz"))

        fenDogru = Number(prompt("Fen doğru sayısını giriniz."))
        fenYanlis = Number(prompt("Fen yanlış sayısını giriniz"))


let dogruSayisi = turkceDogru + matematikDogru + sosyalDogru + fenDogru;
let yanlisSayisi = turkceYanlis + matematikYanlis + sosyalYanlis + fenYanlis;
let kalanDogruSayisi = dogruSayisi - (yanlisSayisi/4) // 4 yanlış bir doğruyu götürür.

let sonuc = (kalanDogruSayisi*4) + 100 + okulPuani;
alert("TYT Puanınız : " +sonuc )
break;

case "2":
    alert("Uygulamadan başarıyla çıkış yapıldı.")
break;

default:
    alert("Lütfen Geçerli bir aralık seçiniz.")
}