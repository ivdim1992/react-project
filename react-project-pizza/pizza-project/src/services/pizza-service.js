import {get} from '../data/crud';

class PizzaService {
    constructor() {
        this.baseUrl = 'http://localhost:5000/pizza'
        this.allPizzas = `${this.baseUrl}/all`
    }

    getPizzas() {
        return get(this.allPizzas)
    }
}
export default PizzaService;