import Vue from "vue";
import VueRouter from "vue-router";
//Імпортуємо компоненти-сторінки
import Home from "@/pages/Home";
import Add from "@/pages/Add";
import ProductTable from "@/pages/ProductTable";
import About from "@/pages/About";

//Підключаємо модуль до Vue
Vue.use(VueRouter);

//Встановлюємо відповідність між шляхами і компонентами-сторінками
const routes = [
  { path: "/", component: Home },
  { path: "/Add", component: Add },
  { path: "/ProductTable", component: ProductTable },
  { path: "/About", component: About },
  
];

//Створюєм екземпляр роутера
const router = new VueRouter({
  mode: "history",
  routes
});

//Експортуємо екземпляр роутера
export default router;