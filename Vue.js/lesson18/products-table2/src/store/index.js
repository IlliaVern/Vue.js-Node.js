import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        productsList: [],
        loading: false,
        error: false,
    },
    getters: {
        getProductsList: state => state.productsList,
        isLoading: state => state.loading,
        isError: state => state.error

    },
    mutations: {
        setProductsList(state, data) {
            state.setProductsList = [...data]
        },
        setLoading(state, loadingStatus) {
            state.loading = loadingStatus
        },
        setError(state, error) {
            state.error = error
        }
    },
    actions: {
        loadProductsList({
            commit
        }) {
            commit('setLoading', true)
            commit('setError', null)

            const db = this.$firebase.firestore();
            db.collection("products")
                .get()
                .then(snap => {
                    const products = [];
                    snap.forEach(doc => {
                        products.push({
                            id: doc.id,
                            ...doc.data()
                        });
                    });
                    commit('setProductsList', products);
                })
                .catch(
                    (error) => console.log(error),
                    commit('setError', true)
                )
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        
        saveProduct({commit}, {
            currentProductId,
            title,
            price,
            img
        }) {
            commit('setLoading', true)
            commit('setError', null)

            const db = this.$firebase.firestore();
            if (!this.currentProductId) {
                // Add a new document in collection
                db.collection("products")
                    .doc()
                    .set({
                        currentProductId,
                        title,
                        price,
                        img
                    })
                    .then(function () {
                        console.log("Document successfully written!");
                    })
                    .catch(function (error) {
                        console.log("Error writing document: ", error);
                    })

                    .finally(() => {
                        commit('setLoading', false)
                    })
            } else {
                // Change a document in collection
                db.collection("products")
                    .doc(this.currentProductId)
                    .set({
                        title,
                        price,
                        img
                    })
                    .then(function () {
                        console.log("Document successfully written!");
                    })
                    .catch(function (error) {
                        console.log("Error writing document: ", error);
                    });
            }
            this.clearData();
            this.loadProductsList();
        },
    }
})
export default store;