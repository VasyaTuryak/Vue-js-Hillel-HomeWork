<script>
export default {
  name: "AddArticle.vue",
  data() {
    return {
      Article: {
        title: '',
        content: '',
        author: ''
      }
    }
  },
  methods:{
    saveData(){

      localStorage.setItem(new Date().toString(), JSON.stringify(this.Article))

      this.Article.title=''
      this.Article.content=''
      this.Article.author=''

      this.$router.push('/articleList');

    }
  }
}
</script>

<template>
  <div>
    <h1>Add article</h1>
    <div class="w-25">

      <form @submit.prevent="saveData">

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Title</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="Article.title">
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Post content:</label>
          <textarea class="w-100" rows="6" v-model="Article.content"></textarea>
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Author name:</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="Article.author">
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>

      </form>
    </div>
  </div>
</template>

<style scoped>

</style>
