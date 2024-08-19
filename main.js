"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//.......... ..............................class no 1 person ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
var person = /** @class */ (function () {
    function person(personName, personAge) {
        this.name = personName;
        this.age = personAge;
    }
    person.prototype.getname = function () {
    };
    return person;
}());
;
//.......................................class no 2 student extends with person.................................
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(name, age, rNum) {
        var _this = _super.call(this, name, age) || this;
        _this.courses = [];
        _this.roolNumber = rNum;
        return _this;
    }
    student.prototype.registerForCourses = function () {
    };
    return student;
}(person));
// .........................................class no 3 instructor extends with person ...................................
var instructor = /** @class */ (function (_super) {
    __extends(instructor, _super);
    function instructor(name, age, sal) {
        var _this = _super.call(this, name, age) || this;
        _this.salary = sal;
        return _this;
    }
    //courses:any[];
    instructor.prototype.assignCours = function () {
    };
    return instructor;
}(person));
// .........................................class no 4 course................................
var course = /** @class */ (function () {
    function course(id, name) {
        this.students = [];
        this.instructors = [];
        this.id = id;
        this.name = name;
    }
    course.prototype.addStudent = function (std) {
        this.students.push(std);
    };
    course.prototype.setInstructor = function (inst) {
        this.instructors.push(inst);
    };
    course.prototype.gitListOfStudent = function () {
        this.students.forEach(function (element) {
            console.log(element.name);
        });
    };
    return course;
}());
var course1 = new course(101, "typescript");
var course2 = new course(102, "next js");
var instructor1 = new instructor("Basit", 25, 55000);
var instructor2 = new instructor("Sharif", 25.05, 52000);
course1.setInstructor(instructor1);
course2.setInstructor(instructor2);
var student1 = new student("altaf", 33, "t123");
var student2 = new student("sajdi", 34, "t124");
course1.addStudent(student1);
course1.addStudent(student2);
course2.addStudent(student2);
course1.gitListOfStudent();
course2.gitListOfStudent();
//course1.gitListOfSInstructors();
//console.log(course1);
//console.log(course2);
// .........................................class no 5 depatment .............................
var department = /** @class */ (function () {
    function department(name) {
        this.courses = []; //courses type in course
        this.name = name;
    }
    department.prototype.addCourse = function () {
    };
    return department;
}());
