//.......... ..............................class no 1 person ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
class person{
    name:string;
    age:number

constructor(personName:string,personAge:number){
    this.name=personName;
    this.age=personAge;
}
};

//.......................................class no 2 student extends with person.................................
                                       // inheritance using extends
class student extends person{
    roolNumber:string;
    courses:string[]=[];

    registerForCourses(course:course){
        this.courses.push(course.name)
    }
    constructor(name:string,age:number,rNum:string){
        super(name,age)
        this.roolNumber=rNum;
    
        
    }
    gitListOfCourse(){
        console.log("Student" + this.name + "Course");
        this.courses.forEach(element => {
            console.log(element);
        });
     }
}

// .........................................class no 3 instructor extends with person ...................................
class instructor extends person{
    salary:number;
    courses:string[]=[];
    assignCours(course:course){
        this.courses.push(course.name);
    }

    gitListOfCourse(){
        console.log("Instructor " + this.name +" courses:");
        this.courses.forEach(element => {
            console.log(element);
        });
    }
    constructor(name:string,age:number,sal:number,){
        super(name,age)
        this.salary=sal;
        
    }
}

// .........................................class no 4 course................................
class course{
    id:number;
    name:string;
    students:student[]=[];
    instructors:instructor[]=[];
    static allcourse:string[]=[]

    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
        course.allcourse.push(name);
    }
    addStudent(std:student){
        this.students.push(std)
    }
    setInstructor(inst:instructor){
        this.instructors.push(inst)
    }

    gitListOfStudent(){
        console.log(this.name + " Students:")
        this.students.forEach(element => {
            console.log(element.name);
        });
    }

    gitListOfInstructors(){
        console.log(this.name + " instructrors: ")
        this.instructors.forEach(element => {
            console.log(element.name + " " + element.age)
        });

    }
    static dispalyAllCourses(){
        console.log("All the Courses : ");
        course.allcourse.forEach(element =>{
            console.log(element);
        });
    }
}


let course1 = new course(101,"typescript");
let course2 = new course (102,"next js");
let course3 = new course (103,"python");

let instructor1 =new instructor("Basit", 25,55000);
let instructor2 = new instructor("Sharif",25.05,52000)

course1.setInstructor(instructor1);
instructor1.assignCours(course1)

course2.setInstructor(instructor1);
instructor1.assignCours(course2);

course2.setInstructor(instructor2);
instructor2.assignCours(course2);

instructor1.gitListOfCourse();
instructor2.gitListOfCourse();

let student1 = new student("altaf",33,"t123");
let student2= new student("sajdi",34,"t124")

course1.addStudent(student1);
student1.registerForCourses(course1);

course1.addStudent(student2);
student2.registerForCourses(course1);

course2.addStudent(student1);
student1.registerForCourses(course2);

student1.gitListOfCourse();
student2.gitListOfCourse();

course.dispalyAllCourses();

course1.gitListOfStudent();
course2.gitListOfStudent();

course1.gitListOfInstructors();
course2.gitListOfInstructors();




// .........................................class no 5 department .............................
class department{
    name:string;
    courses:course[]=[];   //courses type in course
    static allDepartments:string[]=[];
    
    addCourse(course:course){
        this.courses.push(course);
    }

    gitCourse(){
        this.courses.forEach(element => {
            console.log(element)
        })
    }
    //..........................................
    constructor(name:string){
        this.name=name;
        department.allDepartments.push(this.name)
    }
    static displayAllDepartments(){
        console.log("\nAll Departments are :");
        department.allDepartments.forEach(element => {
            console.log(element);
        });
    }
}

let department1 = new department("Computer science");
let department2 = new department("Softwer Enginering");

department1.addCourse(course1);
department1.addCourse(course2);

department2.addCourse(course1);

department.displayAllDepartments();













