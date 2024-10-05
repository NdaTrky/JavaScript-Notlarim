//! Dinamik Olarak Element Oluşturmak 


// ? Eklediğimiz butonu ekranda göstermek için, içine eklemek istediğimiz div'i yakalamalıyız. 

const cardBoddy = document.querySelector(".card");


// Var olan Submit butonunun yanına dinamik olarak Reset Butonu eklemek isyersek;

const button = document.createElement("button");
button.id = "reset";
button.style.backgroundColor = "red"
button.className = "button";
button.target = "_blank" // Tıklandığında ayrı bir sekmede açmasını sağlarız.
button.textContent = "Reset";

console.log(button);



cardBoddy.appendChild(button); // böylece reset butonunu da eklemiş oluruz. 