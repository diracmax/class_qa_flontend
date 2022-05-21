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
      <div class="mb-3">
        <label class="form-label">パスワード（再確認用）</label>
        <input class="form-control" type="password" placeholder="password" v-model="user.re_password" />
      </div>
      <div class="d-grid gap-2 col-12 mx-auto submit-button">
        <button class="btn btn-primary" type="submit" @click="doRegister">登録</button>
      </div>
    </form>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    doRegister() {
      // パスワードが一致するか確認
      // apiを叩き、登録成功ならclassesにリダイレクト
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