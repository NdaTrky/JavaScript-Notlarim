// ! SELECTORS (SEÇİCİLER) - STYLE ÖZELLİKLERİ

// ? Bir şeyi yakalamak için 3 yöntem vardır; 

// * CLASSNAME

// * İD 

// * TAG NAME 


// getElementById : ID bilgisine göre elementi yakalar. 
// getElementByClas : Class ismine göre yakalar. 
// getElementByTagName : Etiket ismine göre yakalar.

let button1 = document.getElementById("deneme");
console.log(button1);
console.log(button1.id);
console.log(button1.getAttribute("id"));

// console.log(button1.className);
// console.log(button.getAttribute("class"));


// const classListesi = button classList;
// classListesi.forEach(function(className){
// console.log(className)
// )}


let buttonText = button1.textContent; // direkt string olarak içerideki metni alırız.
let buttonText2 = button1.innerHTML // html elementi varsa onları da algılar.


console.log(buttonText);
console.log(buttonText2);


button1.textContent= "<b> SUBMİT </b>";
button1.innerHTML= "<b> SUBMİT </b>";


const toDoList = Array.from(document.getElementsByClassName("deneme"))
toDoList.forEach(function(todo){
    console.log(todo)
})
console.log(toDoList)


const submit = document.getElementsByTagName("SUBMİT")
console.log(submit)

// ! 

// * Üst kısımda class, id ve tag icin ayrı getElement Selectorslerini gördük. Bu üç ayrı metodun yaptığı işlemi,

// ? querySelector - querySelectorAll ile yapabiliriz. 


const submitButton = document.querySelector("#deneme");
console.log(submitButton);


const resetButton = document.querySelector(".temizle");
console.log(resetButton);

const buttons = document.querySelectorAll(".deneme-button");
console.log(buttons);


// const todoList = document.querySelectorAll("li:nth-child(2)");
// console.log(todoList);