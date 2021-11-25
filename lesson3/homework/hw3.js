/*3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный элемент массива заполнить подмассивом со значением 'odd', а чётный - 'even'. 
    Размер каждого вложенного массива - 3.
    Для массива размером 3
    ['odd', 'odd', 'odd']       // 1й элемент
    ['even', 'even', 'even']    // 2й элемент
    ['odd', 'odd', 'odd']       // 3й элемент
    let arr = [
        ['odd', 'odd', 'odd'],
        ['even', 'even', 'even'],
        ['odd', 'odd', 'odd']
    ]*/

var a = +prompt("Size of the array: ");
    
let myArray = [
    ['odd', 'odd', 'odd'],
    ['even', 'even', 'even'],
    ['odd', 'odd', 'odd']
];
a = myArray.length;

for (var i = 0; i < myArray.length; i++){
    if (myArray[i]%2 !== 0){
    myArray[i] = "odd";
    console.log(myArray);
    } else if(myArray[i]%2 == 0){
        myArray[i] = "even";
        console.log(myArray);
    }
    
}


    