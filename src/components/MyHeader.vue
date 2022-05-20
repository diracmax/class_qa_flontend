<template>
  <div class="qa-header">
    <div class="header-title">
      <h1>京大理学部物理科学系講義Q&amp;A</h1>
    </div>
    <div class="header-right">
      <div>
        <router-link :to="{name:'List'}">一覧</router-link>
      </div>
      <div v-if="!(login)">
        <router-link :to="{name:'Login'}">ログイン</router-link>
      </div>
      <div v-if="!(login)">
        <router-link :to="{name:'Register'}">登録</router-link>
      </div>
      <div v-else>
        <router-link to="">ログアウト</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  data() {
        return{
            // とりあえずlogin状態はこの変数で定義
            login: false
        }
    }
}
</script>

<style scoped>
div {
  background-color: #0b4c8f;
}
.qa-header {
  display: flex;
  justify-content: space-around;
}

.header-right {
  display: flex;
}
.question-content {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.header-right div {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
}
.header-title {
  color: white;
  font-weight: normal;
}
</style>
