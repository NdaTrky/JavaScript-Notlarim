//!Document.write()
// ? String tipinde değerler yazabiliriz.


// document.write("Hello World <br>");

// document.write(" Nida Türkay")


//!Console.log()

console.log("Hello World")
console.log(7)
console.log(true)
console.log({name: "Nida", surname:"Türkay"})

console.clear() //konsolu temizleriz. 


let a = 5;
let b = 10;

console.log("2 sayının toplamı " + (a+b) + " 'tir.");



//! alert() uyarı anlamına gelir. 

console.log(window); //window objesi, JavaScript'in/Bir web sayfasının en büyük objesidir. İçerinde bir çok method ve özellik bulunur. 

//window en dış çerçevemiz oluyor. 

console.log(document.location.host); //uygulamayı ayağa kaldırdığımız host adresini alabiliriz. 

console.clear();

//? alert("Merhaba"); 
//sayfada pop up oluşturur. 



// ! WİNDOW ve DOCUMENT Nesneleri 
// Window içerisindekilere erişirken window olarak belirtmemize gerek yok. Ancak document içerisindeki bilgilere erişmek için document.erismek-istedigimiz-obje şeklinde yazmalıyız. 
// Document de window içerisinde yer alıyor.

console.log(window);


//! GELİŞTİRME ARACI (KONSOLU) NEDİR? 
// Elements : html - css - js kodları görünür. 
// Console : Çıktı işlemleri vermek için kullanıyoruz. 
// Sources : debugger kullanarak kodlarımızı tane tane yazmaya calısacağız. 
//?debugger; ile tek tek kodların üzerinden geçebileceğiz. 
//Network: Axios isteklerini görebileceğimiz bir alan. 
// Application: Local Storage ve Session Stroge olarak 2 tane Stroge(Depolama) alanımız var. 

//? Session Stroge'a ve Local Stroge'a verilerimizi key:value şeklinde depolayabiliyoruz. 

//! Aralarındaki Fark Nedir?

//* Session Storage: Veriler tarayıcıyı kapatıp açtığımızda silinir. 
//* Local Stroge: Silme işlemi özellikle yapılmadığı sürece tarayıcıyı açıp kapatınca silinmez. 



