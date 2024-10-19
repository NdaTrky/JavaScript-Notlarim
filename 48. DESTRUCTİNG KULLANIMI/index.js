/*

! Destructing Nedir?

Destructuring, JavaScript'te bir veri yapısının (örneğin, bir dizi veya nesne) içindeki değerleri kolayca çıkararak ayrı değişkenlere atamayı sağlayan bir özelliktir. Bu özellik, kodu daha temiz ve okunabilir hale getirir.
*/


const renkler = ['kırmızı', 'yeşil', 'mavi'];
const [birinci, ikinci] = renkler; // birinci = 'kırmızı', ikinci = 'yeşil'


const araba = {
    marka: 'Toyota',
    model: 'Corolla',
    yil: 2020
};
const { marka, model } = araba; // marka = 'Toyota', model = 'Corolla'

// * Ne İşe Yarar?
// Kodu Kısaltma: Değişkenleri daha kısa ve anlaşılır bir şekilde atamanıza olanak tanır.

// * Okunabilirlik: 
// Kodu daha okunabilir hale getirir, çünkü hangi değişkenin hangi değeri taşıdığını hemen görebilirsiniz.

//* Fonksiyonlardan Değer Çıkarma:
// Fonksiyonlarda bir nesne döndüğünüzde, bu nesneden belirli özellikleri kolayca almanızı sağlar.

//! Örnek Kullanım:


function kullaniciBilgileri({ isim, yas }) {
    console.log(`İsim: ${isim}, Yaş: ${yas}`);
}

const kullanici = {
    isim: 'Ali',
    yas: 25
};

kullaniciBilgileri(kullanici); // Çıktı: İsim: Ali, Yaş: 25


// Bu örnekte, kullaniciBilgileri fonksiyonu, bir nesne alır ve destructuring kullanarak doğrudan isim ve yas özelliklerine erişir. Bu, kodun daha düzenli ve anlaşılır olmasını sağlar.