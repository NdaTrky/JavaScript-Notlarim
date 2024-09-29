// FAKTORİYEL HESAPLAMA

// 5 = 5.4.3.2.1
// 7 = 7.6.5.4.3.2.1


let sayi = Number(prompt("Bir sayi giriniz : "));
let carpim = 1; 

for(let i = 1; i<=sayi; i++) {
    carpim = carpim * i;
}
alert("Sonuc: " + carpim);