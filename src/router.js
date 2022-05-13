import { createRouter, createWebHistory } from 'vue-router'
import ClassList from './components/ClassList.vue'
import QuestionList from './components/QuestionList.vue'

const routes = [
  {
    path: '/classes',
    name: 'List',
    component: ClassList
  },
  {
    path: '/classes/:classId/questions',
    name: 'Questions',
    component: QuestionList,
    props:true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router