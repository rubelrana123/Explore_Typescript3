class ParentClass  {
    name  : string;
    age : number;
    address : string;
    constructor( name : string, address : string , age : number) {
        this.name = name;
        this.address = address;
        this.age = age;
  }
}
class Student extends ParentClass {

    
    // name  : string;
    // age : number;
    // address : string;

    constructor(name : string, age : number, address : string){
        super(name, address,age)
    }
    makeSleep(hours : number) : string {
        return `this person ${this.name} will sleep for ${hours}`

    }
}

// const Student1 = new Student("Rubel", 20, "Dinajpur");
// console.log(Student1)
// console.log(Student1.makeSleep(310))

class Teacher extends ParentClass {
      designation : string;

    constructor( name : string, address : string , age : number, designation : string) {
        super(name, address,age)
        this.designation = designation;
          
    }
    // makeSleep(hours : number) : string {
    //     return `this person ${name} will sleep for ${hours}`

    // };
    takeClass (nameofClass : string) : string {
         return `this ${this.name} will  take ${nameofClass} class`
    }

}
const Teacher1 = new Teacher("Rubel","Dinajpur", 20,  "math");
console.log(Teacher1)
 console.log(Teacher1.takeClass("Math"))