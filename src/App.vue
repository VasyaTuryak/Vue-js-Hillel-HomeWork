<template>
  <div style="border: solid;">
    <h1>Parent component </h1>

    <ListGroup style="width: 80%; margin-left: auto; margin-right: auto">
      <p>one</p>
      <p>two</p>
    </ListGroup>
  </div>

</template>

<script>
import ListGroup from "./components/ListGroup.vue";
import {defineComponent} from "vue";
export default defineComponent( {
  components:{
    ListGroup
  },
  data(){
    return{
      listOfChild: ['Alex','Peter','John','Oscar','Mark', 'Bred']
    }
  }
})
</script>



