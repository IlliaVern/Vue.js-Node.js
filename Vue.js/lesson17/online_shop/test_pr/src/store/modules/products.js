import localData from '../helpers/localData'

export default {
  namespaced: true,
  state: {
    productsList:[],

    filter:{}
  },

  getters: {
    getProductsList: state =>state.productsList,
    getFilteredProductList(state){
      return state.productsList
    }
  },

  mutations: {
    setProductsList(state, data) {
      state.productsList = [ ...data ]
    },
    setFilter(state,data){
      state.filter={...data}            
    }
  },

  actions: {
    loadProductList({ commit }) {
         commit('setProductsList', localData.readList())
    },
    addProduct({ dispatch}, product){
        localData.addProduct(product)        
        dispatch('loadProductList')
    },
    addFilter({commit}, filter){
      commit('setFilter',filter)
    },
    deleteProduct({ dispatch}, product){
        localData.deleteProduct(product.id)
        dispatch('loadProductList')
    },

}
}
