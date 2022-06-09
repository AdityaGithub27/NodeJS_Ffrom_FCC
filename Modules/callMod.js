const greet =require('./module1');
// console.log(module);
// console.log(greet);
greet('Aditya');
// greet('Aishwarya');
// greet('Adirya');
const os=require('os');
console.log("",os.userInfo());
const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freemem:os.freemem(),
}
console.log("currentOS",currentOS);
