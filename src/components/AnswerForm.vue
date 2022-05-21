<template>
  <div>
    <form>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">あなたも回答を投稿してみましょう！</label>
        <textarea class="form-control" rows="3" v-model="content"></textarea>
      </div>
        <button type="submit" @click="answer">回答</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: ''
    };
  },
  methods: {
    answer() {
      // コンテンツの中身をバックエンドに送信
      // このとき、リクエストにトークンを含めて送信
      // 登録成功ならこのページにリダイレクト、失敗ならメッセージを表示
    }
  }
};
</script>
<style scoped>
</style>