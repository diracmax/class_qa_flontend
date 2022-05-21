<template>
  <div>
  <my-header class="my-header"></my-header>
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
html {
  height: 100%;
}
body {
  font-size: 20px;
}
.content {
  width: 75%;
  margin: 2rem auto;
}
.my-header {
  padding: 1.25rem;
}
</style>
