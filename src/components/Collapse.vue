<template>
<div>
  <div>
    <p>
      <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" >Link with href</a>
    </p>
    <div class="collapse" id="collapseExample" :class="opened && 'show'">
      <div class="card card-body">
        collapse me: {{text}}
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Collapse",
  props:{
    text:{
      type: String,
      required: false,
      default: 'Here should be yor text'
    },
    opened:{
      type: Boolean,
      required: false,
      default: true
    },
  }
}
</script>

