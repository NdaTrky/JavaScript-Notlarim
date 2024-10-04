//! STYLE ÖZELLİĞİ KULLANIMI 

// https://www.w3schools.com/jsref/dom_obj_style.asp



const button1 = document.querySelector(".button");
console.log(button1);

button1.style.backgroundColor="red";




/*

Eğer burda querySelectorAll ile yapmak istersek;

querySelectorAll metodu, birden fazla eleman döndürür ve bu nedenle button1, bir NodeList döndürür. NodeList üzerindeki style özelliğine doğrudan erişemezsiniz. Bunun yerine, döngü kullanarak her bir buton için style özelliğini ayrı ayrı ayarlamanız gerekir

*/


const buttonAll = document.querySelectorAll(".button");
console.log(buttonAll);

buttonAll.forEach(button => {
    button.style.backgroundColor = "red";  
    button.style.fontWeight = "bold";
    button.style.border = "2px";
    button.style.margin = "30px";
    button.style.padding = "10px";
    button.style.color = "#fff";
 
    
});


