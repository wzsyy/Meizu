import Vue from 'vue'
import Router from 'vue-router'
import footer from "./components/common/footer"
import Cart from "./Cart"


Vue.use(Router)

export default new Router({
  routes: [
    {path:"/footer",component:footer},
    {path:"/Cart",component:Cart},
  ]
})
