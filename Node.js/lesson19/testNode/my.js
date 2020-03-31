console.log('Hello');
console.log(process.argv.slice(2));
const params=process.argv.slice(2)
console.log(`Hi ${params[1]}. You are ${params[0]} years old`);

