class Product {
    constructor(productName, productPrice, productQuantity){
        this.name = productName
        this.price = productPrice
        this.quantity = productQuantity
    }
    upPrice(num) {
        return this.price+=num
    }
    downPrice(num) {
        return this.price-=num
    }
    upQuantity(num){
        return this.qunaity+=num
    }
    downQuantity(num){
        return this.qunaity-=num
    }
}
module.exports = Product