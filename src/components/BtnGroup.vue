<script>
export default {
  name: "BtnGroup",
  data() {
    return {
      btn: {
        right: false,
        middle: false,
        left: false
      }
    }
  },
  methods: {
    btnStatus(event) {

      let id = event.target.id

      for (let key in this.btn) {
        if (this.btn.hasOwnProperty(key)) {

          if (key === id) {
            this.btn[key] = true
          } else {
            this.btn[key] = false
          }
        }
      }

    }
  }
}
</script>

<template>
  <div>
    <div class="btn-group" role="group" @click="btnStatus">
      <button id="left" :class="btn.left? 'active bg-primary':'' " type="button" class="btn btn-secondary ">Left
      </button>
      <button id='middle' :class="btn.middle? 'active bg-primary':'' " type="button" class="btn btn-secondary">Middle
      </button>
      <button id='right' :class="btn.right? 'active bg-primary':'' " type="button" class="btn btn-secondary">Right
      </button>
    </div>
  </div>
</template>

