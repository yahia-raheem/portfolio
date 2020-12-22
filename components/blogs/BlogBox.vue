<template>
  <div class="blog-box">
    <div class="img-container" data-aspectRatio="16/9">
      <nuxt-link
        :to="{ name: 'blog-single', params: { id: postId, single: slug } }"
        class="clickable-image"
      ></nuxt-link>
      <resp-img :payload="img.image" />
    </div>
    <div class="date-container datedata active">
      {{ $dateFns.format(new Date(date), 'MMM dd, yyyy') }}
    </div>
    <nuxt-link
      :to="{ name: 'blog-single', params: { id: postId, single: slug } }"
    >
      <h5 class="title">{{ title }}</h5>
    </nuxt-link>
    <div class="excerpt" v-html="excerpt"></div>
  </div>
</template>
<style lang="scss" scoped>
.blog-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  .img-container {
    width: 100%;
    display: grid;
    margin-bottom: 20px;
  }
  .title {
    color: white;
  }
  .excerpt {
    text-align: center;
  }
}
</style>
<script>
import aspectratio from '~/mixins/aspectratio'

export default {
  mixins: [aspectratio],
  props: {
    imgid: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    excerpt: {
      type: String,
      default: '',
    },
    slug: {
      type: String,
      default: '',
    },
    postId: {
      type: Number,
      default: 0,
    },
  },
  async fetch() {
    this.img = await this.$getImage(Number(this.imgid))
  },
  data() {
    return {
      img: '',
    }
  },
}
</script>
