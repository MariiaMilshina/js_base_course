/*Создать функцию, возводящую число в степень, число и сама степень
 вводится пользователем
		Проверить числа на корректность*/

var a = +prompt("Enter your num");
var b = +prompt("Enter your power");

function doExponentiation (){
var result = Math.pow(a,b);

if (a == 0 && b ==0){
    return("Error!")
} else {
    return result ;
}
}

doExponentiation();



