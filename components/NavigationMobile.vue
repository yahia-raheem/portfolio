<template>
  <div class="navigation-mobile">
    <div class="item">
      <b-link to="/" class="def-route">
        <i class="fas fa-user"></i> ABOUT</b-link
      >
    </div>
    <div class="item">
      <b-link to="/resume"> <i class="fas fa-file-alt"></i> RESUME</b-link>
    </div>
    <div class="item">
      <b-link to="/works"> <i class="fas fa-file-alt"></i> WORKS</b-link>
    </div>
    <div class="item">
      <b-link to="/blog"> <i class="fas fa-file-alt"></i> BLOG</b-link>
    </div>
    <div class="item">
      <b-link to="/contact"> <i class="fas fa-file-alt"></i> CONTACT</b-link>
    </div>
  </div>
</template>
<style lang="scss">
.navigation-mobile {
  @include media('>992px') {
    display: none;
  }
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  flex-flow: row;
  border-radius: 5px;
  height: 62px;
  background-color: #31313a;
  &::before {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: radial-gradient(
      ellipse at left,
      rgba(197, 202, 213, 0.15) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    position: absolute;
  }
  .item {
    position: relative;
    padding: 15px 5px;
    min-width: 70px;
    width: inherit;
    &:not(:last-of-type) {
      &::before {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 1px;
        content: '';
        background: radial-gradient(
          ellipse at top,
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
      &.nuxt-link-active.nuxt-link-exact-active {
        color: $primary;
        i {
          color: $primary;
        }
      }
    }
  }
}
</style>
