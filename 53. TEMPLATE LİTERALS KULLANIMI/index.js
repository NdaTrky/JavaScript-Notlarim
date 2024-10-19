/*

! Template Literals Kullanımı

Template literals, JavaScript'te string oluşturmanın daha esnek ve okunabilir bir yoludur. Backtick (`) işaretleriyle tanımlanırlar ve normal stringlerden farklı olarak, satır içi değişkenleri ve ifadeleri kolayca ekleyebilmenizi sağlarlar. Ayrıca çok satırlı stringler oluşturmak için de kullanışlıdırlar.

*/

const name = "Nida";
const age = 23;
const message = `Merhaba, benim adım ${name} ve ben ${age} yaşındayım.`;
console.log(message);


// * ukarıdaki kodda, ${} içinde belirtilen ifadeler dinamik olarak stringe eklenir. Bu özellik sayesinde stringleri birleştirmek için + operatörü kullanmanıza gerek kalmaz ve kod daha okunaklı olur.



// ? Ayrıca, template literals kullanarak çok satırlı stringler yazabilirsiniz

const multiLine = `Bu birden fazla
satırdan oluşan
bir mesajdır.`;
console.log(multiLine);
