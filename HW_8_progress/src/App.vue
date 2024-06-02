<script>
import Progress from "./components/Progress.vue";
import {defineComponent} from "vue";

export default defineComponent({
      components: {
        Progress
      },
      data() {
        return {
          progressV: 40
        }
      },
      watch: {
        progressV(val) {
          if (val <= 0) {
            this.progressV = 0
          }
          if (val >= 100) {
            this.progressV = 100
          }
        }
      }
    },
)

</script>

<template>
  <div>
    <input type="number" v-model="progressV">
    <Progress :percentage="progressV"/>
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
