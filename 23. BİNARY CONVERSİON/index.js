/*
DECİMAL TO BİNARY CONVERSİON

* DECİMAL = ONDALIKLI SAYI SİSTEMİ (2-3-10-20)

* BİNARY = İKİLİK SAYI SİSTEMİ (0-1) (MAKİNENİN ANLAYACAĞI DİL.)

YANİ BİZİM SİSTEMİMİZDEN MAKİNA SİSTEMİNE ÇEVİRİRİZ.

https://www.rapidtables.com/convert/number/decimal-to-binary.html


? Bir sayıyı hep 2'ye bölüyoruz. Kalanlar sağdan sola olacak şekilde yazılır. Bu binary değeri verir. 

*/

//! 10'LUK SAYIYI 2'LİĞE ÇEVİRME


// function convertDecimalToBinary(number) {
//     let binary = "";
//     while(number > 0) {
//         binary += (number % 2).toString(); // Kalanı ekliyoruz
//         number = Math.floor(number / 2);   // Sayıyı ikiye bölüyoruz ve kusuratı atıyoruz
//     }
//     binary = binary.split("").reverse().join(""); // Sonuç tersten yazılır
//     console.log(binary);
// }

// let deneme = prompt("Bir değer giriniz: ");
// convertDecimalToBinary(Number(deneme));  // Kullanıcıdan alınan değeri işliyoruz


convertDecimalToBinary(20)
convertDecimalToBinary(50)
convertDecimalToBinary(30)



function convertDecimalToBinary(number) {
    let binary = ""; 
    while(true) {
        binary += (number%2).toString();
        number=Math.floor(number/2);
        if(number==1) {
            //artık bölmek yok, döngüden çıkmalıyız.
            binary+=1;
            break;
        }
    }
    let result = reverse(binary);
    console.log("Sonuc: " + result);
}


function reverse(binary) { //ters cevirmemiz gerekiyor.
    let reverseBinary =""; 
    for (let i = binary.length -1; i>= 0; i--) {
        reverseBinary+=binary.charAt(i);
    }
    return reverseBinary
}


/* 

! 2'LİK SAYIYI 10'LUĞA ÇEVİRME

* Binary (ikilik) sistemde bir sayı yazıldığında, her bir bit (0 veya 1) 2'nin belirli bir kuvvetine karşılık gelir. Bu kuvvetler, sağdan sola doğru başlar ve her bir bit için 2’nin kuvveti, bitin konumuna göre belirlenir. İşte adım adım açıklama:

* Binary Sayının Yapısı: Örneğin, 1011 (binary) sayısını ele alalım. Bu sayının her bir bitini 2’nin kuvvetleri ile çarpıyoruz.

? En sağdaki bit (1) 2^0 ile çarpılır.
? Bir sonraki bit (1) 2^1 ile çarpılır.
? Üçüncü bit (0) 2^2 ile çarpılır (bu sıfır olduğu için sonucu etkilemez).
? En soldaki bit (1) 2^3 ile çarpılır.
* Hesaplama: Bu bitleri 2'nin kuvvetleri ile çarparak topluyoruz:

1 * 2^3 = 1 * 8 = 8
0 * 2^2 = 0 * 4 = 0
1 * 2^1 = 1 * 2 = 2
1 * 2^0 = 1 * 1 = 1
Toplama: Şimdi bu değerleri topluyoruz:

8 + 0 + 2 + 1 = 11


*/


let binary = "1011";

function convertBinaryToDecimal(binary) {
let toplam = 0; // hesaplanan decimal değeri tutacak
let ust = 0; // 2'nin hangii kuvvetiyle carptığımızı takip ederiz.


for(let i = binary.length -1; i>=0; i--) { // i++ alırsak sonsuz döngüye girer.
toplam += Number(binary.charAt(i)) * Math.pow(2, ust);
ust++;

}

console.log("Sonuc : " + toplam);
}

convertBinaryToDecimal(binary);




/* 


 ! Doğru Kullanım: i--

Başlangıç Değeri: i = 3 (son bitin indeksi, çünkü 0'dan başlıyoruz)
Döngü Koşulu: i >= 0
Döngü İçi İşlem: toplam += Number(binary.charAt(i)) * Math.pow(2, ust);
i'yi Azaltma: i--

? Bu döngü şu şekilde çalışır:

1. döngü: i = 3, bit 1 (2^3), toplam 0 + 8 = 8
2. döngü: i = 2, bit 1 (2^2), toplam 8 + 0 = 8
3. döngü: i = 1, bit 0 (2^1), toplam 8 + 0 = 8
4. döngü: i = 0, bit 1 (2^0), toplam 8 + 1 = 9
Döngü bitti: i = -1, koşul false olur.
Yanlış Kullanım: i++

!Eğer i++ kullanırsanız:

Başlangıç Değeri: i = 3
Döngü Koşulu: i >= 0
Döngü İçi İşlem: Aynı şekilde çalışır.
i'yi Artırma: i++

? Döngü şu şekilde çalışır:

1. döngü: i = 3, bit 1 (2^3)
2. döngü: i = 4, burada binary.charAt(4) geçersiz (undefined), ama i hala 4'tür ve koşul true olduğu için döngü devam eder.
3. döngü: i = 5, yine geçersiz, döngü devam eder.
Sonuç olarak, i sürekli artar ve koşul asla false olmaz, bu da sonsuz döngüye neden olur.

*/