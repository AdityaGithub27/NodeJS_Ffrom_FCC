//Common JS, every file in node is a module(default)
//modules-encapsulated code(only share minimum)
const greet=(name)=>{
    console.log(`Hello ${name}`);
}

module.exports=greet;