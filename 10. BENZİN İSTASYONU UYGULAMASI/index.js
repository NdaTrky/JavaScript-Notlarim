/*
Benzin İstasyonu 

* Dizel : 24.53
* Benzin : 22.25
* LPG : 11.1

Gelen Müşteriden 
- Yakıt Bilgisi 
- Yüklenecek Yakıt Litresi bilgileri alınacak. 
*/ 


let dizel = 24.53, benzin = 22.25, lpg = 11.1;

const yeniSatir = "\r\n" // yeni satırda yazar.


const yakitMetni =  "1. Dizel : 24.53"+ yeniSatir

    + "2-Benzin : 22.25"+yeniSatir
    + "3-LPG :11.1"+yeniSatir
    + "Almak istediğiniz yakıt tipini yazınız :"

let yakitTipi = prompt(yakitMetni);
let yakitLitresi = Number(prompt("Yakit listerisin giriniz."));
let bakiye = Number(prompt("Bakiyenizi Giriniz : "));

if(yakitTipi == "1") {
let odenecekTutar = dizel * yakitLitresi;
    if(odenecekTutar < bakiye) {
        //bakiye yeterli
        bakiye = bakiye - odenecekTutar;
    alert("Yakıt alma işlemi başarılı" + yeniSatir
+ "kalan bakiye : " + (bakiye - odenecekTutar))
    } else {
        alert("Bakiye yeterli değil." +yeniSatir
    + "odenecek tutar :" +odenecekTutar+yeniSatir
    + "bakiye : " + bakiye + yeniSatir
    + "eksik tutar" + (odenecekTutar - bakiye));
    }
    // Dizel 


} else if (yakitTipi=="2") {

    // aynı yapılar kullanılır

} else if (yakitTipi=="3") {

    // aynı yapılar kullanılır. 

}

/*
! KOPYALA YAPIŞTIR KOD YAPILARI SPAGETTİ KOD DEDİĞİMİZ KOD YAPISINI DOĞURUR. KOD TEKRARI KOD VERİMLİLİĞİNİ DÜŞÜRÜR, KARMAŞIK BİR YAPIYA SEBEP OLUR. BİZİM AMACIMIZ ANLAŞILIR, TEMİZ KOD YAPISI İLE ÇALIŞMAK. 
*/


/* 
? ALT SATIRA GEÇMEK İÇİN; 
 
\r\n yerine sadece
  n yi kullanmaK yetecektir.

 ? ÖRNEĞİN;


"Hoşgeldiniz...\n"
                  +"1.Krema Alın\n"
                  +"2.Süt Alın\n" 
                  +"3. Peynir Alın";

                  */