<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="works-page page">
    <title-with-nav :title="title" :nav-items="navs" />
    <div class="content mb-4" v-html="content"></div>
    <nuxt-child :key="$route.fullPath" />
  </div>
</template>
<script>
import TitleWithNavVue from '~/components/UI/TitleWithNav.vue'
export default {
  async asyncData({ $fetchPage }) {
    const data = await $fetchPage(45)
    return {
      title: data.title.rendered,
      content: data.content.rendered,

      navs: data.meta_box.text_bdr7wljzxhg,
    }
  },
  component: [TitleWithNavVue],
}
</script>
