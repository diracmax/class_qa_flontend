<template>
    <form>
      <div class="mb-3">
        <label class="form-label">ユーザーネーム</label>
        <input class="form-control" type="text" placeholder="username" v-model="user.username" />
      </div>
      <div class="mb-3">
        <label class="form-label">パスワード</label>
        <input class="form-control" type="password" placeholder="password" v-model="user.password" />
      </div>
      <div class="d-grid gap-2 col-12 mx-auto submit-button">
        <button class="btn btn-primary" type="submit" @click="doLogin">ログイン</button>
      </div>
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
}
input {
  display: block;
  width: 100%;
}
form {
  width: 35%;
}
.submit-button {
  padding-top: 0.5rem;
}
</style>