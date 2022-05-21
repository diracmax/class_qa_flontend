<template>
  <div>
    <answer-form class="answer-form"></answer-form>
    <div>
      <div class="answer" v-for="answer in answers" v-bind:key="answer.id">
        <div>
          <p>{{answer.content}}</p>
        </div>
        <div>
          <p>{{answer.created_date}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AnswerForm from "./AnswerForm";
export default {
  components: {
    AnswerForm
  },
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
.answer {
  display: flex;
  justify-content: space-between;
  border-bottom: solid #e7e7e7;
  margin-bottom: 1rem;
}
.answer-form {
  margin-bottom: 2rem;
}
</style>