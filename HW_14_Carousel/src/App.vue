<template>
  <div>
    <Carousel :link="links"/>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import Carousel from "./components/Carousel.vue";

export default defineComponent({
  components: {Carousel},
  computed:{
    links(){
      return [
        "/src/assets/1.png",
        "/src/assets/2.png",
        "/src/assets/3.png",
      ]
    }
  }
})
</script>



