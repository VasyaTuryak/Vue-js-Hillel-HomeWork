<template>
<div style="border: solid">
  <h2><b>Children component</b>, show list children through SLOT from parent component</h2>
  <ul class="list-group">
    <li class="list-group-item">
      <slot/>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "ListGroup",
}
</script>
