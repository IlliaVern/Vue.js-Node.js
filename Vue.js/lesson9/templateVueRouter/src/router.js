import Vue from 'vue'
import VueRouter from 'vue-router'

import ProductsTable from '@/pages/ProductsTable';
import ProductEditor from '@/pages/ProductEditor';


Vue.use(VueRouter)

const routes = [
    { path: '/', component: ProductsTable },
    { path: '/create', component: ProductEditor },
    { path: '/edit/:productId', component: ProductEditor },

  ]

  const router = new VueRouter({
      mode: "history",
    routes // сокращённая запись для `routes: routes`
  })

  export default router


