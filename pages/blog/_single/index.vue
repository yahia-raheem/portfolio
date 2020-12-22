<template>
  <div class="blog-page page">
    <sec-title :title="title" />
    <div class="row">
      <div class="col-12" v-html="content"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const blogPost = this.$store.getters.blogs.find((el) =>
      Number(el.id === Number(this.$route.params.id))
    )
    return {
      title: blogPost.title.rendered,
      content: blogPost.content.rendered,
    }
  },
}
</script>
