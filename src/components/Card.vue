<script setup>
defineProps(
    ['number','title','text'
    ]

)
</script>

<template>
  <div className="card" style="border: solid; margin-bottom: 5px">
    <div className="card-body">
      <p>PROPS number {{number}} </p>
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