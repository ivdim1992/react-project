const router = require('express').Router();
const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

router.get('/pizzas', feedController.getPizzas);
router.post('/pizza/create', feedController.createPizza);
router.delete('/pizzas/:id', feedController.deletePizza);
router.put('/pizzas/:id', feedController.updatePizza);


module.exports = router;