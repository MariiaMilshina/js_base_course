/*8. Создайте список покупок в переменной myList. Список должен быть многомерным массивом, содержащим несколько подмассивов.
		Первый элемент в каждом подмассиве должен содержать строку с именем элемента. Второй элемент должен быть числом, представляющим цену, т.е.
		[«Шоколадная плитка», 15]
		В списке должно быть не менее 5 подмассивов.
		Выведите в консоль список всех покупок без цен
		Используйте методы добавления удаления элементов из массива*/

        var myList = [
            ['choco', 15],
            ['coffee', 185],
            ['milk', 915],
            ['flour', 5],
            ['seeds', 1]];

           myList.pop();
           
           myList.shift();

            for (var i = 0; i < myList.length ; i++) {
                console.log(myList[i][0]);
            };

            
            
        