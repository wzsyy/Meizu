import Vue from 'vue'
import Router from 'vue-router'
import footer from "./components/common/footer"
import header from "./components/common/TongChen/header.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/footer",component:footer},
    {path:"/header",component:header}
  ]
})
