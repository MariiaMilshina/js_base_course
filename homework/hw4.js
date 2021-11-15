var a = +prompt("enter the first number: ");
var b = +prompt("enter the second number: ");
var sum; 


for (var sum = 0; a <= b;  ++a){
    sum +=a;

     
    if (a % 2 === 0){
    console.log("Wrong!");
    
    }  else {
        document.write(a + "</br>");
    }

}

console.log(sum);
console.log(a);


