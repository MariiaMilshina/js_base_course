/* 
    1. Создать объект Point, содержащий два свойства: "x" и "y" — координаты точки, и метод GetQuadrant, вычисляющий, в каком квадранте в декартовой системе координат находится данная точка. Протестируйте данный объект, изменяя значения его координат, и повторно вызавая метод GetQuadrant.

var a = +prompt("Enter your x:");
var b = +prompt("Enter your y:");


var point = {
    x:a,
    y:b
};

function GetQuadrant(x,y) {
if (x < 0 && y < 0){
    console.log("Third quadrant");
} else if (x < 0 && y > 0){
    console.log("First quadrant");
}else if (x > 0 && y > 0){
    console.log("Second quadrant");
}else if (x < 0 && y < 0){
    console.log("Fourth quadrant");
}
}
GetQuadrant();*/



    /*
    
    2. Создать объект Calculator, который должен содержать методы для расчета суммы, разности, произведения и частного двух чисел.
       Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
       В зависимости от принятого знака операции, вызвать соответствующий метод.  
	   
       var a = +prompt("Enter your num:");
       var sign = prompt("Enter your sign: ");
       var b = +prompt("Enter your num:");

       var calculator = {
           sum: function(a,b){
           return a + b; 
           },
           sub: function(a,b){
           return  a - b; 
           },
           div: function(a,b){
           return a / b; 
           },
           mul: function(a,b){
           return a * b; 
           }
       }

       function calc(a,b,sign){
        switch (sign) {
            case "+":
                    return calculator.sum(a,b);
            case "-":
                return calculator.sub(a,b);
            case "*":
                return calculator.mul(a,b);
            case "/":
                return calculator.div(a,b);
            default:
                document.write("<p><b style='color:red'>" + sign + "</b> - не является знаком арифметической операции.</p>");
        }
        }
        console.log(calc(a,b,sign)); */
 

    
    /*   3. Создать два произвольных массива: 
        один массив - любимая спортивная команда / модели автомобилей / города, 
        во втором - количество игроков в команде / объем двигателя / количество жителей в городе.
		Из двух массивов сделайте ассоциативный массив (объект).
		Массив, который будет выступать в качестве ключа - должен содержать уникальные значения
		
		Например:
		let keys = ["id", "name"];
		let values = [1, "Vlad"];
		
		В результате должно получится следующее:
		{
			"id": 1,
			"name": "Vlad"
		}


let key = ["Country", "Language", "Population"];
let value = ["Poland", "Polish", 1000];

let object = {};

for (var i = 0; i < key.length; i++){
object[key[i]] = value[i];
}

console.log(object);*/



   /* 4. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
       содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
       Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках.


var a = +prompt("Enter the amount of members: ");
var company = [];

for (var i = 0; i < a; i++){
company[i] = {
    Name : prompt("What's your name?"),
    sName : prompt("What's your surname?"),
    age : +prompt("What's your age?"),
    occupation : prompt("What's your occupation?"),
    show : function(){
        console.log("Name: " + company[i].Name + " Surname: " + company[i].sName + " Age: " + company[i].age + " Occupation: " + company[i].occupation);
    }
};
};
for (var i = 0; i < company.length; i++){
    company[i].show();
};
console.log(company);*/

   /* 5. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
       будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
       Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
           • "director" — 3000;
           • "manager" — 1500;
           • "programmer" — 2000;
           • для остальных значений — 1000.
       После выполнения функции — вывести информацию о сотрудниках.
           
       // sort(function(a, b) { return a > b });
       // 1, 2, 3, 5, 10, 14
       // 1, 10, 14, 2, 3,


var a = +prompt("Enter the amount of members: ");
var company = [];

for (var i = 0; i < a; i++){
company[i] = {
    Name : prompt("What's your name?"),
    sName : prompt("What's your surname?"),
    age : +prompt("What's your age?"),
    occupation : prompt("What's your occupation?"),
    show : function(){
        console.log("Name: " + this.Name + " Surname: " + this.sName + " Age: " + this.age + " Occupation: " + this.occupation + " Salary: " + this.salary);
    }
}
};
for (var i = 0; i < company.length; i++){
    company[i].show();
};


function addSalary(){
  for (var i = 0; i < company.length; i++){
if (company[i].occupation == "director"){
    console.log(company[i].salary = 3000);
}else if (company[i].occupation == "manager"){
    console.log(company[i].salary = 1500);
}else if(company[i].occupation == "programmer"){
    console.log(company[i].salary = 2000);
}else {
    console.log(company[i].salary = 1000);
}
}
for (var i = 0; i < company.length; i++){
    company[i].show();
};
};

addSalary();
*/



    /*6. (*) Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств: name, sName, age, occupation, salary.
       Параметр для сортировки принимается от пользователя.
       После выполнения функции — вывести информацию о сотрудниках.*/

       var a = +prompt("Enter the amount of members: ");
var company = [];

for (var i = 0; i < a; i++){
company[i] = {
    Name : prompt("What's your name?"),
    sName : prompt("What's your surname?"),
    age : +prompt("What's your age?"),
    occupation : prompt("What's your occupation?"),
    show : function(){
        console.log("Name: " + this.Name + " Surname: " + this.sName + " Age: " + this.age + " Occupation: " + this.occupation + " Salary: " + this.salary);
    }
}
};
for (var i = 0; i < company.length; i++){
    company[i].show();
};


function addSalary(){
  for (var i = 0; i < company.length; i++){
if (company[i].occupation == "director"){
    console.log(company[i].salary = 3000);
}else if (company[i].occupation == "manager"){
    console.log(company[i].salary = 1500);
}else if(company[i].occupation == "programmer"){
    console.log(company[i].salary = 2000);
}else {
    console.log(company[i].salary = 1000);
}
}
for (var i = 0; i < company.length; i++){
    company[i].show();
};
};

addSalary();

var b = prompt("Enter the parameter for sorting");

function byB(key){
    return (a, b) => a[key] > b[key] ? 1 : -1;
};

if (b == "name"){
company.sort(byB('name'));
company.forEach(company => alert(company.Name));
 } else if (b == "age"){
company.sort(byB('age'));
company.forEach(company => alert(company.age));
} else if (b == "surname"){
    company.sort(byB('sName'));
company.forEach(company => alert(company.sName));
};

function byB(key){
    return (a, b) => a[key] - b[key] ? 1 : -1;
};
if (b == "salary"){
    company.sort(byB('salary'));
    company.forEach(company => alert(company.salary));
};

byB(b);
