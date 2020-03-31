import localData from '../helpers/localData'

export default {
    namespaced: true,
    state: {
      cart:[]
    },
  
    getters: {
      getCart: state => state.cart,
      getProductsCountInCart:state => state.cart.reduce((sum, prod)=>sum+prod.count,0)
    },
  
    mutations: {
      setCartData(state, data) {
        state.cart = [...data ]
      }
    },
  
    actions: {
  
      loadCart({ commit }) {
           commit('setCartData', localData.readCart())
      },
      addProductToCart({ dispatch}, productId){
          localData.addProductToCart(productId)
          dispatch('loadCart')
      },
      deleteProductFromCart({ dispatch}, productId){
          localData.deleteProductFromCart(productId)
          dispatch('loadProductList')
      },
  
  }
  }