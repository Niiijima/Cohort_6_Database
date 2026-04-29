//to import a default export
const hello =require("./eng");  //(./) shows the directory route
//to import a named export
const {add, subtract} = require("./math")

hello(); //here i had used console.log in the exportfile (eng) so i dont need to console.log it
//default exports can be renamed when importing eg, i imported hello and renamed it hi
//Named exports cant be renamed
console.log(add(5, 3))
console.log(subtract(10,4))  //why we are pass console here is because in the export file(math), i used return
