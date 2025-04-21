"use strict";
let message = 'Hello, World And People!!!';
// create a new heading 1 element
let heading = document.createElement('h1');
heading.textContent = message;
// add the heading the document
document.body.appendChild(heading);
class Student {
    constructor(name) {
        this.name = name;
        this.grades = [];
    }
    addGrade(grade) {
        this.grades.push(grade);
    }
    getAverageGrade() {
        return this.grades.reduce((sum, item) => sum + item, 0) / this.grades.length;
    }
    displayInfo() {
        console.log(`${this.name} has ${this.getAverageGrade()}`);
    }
}
let student1 = new Student('Anton');
let student2 = new Student('David');
student1.addGrade(4);
student1.addGrade(2);
student1.addGrade(5);
student2.addGrade(4);
student2.addGrade(3);
let students = [student1, student2];
students.forEach((stud) => {
    stud.displayInfo();
});
function maxValue(stringArray) {
    return stringArray.reduce((previous, current) => previous.length > current.length ? previous : current, '');
}
console.log(maxValue(['Steve', 'Jobs']));
// homework
function binarySearch(numberArray, target) {
    let left = 0;
    let right = numberArray.length - 1;
    let firstIndex = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (numberArray[mid] === target) {
            firstIndex = mid;
            right = mid - 1;
        }
        else if (numberArray[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return firstIndex;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));
function grouppedWords(arrayWords) {
    let grouppedWords = {};
    arrayWords.forEach((word) => {
        let id = word.length;
        if (!grouppedWords[id]) {
            grouppedWords[id] = [];
        }
        grouppedWords[id].push(word);
    });
    return grouppedWords;
}
let ungrouppedArray = ['aa', 'bbb', 'ccc', 'dddd'];
console.log(grouppedWords(ungrouppedArray));
var Role;
(function (Role) {
    Role[Role["ADMINISTRATOR"] = 0] = "ADMINISTRATOR";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["MODERATOR"] = 2] = "MODERATOR";
})(Role || (Role = {}));
function getPermissions(role) {
    switch (role) {
        case (Role.ADMINISTRATOR): return '1';
        case (Role.USER): return '2';
        case (Role.MODERATOR): return '3';
        default: return '0';
    }
}
function displayPersonInfo(person) {
    let [firstName, lastName, age] = person;
    return `${firstName}, ${lastName}, ${age}`;
}
function buildMessage(message, prefix, sufix = '.') {
    let fullMessage = message;
    if (prefix !== undefined) {
        fullMessage = message + prefix;
    }
    fullMessage = message + sufix;
    return fullMessage;
}
var HTTPSTATUS;
(function (HTTPSTATUS) {
    HTTPSTATUS[HTTPSTATUS["Continiue"] = 100] = "Continiue";
    HTTPSTATUS[HTTPSTATUS["OK"] = 200] = "OK";
    HTTPSTATUS[HTTPSTATUS["MultipleChoices"] = 300] = "MultipleChoices";
    HTTPSTATUS[HTTPSTATUS["BadRequest"] = 400] = "BadRequest";
    HTTPSTATUS[HTTPSTATUS["Internal"] = 500] = "Internal";
})(HTTPSTATUS || (HTTPSTATUS = {}));
function getStatus(status) {
    switch (status) {
        case HTTPSTATUS.Continiue: return 'Continiue';
        case HTTPSTATUS.OK: return 'OK';
        case HTTPSTATUS.MultipleChoices: return 'Multiple Choices';
        case HTTPSTATUS.BadRequest: return 'Bad Request';
        case HTTPSTATUS.Internal: return 'Internal Server Error';
        default: return 'Unknown status';
    }
}
function formatPrice(price, currency) {
    if (currency !== 'indefined') {
        currency = 'USD';
    }
    return `${price} ${currency}`;
}
