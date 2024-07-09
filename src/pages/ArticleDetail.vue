<script>
export default {
  name: "ArticleDetail.vue",
  methods:{
    getItem(id){
      return localStorage.getItem(id)
    }
  }
}
</script>

<template>
  <div>
    <h1 class="mb-3"> <b>Article details</b> </h1>
    <p>TITLE: {{JSON.parse(getItem($route.params.id)).title}}</p>
    <p>CONTENT: {{JSON.parse(getItem($route.params.id)).content}}</p>
    <p>AUTHOR: {{JSON.parse(getItem($route.params.id)).author}}</p>
    <p>Created: {{$route.params.id}}</p>
  </div>
</template>

