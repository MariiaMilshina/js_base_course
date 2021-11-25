/*12*. Запросите у пользователя число и проверьте есть ли оно в массиве
			Если есть, то сколько раз встречается
		var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]];
	-->*/

    var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
	console.log("Array: "+ myArray );


	var a =+prompt("Enter number: ");

    count = 0;

	for (var i = 0; i <myArray.length; i++ ){
		if (myArray[i] == a){
			count++;
		} 
	}

	console.log("Введенное число " + a + " есть в массиве " + count + " раз");