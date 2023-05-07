//interface

// interface IVehicle 
// {
//     name : string;
//     model : string;
// }

// const Vehicle : IVehicle = {
//     name :"Car",
//     model : "BMW"
// }
//abstract class 


// interface IVehicle {
//     startEngine() : void;
//     stopEngile() : void;
//     move () : void;

// }

// class Vehicle implements IVehicle {
//     constructor (public name : string,
//          public brand : string){

//          }
//     startEngine(): void {
//         console.log("I am staring engine")
//     }
//     stopEngile (): void {
//         console.log("i am stop engine")
//     }
//     move(){
//         console.log("i am testing purpose")
//     }
//     test(){
//         console.log("i am testing purpose")
//     }
// }

// const Vehicle1 = new Vehicle("car", "toyota");

//class abstract
interface IVehicle {
    startEngine() : void;
    stopEngile() : void;
    move () : void;

}

abstract class Vehicle implements IVehicle {
    constructor (public name : string,
         public brand : string){

         }
  abstract  startEngine(): void  
    abstract stopEngile (): void  
  abstract  move()  : void
    test(){
        console.log("i am testing purpose")
    }
}

class car extends Vehicle {
    startEngine(): void {
        console.log("I am staring engine")
    }
    stopEngile (): void {
        console.log("i am stop engine")
    }
    move(){
        console.log("i am testing purpose")
    }

        
        

    }
 
const Vehicle1 = new  car(":hhh", "jhkjhdf");
// Vehicle1.