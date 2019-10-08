import Vue from 'vue'
import Router from 'vue-router'
import footer from "./components/common/footer"

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/footer",component:footer}
  ]
})
