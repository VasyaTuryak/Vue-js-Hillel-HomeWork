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

<template>
  <div style="border: solid;">
    <h1>Parent component </h1>

    <ListGroup style="width: 80%; margin-left: auto; margin-right: auto">
      <li class="list-group-item"
          :class="[(index%2===0)?'list-group-item-info':'list-group-item-warning']"
          v-for="(child,index) in listOfChild" :key="index">
        {{index+1}} - {{child}}
      </li>
    </ListGroup>
  </div>

</template>

<style scoped>

</style>
