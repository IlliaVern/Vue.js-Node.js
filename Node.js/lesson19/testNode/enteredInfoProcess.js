var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Enter number: ");
rl.on("line", function(num) {
    console.log("You entered = ", num);
    rl.close()
    
})
