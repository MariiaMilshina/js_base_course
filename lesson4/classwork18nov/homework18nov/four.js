/*Напишите функцию, которая возвращает n-е число Фибоначчи.
		Число, которое должна вернуть функция вводит пользователь.
		Для решения используйте цикл.
		Пользователь ввел: 6
		Ряд Фибоначчи: 1, 1, 2, 3, 5, 8, 13, ...
		Функция должна вернуть: 8*/

        var a = +prompt("Enter your number");
        
        function returnFibonachi(a){
            var prev = 0;
            var next = 1;
            
     for (let i = 1; i < a; i++){
    let c = next + prev;
    prev = next;
    next = c;
    console.log(prev);
}
return next;
}


returnFibonachi(a);
