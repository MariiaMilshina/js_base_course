/*1. Сделать собственные примеры методов применяемых для массивов.*/

var books = ["Fiction", "Adventurous", "Novel","Horror"] ;

var newbooks = books.join(" and "); //join
console.log("join: " + newbooks);

var magazines = ["Forbes", "Times"];//concat
var press = books.concat(magazines);
console.log("concat: " + press); 

//books = books.reverse();//reverse
//console.log("reverse: " + books);

var piece = press.slice(0, 3);//piece
console.log(piece);

var del = books.splice(1, 2);//splice delete
console.log(del);

//books.splice(1, 0, "Comic");//splice add
//console.log(books);


var movies = ["movie 1", "movie 2", "movie 3"]//sort
console.log("sorted movies: " + movies[1]);

var forPush = [2,5,6,3,5,9];
console.log("The size of the array: "+ forPush.length);

forPush.push(10,11,12);
console.log("Add to the end: " + forPush);

forPush.shift();
console.log("Del from the beginning: " + forPush);

