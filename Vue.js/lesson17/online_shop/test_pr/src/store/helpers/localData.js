import { v4 as uuidv4 } from "uuid";

export default {
  //--- Операції з корзиною
  readCart: function() {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart"));
    }
    return [];
  },
  saveCart: function(list) {
    localStorage.setItem("cart", JSON.stringify(list));
  },  
  addProductToCart: function(productId) {
    const cart = this.readCart();
    const product=cart.find(item=>item.id===productId)
    if(product){
      product.count++
    }
    else
    cart.push({
      id: productId,
      count:1
    });
    this.saveCart(cart);
  },    
  deleteProductFromCart: function name(productId) {
    let cart = this.readCart();
    cart = cart.filter(item => item.id !== productId);
    this.saveCart(cart);
  },
  getProductsCountInCart(){
    let cart = this.readCart();
    return cart.reduce((sum,item)=>sum+item.count,0)
  },

  //----------- Операції зі списком продуктів
  readList: function() {
    console.log('readList');
    
    if (localStorage.getItem("productList")) {
      console.log(JSON.parse(localStorage.getItem("productList")));
      
      return JSON.parse(localStorage.getItem("productList"));
    }
    return [];
  },
  saveList: function(list) {
    localStorage.setItem("productList", JSON.stringify(list));
  },
  addProduct: function({title, imgSrc, price, description}) {
    console.log('44');
    
    const list = this.readList();
    list.push({
      id: uuidv4(),
      title,
      imgSrc,
      description,
      price
    });
    this.saveList(list);
  },
  deleteProduct: function name(productId) {
    let list = this.readList();
    list = list.filter(item => item.id !== productId);
    this.saveList(list);
  }
};
