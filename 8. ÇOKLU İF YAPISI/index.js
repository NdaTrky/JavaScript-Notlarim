/*

! ÇOKLU İF YAPISI 
? İF ve ELSE İF de Eğer if koşulunu sağlıyor ise ELSE İF'i,
? eğer ELSE İF koşulunu sağlıyor ise de İF yapısını çalıştırmaz.

!ancak 

? Çoklu if yapısında koşulu sağlayan if yapılarını aynı anda çalıştırır. 

* if else : iki seçeneğin olduğu yerlerde kullanılır. 
* if else if else : 2 den fazla seçeneğin olduğu yerlerde kullanılır. 
* if if if : 2 ve daha fazla seçeneğin değerlendirilmesi gereken yerlerde kullanılır. 
*/

let ad = prompt("İsim Bilgisi Giriniz");


function kontrolEt(ad) {

   if(ad=="") {
console.log("Lütfen isim alanını boş bırakmayınız!")
return;
} 
let tckn = prompt("tc numaranızı giriniz");
if (tckn=="" || tckn.length<11) {
console.log("Lütfen tc numaranızı 11 karakter giriniz!")
return;
} 
console.log("İsim ve tc numara bilgisi başarıyla kaydedildi!")
}
kontrolEt(ad);
