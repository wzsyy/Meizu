import Vue from 'vue'
import Router from 'vue-router'
import footer from "./components/common/footer"
import header from "./components/common/TongChen/header.vue"
<<<<<<< HEAD
=======
import Cart from "./Cart"

>>>>>>> 73262e1166b667e83c4338400e8be1cbfb165706

Vue.use(Router)

export default new Router({
<<<<<<< HEAD
  routes: [
    {path:"/footer",component:footer},
    {path:"/header",component:header}
  ]
})
=======
    routes: [
        { path: "/footer", component: footer },
        { path: "/header", component: header },
        { path: "/Cart", component: Cart },
    ]
})
>>>>>>> 73262e1166b667e83c4338400e8be1cbfb165706
