import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

let r = require.context('@/views/pages',true,/.vue/)

let arr:Array<RouteRecordRaw> = []
r.keys().forEach(element => {
    let key = element.split('/')[element.split('/').length-1].split('.')
    key.pop()
    if(key.length === 1 && key[0] === 'index'){
      arr.push({
        path:'/',
        component:r(element).default,
        name : r(element).default.title,
        meta: {
          requireAuth: true
        }
      })
    }else{
      arr.push({
        path:'/' + key.join('/'),
        component:r(element).default,
        meta: {
          requireAuth: true
        }
      })
    }
    
});

console.log(arr);


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children : arr
  },
  {
    path: '/404',
    name: '404',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/404.vue')
  },
  {
    path : '/noPermission',
    name : 'noPermission',
    component : () => import('@/views/noPermission.vue')
  },
  {
    path : '/login',
    name : 'login',
    component : () => import('@/views/login.vue')
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  let user = sessionStorage.getItem('admin_user');
  console.log(user);
  
  if (to.meta.requireAuth && !user) next({ path: '/login' })
  else next()
})

export default router
