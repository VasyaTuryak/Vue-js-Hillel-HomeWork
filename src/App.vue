<script>
import Alert from "./components/Alert.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {Alert},
  data(){
    return{
      type:['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
    }
  }
})

</script>

<template>
  <div>
    <Alert v-for="(type,index) in type" :key="index" :type="type" :text="type" />
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
