<template>
  <div class="cover-container shadow">
    <Navigation />
    <div class="cover-shadow"></div>
    <div class="cover-header">
      <div class="img-container cover-img">
        <img
          src="https://images.pexels.com/photos/681467/pexels-photo-681467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          class="bg-image"
        />
      </div>
      <div class="profile-image img-container">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
          class="bg-image"
        />
      </div>
    </div>
    <div class="data">
      <h1 class="title">Yahia Ali</h1>
      <div class="sub">Wed Developer</div>
      <div class="social d-flex justify-content-between align-items-center">
        <a class="inst" href="#" target="_blank"
          ><i class="fab fa-instagram"></i
        ></a>
        <a class="lin" href="#" target="_blank"
          ><i class="fab fa-linkedin-in"></i
        ></a>
        <a class="fb" href="#" target="_blank"
          ><i class="fab fa-facebook-f"></i
        ></a>
        <a class="tw" href="#" target="_blank"
          ><i class="fab fa-twitter"></i
        ></a>
        <a class="yt" href="#" target="_blank"
          ><i class="fab fa-youtube"></i
        ></a>
      </div>
    </div>
    <div class="cta">
      <a href="#"><span>DOWNLOAD CV</span><i class="fas fa-download"></i></a>
      <a href="#"><span>CONTACT ME</span><i class="fas fa-paper-plane"></i></a>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  components: {
    Navigation,
  },
}
</script>

<style lang="scss">
.cover-container {
  background-color: #31313a;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  height: 680px;
  width: 400px;
  max-height: 90vh;
  position: relative;
  @include media('>1150px') {
    width: 480px;
  }
  .cover-shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    top: -20px;
    @include appDir(left, -20px, right, -20px);
    border-radius: 5px;
    background-color: #24242a;
    z-index: -1;
  }
  .cover-header {
    position: relative;
    height: 45%;
    max-height: 300px;
  }
  .cover-img {
    height: 100%;
    position: relative;
    width: 100%;
    overflow: hidden;
    clip-path: polygon(100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
  }
  .profile-image {
    @include circle(160px);
    position: absolute;
    overflow: hidden;
    border: 3px solid #31313a;
    left: 50%;
    transform: translateX(-50%);
    bottom: -20%;
  }
  .data {
    margin-top: 70px;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    .title {
      color: white;
    }
    .sub {
      color: $primary;
    }
  }
  .social {
    margin-top: 20px;
    a {
      &:not(:first-of-type) {
        @include appDir(margin-left, 15px, margin-right, 15px);
      }
      color: #a2a2a6;
    }
  }
  .cta {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &::before {
      content: '';
      background: radial-gradient(
        ellipse at left,
        rgba(197, 202, 213, 0.15) 0%,
        rgba(255, 255, 255, 0) 70%
      );
      position: absolute;
      top: 0;
      height: 1px;
      width: 100%;
      left: 0;
    }
    a {
      position: relative;
      height: 70px;
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      &:first-of-type {
        &::after {
          position: absolute;
          top: 0;
          @include appDir(right, 0, left, 0);
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
      span {
        @include appDir(margin-right, 10px, margin-left, 10px);
      }
    }
  }
}
</style>
