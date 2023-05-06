class Animal {
    // name : string;
    // species : string;
    // sound : string;
    constructor(public name : string,public species : string, public sound : string){
        // this.name = name
        // this.species = species
        // this.sound = sound
    }
    makeSound() {
        console.log(`This ${this.name} says ${this.sound}`)
    }
}
const dog = new Animal("German", "dog", "ghew ghew");
const cat = new Animal("jerman", "cat", "meaw meaw");
dog.makeSound();
cat.makeSound();