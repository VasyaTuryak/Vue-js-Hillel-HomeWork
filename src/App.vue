<script>
import Card from "./components/Card.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {Card}
})
</script>

<template>
  <Card number=1 title="title1 from App.vue"  />
  <Card number=2  text="text2 from App.vue"  />
  <Card number=3 title="title3 from App.vue" text="text3 from App.vue"  />
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
