<template>
  <div class="qa-header">
    <div>
      <h1>京大理学部物理科学系講義Q&amp;A</h1>
    </div>
    <div class="header-right">
      <div class="nav-item">
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
.qa-header {
  display: flex;
  justify-content: space-between;
}

.header-right {
  display: flex;
}

.nav-item {
  vertical-align: middle;
}
</style>
