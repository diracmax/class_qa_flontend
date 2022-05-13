<template>
  <div>
      回答リストです。
  </div>
  <div>
    <div v-for="answer in answers" v-bind:key="answer.id">
      <p>{{answer.content}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AnswerList',
  props: ["classId","questionId"],
  data() {
        return{
          answers: null
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
        axios.get(`http://localhost:3000/classes/${this.classId}/questions/${this.questionId}/answers`)
            .then(response => this.answers=response.data)
            .catch(error => console.log(error))
    },
  },
}
</script>

<style scoped>
</style>