<template>
  <div class="container-fluid">
    <p>Counter {{ numberImgToShow + 1 }}</p>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="false">

      <div class="container-fluid">
        <div class="row">
          <div class="col-2">
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                    @click="numberImgToShow--"
            >
              <span class="text-danger h1"><</span>
            </button>
          </div>

          <div class="col-8">
            <div class="carousel-inner" >
              <div class="carousel-item active"  >
                <img :src="activePhoto" class="d-block w-100" :alt="`There has to be photo: ${activePhoto}`">
              </div>
            </div>
          </div>

          <div class="col-2">
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                    @click="numberImgToShow++"
            >
              <span class="text-danger h1"> > </span>
            </button>
          </div>


        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    link: {
      type: Array,
      required: false,
      default: ["/src/assets/no_img.png"]
    }
  },
  data() {
    return {
      numberImgToShow: 0,
    }
  },
  computed:{
    activePhoto(){
      return this.link[this.numberImgToShow]
    }
  },
  watch: {
    numberImgToShow(val) {
      if (val > this.link.length - 1) {
        this.numberImgToShow = 0
      }

      if (val < 0) {
        this.numberImgToShow = this.link.length - 1
      }

    }
  }
}
</script>





