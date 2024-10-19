// ! For in And For Of Loop 


// ? For in döngüsü, her elemanın İNDEX değerini verir. 
//? Bunu (in) ile aklımızda tutabiliriz. Bu index'in kısatlması olarak düşünülebilir. 




let names = ["nida", "semih","burak","merve","ali"]

for(let name in names){
    console.log(name) 
}

//eğer; 

for(let name in names){
    console.log(name , names[name]) //şeklinde yazarsak, isim değerlerini de index değerinin yanına yazdırmış oluruz.
}



// ? For Of Loop --- Direkt değeri verir. indexOf ile hem değerine hem indexine erişebiliriz. 

for(let isim of names){
    console.log(isim, names.indexOf(isim));
}












