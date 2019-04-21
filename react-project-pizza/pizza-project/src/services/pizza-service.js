import {get,post,put,remove} from '../data/crud';

class PizzaService {
    constructor() {
        this.baseUrl = 'http://localhost:9999/feed';
        this.allPizzasUrl = `${this.baseUrl}/pizzas`
        this.createPizzaUrl = `${this.baseUrl}/pizza/create`
        this.updatePizzaUrl = `${this.baseUrl}/pizza/`
    }   

    getAllPizzas() {
        return get(this.allPizzasUrl);
    }

    createPizza(pizza) {
        return post(this.createPizzaUrl,pizza)
    }

    updatePizza(pizza,id){
        return put(`http://localhost:9999/feed/pizza/${id}`,pizza)
    }

    deletePizza(id) {
        return remove(`http://localhost:9999/feed/pizza/${id}`)
    }

}
export default PizzaService;