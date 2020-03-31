import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        products:[]
    },
    mutations: {
        addProduct(state, product){

            state.products.push({
                id:uuidv4(),
                ...product
            })
        }
    },
    actions: {
        saveProduct({commit},prod){
            commit('addProduct',prod)
        }
    },
    getters: {
        getProducts:state=>state.products
    },
    modules: {}
})

export default store;