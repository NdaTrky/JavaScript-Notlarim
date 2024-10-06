//! INPUT EVENTS
/* 

- FOCUS -- İnputun içerisine girdiğimizde çalışır. 
- BLUR -- İnputun içerisinden çıktığımızda çalışır. 
- COPY -- Kopyalanan değeri tutar.
- PASTE -- Yapıştırılan input değerini tutar.
- CUT -- 
- SELECT --

*/

const input = document.querySelector("#soyad");

input.addEventListener("focus", run);
input.addEventListener("blur", run);
input.addEventListener("copy", run);
input.addEventListener("paste", run);
input.addEventListener("select", run);

function run(e) {
    console.log(e.type);
}

// İnput kısmına bir şeyler girdiğimizi varsayalım. Bu girilen verilerin hepsi bir yerde loglanır. "A kişisi, x saatinde, x aramasını yapmıştır." gibi. 
// Bu karşımıza çıkan reklamları belirlemek ile beraber, talep edilen ürünü/hangi içeriğin daha çok aratıldığı gibi dataları almamızı sağlar. 