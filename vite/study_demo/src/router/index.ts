import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path:'HelloWorld',
        name:'HelloWorld',
        component: ()=> import("@/components/HelloWorld.vue")
      },
      {
        path:'ShoppingCart',
        name:'ShoppingCart',
        component: ()=> import('@/components/ShoppingCart.vue'),
        // meta: {
        //   // requiresAuth: true // 需要登录才能访问
        // },
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//路由守卫
// router.beforeEach((to, from, next) => {
//   const isAuthenticated = localStorage.getItem('token')
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!isAuthenticated) {
//       next('/home')
//     } else {
//       next()
//     }
//   } else {
//     if (isAuthenticated && to.name === 'Login') {
//       next('/home')
//     } else {
//       next()
//     }
//   }
// })

export default router
