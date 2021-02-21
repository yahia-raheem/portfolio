<template>
  <h5 class="section-title">
    {{ title }}
  </h5>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.section-title {
  font-weight: bold;
  position: relative;
  padding: 30px 0;
  margin-bottom: 30px;
  color: #e0e0e1;
  &::after {
    content: '';
    position: absolute;
    left: -30px;
    right: 0;
    bottom: 0;
    height: 1px;
    background: radial-gradient(
      ellipse at left,
      rgba(197, 202, 213, 0.15) 0%,
      rgba(255, 255, 255, 0) 70%
    );
  }
  &::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 50%;
    width: 30px;
    height: 30px;
    background: linear-gradient(
      135deg,
      rgba(255, 152, 0, 0.4) 0%,
      rgba(255, 152, 0, 0.01) 100%
    );
    transform: translateY(-50%);
    border-radius: 50%;
  }
}
</style>
