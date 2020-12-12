<template>
  <h6 class="title-w-image">
    <i :class="[iconClasses]"></i><span>{{ title }}</span>
  </h6>
</template>
<script>
export default {
  props: {
    iconClasses: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.title-w-image {
  padding: 0 0 20px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: radial-gradient(
      ellipse at left,
      rgba(197, 202, 213, 0.15) 0%,
      rgba(255, 255, 255, 0) 70%
    );
  }
  i {
    color: $primary;
    @include appDir(margin-right, 15px, margin-left, 15px);
    font-size: 1.5rem;
  }
  span {
    color: white;
  }
}
</style>
