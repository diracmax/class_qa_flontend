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
      user: {},
      res: null
    };
  },
  methods: {
    doLogin() {
      const data = new FormData()
      data.append("username", this.user.username)
      data.append("password", this.user.password)
      // TODO: なぜかレスポンスが返ってこない
      axios.get('http://localhost:3000/token')
            .then(response => this.res=response.data.access_token)
            .catch(error => console.log(error))
      // axios.get('http://localhost:80')
      //       .then(response => this.res=response.data)
      //       .catch(error => console.log(error))
    }
  }
};
</script>
<style scoped>
label {
  display: block;
  padding-bottom: 1rem;
}
input {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
}
form {
  width: 35%;
}
</style>