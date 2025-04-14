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

function grouppedWords(array: string[]): string[] {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length - 1 - i; j++) {
            if(array[j].length > array[j + 1].length) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

let ungrouppedArray: string[] = ['Steeve', 'Alex', 'Jessica'];
console.log(grouppedWords(ungrouppedArray))