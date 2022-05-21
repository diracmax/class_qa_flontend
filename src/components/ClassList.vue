<template>
  <div>
    <div class="class-content" v-for="c in classes" v-bind:key="c.id">
      <div class="class-name"><router-link class="class-link" :to="{name:'Questions',params:{classId:c.id}}">{{c.name}}</router-link></div>
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
.class-link {
  display: inline-block;
}
p {
  margin: 0;
}
.class-name {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.class-content {
  padding: 1rem;
  margin: 1rem;
  border: solid;
  display: flex;
  justify-content: space-between;
}
</style>