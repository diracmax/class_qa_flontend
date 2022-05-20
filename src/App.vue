<template>
  <div>
  <my-header></my-header>
  <router-view class="content" />
  </div>
</template>

<script>
import 'normalize.css'
import MyHeader from './components/MyHeader'

export default {
  components: {
    MyHeader
  },
  data () {
    return {
    }
  },
}
</script>

<style>
body {
  font-size: 20px;
}
.content {
  width: 75%;
  margin: 2rem auto;
}
</style>
