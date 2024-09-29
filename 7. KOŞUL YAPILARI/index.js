// ? Ya if çalışır ya else çalışır. Yol ayrımlarının olduğu bir karar mekanizmasıdır. 

// let not = 35;
// if(not>50) {
//     console.log("Tebrikler! Notunuz " +  not  + " geçtiniz!");
// } else {
//     console.log("Başarısız! Notunuz " + not + " puan. Sınavı geçemediniz.")
// }



// vize1 %30 vize2 %30 final %40 
/*
*let vize1 = Number(prompt("Vize Sınav Notunuzu Giriniz : "));
*let vize2 = Number(prompt("Vize 2 Sınav Notunuzu Giriniz : "));
*let final = Number(prompt("Final Sınav Notunuzu Giriniz : "));

*let ortalama = (vize1*0.3) + (vize2*0.3) + (final*0.4) / 3;

*if(ortalama>=60) {
 *   alert("Dersten geçtiniz. Tebrikler!")
*} else {
*    alert("Dersten Kaldınız!")
*}

*console.log(ortalama);

*/

/*
 
! Yol Ayrımı Uygulaması 
*/

let secilenYol = prompt("Lütfen gitmek istediğiniz yolu seçiniz : ");

if(secilenYol ==1) {
    alert(secilenYol + ". Yolu başarıyla seçtiniz!")
    
}else if (secilenYol == 2) {
   alert(secilenYol + ". Yolu başarıyla seçtiniz!")

} else  if ( secilenYol == 3) {
    alert(secilenYol + ". Yolu başarıyla seçtiniz!")
} else {
    prompt("Lütfen geçerli bir değer giriniz! : ")
        if(secilenYol == 1 || secilenYol == 2 || secilenYol == 3) {
            alert(secilenYol + ". Yolu başarıyla seçtiniz!")
    } else {
        prompt("Lütfen geçerli bir değer giriniz! : ")
    }
}



