<template>
  <div>
      クラスリストです。
  </div>
  <div>
    <div v-for="c in classes" v-bind:key="c.id">
      <router-link :to="{name:'Questions',params:{classId:c.id}}">{{c.name}}</router-link>
      <p>{{c.semester}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ClassList',
  data() {
        return{
          classes: null
        }
    },
  mounted: function () {
    axios.get('http://localhost:3000/classes')
            .then(response => this.classes=response.data)
            .catch(error => console.log(error))
  }
}
</script>

<style scoped>
</style>