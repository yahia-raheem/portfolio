<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="about-page page">
    <h2>{{ title }}</h2>
    <div v-html="content"></div>
  </div>
</template>
<style lang="scss"></style>
<script>
export default {
  async asyncData({ route, store, $axios, app, $fetchPage }) {
    const data = await app.$fetchPage(8)
    return {
      title: data.title.rendered,
      content: data.content.rendered,
    }
  },
  data() {
    return {
      title: '',
      content: '',
    }
  },
}
</script>
