let kitaplar = [

    {
        isim: "Mutlu Bir Yaşam Üzerine-Yaşamın Kısalığı Üzerine ",
        yazar: " Seneca",
        fiyat: "22,80 TL",
        raf: "RAF 1.1"
    },

    {
        isim: "Bilinçaltının Gücü ",
        yazar: " Joseph Murphy",
        fiyat: "122,5 TL",
        raf: "RAF 2.1"
    },

    {
        isim: "Fareler ve İnsanlar",
        yazar: "John Steinbeck",
        fiyat: "62,90 TL",
        raf: "RAF 3.2"
    },

    {
        isim: "Gece Yarısı Kütüphanesi ",
        yazar: "Matt Haig",
        fiyat: "144.0 TL ",
        raf: "RAF 3.1"
    },

    {
        isim: "Martin Eden",
        yazar: "Jack London",
        fiyat: "30 TL",
        raf: "RAF 2.4"
    },

    {
        isim: "Demir Ökçe",
        yazar: "Jack London",
        fiyat: "35 TL",
        raf: "RAF 3.5"
    },

    {
        isim: "Yaşamak",
        yazar: "Yu Hua",
        fiyat: "106 TL ",
        raf: "RAF 2.4"
    },

    {
        isim: "Şeker Portakalı",
        yazar: "Jose Maouro De Vasconcelos ",
        fiyat: "112 TL",
        raf: "RAF 1.5"
    },

    {
        isim: "Hayvan Çiftliği",
        yazar: "George Orwell",
        fiyat: "44.25 TL",
        raf: "RAF 1.3"
    },

    {
        isim: "1984",
        yazar: "George Orwell",
        fiyat: "67 TL ",
        raf: "RAF 2.2"
    }
];


let raf11 = {raf: "RAF 1.1", gorunum: false}
let raf12 = {raf: "RAF 1.2", gorunum: false}
let raf13 = {raf: "RAF 1.3", gorunum: false}
let raf14 = {raf: "RAF 1.4", gorunum: false}
let raf15 = {raf: "RAF 1.5", gorunum: false}

let raf21 = {raf: "RAF 2.1", gorunum: false}
let raf22 = {raf: "RAF 2.2", gorunum: false}
let raf23 = {raf: "RAF 2.3", gorunum: false}
let raf24 = {raf: "RAF 2.4", gorunum: false}
let raf25 = {raf: "RAF 2.5", gorunum: false}

let raf31 = {raf: "RAF 3.1", gorunum: false}
let raf32 = {raf: "RAF 3.2", gorunum: false}
let raf33 = {raf: "RAF 3.3", gorunum: false}
let raf34 = {raf: "RAF 3.4", gorunum: false}
let raf35 = {raf: "RAF 3.5", gorunum: false}



let raflar = [
    [raf31,raf32,raf33, raf34,raf35],
    
    [raf21,raf22,raf23,raf24,raf25],
    
    [raf11,raf12,raf13,raf14,raf15]
]

function rafOlustur() {
    let satir = "";

    for (let i = 0; i < raflar.length; i++) {
        for (let j = 0; j < 5; j++) {
            satir += "|" + (raflar[i][j].gorunum ? raflar[i][j].raf : "---");
        }
        console.log(satir);
        console.log("----------------");
        satir = "";   
    }
}

function kodBul(kitapIsmi) {
    let rafKod = null;
    kitaplar.forEach(function(kitap) {
        if (kitap.isim.toUpperCase().includes(kitapIsmi.toUpperCase())) {
            rafKod = kitap.raf;
        }
    });
    return rafKod;
}

function raftaGoster(rafKod) {
    for (let i = 0; i < raflar.length; i++) {
        for (let j = 0; j < 5; j++) {
            if (raflar[i][j].raf === rafKod) {
                raflar[i][j].gorunum = true; // Güncellemeyi burada yap
                return; // İç içe döngüden çık
            }
        }
    }
}

rafOlustur();

let kitapAdi = prompt("Lütfen bir kitap ismi giriniz :");
let rafKodu = kodBul(kitapAdi);

if (rafKodu != null) {
    raftaGoster(rafKodu);
    rafOlustur(); // raflar true olmadan önce atandığı için güncel boolean değeri göremedi. True oldugunu algılayabilmesi icin rafOlustur function'umuzu tekrar çağırdık. 
} else {
    alert("Maalesef aradığınız kitap kütüphanemizde bulunamamaktadır.");
}
