import {
    v4 as uuidv4
} from 'uuid';

export default {
    readProducts: function () {
        if (localStorage.getItem('productsList'))
            return JSON.parse(localStorage.getItem('productsList'))
        else return []
    },
    writeProducts: function (products) {
        localStorage.setItem('productsList', JSON.stringify(products))
    },
    addProduct: function (productTitle, productPrice) {
        const product = {
            id: uuidv4(),
            title: productTitle,
            price: productPrice
        }
        let productsList = this.readProducts()
        productsList.push(product)
        this.writeProducts(productsList)
    },
    updateProduct(product) {
        let productsList = this.readProducts()
        const productIndex = productsList.findIndex(item=>item.id===product.id)
        productsList[productIndex]={...product}
        this.writeProducts(productsList)
    },
    getProductById(productId) {
        let productsList = this.readProducts()
        return productsList.find(product => product.id === productId)
    },
    
}