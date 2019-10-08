import Vue from 'vue'
import Router from 'vue-router'
import footer from "./components/common/footer"
<<<<<<< HEAD
import header from "./components/common/TongChen/header.vue"
=======
import Cart from "./Cart"

>>>>>>> 9b7e8a25abe0d376f71160dcd1704849783b2a8c

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/footer",component:footer},
<<<<<<< HEAD
    {path:"/header",component:header}
=======
    {path:"/Cart",component:Cart},
>>>>>>> 9b7e8a25abe0d376f71160dcd1704849783b2a8c
  ]
})
