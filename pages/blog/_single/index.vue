<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="blog-page page">
    <sec-title :title="title" />
    <div class="row">
      <div class="col-12">
        <div class="categories">
          <span v-for="(item, index) in blogCategories" :key="index">
            {{ item.name }}
          </span>
        </div>
      </div>
      <div class="col-12" v-html="content"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.categories {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  span {
    color: $primary;
    &:not(:last-of-type) {
      @include appDir(margin-right, 15px, margin-left, 15px);
      &::after {
        content: ',';
      }
    }
  }
}
</style>
<script>
export default {
  async fetch() {
    const categories = []
    for (let index = 0; index < this.blogCategoryIds.length; index++) {
      const el = this.blogCategoryIds[index]
      const category = await this.getCategory(el)
      categories.push(category)
    }
    this.blogCategories = categories
  },
  data() {
    const blogPost = this.$store.getters.blogs.find(
      (el) => String(el.slug) === String(this.$route.params.single)
    )
    return {
      title: blogPost.title.rendered,
      content: blogPost.content.rendered,
      blogCategoryIds: blogPost['blog-category'],
      blogPost,
      blogCategories: [],
    }
  },
  methods: {
    async getCategory(id) {
      const category = await this.$axios.get(
        `${process.env.baseUrl}/wp-json/wp/v2/blog-category/${id}`
      )
      return category.data
    },
  },
}
</script>
