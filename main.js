//.......... ..............................class no 1 person ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
class person {
    name;
    age;
    getname() {
    }
    constructor(personName, personAge) {
        this.name = personName;
        this.age = personAge;
    }
}
;
//.......................................class no 2 student extends with person.................................
class student extends person {
    roolNumber;
    courses = [];
    registerForCourses(course) {
        this.courses.push(course.name);
    }
    constructor(name, age, rNum) {
        super(name, age);
        this.roolNumber = rNum;
    }
}
// .........................................class no 3 instructor extends with person ...................................
class instructor extends person {
    salary;
    //courses:any[];
    assignCours() {
    }
    constructor(name, age, sal) {
        super(name, age);
        this.salary = sal;
    }
}
// .........................................class no 4 course................................
class course {
    id;
    name;
    students = [];
    instructors = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(std) {
        this.students.push(std);
    }
    setInstructor(inst) {
        this.instructors.push(inst);
    }
    gitListOfStudent() {
        console.log(this.name + " students:");
        this.students.forEach(element => {
            console.log(element.name);
        });
    }
    gitListOfInstructors() {
        console.log(this.name + " instructrors: ");
        this.instructors.forEach(element => {
            console.log(element.name);
        });
    }
}
let course1 = new course(101, "typescript");
let course2 = new course(102, "next js");
let instructor1 = new instructor("Basit", 25, 55000);
let instructor2 = new instructor("Sharif", 25.05, 52000);
course1.setInstructor(instructor1);
course2.setInstructor(instructor2);
let student1 = new student("altaf", 33, "t123");
let student2 = new student("sajdi", 34, "t124");
course1.addStudent(student1);
student1.registerForCourses(course1);
student2.registerForCourses(course1);
student2.registerForCourses(course2);
course1.addStudent(student2);
course2.addStudent(student2);
course1.gitListOfStudent();
course2.gitListOfStudent();
course1.gitListOfInstructors();
course2.gitListOfInstructors();
//console.log(course1);
//console.log(course2);
// .........................................class no 5 depatment .............................
class department {
    name;
    courses = []; //courses type in course
    addCourse() {
    }
    constructor(name) {
        this.name = name;
    }
}
export {};
