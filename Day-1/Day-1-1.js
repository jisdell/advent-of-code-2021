var fs = require('fs');
var text = fs.readFileSync("./input.txt", "utf-8");
var textByLine = text.split("\n").map(Number);
var arrayLength = textByLine.length
var count = 0

for(var i=0; i < arrayLength; i++){
    if(textByLine[i] < textByLine[i+1]){
        count++
        console.log(textByLine[i]+" Increased to "+ textByLine[i+1] + " " + count)
    }
    else if (textByLine[i] > textByLine[i+1]){
        console.log(textByLine[i]+" Decreased to " + textByLine[i+1])
    }
    else console.log(textByLine[i]+" No Change")
};