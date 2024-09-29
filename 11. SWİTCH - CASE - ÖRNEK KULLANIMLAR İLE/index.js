/*
! Switch / Case gerçek hayatta pek tercih edilmeyebilir.

Ancak bazen kullanımı olabiliyor, bilmek gereklidir.

! İf Else kullanımlarıyla aynı mantık ile kullanılır. Alternatifi olarak düşünülebilir. 



switch(deger){

    case1:
    //kodlar
    break;

    case2: 
    //kodlar
    break;

    default
    //kodlar
    break;
}

*/



//! Örnek Kullanımı 

// let sayi = prompt("Bir sayı giriniz :");

// switch(sayi){

//     case "1":
//         console.log("Girdiğiniz sayi 1 dir.")
//     break;

//     case "2":
//         console.log("Girdiğiniz sayı 2 dir")
//     break;

//     case "3":
//         console.log("Giridğiniz sayı 3 dür")
//     break;

//     case "4":
//         console.log("Girdiğiniz sayı 4 tür")
//     break;

//     case "5":
//         console.log("Girdğiniz sayı 5 tir")
//     break;

//     default:
//     console.log("Girilen Sayı 1 ve 5 arasında olmalıdır")
//     break;
    
// }



//!Örnek Kullanım 2 

// const yeniSatir = "\r\n";
// const metin =  
// "1. Pazartesi" + yeniSatir 
// + "2. Salı" + yeniSatir 
// + "3. Çarşamba" + yeniSatir 
// + "4. Perşembe" + yeniSatir 
// + "5. Cuma" + yeniSatir 
// + "6. Cumartesi" + yeniSatir 
// + "7. Pazar" + yeniSatir 
// + "Lütfen Gün Seçimi yapınız : ";

// let deger = prompt("Lütfen bir seçim yapınız : ")
// switch(deger) {
//     case "1":
//         alert("Pazartesi gününe randevu oluşturuldu.")
//     break;
//     case "2":
//         alert("Salı gününe randevu oluşturuldu.")
//     break;
//     case "3":
//         alert("Çarşamba gününe randevu oluşturuldu.")
//     break;
//     case "4":
//         alert("Perşembe gününe randevu oluşturuldu.")
//     break;
//     case "5":
//         alert("Cuma gününe randevu oluşturuldu.")
//     break;
//     case "6":
//         alert("Cumartesi gününe randevu oluşturuldu.")
//     break;
//     case "7":
//         alert("Pazar gününe randevu oluşturuldu. ")

//         default:
//             alert("Geçerli Bir Değer Giriniz!")
// }


//! ATM UYGULAMASI 

/*
*Yapılabilecek İşlemler;
?1. Bakiye Görüntüleme İşlemi 
?2. Para Çekme İşlemi
?3. Para Yatırma İşlemi
?4. Çıkış
*/ 


let bakiye = 1000;

const yeniSatir = "\r\n";

const islemMetni = "1. Bakiye Görüntüleme" + yeniSatir
+ "2. Para Çekme" +yeniSatir
+ "3. Para Yatırma" + yeniSatir
+ "4. Çıkış" + yeniSatir
+ "Yapmak İstediğiniz İşlemi Giriniz : "

let secim = prompt(islemMetni);

switch(secim){
    case "1":
        alert("Bakiyeniz : " +bakiye);
        break;
    
    case "2":
        let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz :"))
        if(cekilecekTutar < bakiye) {
            bakiye -= cekilecekTutar;
            alert("Para çekmek işlemi başarılı. Kalan bakiye : " + bakiye);
        } else {
            alert("Bakiye tutarından fazla para çekme işlemi gerçekleştiremezsiniz. Bakiye bilginiz :" + bakiye )
        }
        break;
    
    case "3":
        let yatırılacakTutar = Number(prompt("Yatırmak istediğiniz tutarı giriniz :"))
        bakiye += yatırılacakTutar;
        alert("Güncel bakiyeniz : " + bakiye)
        
        break;

    case "4": 
    alert("Sistemden Çıkış Yapılmıştır.")
break;

    default:
        alert("Lütfen 1 ve 4 arası bir değer giriniz")
    break;

}

