<template>
    <form>
        <label>ユーザーネーム</label>
        <input type="text" placeholder="username" v-model="user.username" />
        <label>パスワード</label>
        <input type="password" placeholder="password" v-model="user.password" />
        <label>パスワード（再確認用）</label>
        <input type="password" placeholder="password" v-model="user.re_password" />
        <button type="submit" @click="doRegister">登録</button>
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