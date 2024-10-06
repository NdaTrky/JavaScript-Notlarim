/* 
 ! MOUSE EVENTLARI 

-  DOMContentLoaded
- load
- click - tıklayınca calisir
- dblclick - 2 kere tıklayınca calısır. 
- mouseover - uzerine geldiginde calisir.
- mouseout - üzerinden cıktıgında calisir.
- mouseenter - sadece card içerisinde tetiklenir. 
- mouseleave -  bir fare imlecinin bir elementten çıktığı zaman tetiklenir. 

*/


// document.addEventListener("DOMContentLoaded", run);

// function run() {
//     console.log("Sayfa Yüklendi!")
// }


// window.addEventListener("load", run);

const cardTittle = document.querySelector(".card-button");

cardTittle.addEventListener("dblclick", run);

cardTittle = addEventListener("mouseover", run);
cardTittle = addEventListener("mouseout", run);






function run(e) {
    console.log(e.type);
}



// ! 1. CLİCK 
// * // * Kullanıcı bir öğeye tıkladığında tetiklenir.

element.addEventListener('click', function() {
    console.log('Tıklandı!');
});


// ! 2. dblclick
// * Kullanıcı bir öğeye iki kez tıkladığında tetiklenir.

element.addEventListener('dblclick', function() {
    console.log('Çift tıklandı!');
});


// ! 3. mouseover
// * Kullanıcı fare imlecini bir öğenin üzerine getirdiğinde tetiklenir.

element.addEventListener('mouseover', function() {
    console.log('Fare üzerine geldi!');
});


// ! 4. mouseout
// * Kullanıcı fare imlecini bir öğeden çıkardığında tetiklenir.

element.addEventListener('mouseout', function() {
    console.log('Fare öğeden çıktı!');
});


// ! 5. mousemove
// * Kullanıcı fare imlecini hareket ettirdiğinde sürekli olarak tetiklenir.

element.addEventListener('mousemove', function(event) {
    console.log(`Fare konumu: (${event.clientX}, ${event.clientY})`);
});


// ! 6. mousedown
// * Kullanıcı fare tuşuna bastığında tetiklenir.

element.addEventListener('mousedown', function() {
    console.log('Fare tuşuna basıldı!');
});


// ! 7. mouseup
// * Kullanıcı fare tuşunu bıraktığında tetiklenir.

element.addEventListener('mouseup', function() {
    console.log('Fare tuşu bırakıldı!');
});


// ! 8. contextmenu
// * Kullanıcı sağ fare tuşuna tıkladığında tetiklenir (sağ tıklama).

element.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Varsayılan sağ tık menüsünü engeller
    console.log('Sağ tıklandı!');
});

