<template>
  <div>
    <post-form></post-form>
    <div>
      <div class="post-content" v-for="question in questions" v-bind:key="question.id">
        <div class="question-content"><router-link class="question-link" :to="{name:'Answers',params:{classId:this.classId, questionId:question.id}}">{{question.content}}</router-link></div>
        <div class="created_date">
          <p>作成日時</p>
          <p>{{question.created_date}}</p>
        </div>
      </div>
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
.question-link {
  display: inline-block;
}
.post-content {
  padding: 1rem;
  margin: 1rem;
  border: solid;
  display: flex;
  justify-content: space-between;
}
.created_date {
  vertical-align: center;
}
.question-content {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>