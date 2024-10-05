//! HTML ELEMENTLERİ ÜZERİNDE GEZİNMEK 


/*


* JavaScript ile DOM (Document Object Model) üzerinde gezinmek, bir web sayfasındaki elementler arasında hareket etmek ve etkileşimde bulunmak için kullanılır. İşte DOM'da elementler arasında gezinmek için yaygın olarak kullanılan yöntemler ve özellikler:

*/


// ? 1. Ebeveyn (Parent) Elementlere Erişim: 
// * parentNode: Bir elementin ebeveynini döndürür.

const childElement = document.querySelector('.child');
const parentElement1 = childElement.parentNode;

// ? 2.  Çocuk (Child) Elementlere Erişim:
// * children: Bir elementin tüm çocuklarını içeren bir HTMLCollection döndürür.

const parentElement2 = document.querySelector('.parent');
const children = parentElement.children; // HTMLCollection

// * firstChild ve lastChild: Bir elementin ilk ve son çocuğunu döndürür.

const firstChild1 = parentElement.firstChild;
const lastChild1 = parentElement.lastChild;

// ? 3. Kardeş (Sibling) Elementlere Erişim 
// * nextSibling ve previousSibling: Bir elementin bir sonraki veya bir önceki kardeşini döndürür.

const siblingElement = childElement.nextSibling;
const previousElement = childElement.previousSibling;

// * nextElementSibling ve previousElementSibling: Yalnızca element olan sonraki veya önceki kardeşi döndürür (metin düğümleri hariç).

const nextElement = childElement.nextElementSibling;
const prevElement = childElement.previousElementSibling;




const parentElement = document.querySelector('.parent');

// İlk çocuğa erişim
const firstChild = parentElement.firstElementChild;
firstChild.style.color = 'blue'; // İlk çocuğun yazı rengini mavi yap

// Son çocuğa erişim
const lastChild = parentElement.lastElementChild;
lastChild.style.color = 'green'; // Son çocuğun yazı rengini yeşil yap

// Kardeş elemanları gezme
const secondChild = firstChild.nextElementSibling; // İkinci çocuğa erişim
secondChild.style.color = 'red'; // İkinci çocuğun yazı rengini kırmızı yap
