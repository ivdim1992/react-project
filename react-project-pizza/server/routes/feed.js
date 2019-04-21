const router = require('express').Router();
const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

router.get('/pizzas', feedController.getPizzas);
router.post('/pizza/create', isAuth, feedController.createPizza);
router.put('/pizza/:id', isAuth, feedController.updatePizza);
router.delete('/pizza/:id', isAuth, feedController.deletePizza);

module.exports = router;