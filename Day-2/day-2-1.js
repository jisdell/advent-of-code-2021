const fs = require('fs');
const text = fs.readFileSync("./input.txt", "utf-8");
const textByLine = text.split("\n");
const arrayLength = textByLine.length;

function getResult(lines, array){
    let distance = 0
    let depth = 0
    for(let i=0; i < array; i++){
        let words = lines[i].split(" ")
        let move = words[0]
        let number = Number(words[1])
        if(move==="forward"){
            distance += number 
        }
        else if (move==="down"){
            depth += number 
        }
        else if (move==="up"){
            depth -= number
        }
    //Used to check the passes  
    //console.log(distance)
    //console.log(depth)
    }
    return distance * depth
};
console.log(getResult(textByLine,arrayLength));