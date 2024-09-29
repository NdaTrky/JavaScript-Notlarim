//! ÜRÜN ARAMA UYGULAMASI 

let urun1 = {
    isim: "ASUS TUF Gaming",
    kategori:"Teknoloji ",
    fiyat: "22.199 TL"
}

let urun2 = {
    isim: "LENOVO IP Gaming3 ",
    kategori:"Teknoloji ",
    fiyat: "28.939 TL"
}

let urun3 = {
    isim: "Apple Macbook Air ",
    kategori:"Teknoloji ",
    fiyat: "27.499 TL"
}

let urun4 = {
    isim: "Dell Inspiron 3520 ",
    kategori:"Teknoloji ",
    fiyat: "22.199 TL"
}

let urun5 = {
    isim: "HP 15-FC0060NT AMD",
    kategori:"Teknoloji ",
    fiyat: "22.199 TL"
}

let urun6 = {
    isim: "LENOVO LOQ Intel Core",
    kategori:"Teknoloji ",
    fiyat: "30.599 TL"
}


//! GERÇEK HAYATTA BU VERİLER, VERİ TABANINDAN ALINIR. 



let bilgisayarlar = [urun1, urun2,urun3,urun4,urun5,urun6];

let istenenBilgisayar = prompt("Lütfen istediğiniz bilgisayar markasını giriniz : ")
let filtrelenenBilgisayar = [];



function filtreliUrunuBul(bilgisayarlar) {
    bilgisayarlar.forEach(function(bilgisayar){
        if(bilgisayar.isim.toUpperCase().includes(istenenBilgisayar.toUpperCase(),0)) {
            filtrelenenBilgisayar.push(bilgisayar);
        } 

    });
}

function filtreliUrunuYazdir(bilgisayarlar) {
    bilgisayarlar.forEach(function(bilgisayar) {
        console.log(bilgisayar.isim + " " + bilgisayar.fiyat + " " + bilgisayar.kategori);
    });
}


filtreliUrunuBul(bilgisayarlar);
filtreliUrunuYazdir(filtrelenenBilgisayar);





        
   





