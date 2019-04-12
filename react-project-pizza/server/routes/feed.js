const router = require('express').Router();
const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

router.get('/pizzas', feedController.getPizzas);
router.post('/pizza/create', feedController.createPizza);
router.put('/pizza/:id',feedController.updatePizza);
router.delete('/pizza/:id',feedController.deletePizza);

module.exports = router;