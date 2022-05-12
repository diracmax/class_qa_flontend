<template>
  <div>
  <my-header></my-header>
  <router-view />
  </div>
</template>

<script>
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
</style>
