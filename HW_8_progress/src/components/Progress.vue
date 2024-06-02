<script>
export default {
  name: "Progress",
  props:{
    percentage: {
      type: Number,
      required: false,
      default: 40
    },
  }
}
</script>

<template>
<div>
  Результат:

  <div class="progress" style="height: 30px;">
    <div class="progress-bar"
         role="progressbar"
         :aria-valuenow="percentage"
         aria-valuemin="0" aria-valuemax="100"
         aria-label="progressbar"
         :style="{width: percentage+'%'}"
    >
      {{percentage}}%
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
