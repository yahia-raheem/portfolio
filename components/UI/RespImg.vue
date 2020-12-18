<template>
  <nuxt-picture
    :placeholder="true"
    :src="payload.src"
    :alt="payload.alt"
    format="webp"
    :sizes="sizes.length > 0 ? sizes : null"
    :responsive="true"
  />
</template>

<script>
export default {
  props: {
    payload: {
      type: Object,
      default() {
        return {}
      },
    },
    sizes: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
<style lang="scss" scoped>
img {
  object-fit: cover;
}
</style>
