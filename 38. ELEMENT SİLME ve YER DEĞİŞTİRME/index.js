// ! ELEMENT SİLMEK 

const div1 = document.querySelector(".card");

div1.children[1].remove(); //böylece butonu silmiş olduk. 
console.log(div1);



// * JavaScript ile element silme işlemi, remove() metodu veya parentNode.removeChild() yöntemi kullanılarak kolayca yapılabilir. Kullanıcı etkileşimleri ve onay alma gibi ek özellikler ekleyerek bu işlemi daha kullanıcı dostu hale getirebilirsiniz.

 
// ! Element Yer Değiştirme 


//* Elementleri yer değiştirme işlemi, DOM üzerinde belirli node'lar arasında hareket ettirmeyi ifade eder. Örneğin, bir elementin başka bir elementin içinde yerini değiştirmek için insertBefore, appendChild, veya replaceChild gibi yöntemler kullanılır.

// ? Node Nedir ? 

/* "Node" terimi, Document Object Model (DOM) içinde bir yapı parçasını ifade eder. DOM, bir web sayfasının yapısını temsil eden bir ağaç yapısıdır ve bu ağaçtaki her bir öğe bir "node" olarak adlandırılır. İşte bu kavramla ilgili bazı detaylar:



Node Türleri:

* Element Node:
HTML veya XML etiketlerini temsil eder. Örneğin, bir <div>, <p>, <span> gibi etiketler.
* Text Node:
 Bir elementin içindeki metni temsil eder. Örneğin, bir <p> etiketinin içindeki "Merhaba" metni bir text node'dur.
* Comment Node:
 HTML belgesindeki yorumları temsil eder.
* Document Node:
 Bir belgenin kök düğümünü temsil eder (genellikle document nesnesi).


*/