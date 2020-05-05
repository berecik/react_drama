var resultBox = document.getElementById("result");
resultBox.innerText = "Wypożyczalnia KORONA\n";

class VehicleTank{
    constructor(tankCapacity, tankPercents){
        this.tankCapacity = tankCapacity;
        this.tankPercents = tankPercents;
    }

    howMuch(){
        var currentLiters = this.tankPercents / 100 * this.tankCapacity;
        return this.tankCapacity - currentLiters;
    }
}

class Vehicle {
    constructor(brand, tank, rent){

        this.tank = tank;
        this.brand = brand;

        if(rent===undefined){
            this.rent = false;
        }else{
            this.rent = rent;
        }
    }

}

class Car extends Vehicle{
    howMuch(){
        return this.tank.howMuch();
    }
}

const cars = {
    "ola": new Car("Audi", new VehicleTank(120, 43)),
    "ala": new Car("Volvo", new VehicleTank(600, 63)),
    "ela": new Car("Skoda", new VehicleTank(75, 20)),
    "ula": new Car("Trabant", new VehicleTank(66, 50))
}
