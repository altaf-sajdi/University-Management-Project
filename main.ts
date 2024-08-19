import { Agent } from "http";

//.......... ..............................class no 1 person ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
class person{
    name:string;
    age:number
    getname(){

    }
constructor(personName:string,personAge:number){
    this.name=personName;
    this.age=personAge;
}

};

//.......................................class no 2 student extends with person.................................
class student extends person{
    roolNumber:string;
    courses:course[]=[];

    registerForCourses(){

    }
    constructor(name:string,age:number,rNum:string){
        super(name,age)
        this.roolNumber=rNum;
    
        
    }
}

// .........................................class no 3 instructor extends with person ...................................
class instructor extends person{
    salary:number;
    //courses:any[];
    assignCours(){

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

    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
    addStudent(std:student){
        this.students.push(std)

    }
    setInstructor(inst:instructor){
        this.instructors.push(inst)
    }
    gitListOfStudent(){
        
        this.students.forEach(element => {
            console.log(element.name);
        });
    }
    
}
let course1 = new course(101,"typescript");
let course2 = new course (102,"next js");

let instructor1 =new instructor("Basit", 25,55000);
let instructor2 = new instructor("Sharif",25.05,52000)

course1.setInstructor(instructor1);
course2.setInstructor(instructor2)

let student1 = new student("altaf",33,"t123");
let student2= new student("sajdi",34,"t124")

course1.addStudent(student1);
course1.addStudent(student2);

course2.addStudent(student2);

course1.gitListOfStudent();
course2.gitListOfStudent();

//course1.gitListOfSInstructors();


//console.log(course1);
//console.log(course2);


// .........................................class no 5 depatment .............................
class department{
    name:string;
    courses:course[]=[];   //courses type in course
    addCourse(){

    }
    constructor(name:string){
        this.name=name
    }
}














