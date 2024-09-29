// Armstrong = Bir sayının her bir rakam toplamının küpü sayının kendisini veriyorsa armstrong olur. 


// 153 = 1*1*1 + 5*5*5 + 3*3*3 = 1 + 125 + 27 === 153. 

let sayi = prompt("Lütfen bir sayi giriniz : ");

let toplam = 0; 

for(let i = 0; i<sayi.length; i++) {
    let rakam = sayi.charAt(i); //charAt her bir rakamı döndürür. 
    toplam += rakam*rakam*rakam;
}

if(sayi==toplam) {
    alert("Girdiğiniz sayı armstong bir değerdir.")
} else {
    alert("Girdiğinz değer armstrong değildir.")
}