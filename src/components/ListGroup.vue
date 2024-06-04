<script>
export default {
  name: "ListGroup",
}
</script>

<template>
<div style="border: solid">
  <h2><b>Children component</b>, show list children through SLOT from parent component</h2>
  <ul class="list-group">
    <slot/>
  </ul>
</div>
</template>

<style scoped>

</style>
