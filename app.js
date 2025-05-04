"use strict";
//generic
function returnFirstElement(items) {
    return items[0];
}
let numbers = [1, 6, 4, 2, 7];
let strings = ['Pete', 'John', 'Alex'];
let stringContainer = { value: 'John' }; //instance
let numberContainer = { value: 2 }; // instance
//class generic
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
let num = new Box(4);
let str = new Box('John');
// class with method generic
class Logger {
    log(message) {
        return message;
    }
}
// homework
function identify(item) {
    return item;
}
let UserResponce = {
    status: 200,
    data: {
        id: 1,
        name: 'John'
    },
    message: 'User logged in'
};
class UniqueSet {
    constructor() {
        this.setArr = [];
    }
    add(item) {
        if (!this.setArr.includes(item)) {
            this.setArr.push(item);
        }
    }
    remove(item) {
        let index = this.setArr.indexOf(item);
        if (index !== -1) {
            this.setArr.splice(index, 1);
        }
    }
    has(item) {
        return this.setArr.includes(item);
    }
    values() {
        return this.setArr;
    }
    size() {
        return this.setArr.length;
    }
}
let set = new UniqueSet();
set.add(1);
set.add(2);
set.add(5);
console.log(set);
console.log(set.has(2));
console.log(set.remove(2));
console.log(set.values());
console.log(set.size());
