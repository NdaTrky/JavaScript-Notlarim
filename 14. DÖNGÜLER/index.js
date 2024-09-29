/*

! FOR DÖNGÜSÜ 
* 3 Aşamadan oluşur;

for(değişken ; koşul ; arttırma-azaltma) {
}




let toplam = 0;
for(let i =50; i>=1; i--) {
  
toplam += i;
    console.log(i);
  
}
console.log("Toplam :" , toplam);


*/






/* 

!WHİLE DÖNGÜSÜ 

* 3 Aşamadan Oluşur: 

while(koşul) 

kodlar

sayacın değerini atarız. (sonsuz döngüye girmemesi için.)



let sayac = 1;
while(true) {
    console.log(sayac);
    if(sayac==7) {
        break;
    }
    sayac++;
}


*/



/*

!DO - WHİLE DÖNGÜSÜ 

* do {


* kodlar


* while(koşul)


? While ile Do-While arasındaki fark; 

Koşul alt kısımda oldugu için DO-WHİLE döngüsünde, döngü en az 1 kere çalışır. (Derleyici kodları yukarıdan aşağı okur.)
}


*/

// let sayac = 1; 
// let toplam = 0;
// do {

//     if(sayac%2==1) {
//     toplam+=sayac;
// }
// sayac++
// } while(sayac <= 20);
// console.log(toplam);


/* 

! BREAK 
döngüden çıkmak için kullandığımız bir anahtar kelimedir. Döngüyü kırar.

! CONTİNUE 

Döngüyü yalnızca bir kere kırıyor. 

*/

// let sayac = 1;
// while(sayac <=10) {
//      console.log(sayac);
//     if(sayac==8) {
//         break;
//     }
//    sayac++;
// }

// ? Yukarıdaki örnekte 8'den sonra yazdırmadı. Yani break ile döngüyü 8'e ulaşınca kırdı. 



let sayac = 0;
while(sayac<=10) {
    sayac++;
    if(sayac>=10) {
        break;
    }
    if(sayac==8) {
        continue;
    }
    console.log(sayac);
}