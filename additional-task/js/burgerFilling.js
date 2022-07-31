class burgerFilling{
    constructor(){
        this.filling = _fetchFilling();
    }
    
    _fetchFilling(){
        this.filling = [
            {id: 1, name: 'cheese', price: 10, calories: 20},
            {id: 2, name: 'salad', price: 20, calories: 5},
            {id: 3, name: 'potato', price: 15, calories: 10},
        ]
    }
}

module.export = burgerFilling;