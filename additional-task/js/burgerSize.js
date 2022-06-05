class burgerSize{
    constructor(){
        this.size = _fetchSize();
    }

    _fetchSize(){
        this.size = [
            {id: 1, name: 'small', price: 50, calories: 20},
            {id: 2, name: 'big', price: 100, calories: 40}
        ]
    }
}

module.export = burgerSize;