<script>
import Definitions from "./components/Definitions.jsx";
import DefenitionLoopInVue from "./components/DefenitionLoopInVue.jsx";
import {defineComponent} from "vue";

export default defineComponent({
  components: {
    Definitions,
    DefenitionLoopInVue
  },
  data(){
    return{
      definitions: [
        { dt: 'one', dd: 'two', id: 1 },
        { dt: 'another term', dd: 'another description', id: 2 },
        { dt: 'las term', dd: 'last description', id: 3 },
      ]
    }
  }
},
)

</script>

<template>
  <div>
    <h1>LOOP in JSX File</h1>

    <div>
      <Definitions :data="definitions" />
    </div>

    <h1>LOOP in APP.vue File</h1>
      <DefenitionLoopInVue v-for="(one,index) in definitions" :key="index" :data="one"/>

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
