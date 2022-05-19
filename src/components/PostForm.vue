<template>
    <form>
        <textarea v-model="content" cols="30" rows="10"></textarea>
        <button type="submit" @click="doRegister">投稿</button>
    </form>
</template>

<script>
export default {
  data() {
    return {
      content: ''
    };
  },
  methods: {
    doRegister() {
      // コンテンツの中身をバックエンドに送信
      // このとき、リクエストにトークンを含めて送信
      // 登録成功ならこのページにリダイレクト、失敗ならメッセージを表示
    }
  }
};
</script>