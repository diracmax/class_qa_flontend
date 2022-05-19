<template>
  <post-form></post-form>
  <div>
    <div v-for="question in questions" v-bind:key="question.id">
      <router-link :to="{name:'Answers',params:{classId:this.classId, questionId:question.id}}">{{question.content}}</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PostForm from './PostForm'

export default {
  components: {
    PostForm
  },
  name: 'QuestionList',
  props: ["classId"],
  data() {
        return{
          questions: null
        }
    },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.initialize(); // 初期化処理
    });
  },
  methods: {
    initialize() {
        // 初期化処理
        axios.get(`http://localhost:3000/classes/${this.classId}/questions`)
            .then(response => this.questions=response.data)
            .catch(error => console.log(error))
    },
  },
}
</script>

<style scoped>
</style>