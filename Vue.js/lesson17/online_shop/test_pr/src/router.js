import Vue from "vue";
import VueRouter from "vue-router";
//Імпортуємо компоненти-сторінки
import Home from "@/pages/Home";
import AddForm from "@/pages/AddForm";
import EditForm from "@/pages/EditForm";
import ProductTable from "@/pages/ProductTable";

//Підключаємо модуль до Vue
Vue.use(VueRouter);

//Встановлюємо відповідність між шляхами і компонентами-сторінками
const routes = [
  { path: "/", component: Home },
  { path: "/create", component: AddForm },
  { path: "/edit", component: EditForm },
  { path: "/table", component: ProductTable }
];

//Створюєм екземпляр роутера
const router = new VueRouter({
  mode: "history",
  routes
});

//Експортуємо екземпляр роутера
export default router;
