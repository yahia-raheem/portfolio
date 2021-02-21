<template>
  <div class="personal-box">
    <span class="title">{{ title }}:....</span>
    <span class="value">{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.personal-box {
  .title {
    text-transform: uppercase;
    color: #d8d8da;
  }
  .value {
    color: #a2a2a6;
  }
}
</style>
