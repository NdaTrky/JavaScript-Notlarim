// ! Set Kullanımı 

/*
Set ES6 ile birlikte JavaScript'e eklenen bir veri yapısıdır. Set, benzersiz değerler topluluğu oluşturmanıza olanak tanır. Yani, içine aynı değeri iki kez eklemeye çalışırsanız, yalnızca bir kez eklenir. Bu, özellikle tekrar eden verileri filtrelemek için kullanışlıdır. Set hakkında bilmeniz gereken temel özellikler şunlardır:

*/

// * 1. Set Oluşturma --- Bir set oluşturmak için new Set() kullanılır. 

const mySet = new Set();


//* 2. Değer Ekleme --- add() metodunu kullanarak Set içine değer ekleyebilirsiniz.

mySet.add(1);
mySet.add(2);
mySet.add(2); // Aynı değer tekrar eklenmeyecek
console.log(mySet); // Output: Set { 1, 2 }


// * 3. Set'te Değerlerin Benzersizliği --- Bir Set aynı değeri iki kez kabul etmez.

mySet.add(3);
mySet.add(3);
console.log(mySet); // Output: Set { 1, 2, 3 }


// * 4. Set'in Uzunluğunu Bulma --- size özelliği ile Set içindeki eleman sayısını öğrenebilirsiniz.

console.log(mySet.size); // Output: 3


// * 5. Değer Silme --- delete() metodu ile belirli bir değeri silebilirsiniz.

mySet.delete(2);
console.log(mySet); // Output: Set { 1, 3 }


// * 6. Değer Kontrol Etme --- has() metodu belirli bir değerin Set içinde olup olmadığını kontrol eder.

console.log(mySet.has(1)); // Output: true
console.log(mySet.has(4)); // Output: false


// * 7.  Tüm Değerleri Temizleme --- clear() metodu ile tüm değerleri silebilirsiniz.

mySet.clear();
console.log(mySet); // Output: Set {}


// * 8. forEach ile Set Üzerinde Gezinme --- Bir Set içindeki elemanları forEach ile dönebilirsiniz.

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.forEach(value => {
  console.log(value); // Output: 1, 2, 3
});


// * 9.  Array ve Set Dönüşümleri --- Set'ten Array'e ve Array'den Set'e dönüştürmek oldukça kolaydır.


// Array'den Set oluşturma
const myArray = [1, 2, 3, 3, 4];
const mySetFromArray = new Set(myArray);
console.log(mySetFromArray); // Output: Set { 1, 2, 3, 4 }

// Set'ten Array oluşturma
const myArrayFromSet = [...mySetFromArray];
console.log(myArrayFromSet); // Output: [1, 2, 3, 4]

