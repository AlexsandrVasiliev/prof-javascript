class burgerAddition{
    constructor(){
        this.addition = _fetchAddition();
    }

    _fetchAddition(){
        this.addition = [
            {id: 1, name: 'dressing', price: 15, calories: 0},
            {id: 2, name: 'mayonnaise', price: 20, calories: 5},
        ]
    }
}

module.export = burgerAddition;