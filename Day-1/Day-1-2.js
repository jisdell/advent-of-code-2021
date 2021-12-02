var fs = require('fs');
var text = fs.readFileSync('./input.txt', "utf-8");
var textByLine = text.split("\n").map(Number);
var arrayLength = textByLine.length
var count = 0


for(var i=0; i < arrayLength; i++){
    var cycleOne = textByLine[i] + textByLine[i+1] + textByLine[i+2]
    var cycleTwo = textByLine[i+1] + textByLine[i+2] + textByLine[i+3]
    if(cycleOne < cycleTwo){
        count++
        console.log(cycleOne+" Increased to "+ cycleTwo + " " + count)
    }
    else if (cycleOne > cycleTwo){
        console.log(cycleOne+" Decreased to " + cycleTwo)
    }
    else console.log(textByLine[i]+" No Change")
};
