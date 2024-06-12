<template>
  <div>
    <h1>Приклад компонента Collapse</h1>
 <Collapse text="Це прихований текст" :opened="true"/>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import Collapse from "./components/Collapse.vue";

export default defineComponent({
  components: {Collapse}
})
</script>




