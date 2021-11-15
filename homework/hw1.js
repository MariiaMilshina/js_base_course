var a = +prompt("Enter your first number: ");

var b = +prompt("Enter your second number: ");

var c = +prompt("Enter your third number: ");

if (a != b && a != c && b!=c){
    alert((a + b + c)/3);
} else {
    alert("Mistake!");
}
