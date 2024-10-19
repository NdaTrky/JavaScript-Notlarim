/* 
! Object Oriented Programming (OOP) in JavaScript 

Nesne Yönelik Programlama (OOP), yazılım geliştirirken programı nesneler (objeler) ve bu nesneler üzerinde yapılan işlemler etrafında tasarlama yöntemidir. OOP, gerçek dünyadaki nesneleri taklit ederek yazılımın daha anlaşılır, yeniden kullanılabilir ve yönetilebilir olmasını sağlar.


! Kullanım Amacı : 

* 1. Daha Kolay Anlaşılabilir Kod: 
Gerçek dünyadaki nesneleri ve kavramları programlama diline aktarmak kodun daha doğal ve anlaşılır olmasını sağlar.

* 2. Kodun Yeniden Kullanılabilirliği: 
Nesneler ve sınıflar yeniden kullanılabilir, bu da aynı işlevi tekrar tekrar yazmak yerine bir kere yazıp farklı yerlerde kullanmayı sağlar.

* 3. Kod Bakımı ve Geliştirme Kolaylığı: 
Kod parçaları birbirinden bağımsız nesneler olduğu için bir bölüm üzerinde değişiklik yapmak diğerlerini etkilemez.




https://www.argenova.com.tr/nesne-yonelimli-programlama-oop-nedir

https://talentgrid.io/tr/nesne-yonelimli-programlama/

*/


// ! Diyelim ki bir araba modeli oluşturmak istiyoruz. Bu arabayı tanımlarken özellikleri (rengi, markası, modeli) ve yapabileceği şeyler (hızlanmak, fren yapmak) olacaktır. OOP ile bu arabayı bir nesne olarak tanımlarız ve sınıfını oluştururuz.



// JavaScript'te bir Araba sınıfı tanımlama
class Araba {
    // Yapıcı metod (constructor) - Yeni bir Araba nesnesi oluşturmak için
    constructor(renk, marka) {
        this.renk = renk;
        this.marka = marka;
        this.hiz = 0; // Başlangıçta hız sıfır
    }

    // Yöntemler - Arabanın yapabileceği şeyler
    hizlan(miktar) {
        this.hiz += miktar;
        console.log(`Araba hızlandı. Şu anki hız: ${this.hiz}`);
    }

    frenYap(miktar) {
        this.hiz -= miktar;
        if (this.hiz < 0) this.hiz = 0;
        console.log(`Araba yavaşladı. Şu anki hız: ${this.hiz}`);
    }
}

// Yeni bir araba oluşturma
const araba1 = new Araba("Kırmızı", "Toyota");
araba1.hizlan(50); // Araba hızlandı. Şu anki hız: 50
araba1.frenYap(20); // Araba yavaşladı. Şu anki hız: 30


/* 
! Örnek Açıklaması 

* class: 
JavaScript'te sınıf oluşturmak için kullanılır. Bu sınıf, özellikler (renk, marka, hiz) ve yöntemler (hizlan, frenYap) içerir.
* Yapıcı Metot (constructor): 
Nesne oluşturulduğunda çağrılan özel bir metottur, başlangıç değerlerini ayarlamak için kullanılır.
* Metotlar: 
Sınıfın içinde tanımlanan işlevlerdir ve nesnenin gerçekleştirebileceği işlemleri ifade eder.
 */