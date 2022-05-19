import { createRouter, createWebHistory } from 'vue-router'
import ClassList from './components/ClassList.vue'
import QuestionList from './components/QuestionList.vue'
import LoginForm from './components/LoginForm.vue'
import AnswerList from './components/AnswerList.vue'
import RegisterForm from './components/RegisterForm.vue'


const routes = [
  {
    path: '/classes',
    name: 'List',
    component: ClassList,
  },
  {
    path: '/classes/:classId/questions',
    name: 'Questions',
    component: QuestionList,
    props:true
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterForm
  },
  {
    path: '/classes/:classId/questions/:questionId/answers',
    name: 'Answers',
    component: AnswerList,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router