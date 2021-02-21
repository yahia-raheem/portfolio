<template>
  <div class="blog-page page">
    <sec-title title="Blog Posts" />
    <div class="row work-row pt-4">
      <div v-for="(item, index) in blogs" :key="index" class="col-6">
        <blog-box
          :date="item.date"
          :excerpt="item.excerpt.rendered"
          :imgid="item.featured_media"
          :title="item.title.rendered"
          :post-id="item.id"
          :slug="item.slug"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BlogBox from '@/components/blogs/BlogBox.vue'
export default {
  components: { BlogBox },
  data() {
    return {
      blogs: this.$store.getters.blogs,
    }
  },
}
</script>
