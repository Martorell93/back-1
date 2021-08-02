// //Reto 1
// console.log("Mensaje 1");
// setTimeout( () => {
//     console.log("Mensaje 2");
//     console.log("Mensaje 3");
// }, 3000)

// //Reto 2
const fs = require('fs');

// let persona1 = {
//     "name" : "Pedro",
//     "surname" : "Benítez",
//     "age" : 45
// }

// let string1 = JSON.stringify(persona1, null, 2);
 
// setTimeout (
//     () => {
//         let data = fs.readFileSync("./persona.json", "utf-8");
//         console.log(data);
// }
// , 2000)

// fs.writeFileSync("persona.json", string1);

//Reto 3
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Nombre?: ", function(answer1) {
    rl.question("¿Apellido?: ", function(answer2) {
        rl.question("¿Edad?: ", function(answer3) {
            let persona2 = {
                "name" : answer1,
                "surname" : answer2,
                "age" : answer3
            };
            let string2 = JSON.stringify(persona2, null, 2);
            setTimeout (
                () => {
                    let data = fs.readFileSync("./persona2.json", "utf-8");
                    console.log(data);
            }
            , 2000)
            
            fs.writeFileSync("./persona2.json", string2);
            // rl.write(string2)
            rl.close();
        });
    });
});