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
    constructor(rNum:string,course:course){
        super("sajdi",33)
        this.roolNumber=rNum;
    
        
    }
}

// .........................................class no 3 instructor extends with person ...................................
class instructor extends person{
    salary:number;
    courses:any[];
    assignCours(){

    }
    constructor(sal:number,course:any){
        super("Basit Sharif",23)
        this.salary=sal;
        this.courses=course

    }
}

// .........................................class no 4 course................................
class course{
    id:number;
    name:string;
    
    student:student[]=[];
    instructor:instructor[]=[];

    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
    addStudent(){

    }
    setInstructor(){

    }
}
let course1 = new course(101,"typescript");
let course2 = new course (102,"next js");

let student1 = new student("t123", course1);
let student2=
console.log(student1)


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














