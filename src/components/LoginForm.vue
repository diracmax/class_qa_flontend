<template>
    <form>
        <label>ユーザーネーム</label>
        <input type="text" placeholder="username" v-model="user.username" />
        <label>パスワード</label>
        <input type="password" placeholder="password" v-model="user.password" />
        <button type="submit" @click="doLogin">登録</button>
    </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    doLogin() {
      axios.post('http://localhost:3000/users')
            .then(response => this.$store.mutations.add_token(response.data.token))
            .catch(error => console.log(error))
    }
  }
};
</script>