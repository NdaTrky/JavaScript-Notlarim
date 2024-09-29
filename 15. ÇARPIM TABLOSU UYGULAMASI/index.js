// ! Çarpım Tablosu 


for (let i = 1; i <=10; i++) {

    for (let j = 1; j<=10 ; j++) {

        console.log(i + "x" + j + "=" + (i*j));

    }
    console.log("-----------------------------")
}

// * Dıştaki döngü (i döngüsü) her tamamlandığında bir üst değere geçiyor. Örneğin, i 2 olduğunda, içteki döngü (j döngüsü) 1'den 10'a kadar çalışarak her bir j değeri için çarpımı hesaplıyor. Dıştaki döngü sona erdiğinde, j döngüsü tamamlandığında bir sonraki i değeri için tekrar başlıyor. Bu şekilde, her i değeri için 1'den 10'a kadar olan tüm j değerleriyle çarpım yapılmış oluyor. 