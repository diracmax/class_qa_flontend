<template>
  <div>
    <div>
      <h1>京大理学部物理科学系講義Q&amp;A</h1>
    </div>
    <div>
      <p>List</p>
      <p>Search</p>
      <div v-if="login">
        Taro
      </div>
      <div v-else>
        <router-link :to="{name:'Login'}">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  data() {
        return{
            login: false
        }
    }
}
</script>

<style scoped>
</style>
