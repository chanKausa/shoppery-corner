const router = require('express').Router();
const multer = require('multer');
const path = require('path');

const ProductController = require('../controller/product.js');
// eslint-disable-next-line no-undef
const uploadConfig = multer({ dest: path.resolve(__dirname, '../uploads')});

router.post('/upload', uploadConfig.single('attachment'), async (req, res, next) => {
    console.log('Request recieved');
    
    res.send('success');
});

router.post('/', ProductController.createProduct);
router.get('/', ProductController.listProducts);

module.exports = router;