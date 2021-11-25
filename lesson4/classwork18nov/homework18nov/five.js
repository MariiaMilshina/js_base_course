/*5.  Создать игру "Камень-Ножницы-Бумага".
Выбор компьютера определяется строкой:  

var computerChoice = Math.random();
alert(computerChoice);

let comp = getComputerChoice();
let user = getUserChoice();
function game(comp, user) {
    
}
Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
Запросить у пользователя один из трех вариантов "Камень-Ножницы-Бумага"
Сравнить ответ пользователя и компьютера, определить кто выиграл (или ничья)
Спросить пользователя, хочет ли он повторить, если "да", запустить игру заново*/



var userChoice = prompt("Что выбираете, камень, ножницы или бумагу?").toLowerCase();
var computerChoice = Math.random();

if (computerChoice < 0.34) {
    computerChoice = "камень";
} else if(computerChoice <= 0.67) {
    computerChoice = "бумага";
} else {
    computerChoice = "ножницы";
}

document.write("<p>Ваш выбор: " + userChoice + "</p>");
document.write("<p>Выбор компьютера: " + computerChoice + "</p><br>");


let comp = computerChoice;
let user = userChoice;

function game(comp, user) {
    if (comp === user){
        document.write("ничья");
    }

    else if (comp === "ножницы"){
      if  (user === "бумага") {
            document.write("Вы проиграли");
        }

    } else if (comp === "камень"){
        if  (user === "бумага") {
            document.write("Вы выиграли");
    }
}

else if (comp === "бумага"){
        if  (user === "ножницы") {
            document.write("Вы выиграли");
    }
}

else if (comp === "ножницы"){
    if  (user === "камень") {
        document.write("Вы выиграли");
}
}

else if (comp === "камень"){
    if  (user === "бумага") {
        document.write("Вы выиграли");
}
}

else if (comp === "бумага"){
    if  (user === "камень") {
        document.write("Вы выиграли");
}
}
else if (user === "") {
    document.write("Вы должны записать выбранный Вами предмет в поле.");

} else if (user !== "камень","бумага","ножницы") {
    document.write("Нельзя выбирать этот предмет -> " + user);
}

}

game(comp,user);

