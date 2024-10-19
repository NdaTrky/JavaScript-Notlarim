// !Arrow Function Nedir? 

// *1. Söz Dizimi (Syntax): 

// ? (Geleneksel Fonksiyon)

function myFunction(param) {
    return param + 1;
}

// ? Arrow Fonksiyonu:

const myFunction = (param) => param + 1;

 /* 
? 2. this Bağlamı:
* Geleneksel Fonksiyon: 
Kendi this bağlamına sahiptir. Yani, fonksiyonun çağrıldığı bağlama göre this değeri değişebilir.

* Arrow Fonksiyonu:
Kendi this bağlamı yoktur. this değeri, fonksiyonun tanımlandığı bağlamdan (lexical scope) gelir.

? 3. Kullanım Kolaylığı:
* Geleneksel Fonksiyon: 
Daha uzun bir söz dizimine sahiptir.
* Arrow Fonksiyonu:
 Daha kısa ve okunaklı bir yapıya sahiptir; özellikle tek satırlık fonksiyonlar için idealdir.
? 4. arguments Objesi:
* Geleneksel Fonksiyon:
arguments objesine erişim sağlar.
* Arrow Fonksiyonu:
arguments objesini desteklemez; bu nedenle, farklı bir yöntem (örneğin, ...spread operatörü) kullanarak parametreleri almak gerekir.

? Fonksiyonun Kullanım Yeri:
*Geleneksel Fonksiyon: 
Fonksiyonları tanımlamak ve çağırmak için kullanılır.
* Arrow Fonksiyonu: 
Genellikle callback fonksiyonları veya kısa işlevler için tercih edilir.

*/
