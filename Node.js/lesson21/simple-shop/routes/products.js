const {
    Router
} = require('express')
const Product = require('../models/Product')
const router = Router()

router.get('/', async (req, res) => {
    const products = await Product.find({})

    res.render('index', {
        title: 'Products list',
        isIndex: true,
        products
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create product',
        isCreate: true
    })
})

router.post('/create', async (req, res) => {
    const product = new Product({
        title: req.body.title
        // price: req.body.price,
        // description: req.body.description
    })

    await product.save()
    res.redirect('/')
})

router.post('/complete', async (req, res) => {
    const product = await Product.findById(req.body.id)

    product.completed = !!req.body.completed //параметр передается как 
    //строка поэтому !! преобразовывает строку в булевое значение
    await product.save()

    res.redirect('/')
})

module.exports = router