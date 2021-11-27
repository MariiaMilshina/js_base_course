/*1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
		Функция должна расчитывать результат операции, исходя из переданного ей знака. 
		Функция должна проверять корректность введенных чисел и знака операции.
		Все аргументы для функции принять от пользователя.*/
        
var a;
var b;
var sign;
var result;
        
            a = +prompt("Enter first num");
            sign = prompt("Enter your sign");
            b = +prompt("Enter your num");
            
function calculate (a,b,sign){
switch (sign) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        result =a / b;
        break;
    default:
        document.write("<p><b style='color:red'>" + sign + "</b> - не является знаком арифметической операции.</p>");
}
document.write(result);
}
calculate(a,b,sign);

