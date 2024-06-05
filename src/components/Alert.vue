<template>
  <div>
    <div class="alert"
         :class="`alert-${type} border border-${type}`"
         role="alert">what is love?
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props:{
    type:{
      type: String,
      required: false,
      default: 'warning'
    },
    text:{
      type: String,
      required: false,
      default: 'warning'
    }
  }
}
</script>

