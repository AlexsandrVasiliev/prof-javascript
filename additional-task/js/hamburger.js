class Hamburger{
    constructor(){
        this.price = 0;
        this.sumCalories = 0;
    }

    calculatePrice(size, filling, addition=0){
        this.price = size.price + filling.price + addition.price;
    }

    calculateCalories(size, filling, addition=0){
        this.sumCalories = size.calories + filling.calories + addition.calories;
    }
}

module.export = Hamburger;