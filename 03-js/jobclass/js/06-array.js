//Class Practice - DIY 18 - Array
 
let array=[4,6,10]

console.log(array);

//Class Practice - DIY 19 - Array
 
 let array1=[4,6,10]

 console.log(array1.reverse());

 let array2=[400,600,35]
 array2.sort((a, b) => a - b);
 console.log(array2);

 array2.sort((a, b) => b - a);

 console.log(array2);


 let array3 =  new Set([1, 2, 3]);
 console.log(array3);

 let arr = [];

function number() {
    for (let i = 0; i < 5; i++) {
        let num = prompt("Ingrese un número");
        if (num !== null && !isNaN(num)) {
            arr.push(Number(num));
        } else {
            alert("porfavor ingrese un número valido");
            i--;         }
    }
    document.getElementById("numbers").innerHTML = arr.join(", ");
}