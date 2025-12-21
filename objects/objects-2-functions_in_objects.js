/**
 * Function as Object Property
 */

const person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    },

    bye(){
        console.log(`Good Bye Mr.${this.name} Nice meeting you`);
    }
};

person.greet(); // "Hello, my name is John"
person.bye();
