/*1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
		Функция должна расчитывать результат операции, исходя из переданного ей знака. 
		Функция должна проверять корректность введенных чисел и знака операции.
		Все аргументы для функции принять от пользователя.*/
        
var a;
var b;
var sign;
var result;
            
            function add(a, b) {
                return a + b;
            }
            
    
            function sub(a, b) {
                return a - b;
            }
    
            function mul(a, b) {
                return a * b;
            }
    
            function div(a, b) {
                return a / b;
            }

            a = +prompt("Enter first num");
            sign = prompt("Enter your sign");
            b = +prompt("Enter your num");

switch (sign) {
    case "+":
        result = add(a, b);
        break;
    case "-":
        result = sub(a, b);
        break;
    case "*":
        result = mul(a, b);
        break;
    case "/":
        result = div(a, b);
        break;
    default:
        document.write("<p><b style='color:red'>" + sign + "</b> - не является знаком арифметической операции.</p>");
}

document.write(result);