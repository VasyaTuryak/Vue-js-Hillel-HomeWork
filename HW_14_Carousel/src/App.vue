<script>

import {defineComponent} from "vue";
import Carousel from "./components/Carousel.vue";

export default defineComponent({
  components: {Carousel},
  data() {
    return {
      linksForPhotos: [
        "/src/assets/1.png",
        "/src/assets/2.png",
        "/src/assets/3.png",
      ]
    }
  }
})
</script>

<template>
  <div>
    <Carousel :link="linksForPhotos"/>
  </div>
</template>

