function add (param1 : string | number, param2 : string | number) : string | number | undefined {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
        
    } else if(typeof param1 === "string" && typeof param2 === "string") {
        
         return  param1.toString()  + param2.toString();
    }
}
const result = add("5", "4");
// console.log(result)
// in guard\\\

type NormerUsrType = {
    name : string
}
type AdminUserType = {
    name : string;
    role : string
}

function getUser (user : NormerUsrType | AdminUserType) {
    if ("role" in user) {
        return  ` i am a admoin ${user.role}`
        
    } else {
        return "normal user"
    }
}

const normalUser1 : NormerUsrType = {name : "Rubel"};
const adminUser1 : AdminUserType = {name : "Rubel", role : "admin"};
getUser(normalUser1);
//interface guard
class Animal1 {
    name :string;
    species : string;
    constructor( name : string, species : string){
        this.name = name;
        this.species = species;

    }
    makeSound(){
        console.log(`i am sounding `)
    }
}

class Cat extends Animal1 {
    constructor(name : string, species : string){
        super(name, species)
    }
    makeMeaw() {
        console.log(`my sound meaw meaw`)
    }
}
class Dog extends Animal1 {
    constructor(name : string, species : string){
        super(name, species)
    }
    makebarking() {
        console.log(`my sound ghew ghew`)
    }
}
function isDog(animal : Animal1) : animal is Dog {
    return animal instanceof Dog;
}

function getAnimal (animal : Animal1) {
    if (isDog(animal)) {
        animal.makebarking();
    } else if (animal instanceof Cat) {
        animal.makeMeaw()

        
    }
}

const animal2 = new Dog("Jack", "dog");
const animal3 = new Cat("Jackma", "cat");
getAnimal(animal2);
