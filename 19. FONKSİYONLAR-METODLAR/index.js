/*

! FUNCTİON - METOTLAR (METHODS)

Bir projedeki kodları modüler modüler bölmek ve bir yerde birleştirmek için kullanılır. 


Bir kere yazılır ve istediğimiz yerde yazabiliyoruz.
Tek bir noktada toplayıp, çıkarabiliriz. 


*/

/*
! PARAMETRESİZ FUNCTİON OLUŞTURMA 

* Parametresiz ve geriye değer döndürmeyen metot tanımlamak. 


?Nasıl tanımlanır?

function yazdir() {
*  fonksiyonun yapmasını istediğimiz işlevi (kodları) bu alana yazarız.    
}
yazdir(); 
* en sonda da çalışması için fonksiyonumuzu çağırırız.
*/

// function yazdir() {
//     debugger
//     console.log("nida")
// }
// debugger
// yazdir();

// yazdir();




// !PARAMETRELİ FUNCTİON OLUŞTURMA


let yas = Number(prompt("Yaşınızı giriniz"));

kontrolEt(yas); 

function kontrolEt(yas) {
    if(yas > 18) {
        console.log("Ehliyet alabilirsiniz")
    } else
    console.log("Ehliyet alamazsınız")
}


parseInt() // --- eğer bir değerin yanında () varsa bu method - function oldugu anlamına gelir. 


