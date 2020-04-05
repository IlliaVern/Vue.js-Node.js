const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
// const handlebars = require('handlebars') //1
const exphbs = require('express-handlebars')
// const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access') //2
const productRoutes = require('./routes/products')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
// app.engine('handlebars', exphbs({
//     handlebars: allowInsecurePrototypeAccess(handlebars)
// }));
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({
    extended: true
}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(productRoutes)

async function start() {
    try {
        await mongoose.connect('mongodb+srv://IlliaVern:FenRIR1989@cluster0-vp5fc.mongodb.net/products', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, () => {
            console.log(`Server has been started on ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

start()