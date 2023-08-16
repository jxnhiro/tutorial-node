//Modules in Node.JS uses CommonJS

//Modules are encapsulated code (only share minimum)
const john = "John"

const sayHi = (name) => {
    console.log(`Hello name ${name}`);
}

sayHi('Susan');
sayHi("John");