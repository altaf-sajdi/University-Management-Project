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
    function student(rNum, course) {
        var _this = _super.call(this, "sajdi", 33) || this;
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
    function instructor(sal, course) {
        var _this = _super.call(this, "Basit Sharif", 23) || this;
        _this.salary = sal;
        _this.courses = course;
        return _this;
    }
    instructor.prototype.assignCours = function () {
    };
    return instructor;
}(person));
// .........................................class no 4 course................................
var course = /** @class */ (function () {
    function course(id, name) {
        this.student = [];
        this.instructor = [];
        this.id = id;
        this.name = name;
    }
    course.prototype.addStudent = function () {
    };
    course.prototype.setInstructor = function () {
    };
    return course;
}());
var course1 = new course(101, "typescript");
var course2 = new course(102, "next js");
var student1 = new student("t123", course1);
var student2 = console.log(student1);
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
