import Vue from 'vue'
import VueRouter from 'vue-router'
import TareasCRUD from '@/views/TareasCRUD.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TareasCRUD',
    component: TareasCRUD
  },
  {
    path: '/descripcion',
    name: 'Descripcion',
    component: () => import('@/views/Descripcion.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
