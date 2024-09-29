/*

! Veri Tipleri 

? let isim = "Nida";
console.log(*typeof isim); 
! typeof veri türünü görmemizi sağlar.

* 1. String

""  - '' içerisinde tanımlanır.

* 2. Number

tırnaksız direkt yazılır.

* 3. Boolean 

true/false olarak değer döndürür.


* 4. Null

Boş anlamına gelir.
Bir değişkenin içini boşaltmak için kullanabiliriz ya da başlangıçta null olarak verebiliriz.

* 5. Undefined

Tanımlanmamış anlamına gelir.  
oluşturulmuş ancak herhangi bir değer atanmamış. 


* 6. Object

{} tanımlanır. 

let kisiler = {
isim: "Nida"
soyisim: "Türkay"
yas: 23}

! primitive(ilkel) ve referans(modern) tipler nedir, farkları nelerdir?

* Primitive (ilkel) tipler: Temel veri türleridir. Bellekte doğrudan değerlerini tutarlar. Örnekler: int, char, boolean.

* Referans (modern) tipler: Nesne ve veri yapılarıdır. Bellekte bir adres tutarlar ve bu adres üzerinden verilere erişilir. Örnekler: String, diziler, kullanıcı tanımlı sınıflar.

? Farklar:

* Depolama: 
Primitive tipler doğrudan değer, referans tipler ise adres tutar.
* Bellek Yönetimi:
 Primitive tipler daha az bellek kullanır, referans tipler daha karmaşık yapılar içerir.
* Değişkenlik:
 Primitive tipler değiştirilemez, referans tipler ise içerdikleri verileri değiştirebilir.

* 7. Function

let func = function() {
    console.log("Merhaba")
}
func();
console.log(typeof func)

*/ 
