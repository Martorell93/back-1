// //Reto 1
console.log("Mensaje 1");
setTimeout( () => {
    console.log("Mensaje 2");
    console.log("Mensaje 3");
}, 3000)

// //Reto 2
const fs = require('fs');

let persona1 = {
    "name" : "Pedro",
    "surname" : "Benítez",
    "age" : 45
}

function escribir (path, persona) {
    fs.writeFile(path, JSON.stringify(persona, null, 2), () => {
        fs.readFile(path, (err, data) => {
            const readObject = JSON.parse(data);
            console.log(readObject);
        })
    })
}

escribir("persona.json", persona1);

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
            escribir("persona.json", persona2);
            rl.close();
        });
    });
});