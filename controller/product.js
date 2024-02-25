const Product = require('../model/product');

class Controller {
    static async createProduct(req, res, next) {
        try {
            const data = req.body.data;
            console.log(data);
            if (!data) {
                res.status(400).send('Data cannot be empty');
            } else {
                await Product.create(data);
                res.sendStatus(201);
            }
        } catch (err) {
            next(err);
        }
    }
}

module.exports = Controller;