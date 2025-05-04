//generic
function returnFirstElement<T>(items: T[]): T {
    return items[0];
}

let numbers = [1,6,4,2,7];
let strings = ['Pete', 'John', 'Alex']
// console.log(returnFirstElement(numbers));
// console.log(returnFirstElement(strings));

// generic interface
interface Container<T> { // type
    value: T
}

let stringContainer: Container<string> = {value: 'John'}; //instance
let numberContainer: Container<number> = {value: 2}; // instance

//class generic
class Box<T> {
    value: T
    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

let num = new Box<number>(4);
let str = new Box<string>('John');

// class with method generic
class Logger {
    log<T>(message: T): T {
        return message;
    }
}

// homework
function identify<T>(item: T): T {
    return item;
}

interface APIResponce<T> {
    status: number;
    data: T;
    message: string;
}

interface UserIn {
    id: number;
    name: string;
}

let UserResponce: APIResponce<UserIn> = {
    status: 200,
    data: {
        id: 1,
        name: 'John'
    },
    message: 'User logged in'
};

class UniqueSet<T> {
    private setArr: T[] = []
    add(item: T): void {
        if(!this.setArr.includes(item)) {
            this.setArr.push(item)
        }
    }
    remove(item: T): void {
        let index = this.setArr.indexOf(item)
        if(index !== -1) {
            this.setArr.splice(index, 1)
        }
    }
    has(item: T): boolean {
        return this.setArr.includes(item)
    }
    values(): T[] {
        return this.setArr;
    }
    size(): number {
        return this.setArr.length
    }
}

let set = new UniqueSet<number>();
set.add(1);
set.add(2);
set.add(5);

console.log(set)
console.log(set.has(2))
console.log(set.remove(2))
console.log(set.values())
console.log(set.size())