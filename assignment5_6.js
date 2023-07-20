class Car {
    constructor(brand, model, year, color, price, gas){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;
    }
    honk(){
        console.log("Honk Honk");
        console.log(`Brand is ${this.brand}, Model is ${this.model}, Year is ${this.year}, Color is ${this.color}, Price is ${this.price}`);
    }

    race(turns, curryear){
        for (let i=0; i<turns; i++){
            if(this.gas <= 0){
                console.log(`The car ${this.brand} ${this.model} has hit 0 gas in the ${i+1} round`)
                break;
            }
            let gasLoss = 5;
            
            if(this.year != curryear){
                const yeardiff = curryear-this.year;
                gasLoss +=yeardiff
            }
            this.gas -=gasLoss;
            console.log(`The car ${this.brand} ${this.model} is left with ${this.gas} gas in the ${i+1} round`)
            
        }
        
    }
}

const car1 = new Car("Honda", "CR-V", 2023, "Red", 50000, 45);
const car2 = new Car("Ford", "F-150", 2020, "Black", 25000, 30);
const car3 = new Car("BMW", "X5", 2022, "Green", 60000, 65);
const car4 = new Car("Mazda", "CX-5", 2019, "White", 15000, 60);
const car5 = new Car("Audi", "Q7", 2018, "Silver", 52000, 47);
const car6 = new Car("Kia", "Forte", 2020, "Blue", 21000, 56);

car1.honk();
car2.honk();
car3.honk();
car4.honk();
car5.honk();
car6.honk();
car1.race(7,2023)
car2.race(7,2023)
car3.race(7,2023)
car4.race(7,2023)
car5.race(7,2023)
car6.race(7,2023)
let cars = [car1,car2,car3,car4,car5,car6]
let winCar=null;
const winner = Math.max(car1.gas, car2.gas, car3.gas, car4.gas, car5.gas, car6.gas)
for(let i=0; i<cars.length; i++){
    if(winner === cars[i].gas){
        winCar=cars[i]
        break;
    }
}
console.log("Winner is:");
console.log("Brand:", winCar.brand);
console.log("Model:", winCar.model);
console.log("Year:", winCar.year);
console.log("Color:", winCar.color);
console.log("Price:", winCar.price);