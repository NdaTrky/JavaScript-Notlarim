/* 
! DATE KULLANIMI

*/

console.log(window);

let tarih = new Date()
console.log(tarih)



console.log(tarih.getDate()); // Ay'ın gününü number olarak alırız.

console.log(tarih.getDay()); //Haftanın gününü number olarak alırız.

console.log(tarih.getHours()); // Yerel saati kullanarak bir tarihteki saatleri alır.

console.log(tarih.getMilliseconds()) // Milliseconds - milisaniye bilgisini verir.

console.log(tarih.getMinutes()) // Dakika bilgisini verir


console.log(tarih.getMonth()+1); // Ay bilgisini alırız.

console.log(tarih.toLocaleDateString()); //Gün/Ay/Yıl formatında verir.

console.log(tarih.toLocaleTimeString()); // Saat-Dakika-Saniye olarak verir. 

console.log(tarih.toLocaleString()) // Tarih ve saat bilgisini beraber verir. 



//! SET METOTLARI 

console.log(tarih);
tarih.setDate(24) //Günü değiştirmek için kullanılır. 
console.log(tarih);

tarih.setHours(tarih.getHours()+2); //mevcut saatin 2 saat sonrasını dinamik olarak alırız. 
console.log(tarih);

// ? Bu tip tarih bilgileri, sık kullanılan bilgilerdir. 

// ?  Örneğin bir token oluşturacağımız zaman süresinin geçip geçmediğini öğrenmek istersek bunlar date methodlarıyla hesaplanılabilir. (Geçtiyse yeni token al, geçmediyse aynı token ile devam et gibi işlemler yapılabilir.)

// ? Veya bir kişinin sisteme ne zaman kaydoldu? Bir veri güncellendi, ne zaman ve kim tarafından güncellendi gibi bilgilere erişmemizde kolaylık sağlar. 