<script setup>
import Card from "./components/Card.vue";
</script>

<template>

  <Card number='1' title="title1 from App.vue" text="text1 from App.vue"  />
  <Card number='2' title="title2 from App.vue"  />
  <Card number='3'  text="text3 from App.vue"  />

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
