/* 

!Mükemmel Sayı Uygulaması

* Tam bölen sayıların toplamının 2 katı, sayının kendisine eşitse bu sayı mükemmel sayıdır. 
*kendisi hariç bütün bölenleri toplamı kendisine eşitse mükemmel sayırdır. 

Örneğin;

6 rakamı ; 
1-2-3-6 rakamlarına tam bölünür. 
 Eğer bu rakamların toplamı 
 6 rakamının 2 katına eşit ise; 
 ? mükemmel sayıdır. 

 1 + 2 + 3 + 6 = 12 
 6 * 2 = 12 

*/

isPerfectNumber(5);
isPerfectNumber(496);

function isPerfectNumber(number) {
let toplam = 0; 
for(let i = 2; i <= number/2; i++) {
    if(number%i === 0) {
        toplam += i;
}
}
    toplam+=1+number;

if (toplam == number*2) {
    console.log("Mükemmel bir sayı girdiniz! :)")
} else {
    console.log("Maalesef mükemmel sayı yazmadınız!")


}
}