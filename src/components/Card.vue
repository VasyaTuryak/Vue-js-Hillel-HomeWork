<script setup>
import {ref} from "vue";

const test=ref(100);
defineProps(
    {
      title: String,
      text: String,
      number: Number
    }
)
</script>

<template>
  <div className="card" style="border: solid; margin-bottom: 5px">
    <div className="card-body">

      <p>PROPS number {{number}} +{{test}} </p>
      <h4 className="card-title">hi</h4>
      <p className="card-text">how are you?</p>
      <br>
      <p>Below I'm rendering props from App.vue</p>
      <p v-if="title">Props title: {{title}}</p>
      <p v-if="text">Props text: {{text}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>