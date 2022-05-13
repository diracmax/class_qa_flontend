<template>
  <div>
      質問リストです。
  </div>
  <div>
    <div v-for="question in questions" v-bind:key="question.id">
      <p>{{question.content}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
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
      next();
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