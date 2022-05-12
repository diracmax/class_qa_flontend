import { createRouter, createWebHistory } from 'vue-router'
import ClassList from './components/ClassList.vue'

const routes = [
  {
    path: '/classes',
    name: 'List',
    component: ClassList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router