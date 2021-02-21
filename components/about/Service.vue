<template>
  <div class="service-block">
    <div class="icon">
      <i :class="iconClasses"></i>
    </div>
    <div class="title">{{ title }}</div>
    <div class="desc">{{ description }}</div>
  </div>
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
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scope>
.service-block {
  position: relative;
  .icon {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      135deg,
      rgba(255, 152, 0, 0.4) 0%,
      rgba(255, 152, 0, 0.01) 100%
    );
    border-radius: 50%;
    margin-bottom: 10px;
    i {
      color: $primary;
      font-size: 1.5rem;
    }
  }
  .title {
    font-weight: bold;
    margin-bottom: 10px;
    color: white;
  }
  .desc {
    color: #a2a2a6;
    padding-bottom: 20px;
  }
}
</style>
