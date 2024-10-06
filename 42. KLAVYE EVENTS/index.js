//! KLAVYE EVENTS


// * En sık kullanılan klavye eventsları

// - Keypress -- Klavyede sadece sayı ve harflerde tetiklenen bir eventtir. 
// - Keydown -- Klavyede etkileşime girilen bütün tuşlarda tetiklenir.
// - Keyup -- Klavyeden elini kaldırdığında, etkileşimi bıraktığımızda çalışan eventtir.


document.addEventListener("keypress", run);


function run(e) {
    console.log(e.key); //basmış olduğumuz tuşu verir.

    console.log(e.keyCode) // ascii tablosundaki karşılığını verir. 

    console.log("which", run); //
}



//! Kullanıcı f5'e bastığında,
// yenileme yapmasını engellemek istersek nasıl yapabiliriz? 

//* f5 özel bir karakter olduğu için, keydown kullanabiliriz. 

document.addEventListener("keydown", run);

function run(e){
    console.log(e.keyCode); // Bu kısımda kullanıcı baştıgında yenilenir ancak sayfa yenilendiği için console'da tam göremeyiz. Bunu engellemek için; 

    e.preventDefault(); // preventDefault engellemek demektir. Sayfanın yenilenmesini engellemiş oluruz. Kullanıcıyı uyarmak  için; 
    if(e.keyCode === 116) {
        alert("Sayfa yenilemesi engellendi!")
    }
}
// f5 tuşu için keyCode değeri 166'dır. 


function run(e) {
    console.log(e.target.value); // İnput içerisindeki değeri almak için kullanırız. 
    // * target --- eventin calısmış olduğu html etiketini verir. İnputlarda bu html etiketinin değerini almak için value kullanırız. 
}