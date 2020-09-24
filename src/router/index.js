import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DetailProduct from "../views/DetailProduct.vue";
import Cart from "../views/Cart.vue";
import PaymentSucces from "../views/PaymentSucces.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/DetailProduct",
    name: "DetailProduct",
    component: DetailProduct,
  },
  {
    path: "/Cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/PaymentSucces",
    name: "PaymentSucces",
    component: PaymentSucces,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
