<template>
  <div class="navigation navigation-desktop">
    <div class="item">
      <b-link to="/" class="def-route">
        <i class="fas fa-user"></i> ABOUT</b-link
      >
    </div>
    <div class="item">
      <b-link to="/resume"> <i class="fas fa-file-alt"></i> RESUME</b-link>
    </div>
    <div class="item">
      <b-link to="/works"> <i class="fas fa-paint-brush"></i> WORKS</b-link>
    </div>
    <div class="item">
      <b-link to="/blog"> <i class="far fa-comment-dots"></i> BLOG</b-link>
    </div>
    <div class="item">
      <b-link to="/contact"> <i class="fas fa-at"></i> CONTACT</b-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currpath: this.$nuxt.$route.path,
    }
  },
}
</script>

<style lang="scss">
.navigation {
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;
  @include appDir(left, -80px, right, -80px);
  top: 50%;
  transform: translateY(-50%);
  border-radius: 5px;
  overflow: hidden;
  background-color: #31313a;
  &.navigation-desktop {
    display: none;
    @include media('>680px') {
      display: flex;
    }
  }
  .item {
    width: 100%;
    padding: 10px;
    position: relative;
    padding: 15px 5px;
    &:not(:last-of-type) {
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: radial-gradient(
          ellipse at right,
          rgba(197, 202, 213, 0.15) 0%,
          rgba(255, 255, 255, 0) 70%
        );
      }
    }
    i {
      margin-bottom: 5px;
      color: white;
    }
    a {
      color: #a2a2a6;
      font-size: 0.8rem;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      &:not(.def-route).nuxt-link-active,
      &.nuxt-link-exact-active {
        color: $primary;
        i {
          color: $primary;
        }
      }
    }
  }
}
</style>
