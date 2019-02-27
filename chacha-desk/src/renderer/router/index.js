import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top-page',
      component: require('@/components/TopPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
