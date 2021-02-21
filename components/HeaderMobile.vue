<template>
  <div class="header-mobile d-flex justify-content-start align-items-center">
    <div class="profile-pic img-container">
      <img
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
        class="bg-image"
      />
    </div>
    <div class="data">
      <span class="title">Yahia Ali</span>
      <span class="sub">Web Developer</span>
    </div>
  </div>
</template>

<style lang="scss">
.header-mobile {
  height: 64px;
  background-color: #31313a;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  @include media('>992px') {
    display: none !important;
  }
  &::before {
    content: '';
    bottom: 0;
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
  .profile-pic {
    @include circle(40px);
    overflow: hidden;
    margin: 0 10px;
  }
  .data {
    display: flex;
    flex-flow: column;
    .title {
      color: white;
    }
    .sub {
      color: $primary;
    }
  }
}
</style>
