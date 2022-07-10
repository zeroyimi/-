import Vue from 'vue'
import Router from 'vue-router'
import List from '@/pages/list/list.vue'
import Login from '@/pages/login/login.vue'
import Register from '@/pages/register/register.vue'
import Order from '@/pages/order/order.vue'
import Chart from '@/pages/chart/chart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'login',  
      component:Login ,
    },
    {
      path:'/home',
      component:()=>import('../pages/home/index.vue') ,
      children:[
        {
          path:'/home',
          name:'home',
          component:()=>import('../pages/home/home.vue')          
        },
        {
          path: '/list',
          name: 'list',
          component: List,      
        },
        {
          path: '/order',
          name: 'order',
          component: Order,      
        },
        {
          path: '/chart',
          name: 'chart',
          component: Chart,      
        }
      ]           
    },
    {
      path: '/login',
      name: 'login',
      component: Login,      
    },
    {
      path:'/register',
      name:'register',
      component:Register
    }
  ]
})
