/*

Kelime Sayısı Bulma Uygulaması 


*/


let metin = "Aktif olarak Workintech Akademiden Full Stack Developer Eğitimi Alıyorum."



// let harf = prompt("Bir harf giriniz : ")

// let sonuc = harfBul(harf);
// alert("Harf Sayısı : " + sonuc) 

harfBul("a");
harfBul("b");
harfBul("c");

function harfBul(harf) {

    let toplam = 0; 

for(let i = 0; i < metin.length; i++) {
    if (metin.charAt(i).toLowerCase() === harf.toLowerCase()) {
        toplam+=1;
    }

}
// return toplam;
console.log("Harf sayisi :" + toplam)
}