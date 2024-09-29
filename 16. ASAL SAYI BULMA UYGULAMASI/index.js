// Asal Sayı Bulma Uygulaması 

let sayi = Number(prompt("Lütfen bir sayı giriniz : "));
let sonuc = true;

if(sayi <2) { // 0 ve 1 asal değildir. 
    sonuc = false;
} else {
    
for(let i = 2; i < Math.sqrt(sayi/2); i++) {
    if(sayi%i==0) {
        //Asal değildir. 
        sonuc=false;
        break;
    }
}
}

if(sonuc) {
    alert(sayi + " asaldir.")
} else {
    alert(sayi + "asal değildir.")
}