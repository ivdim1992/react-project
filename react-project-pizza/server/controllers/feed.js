const Pizza = require('../models/Pizza');

module.exports = {
    getPizzas: (req, res, next) => {
        Pizza.find()
            .then((pizzas) => {
                res
                    .status(200)
                    .json({ message: 'Fetched pizzas successfully.', pizzas });

            })
            .catch((error) => {
                if (!error.statusCode) {
                    error.statusCode = 500;
                }
                next(error);
            });
    },

    createPizza: (req, res, next) => {
        const pizzaObj = req.body;
        console.log(req.body);
        Pizza.create(pizzaObj)
            .then((pizza) => {
                res.status(200)
                    .json({
                        message: 'Pizza created successfully!',
                        pizza
                    });
            })
            .catch((error) => {
                if (!error.statusCode) {
                    error.statusCode = 500;
                }

                next(error);
            });
    },

    deletePizza: (req, res, next) => {
        const id = req.params.id;
        console.log('controller' + id);
        Pizza.findById(id)
            .then((pizza) => {
                pizza
                    .remove()
                    .then(() => {
                        return res.status(200).json({
                            success: true,
                            message: 'Pizza deleted successfully!'
                        });
                    });
            })
            .catch(() => {
                return res.status(200).json({
                    success: false,
                    message: 'Entry does not exist!'
                });
            });
    },

    updatePizza: (req, res, next) => {
        const id = req.params.id;
        const data = req.body;
      
        Pizza.findById(req.params.id)
            .then((pizza) => {

                Pizza.updateOne({ _id: id }, { $set: data })
                    .then(() => {
                        res.status(200)
                            .json({
                                message: 'Pizza updated successfully!',
                                pizza: {...pizza.doc, ...data}
                            });
                    })
                    .catch((error) => {
                        if (!error.statusCode) {
                            error.statusCode = 500;
                        }

                        next(error);
                    });

            })
            .catch(() => {
                return res.status(200).json({
                    success: false,
                    message: 'Entry does not exist!'
                });
            });
    }
};