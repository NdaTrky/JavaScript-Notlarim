/* 

! Map Metodu 


* map() yöntemi, JavaScript'te bir dizi içindeki her bir öğeyi işlemek ve bu öğelerin dönüş değerleriyle yeni bir dizi oluşturmak için kullanılan bir metottur. Orijinal diziye dokunmadan, yeni bir dizi döner. Bu, özellikle bir dizinin öğelerini dönüştürmek veya yeni bir yapıya çevirmek istediğimizde kullanışlıdır.

! Nasıl Çalışır?

* map() metodu, bir geri çağırma (callback) fonksiyonu alır. Bu fonksiyon, dizideki her bir öğeye sırayla uygulanır.

* Her öğe üzerinde geri çağırma fonksiyonu çalıştırıldıktan sonra, map() yeni bir dizi döndürür. Bu yeni dizide, geri çağırma fonksiyonunun her öğe için döndürdüğü değerler bulunur.

! Ne zaman Kullanılır? 


Bir dizi içindeki öğeleri dönüştürmek istediğinizde (örneğin, sayıların iki katını almak, metinleri değiştirmek).

Bir diziyi manipüle ederken orijinal diziyi değiştirmeden yeni bir sonuç oluşturmak istediğinizde.

Dizi elemanlarını farklı bir yapıya çevirmek (örneğin, nesneleri veya stringleri) istediğinizde.
*/

const yeniDizi = eskiDizi.map((öğe, indeks, dizi) => {
    // Burada her öğe için işlem yapılır ve dönüş değeri yeni diziyi oluşturur
    return işlemGörmüşÖğe;
  });

  

//? öğe: İşlem yapılacak dizi elemanı.
//? indeks: İşlem yapılan öğenin dizideki sırası (opsiyonel).
//? dizi: İşlem yapılan orijinal dizi (opsiyonel).

