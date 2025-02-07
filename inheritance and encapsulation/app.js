// // Real-World Example: Bank Account System

// class BankAccount {
//     constructor(accountHolder,accountBalance){
//         this.accountHolder = accountHolder
//         this.accountBalance = accountBalance
//     }


//     // Getter for balance (Encapsulation)

//     getBalance (){
//         return this.accountBalance
//     }

//     // Setter for balance with validation
//     deposit(amount){
//         if (amount>0){
//             this.accountBalance += amount
//             console.log(`Deposited : RS${amount}, New Balance:RS:${this.accountBalance}`);
            
//         }

//         else{
//             console.log("Invalid deposit amount");
            
//         }
        
//     }


//     withdraw(amount){
//         if(amount>0 && amount<=this.accountBalance){
//             this.accountBalance -= amount
//             console.log(`Withdraw:RS:${amount}, New Balance:RS:${this.accountBalance}`);
            
//         }

//         else{
        
//                 console.log("Insufficient balance or invalid amount.");
        
//         }

//     }
// }


class Vehicle {
    constructor(brand,speed){
        
this.brand= brand
this.speed=speed
    }

    move(){
        console.log(`${this.brand} is moving with ${this.speed}km/h`);
        
    }

}


class Car extends Vehicle {
    constructor(brand,speed,fueltype){

        super(brand,speed)
        this.fueltype=fueltype
    }

    honk(){
        console.log(`${this.brand} car is honking! Beep Beep!`);
    }
}


class Bike extends Vehicle{
    constructor(brand,speed,helmetRequired){
        super(brand,speed)
        this.helmetRequired=helmetRequired

    }

    wheelie(){
        console.log(`${this.brand} bike is doing a wheelie! 🏍️`);
    }
}


// creating Instances

let car = new Car ("Toyota",120,"petrol")
let bike = new Bike ("kavasaki",60,true)


car.move();
car.honk();

bike.move();
bike.wheelie();