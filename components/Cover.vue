<template>
  <div class="cover-container">
    <Navigation />
    <div class="cover-header">
      <div class="img-container cover-img">
        <resp-img :payload="info.cover_pic" />
      </div>
      <div class="profile-image img-container">
        <resp-img
          :payload="info.profile_pic"
          :sizes="[{ width: 300 }, { width: 600 }]"
        />
      </div>
    </div>
    <div class="data">
      <h1 class="title">{{ info.name }}</h1>
      <div class="sub">{{ info.job }}</div>
      <div class="social d-flex justify-content-between align-items-center">
        <a v-if="info.insta" class="inst" :href="info.insta" target="_blank"
          ><i class="fab fa-instagram"></i
        ></a>
        <a
          v-if="info.linked_in"
          class="lin"
          :href="info.linked_in"
          target="_blank"
          ><i class="fab fa-linkedin-in"></i
        ></a>
        <a v-if="info.facebook" class="fb" :href="info.facebook" target="_blank"
          ><i class="fab fa-facebook-f"></i
        ></a>
        <a v-if="info.twitter" class="tw" :href="info.twitter" target="_blank"
          ><i class="fab fa-twitter"></i
        ></a>
        <a v-if="info.youtube" class="yt" :href="info.youtube" target="_blank"
          ><i class="fab fa-youtube"></i
        ></a>
      </div>
    </div>
    <div class="cta">
      <a
        v-for="one in info.resume"
        :key="one.ID"
        :href="one.url"
        target="_blank"
        ><span>DOWNLOAD CV</span><i class="fas fa-download"></i
      ></a>
      <nuxt-link to="/contact"
        ><span>CONTACT ME</span><i class="fas fa-paper-plane"></i
      ></nuxt-link>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  components: {
    Navigation,
  },
  computed: {
    info() {
      return this.$store.getters.general
    },
  },
}
</script>

<style lang="scss">
.cover-container {
  background-color: #31313a;
  border-radius: 5px;
  height: 680px;
  width: 400px;
  max-height: 90vh;
  position: relative;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
  z-index: 5;
  &:after {
    content: '';
    position: absolute;
    left: -15px;
    top: -15px;
    width: 100%;
    height: 100%;
    background: #31313a;
    opacity: 0.3;
    z-index: -1;
  }
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
