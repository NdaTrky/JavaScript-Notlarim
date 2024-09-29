/* 
Geriye değer döndüren method;
!RETURN 
* Return'un döndürdüğü değer, methodun çağırıldığı yere bırakılmasıdır. 


-- Bir değeri function'ın dışarısına çıkarmak, taşımak için kullanılır.
-- Bir function'ı bitiren anahtar kelimedir. Return sonrası kodlar okunmaz.  

?  void: geriye değer döndürmeyen değer demektir. 

*/



let donenDeger = cube(2); 




function kareAl(deger) {
    let sonuc = deger*deger;
    return sonuc;
}




function cube(sayi) {
    let carpim = sayi*sayi*sayi;
    let kareSonuc = kareAl(carpim)
    console.log(kareSonuc);
}