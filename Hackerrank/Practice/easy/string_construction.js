'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the stringConstruction function below.
function stringConstruction(s) {
    let array_answer=[],answer = 0
    for(let i=0;i<26;i++) {
        array_answer[i] = 0
    }
    for(let i=0;i<s.length;i++) {
        if(array_answer[s[i].charCodeAt(0) - 97] === 0) {
            array_answer[s[i].charCodeAt(0) - 97]++
            answer++
        }
    }
    return answer
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = stringConstruction(s);

        ws.write(result + "\n");
    }

    ws.end();
}
