function printPattern(n) {
    for (let i = n; i > 0; i--) {
        console.log('* '.repeat(i));
    }
}

let n = 10;
printPattern(n);
