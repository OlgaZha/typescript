let message: string = 'Hello, World And People!!!';

// create a new heading 1 element
let heading = document.createElement('h1');
heading.textContent = message;

// add the heading the document
document.body.appendChild(heading);

class Student {
    name: string;
    grades: number[];

    constructor(name: string) {
        this.name = name;
        this.grades = [];
    }

    addGrade(grade: number): void {
       this.grades.push(grade)
    }

    getAverageGrade(): number {
        return this.grades.reduce((sum: number, item:number) => sum + item, 0) / this.grades.length;
    }

    displayInfo(): void {
        console.log(`${this.name} has ${this.getAverageGrade()}`)
    }
}

let student1 = new Student('Anton');
let student2 = new Student('David');
student1.addGrade(4);
student1.addGrade(2);
student1.addGrade(5);
student2.addGrade(4);
student2.addGrade(3);

let students: Student[] = [student1, student2];
students.forEach((stud: Student)=> {
    stud.displayInfo()
});



function maxValue(stringArray: string[]): string {
    return stringArray.reduce((previous, current) => previous.length > current.length ? previous : current, '')
}

console.log(maxValue(['Steve', 'Jobs']))


// homework
function binarySearch(numberArray: number[], target: number): number {
    let left = 0;
    let right = numberArray.length - 1;
    let firstIndex = -1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(numberArray[mid] === target) {
            firstIndex = mid;
            right = mid - 1;
        } else if(numberArray[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return firstIndex;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 4));

function grouppedWords(arrayWords: string[]): {[key: number]: string[]} {
    let grouppedWords: {[key: number]: string[]} = {};
    arrayWords.forEach((word: string) => {
        let id = word.length;
        if(!grouppedWords[id]) {
            grouppedWords[id] = []
        } 
        grouppedWords[id].push(word);
    })
    return grouppedWords;
}

let ungrouppedArray: string[] = ['aa', 'bbb', 'ccc', 'dddd'];
console.log(grouppedWords(ungrouppedArray))


enum Role {
    ADMINISTRATOR, 
    USER, 
    MODERATOR
}

function getPermissions(role: Role): string {
    switch(role) {
        case(Role.ADMINISTRATOR): return '1';
        case(Role.USER): return '2';
        case(Role.MODERATOR): return '3';
        default: return '0'
    }
}

type Person = [string, string, number];
function displayPersonInfo(person: Person): string {
    let[firstName, lastName, age] = person;
    return `${firstName}, ${lastName}, ${age}`
}

function buildMessage(message: string, prefix?: string, sufix:string='.'): string {
    let fullMessage = message
    if(prefix !== undefined) {
        fullMessage = message + prefix
    }
    fullMessage = message + sufix;
    return fullMessage;
}

enum HTTPSTATUS {
    Continiue = 100,
    OK = 200,
    MultipleChoices = 300,
    BadRequest = 400,
    Internal = 500
}

function getStatus(status: HTTPSTATUS): string {
    switch(status) {
        case HTTPSTATUS.Continiue: return 'Continiue';
        case HTTPSTATUS.OK: return 'OK';
        case HTTPSTATUS.MultipleChoices: return 'Multiple Choices';
        case HTTPSTATUS.BadRequest: return 'Bad Request';
        case HTTPSTATUS.Internal: return 'Internal Server Error';
        default: return 'Unknown status'
    }
}

function formatPrice(price: number, currency?: string): string {
    if(currency !== 'indefined') {
        currency = 'USD'
    }
    return `${price} ${currency}`
}