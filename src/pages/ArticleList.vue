<script>
export default {
  name: "ArticleList",
  data() {
    return {
      Posts: []
    }
  },
  beforeMount() {
    const posts = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const article = JSON.parse(localStorage.getItem(key));
      posts.push({
        timestamp: key,
        ...article
      });
    }
    // Sort posts by timestamp
    posts.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    this.Posts = posts;
  }
}
</script>

<template>
  <div>
    <RouterLink to="/addArticle" class="mb-5 mt-5"> <button type="button" class="btn btn-primary">+ Add new post</button>  </RouterLink>
    <h1 class="mb-5 mt-5 text-danger">Article list</h1>
    <div class="mt-5 mb-5" v-for="(post, index) in Posts" :key="post.timestamp">
      <div class="d-flex flex-column">
        <h3>{{ post.title }}</h3>
        <small>{{ post.author }}</small>
        <RouterLink :to=" '/articleDetail/'+post.timestamp">
          <button type="button" class="btn btn-outline-info " style="width: 10%">more....</button>
        </RouterLink>


      </div>

      <hr>
    </div>
  </div>
</template>

<style scoped>

</style>
