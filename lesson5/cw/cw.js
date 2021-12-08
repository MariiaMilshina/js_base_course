/*1.  Обрезать строку (первый аргумент), если она длиннее заданной максимальной длины строки (второй аргумент). Вернуть усеченную строку с ... окончанием.


//мы должны создать массив из строки str
//обрезать полученный массив на количество элем равное num
//полученный массив превр в строку и добавить ...
//добавить return

function truncateString(str, num) {
    if (str.length > num){
      //  var arr = str.split("");
        //console.log(arr);
    //var result = arr.splice(0, num);
    //console.log(result);
    //var a = result.join("");
    //a += "...";
    //return a;

    return str.split("").splice(0, num).join("")+"...";
    }

    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);*/







/*2.  Создайте функцию, которая просматривает массив (первый аргумент) и возвращает первый элемент в массиве, который проходит проверку на истинность (второй аргумент). 
Если ни один элемент не проходит тест, вернуть undefined.


//запустить цикл 
//на каждом єлементе массива візвать функцию func
//if func = true -> вернуть текущий элем массива

function findElement(arr, func) {
    for (var i = 0; i < arr.length-1; i++){
        if(func(arr[i])){
            return arr[i];
        }
    }
}

findElement([1,2,3,4], function(num){
    return num % 2 === 0
});
*/





/*3.  Напишите код, выполнив задание из каждого пункта отдельной строкой:
    Создайте пустой объект user.
    Добавьте свойство name со значением John.
    Добавьте свойство surname со значением Smith.
    Измените значение свойства name на Pete.
    Удалите свойство name из объекта.

var user = {};
user.name = "John";
console.log(user);
user.surname = "Smith";
console.log(user);
user.name = "Pete";
console.log(user);
delete user.name;
console.log(user);*/





/*4.  Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

var obj = {};
var obj2 = {
    name : "Alex", 
    color: "red"
};

function isEmpty(obj){
    var arrProperties  = Object.getOwnPropertyNames(obj);
    console.log(arrProperties);

    if(arrProperties.length === 0){
    return true;
    } return false;
}
*/




/*5.	Будет ли место?
    Боб работает водителем автобуса. Он подъезжает к остановке и ему нужно посчитать, сколько пассажиров он может посадить в автобус.
    Напишите функцию, которая принимет три параметра:
    1 - количество людей, которое вмещает автобус.
    2 - число людей, находящихся в автобусе.
    3 - люди, ожидающие на остановке.
    Если место для всех достаточно, то функция должна вернуть 0, иначе, она должна вернуть количество людей, которые не смогут поместиться.

    Примеры:

    
    // 0, так как вместятся все
    enough(100, 60, 50);
    // 10, Не поместятся 10 из 50


    enough(10, 5, 5);
function enough (busCapacity, passInBus, passWaitingForBus){
var canGoIn = busCapacity - passInBus; //free places
if (canGoIn >= passWaitingForBus){
    return 0; 
} return passWaitingForBus - canGoIn;
} 
*/






/*6.	Сколько чашек кофе мы можем сделать?
    
    Напишите функцию, которая принимает один аргумент - количество кофейных зерен.
    По условию - из 5 кофейных зерен можно сделать 1 чашку кофе.
    Если зерен на чашку кофе не хватает - попросите у пользователя еще.
    
    Верните количество чашек с кофе, которые можно сделать из того кол-ва зерен, что у вас уже имеется.
    
    Те зерна, которые остались должны быть учтены при следующей готовке (используйте глобальную переменную)
    
    Например вызовите подряд несколько раз функцию, с разными значениями:
    doCoffee(10)    => "Приготовлено чашек кофе: 2, осталось зерен: 0";
    doCoffee(4)		=> "Можно еще зерен?" => "Приготовлено чашек кофе: 1, осталось зерен: 2";
    doCoffee(3)		=> "Приготовлено чашек кофе: 1, осталось зерен: 0";


   function doCoffee (beansCount){
       if (beansCount % 5 === 0){
        console.log("Приготовлено чашек кофе: 2" +  beansCount / 5 + ", осталось зерен: 0");
        return;
       }if (beansCount < 5){
           console.log("Можно еще зерен?");
           return;
       }
     var amountOfCups =  Math.floor(beansCount / 5);
     console.log("Приготовлено чашек кофе: "+  amountOfCups + " осталось зерен: " + (beansCount - (amountOfCups*5)));
     return;
   }
   doCoffee(12);*/
 